// Copy to: config/studio/scripts/aiassistant/llm/groq/runtime.groovy
// Agent: <llm>script:groq</llm>
//
// Groq Cloud — chat + native CMS tools using Studio’s tools-loop HTTP shape. Vendor docs:
// https://console.groq.com/docs/openai — that is Groq’s documentation URL slug, not “run chat on another vendor’s cloud.”
//
// Required on the Studio host:
//   export GROQ_API_KEY=gsk_...
// Optional — tools-loop chat base URL (host only, no trailing /v1). Env var names are legacy plugin spellings:
//   export GROQ_OPENAI_COMPAT_BASE_URL=https://api.groq.com/openai
//   export SCRIPT_LLM_OPENAI_COMPAT_BASE_URL=...   (same meaning as GROQ_* if you share one pattern across script LLMs)
//   export SCRIPT_LLM_API_KEY=...                  (optional alias for GROQ_API_KEY)
// JVM overrides use the same legacy spellings (they configure *this* script LLM only, regardless of name):
//   -Dstudio.scriptLlm.openAiCompatBaseUrl=...   -Dstudio.scriptLlm.apiKey=...
// Per-agent chat model: <llmModel> or POST llmModel → req.openAiModelParam (legacy field name on the request object); default below if unset.
//
// Built-in GenerateImage / expert embeddings use Studio’s separate image-and-embedding configuration (not GROQ_API_KEY); see plugin docs for env/JVM names.

import org.slf4j.LoggerFactory
import org.springframework.ai.chat.client.DefaultChatClientBuilder
import org.springframework.ai.openai.OpenAiChatModel
import org.springframework.ai.openai.OpenAiChatOptions
import org.springframework.ai.openai.api.OpenAiApi

import plugins.org.craftercms.aiassistant.llm.StudioAiLlmKind
import plugins.org.craftercms.aiassistant.llm.StudioAiLlmRuntime
import plugins.org.craftercms.aiassistant.llm.StudioAiRuntimeBuildRequest
import plugins.org.craftercms.aiassistant.orchestration.AiOrchestration
import plugins.org.craftercms.aiassistant.tools.AiOrchestrationTools

/** Groq-backed script LLM: Spring AI chat client wired for Groq’s tools-loop host. */
class GroqScriptLlmRuntime implements StudioAiLlmRuntime {

  private static final org.slf4j.Logger LOG = LoggerFactory.getLogger(GroqScriptLlmRuntime.class)

  private static final String GROQ_DEFAULT_BASE = 'https://api.groq.com/openai'
  private static final String GROQ_DEFAULT_MODEL = 'llama-3.3-70b-versatile'

  private final String scriptLlmId

  GroqScriptLlmRuntime(String scriptLlmId) {
    this.scriptLlmId = (scriptLlmId ?: 'groq').toString()
  }

  @Override
  String normalizedKind() {
    return StudioAiLlmKind.SCRIPT_LLM_PREFIX + scriptLlmId
  }

  @Override
  boolean supportsNativeStudioTools() {
    return true
  }

  private static String compatBaseUrl() {
    String u = System.getenv('GROQ_OPENAI_COMPAT_BASE_URL')?.toString()?.trim()
    if (!u) {
      u = System.getenv('SCRIPT_LLM_OPENAI_COMPAT_BASE_URL')?.toString()?.trim()
    }
    if (!u) {
      u = System.getProperty('studio.scriptLlm.openAiCompatBaseUrl')?.toString()?.trim()
    }
    if (!u) {
      u = GROQ_DEFAULT_BASE
    }
    return u.replaceAll(/\/+$/, '')
  }

  private static String compatApiKey(StudioAiRuntimeBuildRequest req) {
    String k = System.getenv('GROQ_API_KEY')?.toString()?.trim()
    if (!k) {
      k = System.getenv('SCRIPT_LLM_API_KEY')?.toString()?.trim()
    }
    if (!k) {
      k = System.getProperty('studio.scriptLlm.apiKey')?.toString()?.trim()
    }
    if (!k) {
      k = (req.openAiApiKeyFromRequest ?: '').toString().trim()
    }
    return k
  }

  @Override
  Map buildSessionBundle(StudioAiRuntimeBuildRequest req) {
    String base = compatBaseUrl()
    String apiKey = compatApiKey(req)
    if (!base) {
      throw new IllegalStateException(
        'Script LLM groq: set tools-loop chat base URL — GROQ_OPENAI_COMPAT_BASE_URL or SCRIPT_LLM_OPENAI_COMPAT_BASE_URL (host only, no trailing /v1), or JVM studio.scriptLlm.openAiCompatBaseUrl (legacy property name).'
      )
    }
    if (!apiKey) {
      throw new IllegalStateException(
        'Script LLM groq: set GROQ_API_KEY (or SCRIPT_LLM_API_KEY / JVM studio.scriptLlm.apiKey), or agent <openAiApiKey> for local testing only (legacy agent field name).'
      )
    }
    String modelName = (req.openAiModelParam ?: GROQ_DEFAULT_MODEL).toString().trim()
    def orch = req.orchestration
    def imageModel = AiOrchestration.imageModelFromRequestOrNull(req.imageModelParam)
    String builtInImageAndEmbeddingKey = AiOrchestration.resolveOpenAiApiKey(null)
    def tools
    if (req.enableTools) {
      def expertSpecs = orch.readExpertSkillSpecsFromRequest()
      tools = AiOrchestrationTools.build(
        req.toolResultConverter,
        req.studioOps,
        req.toolProgressListener,
        builtInImageAndEmbeddingKey,
        imageModel,
        req.fullSuppressRepoWrites,
        req.protectedFormItemPath,
        expertSpecs,
        modelName,
        req.llmNormalized,
        req.imageGeneratorParam,
        req.agentEnabledBuiltInTools
      )
    } else {
      tools = []
    }
    def toolsLoopHttpApi = OpenAiApi.builder().baseUrl(base).apiKey(apiKey).build()
    def options = OpenAiChatOptions.builder()
      .model(modelName)
      .internalToolExecutionEnabled(req.enableTools)
      .build()
    def chatModel = OpenAiChatModel.builder()
      .openAiApi(toolsLoopHttpApi)
      .defaultOptions(options)
      .build()
    def chatClient = new DefaultChatClientBuilder(chatModel).build()
    LOG.debug(
      'Script LLM groq: model={} enableTools={} wireBaseUrl={} apiKeyPreview={} apiKeyChars={}',
      modelName,
      req.enableTools,
      base,
      AiOrchestration.openAiApiKeyLogPreview(apiKey),
      apiKey.length()
    )
    return [
      chatClient              : chatClient,
      chatModel               : chatModel,
      tools                   : tools,
      llm                     : normalizedKind(),
      useTools                : req.enableTools,
      studioOps               : req.studioOps,
      toolsLoopChatApiKey     : apiKey,
      toolsLoopChatBaseUrl    : base,
      openAiApiKeyResolved    : apiKey,
      openAiWireBaseUrl       : base,
      resolvedChatModel       : modelName,
      nativeToolTransport     : 'toolsLoopWire'
    ]
  }
}

new GroqScriptLlmRuntime(llmId as String)
