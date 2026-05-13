package plugins.org.craftercms.aiassistant.config

import groovy.json.JsonSlurper
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import plugins.org.craftercms.aiassistant.tools.StudioToolOperations

import java.util.Collections
import java.util.LinkedHashSet
import java.util.Locale
import java.util.Map
import java.util.Set

/**
 * Optional site project policy for built-in CMS tools: {@code config/studio/scripts/aiassistant/config/tools.json}
 * (Studio module path {@link #TOOLS_JSON_PATH}).
 * <p>
 * JSON shape (all keys optional):
 * <pre>{@code
 * {
 *   "disabledBuiltInTools": ["GenerateImage", "FetchHttpUrl"],
 *   "enabledBuiltInTools": ["GetContent", "WriteContent"]
 * }
 * }</pre>
 * When {@code enabledBuiltInTools} is a <strong>non-empty</strong> array, it acts as a <strong>whitelist</strong> of
 * built-in tool names to keep (site {@code InvokeSiteUserTool} is still added when {@code user-tools/registry.json}
 * has entries). When omitted or empty, all built-in tools ship minus any names listed in {@code disabledBuiltInTools}.
 * </p>
 */
final class StudioAiAssistantProjectConfig {

  private static final Logger LOG = LoggerFactory.getLogger(StudioAiAssistantProjectConfig.class)

  /** Studio {@code studio} module path (same prefix as other aiassistant site scripts). */
  static final String TOOLS_JSON_PATH = '/scripts/aiassistant/config/tools.json'

  private StudioAiAssistantProjectConfig() {}

  static Map load(StudioToolOperations ops) {
    if (ops == null) {
      return Collections.emptyMap()
    }
    String siteId = ops.resolveEffectiveSiteId('')
    String raw = null
    try {
      raw = ops.readStudioConfigurationUtf8(siteId, TOOLS_JSON_PATH)
    } catch (Throwable t) {
      LOG.debug('StudioAiAssistantProjectConfig: read failed siteId={}: {}', siteId, t.message)
      return Collections.emptyMap()
    }
    if (raw == null || !raw.toString().trim()) {
      return Collections.emptyMap()
    }
    try {
      Object parsed = new JsonSlurper().parseText(raw.toString().trim())
      if (parsed instanceof Map) {
        return (Map) parsed
      }
    } catch (Throwable t) {
      LOG.warn('StudioAiAssistantProjectConfig: invalid JSON at {} siteId={}: {}', TOOLS_JSON_PATH, siteId, t.message)
    }
    return Collections.emptyMap()
  }

  /** Non-empty whitelist of tool callback names to retain; {@code null} = use full built-in set minus disabled. */
  static Set<String> enabledBuiltInWhitelist(Map cfg) {
    if (!(cfg instanceof Map)) {
      return null
    }
    Object raw = cfg.get('enabledBuiltInTools')
    if (!(raw instanceof List) || ((List) raw).isEmpty()) {
      return null
    }
    Set<String> out = new LinkedHashSet<>()
    for (Object o : (List) raw) {
      String n = o != null ? o.toString().trim() : ''
      if (n) {
        out.add(n)
      }
    }
    return out.isEmpty() ? null : out
  }

  static Set<String> disabledBuiltInSet(Map cfg) {
    if (!(cfg instanceof Map)) {
      return Collections.emptySet()
    }
    Object raw = cfg.get('disabledBuiltInTools')
    if (!(raw instanceof List)) {
      return Collections.emptySet()
    }
    Set<String> out = new LinkedHashSet<>()
    for (Object o : (List) raw) {
      String n = o != null ? o.toString().trim() : ''
      if (n) {
        out.add(n.toLowerCase(Locale.ROOT))
      }
    }
    return out
  }

  static boolean isToolNameDisabled(String toolName, Set<String> disabledLower) {
    if (toolName == null || disabledLower == null || disabledLower.isEmpty()) {
      return false
    }
    return disabledLower.contains(toolName.toString().trim().toLowerCase(Locale.ROOT))
  }
}
