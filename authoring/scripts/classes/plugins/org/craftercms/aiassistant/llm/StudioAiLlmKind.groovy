package plugins.org.craftercms.aiassistant.llm

import java.util.Locale

/**
 * Normalized LLM <strong>transport</strong> identifiers for the Studio AI Assistant plugin (this codebase).
 * <p>
 * Product naming: authors see “CrafterQ” in places, but architecturally <strong>CrafterQ</strong> here means the
 * <strong>remote CrafterQ HTTP API</strong> adapter — one optional backend. <strong>OpenAI</strong> is another adapter
 * (Spring AI + Chat Completions + native tool calling). Additional providers should add a constant, extend
 * {@link StudioAiLlmKind#normalize(String)}, and register a {@link StudioAiLlmRuntime} in {@link StudioAiLlmRuntimeFactory}.
 * </p>
 */
final class StudioAiLlmKind {

  private StudioAiLlmKind() {}

  /** Spring AI OpenAI ChatModel + RestClient native-tool loop (CMS tools on the wire). */
  static final String OPENAI_NATIVE = 'openAI'

  /** CrafterQ SaaS/API chat only — no Studio CMS tools through this adapter. */
  static final String CRAFTERRQ_REMOTE_API = 'crafterQ'

  static boolean isOpenAiNative(String normalizedKind) {
    return OPENAI_NATIVE == (normalizedKind ?: '').toString()
  }

  static boolean isCrafterQRemoteApi(String normalizedKind) {
    return CRAFTERRQ_REMOTE_API == (normalizedKind ?: '').toString()
  }

  /**
   * Maps agent / POST {@code llm} strings to a normalized kind. Unknown values default to {@link #CRAFTERRQ_REMOTE_API}
   * (historical default).
   */
  static String normalize(String raw) {
    String s = (raw ?: '').toString().trim().toLowerCase(Locale.US)
    if (!s || s == 'crafterq' || s == 'crafter-q') {
      return CRAFTERRQ_REMOTE_API
    }
    if (s == 'openai' || s == 'open-ai') {
      return OPENAI_NATIVE
    }
    // Future: anthropic, google, azure-openai, etc. — register in StudioAiLlmRuntimeFactory.
    return CRAFTERRQ_REMOTE_API
  }
}
