// Copy to: config/studio/scripts/aiassistant/llm/cursor/runtime.groovy
// Agent: <llm>script:cursor</llm>  (folder name must match the id after "script:")
//
// This is the **minimal** sample: no Spring AI imports in the script body — it delegates one turn to the
// built-in OpenAI runtime (same pattern as docs/examples/aiassistant-llm/demo/runtime.groovy).
//
// For **Cursor Cloud Agents** over HTTPS (custom ChatModel + Spring AI stack in Groovy), use the
// **cursor-cloud-agent** folder id instead: copy docs/examples/aiassistant-llm/cursor-cloud-agent/runtime.groovy to
// config/studio/scripts/aiassistant/llm/cursor-cloud-agent/runtime.groovy and set <llm>script:cursor-cloud-agent</llm>.

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
