// Copy to: config/studio/scripts/aiassistant/llm/cursor-cloud-agent/runtime.groovy
// Agent: <llm>script:cursor-cloud-agent</llm>
//
// Cursor Cloud Agents API v1 (public beta): https://cursor.com/docs/cloud-agent/api/endpoints
// Auth: Basic, username = API key, password empty (see Cursor API overview).
//
// Required:
//   export CURSOR_API_KEY=...          (Dashboard → Integrations, or service account key per Cursor docs)
//   export CURSOR_CLOUD_AGENT_REPO_URL=https://github.com/org/repo   (v1 supports one repo per agent)
// Optional:
//   export CURSOR_CLOUD_AGENT_STARTING_REF=main
//   <llmModel>composer-2</llmModel>   (or POST llmModel) — passed as Cursor model.id on first agent create only
//
// Semantics: one durable Cloud Agent per Studio chatId (in-memory map on the Studio JVM). First turn POST /v1/agents;
// follow-ups POST /v1/agents/{id}/runs. Assistant text is read from SSE .../runs/{runId}/stream (event: assistant).
//
// CMS tools: this bundle does NOT set openAiWireBaseUrl — Spring ChatClient runs tools internally against this ChatModel.
// GenerateImage / embeddings still follow OPENAI_API_KEY when your tool list includes them (same as other script LLMs).

import groovy.json.JsonOutput
import groovy.json.JsonSlurper

import java.io.BufferedReader
import java.io.IOException
import java.io.InputStream
import java.io.InputStreamReader
import java.io.OutputStream
import java.net.HttpURLConnection
import java.net.URL
import java.nio.charset.StandardCharsets
import java.util.Base64
import java.util.concurrent.ConcurrentHashMap

import org.slf4j.LoggerFactory
import org.springframework.ai.chat.client.DefaultChatClientBuilder
import org.springframework.ai.chat.messages.AssistantMessage
import org.springframework.ai.chat.model.ChatModel
import org.springframework.ai.chat.model.ChatResponse
import org.springframework.ai.chat.model.Generation
import org.springframework.ai.chat.prompt.Prompt

import reactor.core.publisher.Flux
import reactor.core.publisher.FluxSink

import plugins.org.craftercms.aiassistant.llm.StudioAiLlmKind
import plugins.org.craftercms.aiassistant.llm.StudioAiLlmRuntime
import plugins.org.craftercms.aiassistant.llm.StudioAiRuntimeBuildRequest
import plugins.org.craftercms.aiassistant.orchestration.AiOrchestration
import plugins.org.craftercms.aiassistant.tools.AiOrchestrationTools

/** In-memory agent id per Studio chat session (lost on Studio restart). */
class CursorAgentRegistry {
  private static final ConcurrentHashMap<String, String> AGENT_BY_CHAT = new ConcurrentHashMap<>()

  static String get(String chatKey) { return AGENT_BY_CHAT.get(chatKey) }

  static void put(String chatKey, String agentId) { AGENT_BY_CHAT.put(chatKey, agentId) }
}

/**
 * Minimal Spring AI {@link ChatModel} over Cursor Cloud Agents v1 (create agent / add run / SSE stream).
 * Transcript shaping is intentionally smaller than {@link plugins.org.craftercms.aiassistant.llm.remote.ExpertChatModel};
 * tighten or copy Expert-style compaction for long tool transcripts.
 */
class CursorCloudAgentChatModel implements ChatModel {

  private static final org.slf4j.Logger LOG = LoggerFactory.getLogger(CursorCloudAgentChatModel.class)
  private static final String API_ROOT = 'https://api.cursor.com'
  private static final JsonSlurper SLURPER = new JsonSlurper()

  private final String apiKey
  private final String repoUrl
  private final String startingRef
  private final String cursorModelId
  private final String studioChatKey

  CursorCloudAgentChatModel(
    String apiKey,
    String repoUrl,
    String startingRef,
    String cursorModelId,
    String studioChatKey
  ) {
    this.apiKey = (apiKey ?: '').toString()
    this.repoUrl = (repoUrl ?: '').toString().trim()
    this.startingRef = (startingRef ?: '').toString().trim()
    this.cursorModelId = (cursorModelId ?: 'composer-2').toString().trim()
    this.studioChatKey = (studioChatKey ?: 'default').toString()
  }

  private String basicAuthHeader() {
    String token = Base64.getEncoder().encodeToString((apiKey + ':').getBytes(StandardCharsets.UTF_8))
    return 'Basic ' + token
  }

  private static String resolveMessageRole(def msg) {
    try {
      def mt = msg?.messageType
      if (mt != null) {
        if (mt instanceof Enum) return ((Enum) mt).name()
        return mt.toString()
      }
    } catch (Throwable ignored) {}
    return msg?.class?.simpleName ?: 'MESSAGE'
  }

  private static String extractContent(def msg) {
    if (msg == null) return ''
    try {
      if (msg.metaClass?.respondsTo(msg, 'getText')) return (msg.getText() ?: '').toString()
      if (msg.metaClass?.respondsTo(msg, 'getContent')) return (msg.getContent() ?: '').toString()
    } catch (Throwable ignored) {}
    return msg.toString()
  }

  /** Single prompt string for Cursor (expand for production parity with ExpertChatModel). */
  private String buildPromptText(Prompt prompt) {
    List<String> lines = []
    def inst = prompt?.instructions
    if (inst instanceof List) {
      for (Object msg : (List) inst) {
        String role = resolveMessageRole(msg).toUpperCase()
        String body = extractContent(msg)?.trim()
        if (!body) continue
        lines.add("${role}: ${body}")
      }
    }
    String joined = lines.join('\n\n').trim()
    return joined ?: '(empty prompt)'
  }

  private Map postJson(String path, Map body) throws IOException {
    byte[] bytes = JsonOutput.toJson(body).getBytes(StandardCharsets.UTF_8)
    HttpURLConnection c = (HttpURLConnection) new URL(API_ROOT + path).openConnection()
    c.setRequestMethod('POST')
    c.setConnectTimeout(30_000)
    c.setReadTimeout(600_000)
    c.setDoOutput(true)
    c.setRequestProperty('Authorization', basicAuthHeader())
    c.setRequestProperty('Content-Type', 'application/json')
    c.setRequestProperty('Accept', 'application/json')
    OutputStream os = c.getOutputStream()
    try {
      os.write(bytes)
    } finally {
      try { os.close() } catch (Throwable ignored) {}
    }
    int code = c.getResponseCode()
    InputStream ins = (code >= 200 && code < 300) ? c.getInputStream() : c.getErrorStream()
    String resp = ins?.getText(StandardCharsets.UTF_8.name()) ?: ''
    if (code < 200 || code >= 300) {
      throw new IOException("Cursor API ${path} failed: HTTP ${code} body=${resp.take(2000)}")
    }
    return (Map) SLURPER.parseText(resp)
  }

  private Map createAgent(String promptText) throws IOException {
    Map repoEntry = [url: repoUrl]
    if (startingRef) {
      repoEntry.startingRef = startingRef
    }
    Map body = [
      prompt: [text: promptText],
      repos : [repoEntry],
      model : [id: cursorModelId]
    ]
    return postJson('/v1/agents', body)
  }

  private Map createRun(String agentId, String promptText) throws IOException {
    IOException last = null
    for (int i = 0; i < 40; i++) {
      try {
        return postJson("/v1/agents/${agentId}/runs", [prompt: [text: promptText]])
      } catch (IOException e) {
        last = e
        String m = e.message ?: ''
        if (m.contains('HTTP 409') || m.contains('409')) {
          Thread.sleep(500)
          continue
        }
        throw e
      }
    }
    throw last ?: new IOException('Cursor createRun: exhausted retries')
  }

  private String startTurn(String promptText) throws IOException {
    if (!repoUrl) {
      throw new IllegalStateException('Set CURSOR_CLOUD_AGENT_REPO_URL to a GitHub repo URL Cursor can access.')
    }
    String existing = CursorAgentRegistry.get(studioChatKey)
    Map envelope
    if (!existing) {
      envelope = createAgent(promptText)
      String aid = envelope?.agent?.id?.toString()
      if (!aid) {
        throw new IllegalStateException("Cursor create agent: missing agent.id in response: ${envelope}")
      }
      CursorAgentRegistry.put(studioChatKey, aid)
    } else {
      envelope = createRun(existing, promptText)
    }
    String runId = envelope?.run?.id?.toString()
    if (!runId) {
      runId = envelope?.agent?.latestRunId?.toString()
    }
    if (!runId) {
      throw new IllegalStateException("Cursor: missing run id in response: ${envelope}")
    }
    String agentId = CursorAgentRegistry.get(studioChatKey)
    return "${agentId}|${runId}"
  }

  private void streamRunSse(String agentId, String runId, FluxSink<ChatResponse> sink) {
    HttpURLConnection c = null
    BufferedReader reader = null
    try {
      String streamUrl = "${API_ROOT}/v1/agents/${agentId}/runs/${runId}/stream"
      c = (HttpURLConnection) new URL(streamUrl).openConnection()
      c.setRequestMethod('GET')
      c.setConnectTimeout(30_000)
      c.setReadTimeout(600_000)
      c.setRequestProperty('Authorization', basicAuthHeader())
      c.setRequestProperty('Accept', 'text/event-stream')
      int code = c.getResponseCode()
      InputStream bodyStream = (code >= 200 && code < 300) ? c.getInputStream() : c.getErrorStream()
      reader = bodyStream ? new BufferedReader(new InputStreamReader(bodyStream, StandardCharsets.UTF_8)) : null
      if (code < 200 || code >= 300) {
        String err = reader ? reader.text : ''
        sink.error(new IOException("Cursor SSE open failed: HTTP ${code} ${err?.take(1500)}"))
        return
      }
      String currentEvent = ''
      String line
      while ((line = reader.readLine()) != null) {
        if (line.isEmpty()) {
          currentEvent = ''
          continue
        }
        if (line.startsWith('event:')) {
          currentEvent = line.substring(6).trim()
          continue
        }
        if (line.startsWith('data:')) {
          String raw = line.substring(5).trim()
          if (!raw) continue
          try {
            def obj = SLURPER.parseText(raw)
            if ('assistant'.equalsIgnoreCase(currentEvent) && obj?.text) {
              String chunk = obj.text.toString()
              def assistant = new AssistantMessage(chunk, [:])
              sink.next(new ChatResponse([new Generation(assistant)]))
            }
            if ('error'.equalsIgnoreCase(currentEvent)) {
              sink.error(new RuntimeException("Cursor stream error event: ${raw}"))
              return
            }
            if ('done'.equalsIgnoreCase(currentEvent)) {
              sink.complete()
              return
            }
          } catch (Throwable parseEx) {
            LOG.warn('Cursor SSE parse skip: {}', parseEx.toString())
          }
        }
      }
      sink.complete()
    } catch (Throwable t) {
      sink.error(t)
    } finally {
      try { reader?.close() } catch (Throwable ignored) {}
      try { c?.disconnect() } catch (Throwable ignored) {}
    }
  }

  @Override
  Flux<ChatResponse> stream(Prompt prompt) {
    final String text = buildPromptText(prompt)
    return Flux.create({ FluxSink<ChatResponse> sink ->
      Thread.start {
        try {
          String ids = startTurn(text)
          String[] parts = ids.split('\\|', 2)
          streamRunSse(parts[0], parts[1], sink)
        } catch (Throwable t) {
          sink.error(t)
        }
      }
    })
  }

  @Override
  ChatResponse call(Prompt prompt) {
    def chunks = stream(prompt).collectList().block()
    StringBuilder acc = new StringBuilder()
    chunks?.each { cr ->
      cr?.results?.each { gen ->
        try {
          def out = gen?.output
          if (out?.metaClass?.respondsTo(out, 'getText')) {
            acc.append(out.getText() ?: '')
          } else if (out?.metaClass?.respondsTo(out, 'getContent')) {
            acc.append(out.getContent() ?: '')
          } else {
            acc.append(out?.toString() ?: '')
          }
        } catch (Throwable ignored) {}
      }
    }
    def assistant = new AssistantMessage(acc.toString(), [:])
    return new ChatResponse([new Generation(assistant)])
  }
}

class CursorCloudAgentScriptRuntime implements StudioAiLlmRuntime {

  private static final org.slf4j.Logger LOG = LoggerFactory.getLogger(CursorCloudAgentScriptRuntime.class)

  private final String scriptLlmId

  CursorCloudAgentScriptRuntime(String scriptLlmId) {
    this.scriptLlmId = (scriptLlmId ?: 'cursor-cloud-agent').toString()
  }

  @Override
  String normalizedKind() {
    return StudioAiLlmKind.SCRIPT_LLM_PREFIX + scriptLlmId
  }

  @Override
  boolean supportsNativeStudioTools() {
    return true
  }

  private static String cursorKey(StudioAiRuntimeBuildRequest req) {
    String k = System.getenv('CURSOR_API_KEY')?.toString()?.trim()
    if (!k) k = System.getenv('CURSOR_CLOUD_AGENT_API_KEY')?.toString()?.trim()
    if (!k) k = System.getProperty('cursor.api.key')?.toString()?.trim()
    if (!k) k = (req.openAiApiKeyFromRequest ?: '').toString().trim()
    return k
  }

  @Override
  Map buildSessionBundle(StudioAiRuntimeBuildRequest req) {
    String key = cursorKey(req)
    if (!key) {
      throw new IllegalStateException(
        'Script LLM cursor-cloud-agent: set CURSOR_API_KEY (or CURSOR_CLOUD_AGENT_API_KEY) on Studio, or JVM -Dcursor.api.key, or agent <openAiApiKey> for testing only.'
      )
    }
    String repo = System.getenv('CURSOR_CLOUD_AGENT_REPO_URL')?.toString()?.trim() ?: ''
    String startingRef = System.getenv('CURSOR_CLOUD_AGENT_STARTING_REF')?.toString()?.trim() ?: ''
    String modelId = (req.openAiModelParam ?: 'composer-2').toString().trim()
    String chatKey = (req.chatId ?: 'studio-chat').toString().trim()

    def orch = req.orchestration
    def imageModel = AiOrchestration.imageModelFromRequestOrNull(req.imageModelParam)
    String openAiOnlyImageKey = AiOrchestration.resolveOpenAiApiKey(null)
    def tools
    if (req.enableTools) {
      def expertSpecs = orch.readExpertSkillSpecsFromRequest()
      tools = AiOrchestrationTools.build(
        req.toolResultConverter,
        req.studioOps,
        req.toolProgressListener,
        openAiOnlyImageKey,
        imageModel,
        req.fullSuppressRepoWrites,
        req.protectedFormItemPath,
        expertSpecs,
        modelId,
        req.llmNormalized,
        req.imageGeneratorParam,
        req.agentEnabledBuiltInTools
      )
    } else {
      tools = []
    }

    def chatModel = new CursorCloudAgentChatModel(key, repo, startingRef, modelId, chatKey)
    def chatClient = new DefaultChatClientBuilder(chatModel).build()
    LOG.debug('Cursor Cloud Agent script LLM: chatKey={} repoConfigured={} modelId={}', chatKey, repo as boolean, modelId)

    return [
      chatClient            : chatClient,
      chatModel             : chatModel,
      tools                 : tools,
      llm                   : normalizedKind(),
      useTools              : req.enableTools,
      studioOps             : req.studioOps,
      openAiApiKeyResolved  : null,
      openAiWireBaseUrl     : null,
      resolvedChatModel     : modelId
    ]
  }
}

new CursorCloudAgentScriptRuntime(llmId as String)
