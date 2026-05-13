// Copy to: config/studio/scripts/aiassistant/llm/demo/runtime.groovy
// Agent ui.xml: <llm>script:demo</llm>  (normalized scriptLlm:demo)
//
// This example proxies the built-in OpenAI Spring AI session while keeping script:demo as the visible llm token
// (StudioAiScriptLlmContainerRuntime overwrites bundle.llm after this closure returns).

import plugins.org.craftercms.aiassistant.llm.OpenAiSpringAiLlmRuntime
import plugins.org.craftercms.aiassistant.llm.StudioAiLlmKind
import plugins.org.craftercms.aiassistant.llm.StudioAiRuntimeBuildRequest

[
  supportsNativeStudioTools: true,
  normalizedKind          : StudioAiLlmKind.SCRIPT_LLM_PREFIX + llmId,
  buildSessionBundle      : { StudioAiRuntimeBuildRequest r ->
    StudioAiRuntimeBuildRequest sub = new StudioAiRuntimeBuildRequest()
    sub.orchestration = r.orchestration
    sub.toolResultConverter = r.toolResultConverter
    sub.studioOps = r.studioOps
    sub.crafterQServletRequest = r.crafterQServletRequest
    sub.agentId = r.agentId
    sub.chatId = r.chatId
    sub.llmNormalized = StudioAiLlmKind.OPENAI_NATIVE
    sub.openAiModelParam = r.openAiModelParam
    sub.openAiApiKeyFromRequest = r.openAiApiKeyFromRequest
    sub.toolProgressListener = r.toolProgressListener
    sub.imageModelParam = r.imageModelParam
    sub.imageGeneratorParam = r.imageGeneratorParam
    sub.fullSuppressRepoWrites = r.fullSuppressRepoWrites
    sub.protectedFormItemPath = r.protectedFormItemPath
    sub.enableTools = r.enableTools
    sub.agentEnabledBuiltInTools = r.agentEnabledBuiltInTools
    OpenAiSpringAiLlmRuntime.INSTANCE.buildSessionBundle(sub)
  }
]
