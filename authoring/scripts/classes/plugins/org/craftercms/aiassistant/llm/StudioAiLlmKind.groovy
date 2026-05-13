package plugins.org.craftercms.aiassistant.llm

import java.util.Locale
import java.util.Map
import java.util.regex.Pattern

/**
 * Normalized LLM <strong>transport</strong> identifiers for the Studio AI Assistant plugin (this codebase).
 * <p>
 * <strong>{@link #CRAFTERRQ_REMOTE_API}</strong> ({@code llm=crafterQ}) is the <strong>remote hosted chat</strong> adapter
 * (HTTP to {@code api.crafterq.ai}); it is not the name of the plugin. Missing, blank, or unrecognized {@code llm}
 * values are rejected by {@link #normalize(String)} with {@link IllegalArgumentException} (HTTP 400 on stream/chat).
 * The <strong>ConsultCrafterQExpert</strong> CMS tool calls that same hosted stack for SME/RAG consults.
 * <strong>OpenAI</strong>-wire and compatible hosts use the {@code /v1/chat/completions} native-tool loop in
 * {@code AiOrchestration}. <strong>Claude</strong> uses Spring AI Anthropic with Spring-managed tool execution.
 * Site-authored backends use {@link #SCRIPT_LLM_PREFIX} via Groovy under {@code /scripts/aiassistant/llm/{id}/}.
 * </p>
 */
final class StudioAiLlmKind {

  private StudioAiLlmKind() {}

  /** Spring AI OpenAI ChatModel + RestClient native-tool loop (CMS tools on the wire). */
  static final String OPENAI_NATIVE = 'openAI'

  /** OpenAI-compatible API (same wire as OpenAI); see {@link StudioAiProviderCredentials}. */
  static final String XAI_NATIVE = 'xAI'

  static final String DEEPSEEK_NATIVE = 'deepSeek'
  static final String LLAMA_NATIVE = 'llama'
  /** Google Generative Language OpenAI-compatible endpoint; {@code genesis} is an accepted alias in {@link #normalize}. */
  static final String GEMINI_NATIVE = 'gemini'

  /** Spring AI Anthropic (Claude); tools via Spring {@code ChatClient}, not the OpenAI RestClient loop. */
  static final String CLAUDE_NATIVE = 'claude'

  /** Remote hosted chat at {@code api.crafterq.ai} — no Studio CMS tools through this adapter (see {@code ConsultCrafterQExpert} for SME tool calls). */
  static final String CRAFTERRQ_REMOTE_API = 'crafterQ'

  /**
   * Normalized id for site Groovy LLM under {@code /scripts/aiassistant/llm/{id}/}. Agent {@code <llm>} uses
   * {@code script:yourId} → normalized {@code scriptLlm:yourId}.
   */
  static final String SCRIPT_LLM_PREFIX = 'scriptLlm:'

  private static final Pattern SAFE_SCRIPT_LLM_ID = Pattern.compile('^[a-z0-9_-]{1,64}$')

  static boolean isOpenAiNative(String normalizedKind) {
    return OPENAI_NATIVE == (normalizedKind ?: '').toString()
  }

  static boolean isCrafterQRemoteApi(String normalizedKind) {
    return CRAFTERRQ_REMOTE_API == (normalizedKind ?: '').toString()
  }

  static boolean isScriptHostedLlm(String normalizedKind) {
    return (normalizedKind ?: '').toString().startsWith(SCRIPT_LLM_PREFIX)
  }

  /** Lowercase id segment after {@link #SCRIPT_LLM_PREFIX}; empty if not a script LLM token. */
  static String scriptLlmIdFromNormalized(String normalizedKind) {
    String s = (normalizedKind ?: '').toString()
    if (!s.startsWith(SCRIPT_LLM_PREFIX)) {
      return ''
    }
    return s.substring(SCRIPT_LLM_PREFIX.length()).trim().toLowerCase(Locale.US)
  }

  /** Built-in OpenAI-wire kinds only (no script bundle inspection). */
  static boolean useOpenAiRestClientToolLoopBuiltIn(String normalizedKind) {
    String n = (normalizedKind ?: '').toString()
    return OPENAI_NATIVE == n || XAI_NATIVE == n || DEEPSEEK_NATIVE == n || LLAMA_NATIVE == n || GEMINI_NATIVE == n
  }

  /**
   * OpenAI-wire RestClient native tool loop (not Anthropic). When {@code springAiBundle} is the map from
   * {@code buildSpringAiChatClient}, script-hosted sessions may set {@code nativeToolTransport} to {@code openAiWire}
   * or supply {@code openAiWireBaseUrl} + {@code resolvedChatModel} to opt into the same path.
   */
  static boolean useOpenAiRestClientToolLoop(String normalizedKind, Map springAiBundle = null) {
    if (springAiBundle != null) {
      String t = springAiBundle.get('nativeToolTransport')?.toString()?.trim()
      if (t && 'openAiWire'.equalsIgnoreCase(t)) {
        return true
      }
      if (isScriptHostedLlm((normalizedKind ?: '').toString())) {
        String w = springAiBundle.get('openAiWireBaseUrl')?.toString()?.trim()
        String rm = springAiBundle.get('resolvedChatModel')?.toString()?.trim()
        if (w && rm) {
          return true
        }
      }
    }
    return useOpenAiRestClientToolLoopBuiltIn(normalizedKind)
  }

  static boolean isAnthropicClaude(String normalizedKind, Map springAiBundle = null) {
    if (springAiBundle != null) {
      String t = springAiBundle.get('nativeToolTransport')?.toString()?.trim()
      if (t && 'anthropic'.equalsIgnoreCase(t)) {
        return true
      }
    }
    return CLAUDE_NATIVE == (normalizedKind ?: '').toString()
  }

  /** Autonomous worker: OpenAI built-in wire or site script LLM (script must return an OpenAI-wire bundle for headless tools). */
  static boolean supportsAutonomousNativeTools(String normalizedKind) {
    return useOpenAiRestClientToolLoopBuiltIn(normalizedKind) || isScriptHostedLlm(normalizedKind)
  }

  /**
   * Maps agent / POST {@code llm} strings to a normalized kind. Empty or blank throws {@link IllegalArgumentException}.
   * Unrecognized values and invalid {@code script:…} ids throw. Explicit {@code crafterq} / {@code crafter-q} maps to
   * {@link #CRAFTERRQ_REMOTE_API}. Use {@code script:yourId} for site Groovy ({@link #SCRIPT_LLM_PREFIX}).
   */
  static String normalize(String raw) {
    String trimmed = (raw ?: '').toString().trim()
    if (!trimmed) {
      throw new IllegalArgumentException(
        'Missing or blank llm: set <llm> on the agent in /config/studio/ui.xml (or ensure the stream/chat POST body includes llm, e.g. openAI, claude, crafterQ, script:myid).'
      )
    }
    String s = trimmed.toLowerCase(Locale.US)
    if (s == 'crafterq' || s == 'crafter-q' || s == 'aiassistant') {
      return CRAFTERRQ_REMOTE_API
    }
    if (s.startsWith('script:')) {
      String id = s.substring('script:'.length()).trim()
      if (SAFE_SCRIPT_LLM_ID.matcher(id).matches()) {
        return SCRIPT_LLM_PREFIX + id
      }
      throw new IllegalArgumentException(
        "Invalid script LLM id in llm='${trimmed}': use script:<id> with id matching [a-z0-9_-]{1,64}."
      )
    }
    if (s.startsWith(SCRIPT_LLM_PREFIX.toLowerCase(Locale.US))) {
      String id2 = s.substring(SCRIPT_LLM_PREFIX.length()).trim()
      if (SAFE_SCRIPT_LLM_ID.matcher(id2).matches()) {
        return SCRIPT_LLM_PREFIX + id2
      }
      throw new IllegalArgumentException(
        "Invalid script LLM id in llm='${trimmed}': use scriptLlm:<id> with id matching [a-z0-9_-]{1,64}."
      )
    }
    if (s == 'openai' || s == 'open-ai') {
      return OPENAI_NATIVE
    }
    if (s == 'xai' || s == 'x-ai' || s == 'grok') {
      return XAI_NATIVE
    }
    if (s == 'deepseek' || s == 'deep-seek') {
      return DEEPSEEK_NATIVE
    }
    if (s == 'llama' || s == 'ollama' || s == 'meta-llama' || s == 'meta_llama') {
      return LLAMA_NATIVE
    }
    if (s == 'gemini' || s == 'genesis' || s == 'google' || s == 'google-genai' || s == 'google_genai') {
      return GEMINI_NATIVE
    }
    if (s == 'claude' || s == 'anthropic') {
      return CLAUDE_NATIVE
    }
    throw new IllegalArgumentException(
      "Unrecognized llm='${trimmed}'. Supported: openAI, xAI, deepSeek, llama, gemini, genesis, claude, crafterQ, script:<id>."
    )
  }
}
