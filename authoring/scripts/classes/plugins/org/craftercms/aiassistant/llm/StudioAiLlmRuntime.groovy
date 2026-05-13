package plugins.org.craftercms.aiassistant.llm

/**
 * Pluggable LLM <strong>session</strong> for Studio AI Assistant: builds the Spring AI chat client, tool list, and
 * provider-specific bits ({@code llm} key in returned map must match {@link StudioAiLlmKind} constants).
 * <p>
 * Heavy request/stream logic (SSE, native tool loops, wire compatibility) may remain in {@link AiOrchestration} until
 * split per-provider transports; this interface isolates <strong>how we construct</strong> each provider’s session.
 * </p>
 */
interface StudioAiLlmRuntime {

  /** Same as map {@code llm} / {@link StudioAiLlmKind} normalized values. */
  String normalizedKind()

  /** When true, {@link AiOrchestration} may run native function-tool loops for CMS tools. */
  boolean supportsNativeStudioTools()

  /**
 * Returns the same structure {@link AiOrchestration} historically used: {@code chatClient}, {@code chatModel},
 * {@code tools}, {@code llm}, {@code useTools}, {@code studioOps}, {@code openAiApiKeyResolved} (nullable),
 * and for OpenAI-wire / script proxies {@code openAiWireBaseUrl}, {@code resolvedChatModel}. Optional {@code nativeToolTransport}
 * ({@code openAiWire} or {@code anthropic}) on the bundle overrides transport detection for {@code scriptLlm:…} kinds.
   */
  Map buildSessionBundle(StudioAiRuntimeBuildRequest req)
}
