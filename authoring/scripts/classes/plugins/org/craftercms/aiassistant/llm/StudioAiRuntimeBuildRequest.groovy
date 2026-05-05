package plugins.org.craftercms.aiassistant.llm

import plugins.org.craftercms.aiassistant.orchestration.AiOrchestration
import plugins.org.craftercms.aiassistant.tools.StudioToolOperations

import org.springframework.ai.tool.execution.ToolCallResultConverter

/**
 * Inputs for {@link StudioAiLlmRuntime#buildSessionBundle(StudioAiRuntimeBuildRequest)} — shared servlet-thread context
 * plus pre-built {@link StudioToolOperations} (security context, CrafterQ caps).
 */
class StudioAiRuntimeBuildRequest {

  AiOrchestration orchestration
  ToolCallResultConverter toolResultConverter
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
  boolean fullSuppressRepoWrites
  String protectedFormItemPath
  boolean enableTools
}
