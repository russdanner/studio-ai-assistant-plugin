package plugins.org.craftercms.aiassistant.llm

import plugins.org.craftercms.aiassistant.orchestration.AiOrchestration
import plugins.org.craftercms.aiassistant.tools.StudioToolOperations

/**
 * Inputs for {@link StudioAiLlmRuntime#buildSessionBundle(StudioAiRuntimeBuildRequest)} — shared servlet-thread context
 * plus pre-built {@link StudioToolOperations} (security context, CrafterQ caps).
 */
class StudioAiRuntimeBuildRequest {

  AiOrchestration orchestration
  /** Spring AI {@code ToolCallResultConverter} or Groovy closure; typed as {@code Object} so site Groovy compiles without that class on the script classpath. */
  Object toolResultConverter
  StudioToolOperations studioOps
  /** Studio chat/stream servlet request (CrafterQ adapter forwards headers/cookies). */
  Object crafterQServletRequest

  String agentId
  String chatId
  /** Result of {@link StudioAiLlmKind#normalize(String)}. */
  String llmNormalized

  String openAiModelParam
  String openAiApiKeyFromRequest
  Closure toolProgressListener
  /** OpenAI Images API default model from agent **{@code <imageModel>}** / POST **{@code imageModel}** only (no JVM fallback). */
  String imageModelParam
  /** Optional image backend: blank = OpenAI-compatible wire when key+model exist; {@code none}; {@code script:id}. */
  String imageGeneratorParam
  boolean fullSuppressRepoWrites
  String protectedFormItemPath
  boolean enableTools
}
