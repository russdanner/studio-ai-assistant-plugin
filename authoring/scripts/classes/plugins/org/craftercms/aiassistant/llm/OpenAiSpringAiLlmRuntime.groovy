package plugins.org.craftercms.aiassistant.llm

import plugins.org.craftercms.aiassistant.orchestration.AiOrchestration
import plugins.org.craftercms.aiassistant.tools.AiOrchestrationTools

import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.ai.chat.client.DefaultChatClientBuilder
import org.springframework.ai.openai.OpenAiChatModel
import org.springframework.ai.openai.OpenAiChatOptions
import org.springframework.ai.openai.api.OpenAiApi

/**
 * LLM runtime: <strong>OpenAI</strong> via Spring AI {@link OpenAiChatModel} plus CrafterQ’s native-tool execution path
 * ({@link AiOrchestration} RestClient loop — not part of this builder).
 */
class OpenAiSpringAiLlmRuntime implements StudioAiLlmRuntime {

  private static final Logger log = LoggerFactory.getLogger(OpenAiSpringAiLlmRuntime.class)

  static final OpenAiSpringAiLlmRuntime INSTANCE = new OpenAiSpringAiLlmRuntime()

  private OpenAiSpringAiLlmRuntime() {}

  @Override
  String normalizedKind() {
    return StudioAiLlmKind.OPENAI_NATIVE
  }

  @Override
  boolean supportsNativeStudioTools() {
    return true
  }

  @Override
  Map buildSessionBundle(StudioAiRuntimeBuildRequest req) {
    def orch = req.orchestration
    def apiKey = AiOrchestration.resolveOpenAiApiKey(req.openAiApiKeyFromRequest)
    if (!apiKey) {
      throw new IllegalStateException(
        'LLM is set to OpenAI but no API key was found. Set OPENAI_API_KEY or JVM crafter.openai.apiKey on Studio. For local testing only, optional agent <openAiApiKey> in ui.xml (see LLM_CONFIGURATION.md).')
    }
    def usedWidgetKey = apiKey == (req.openAiApiKeyFromRequest ?: '').toString().trim() &&
      !System.getenv('OPENAI_API_KEY')?.trim() &&
      !System.getProperty('crafter.openai.apiKey')?.trim() &&
      !System.getProperty('OPENAI_API_KEY')?.trim()
    if (usedWidgetKey) {
      log.warn(
        'OpenAI API key is taken from widget/request (testing path). apiKeyPreview={} apiKeyChars={}. Prefer OPENAI_API_KEY on the server for production.',
        AiOrchestration.openAiApiKeyLogPreview(apiKey),
        apiKey.length()
      )
    }
    def modelName = AiOrchestration.resolveOpenAiModel(req.openAiModelParam)
    def imageModel = AiOrchestration.imageModelFromRequestOrNull(req.imageModelParam)
    def tools
    if (req.enableTools) {
      def expertSpecs = orch.readExpertSkillSpecsFromRequest()
      tools = AiOrchestrationTools.build(
        req.toolResultConverter,
        req.studioOps,
        req.toolProgressListener,
        apiKey,
        imageModel,
        req.fullSuppressRepoWrites,
        req.protectedFormItemPath,
        expertSpecs,
        modelName
      )
    } else {
      tools = []
    }
    def openAiApi = OpenAiApi.builder().apiKey(apiKey).build()
    def options = OpenAiChatOptions.builder()
      .model(modelName)
      .internalToolExecutionEnabled(req.enableTools)
      .build()
    def chatModel = OpenAiChatModel.builder()
      .openAiApi(openAiApi)
      .defaultOptions(options)
      .build()
    def chatClient = new DefaultChatClientBuilder(chatModel).build()
    log.debug(
      'Spring AI chat client: provider=OpenAI model={} imageModel={} enableTools={} apiKeySource={} apiKeyPreview={} apiKeyChars={}',
      modelName,
      imageModel ?: '(unset)',
      req.enableTools,
      AiOrchestration.openAiApiKeyResolutionSource(),
      AiOrchestration.openAiApiKeyLogPreview(apiKey),
      apiKey.length()
    )
    return [
      chatClient          : chatClient,
      chatModel           : chatModel,
      tools               : tools,
      llm                 : StudioAiLlmKind.OPENAI_NATIVE,
      useTools            : req.enableTools,
      studioOps           : req.studioOps,
      openAiApiKeyResolved: apiKey
    ]
  }
}
