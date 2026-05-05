package plugins.org.craftercms.aiassistant.prompt

import org.slf4j.Logger
import org.slf4j.LoggerFactory

import java.util.concurrent.ConcurrentHashMap

/**
 * <strong>Override mechanism</strong> for {@link ToolPrompts}: built-in Groovy strings remain the defaults; a
 * non-blank {@code KEY.md} on the classpath (or under {@code prompts/} next to compiled classes) replaces
 * that key only. Omit the file (or leave it blank) to keep the shipped default — no merge, no partial patch.
 * <p>Lookup order for each key (e.g. {@code OPENAI_AUTHORING_INSTRUCTIONS}):</p>
 * <ol>
 *   <li>Classpath resource {@link #CLASSPATH_PREFIX}{@code <KEY>.md} (e.g.
 *   {@code authoring/scripts/classes/plugins/org/craftercms/aiassistant/prompts/} in this repo).</li>
 *   <li>Peer resource next to this class, then classloaders, then {@code prompts/} next to compiled classes when
 *   the plugin is deployed as an expanded directory (typical development).</li>
 * </ol>
 * <p>If no override is found, {@link #resolve} returns the {@code defaultText} from {@link ToolPrompts}.</p>
 * <p><strong>Token parity:</strong> Blank or whitespace-only override files are ignored (same as missing), so the
 * prompt matches the built-in default unless the file contains real replacement text.</p>
 */
final class ToolPromptsLoader {

  private static final Logger log = LoggerFactory.getLogger(ToolPromptsLoader.class)
  private static final Map<String, String> CACHE = new ConcurrentHashMap<>()
  private static final String PACKAGE_DIR = 'plugins/org/craftercms/aiassistant/'

  /** Classpath prefix for resources (trailing slash). */
  static final String CLASSPATH_PREFIX = "${PACKAGE_DIR}prompts/"

  private ToolPromptsLoader() {}

  /**
   * @param key  stable id matching {@link ToolPrompts} property name, e.g. {@code OPENAI_AUTHORING_INSTRUCTIONS}
   * @param defaultText  built-in string when no override is present
   */
  static String resolve(String key, String defaultText) {
    if (key == null) {
      return defaultText
    }
    if (CACHE.containsKey(key)) {
      return CACHE.get(key)
    }
    String s = tryLoadFromClasspathOrExpanded(key)
    if (s == null) {
      s = defaultText
    }
    CACHE.put(key, s)
    s
  }

  /** Non-blank text only; blank files must not replace a large built-in default with an empty string. */
  private static String meaningfulOverrideOrNull(String t) {
    if (t == null) {
      return null
    }
    if (!t.trim()) {
      return null
    }
    return t
  }

  /** For tests or hot-reload: clear cache so the next {@link #resolve} re-reads files. */
  static void clearCacheForTests() {
    CACHE.clear()
  }

  /**
   * @return override text, or {@code null} to use caller's {@code defaultText}
   */
  private static String tryLoadFromClasspathOrExpanded(String key) {
    // 1) Classpath: plugins/.../prompts/KEY.md
    def fromCp = meaningfulOverrideOrNull(readUtf8FromClasspath(CLASSPATH_PREFIX + key + '.md', ToolPromptsLoader))
    if (fromCp != null) {
      log.debug('Tool prompt from classpath: {} ({} chars)', key, fromCp.length())
      return fromCp
    }

    // 2) Peer to this class
    fromCp = meaningfulOverrideOrNull(readUtf8FromClasspath(key + '.md', ToolPromptsLoader))
    if (fromCp != null) {
      return fromCp
    }

    // 3) Classloader package path
    fromCp = meaningfulOverrideOrNull(readUtf8FromClassLoader((ToolPromptsLoader.class.classLoader), "${CLASSPATH_PREFIX}${key}.md"))
    if (fromCp != null) {
      return fromCp
    }

    // 4) Thread context classloader
    def cl = Thread.currentThread().contextClassLoader
    fromCp = meaningfulOverrideOrNull(readUtf8FromClassLoader(cl, "${CLASSPATH_PREFIX}${key}.md"))
    if (fromCp != null) {
      return fromCp
    }

    // 5) Expanded plugin: prompts/ next to this class
    try {
      def loc = ToolPromptsLoader.class.protectionDomain?.codeSource?.location
      if (loc != null) {
        def file = new File(loc.toURI())
        if (file.isDirectory()) {
          def promptsDir = new File(file, 'prompts')
          def candidate = new File(promptsDir, key + '.md')
          if (candidate.isFile()) {
            def t = meaningfulOverrideOrNull(candidate.getText('UTF-8'))
            if (t != null) {
              return t
            }
            log.warn('Tool prompt file is blank; ignoring: key={} path={}', key, candidate.absolutePath)
          }
        }
      }
    } catch (Throwable ignored) {
    }

    null
  }

  private static String readUtf8FromClasspath(String path, Class<?> anchor) {
    try {
      def is = anchor.getResourceAsStream(path)
      if (is != null) {
        try {
          return is.getText('UTF-8')
        } finally {
          try { is.close() } catch (Throwable ignored) { }
        }
      }
    } catch (Throwable ignored) {
    }
    null
  }

  private static String readUtf8FromClassLoader(ClassLoader cl, String path) {
    if (cl == null) {
      return null
    }
    try {
      def is = cl.getResourceAsStream(path)
      if (is != null) {
        try {
          return is.getText('UTF-8')
        } finally {
          try { is.close() } catch (Throwable ignored) { }
        }
      }
    } catch (Throwable ignored) {
    }
    null
  }
}
