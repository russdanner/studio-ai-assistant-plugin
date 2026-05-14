// Copy to: config/studio/scripts/aiassistant/llm/byo-openai-compat/runtime.groovy
// Agent: <llm>script:byo-openai-compat</llm>
//
// Full vendor replacement: this script builds the entire Spring AI session (OpenAiApi + OpenAiChatModel +
// AiOrchestrationTools) in Groovy. It does NOT delegate to OpenAiSpringAiLlmRuntime or any other built-in runtime.
//
// Configure Studio (host-only base URL, no trailing /v1):
//   export SCRIPT_LLM_OPENAI_COMPAT_BASE_URL=https://api.example.com
//   export SCRIPT_LLM_API_KEY=...
// Optional JVM overrides: -Dstudio.scriptLlm.openAiCompatBaseUrl=... -Dstudio.scriptLlm.apiKey=...
// Per-agent model: <llmModel> on the agent (or POST llmModel) → req.openAiModelParam
// Testing-only key from widget: optional agent <openAiApiKey> is passed as req.openAiApiKeyFromRequest

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

/**
 * Bring-your-own OpenAI-compatible chat host (any vendor exposing /v1/chat/completions-style API Spring AI supports).
 */
class BringYourOwnOpenAiCompatRuntime implements StudioAiLlmRuntime {

  private static final org.slf4j.Logger LOG = LoggerFactory.getLogger(BringYourOwnOpenAiCompatRuntime.class)

  private final String scriptLlmId

  BringYourOwnOpenAiCompatRuntime(String scriptLlmId) {
    this.scriptLlmId = (scriptLlmId ?: 'byo-openai-compat').toString()
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
    String u = System.getenv('SCRIPT_LLM_OPENAI_COMPAT_BASE_URL')?.toString()?.trim()
    if (!u) {
      u = System.getProperty('studio.scriptLlm.openAiCompatBaseUrl')?.toString()?.trim()
    }
    return u ? u.replaceAll(/\/+$/, '') : ''
  }

  private static String compatApiKey(StudioAiRuntimeBuildRequest req) {
    String k = System.getenv('SCRIPT_LLM_API_KEY')?.toString()?.trim()
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
        'Script LLM byo-openai-compat: set SCRIPT_LLM_OPENAI_COMPAT_BASE_URL (host only, no trailing /v1) or JVM -Dstudio.scriptLlm.openAiCompatBaseUrl.'
      )
    }
    if (!apiKey) {
      throw new IllegalStateException(
        'Script LLM byo-openai-compat: set SCRIPT_LLM_API_KEY or JVM -Dstudio.scriptLlm.apiKey on Studio, or use agent <openAiApiKey> for local testing only.'
      )
    }
    String modelName = (req.openAiModelParam ?: 'gpt-4o-mini').toString().trim()
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
        modelName,
        req.llmNormalized,
        req.imageGeneratorParam,
        req.agentEnabledBuiltInTools
      )
    } else {
      tools = []
    }
    def openAiApi = OpenAiApi.builder().baseUrl(base).apiKey(apiKey).build()
    def options = OpenAiChatOptions.builder()
      .model(modelName)
      .internalToolExecutionEnabled(req.enableTools)
      .build()
    def chatModel = OpenAiChatModel.builder()
      .openAiApi(openAiApi)
      .defaultOptions(options)
      .build()
    def chatClient = new DefaultChatClientBuilder(chatModel).build()
    LOG.debug(
      'Script LLM byo-openai-compat: model={} enableTools={} wireBaseUrl={} apiKeyPreview={} apiKeyChars={}',
      modelName,
      req.enableTools,
      base,
      AiOrchestration.openAiApiKeyLogPreview(apiKey),
      apiKey.length()
    )
    return [
      chatClient            : chatClient,
      chatModel             : chatModel,
      tools                 : tools,
      llm                   : normalizedKind(),
      useTools              : req.enableTools,
      studioOps             : req.studioOps,
      openAiApiKeyResolved  : apiKey,
      openAiWireBaseUrl     : base,
      resolvedChatModel     : modelName,
      nativeToolTransport   : 'openAiWire'
    ]
  }
}

new BringYourOwnOpenAiCompatRuntime(llmId as String)
