package plugins.org.craftercms.aiassistant.llm

/**
 * Selects a {@link StudioAiLlmRuntime} from a normalized kind ({@link StudioAiLlmKind}).
 */
final class StudioAiLlmRuntimeFactory {

  private StudioAiLlmRuntimeFactory() {}

  static StudioAiLlmRuntime runtimeFor(String normalizedKind) {
    if (StudioAiLlmKind.isOpenAiNative(normalizedKind)) {
      return OpenAiSpringAiLlmRuntime.INSTANCE
    }
    return ExpertApiLlmRuntime.INSTANCE
  }
}
