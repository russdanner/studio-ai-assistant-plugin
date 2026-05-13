import jakarta.servlet.http.HttpServletResponse
import java.nio.charset.StandardCharsets
import groovy.json.JsonOutput
import org.slf4j.LoggerFactory
import plugins.org.craftercms.aiassistant.authoring.AuthoringPreviewContext
import plugins.org.craftercms.aiassistant.http.AiHttpProxy
import plugins.org.craftercms.aiassistant.http.CrafterQBearerUiXmlMerge
import plugins.org.craftercms.aiassistant.llm.StudioAiLlmKind
import plugins.org.craftercms.aiassistant.orchestration.AiOrchestration
import plugins.org.craftercms.aiassistant.rag.ExpertSkillVectorRegistry
import plugins.org.craftercms.aiassistant.tools.StudioToolOperations

/**
 * Single streaming chat endpoint: agentId + full prompt in, SSE stream out.
 * Always writes response body ourselves and returns null so Spring never tries
 * to serialize a return value (client sends Accept: text/event-stream).
 *
 * Contract:
 *   POST body: { ..., "contentPath", "contentTypeId", "contentTypeLabel" (optional Studio UI label for the open item’s type),
 *   "studioPreviewPageUrl" (optional) — `…/studio/preview#/?page=…&site=…` from the browser when available so the prompt matches the author’s address bar,
 *   "authoringSurface": "formEngine" | omit for XB/preview,
 *   "formEngineClientJsonApply": optional boolean — when true **and** formEngine, append client-JSON apply instructions (XB must omit)
 *   "formEngineItemPath": optional — repo path of the open form item; when set with client JSON apply, WriteContent/publish/revert are blocked **only** for this path (other paths may still persist). If omitted, all repo writes are suppressed for that mode (safe default).
 *   "enableTools": optional boolean — when false, OpenAI chat omits CMS function tools (matches ui.xml enableTools false). Absent defaults true.
 *   "omitTools": optional boolean — when true, CMS function tools are omitted for this request only (copy/image-style LLM steps); overrides enableTools. Same for XB/ICE preview chat, dialog, and form-engine (`authoringSurface`). Absent/false keeps normal tool registration from enableTools/agent defaults.
 *   "llmModel": optional string — OpenAI chat model id (e.g. gpt-4o-mini).
 *   "imageModel": optional string — OpenAI Images API model for GenerateImage (e.g. gpt-image-1); agent ui.xml **imageModel**; no JVM fallback. Legacy dall-e-* image models were retired by OpenAI on the Images API effective 2026-05-12.
 *   "expertSkills": optional JSON array of { name, url, description } — per-agent markdown URLs for {@code QueryExpertGuidance} (Spring AI vector store); normalized server-side.
 *   "translateBatchConcurrency": optional integer 1–64 — parallel {@code TranslateContentBatch} workers when the model omits {@code maxConcurrency}; from agent ui.xml; server default 25 when omitted.
 *   "crafterQBearerTokenEnv": optional string — name of a **Studio host environment variable** holding the CrafterQ JWT; server sets {@code Authorization: Bearer} on outbound api.crafterq.ai calls when {@code System.getenv} returns a non-blank value (preferred over literal token in config).
 *   "crafterQBearerToken": optional string — literal CrafterQ JWT (duplicates ui.xml {@code <crafterQBearerToken>}); used when env is unset or empty. **Discouraged** in versioned config.
 *   **Server merge:** when {@code siteId} + {@code agentId} are present, missing {@code crafterQBearerTokenEnv} / {@code crafterQBearerToken} / {@code imageModel} / {@code llmModel} on the POST body may be copied from the matching {@code <agent>} row in site {@code /ui.xml} before auth and orchestration (so GenerateImage sees the configured image model even if the client omitted it).
 *   "previewToken": optional string — Studio {@code crafterPreview} cookie value; enables {@code GetPreviewHtml} without passing the token on every tool call. When omitted, the server still uses {@code crafterPreview} from the **incoming request cookies** (HttpOnly-safe).
 *   Response:  text/event-stream (SSE) on success, or application/json on error
 */
def log = LoggerFactory.getLogger('plugins.org.craftercms.aiassistant.stream')
try {
  def body = AiHttpProxy.parseJsonBody(request)
  if (Boolean.TRUE.equals(body?.get('__crafterqInvalidJson'))) {
    response.setStatus(HttpServletResponse.SC_BAD_REQUEST)
    response.setContentType('application/json')
    response.getOutputStream().withWriter('UTF-8') {
      it.write(JsonOutput.toJson([
        message: 'Invalid JSON request body',
        detail   : body?.get('__crafterqInvalidJsonDetail')?.toString() ?: ''
      ]))
    }
    return null
  }

  def agentId = body?.agentId != null ? body.agentId.toString().trim() : ''
  def prompt = body?.prompt != null ? body.prompt.toString() : ''
  def contentPathBody = body?.contentPath
  def contentTypeIdBody = body?.contentTypeId
  def contentTypeLabelBody = body?.contentTypeLabel
  def authoringSurface = body?.authoringSurface
  def clientJsonApply = body?.formEngineClientJsonApply
  def siteIdBody = body?.siteId?.toString()?.trim()
  def promptForOrchestration
  if (AuthoringPreviewContext.isFormEngineSurface(authoringSurface)) {
    promptForOrchestration = AuthoringPreviewContext.appendFormEngineAuthoringNotice(prompt)
    if (AuthoringPreviewContext.isTruthy(clientJsonApply)) {
      promptForOrchestration = AuthoringPreviewContext.appendFormEngineClientJsonApplyInstructions(promptForOrchestration)
    }
  } else {
    promptForOrchestration = AuthoringPreviewContext.appendToUserPrompt(prompt, contentPathBody, contentTypeIdBody, contentTypeLabelBody)
    promptForOrchestration = AuthoringPreviewContext.appendEnginePreviewHintIfPossible(
      promptForOrchestration, request, siteIdBody ?: params?.siteId, contentPathBody, body?.studioPreviewPageUrl)
  }
  def chatId = body?.chatId?.toString()
  def llm = body?.llm?.toString()
  def llmNorm = AiOrchestration.normalizeLlmProvider(llm)
  def openAiApiKey = body?.openAiApiKey?.toString()
  if (siteIdBody) {
    try {
      request.setAttribute('crafterq.siteId', siteIdBody)
    } catch (Throwable ignored) {
      // non-mutable request in some contexts
    }
  }
  def previewTokenBody = body?.previewToken?.toString()?.trim()
  if (previewTokenBody) {
    try {
      request.setAttribute('crafterq.previewToken', previewTokenBody)
    } catch (Throwable ignored) {}
  }
  def expertSkillsNorm = ExpertSkillVectorRegistry.normalizeRequestExpertSkills(body?.expertSkills)
  try {
    request.setAttribute('crafterq.expertSkills', expertSkillsNorm)
  } catch (Throwable ignored) {}
  def siteForBearer = siteIdBody ?: params?.siteId?.toString()?.trim()
  if (body instanceof Map && siteForBearer && agentId) {
    try {
      CrafterQBearerUiXmlMerge.mergeStreamAgentFieldsFromSiteUiXmlIfMissing(applicationContext, (Map) body, siteForBearer, agentId)
    } catch (Throwable mergeEx) {
      log.debug('Agent ui.xml merge skipped: {}', mergeEx.message ?: mergeEx.toString())
    }
  }
  if (body instanceof Map) {
    AiHttpProxy.installCrafterQBearerFromChatBody(request, (Map) body)
  }
  def openAiModel = body?.llmModel?.toString()
  def imageModel = body?.imageModel?.toString()
  def tbcRaw = body?.translateBatchConcurrency
  if (tbcRaw != null) {
    try {
      int tbc =
        (tbcRaw instanceof Number)
          ? ((Number) tbcRaw).intValue()
          : Integer.parseInt(tbcRaw.toString().trim())
      tbc = Math.max(1, Math.min(64, tbc))
      try {
        request.setAttribute('crafterq.translateBatchConcurrency', Integer.valueOf(tbc))
      } catch (Throwable ignored2) {}
    } catch (Throwable ignored) {}
  }
  def previewPathForLog = AuthoringPreviewContext.normalizeRepoPath(contentPathBody?.toString())
  def previewTokenResolvedPresent = false
  try {
    previewTokenResolvedPresent = (StudioToolOperations.readCrafterPreviewTokenFromServletRequest(request) ?: '').trim().length() > 0
  } catch (Throwable ignored) {
    previewTokenResolvedPresent = false
  }
  def formEngineForLog = AuthoringPreviewContext.isFormEngineSurface(authoringSurface)
  def clientJsonApplyForLog = AuthoringPreviewContext.isTruthy(clientJsonApply)
  def formEngineClientForward = formEngineForLog && clientJsonApplyForLog
  def formEngineItemPathRaw = body?.formEngineItemPath?.toString()
  def formEngineItemNorm = AuthoringPreviewContext.normalizeRepoPath(formEngineItemPathRaw)
  def fullSuppressWritesFallback = formEngineClientForward && !formEngineItemNorm
  def omitTools = AuthoringPreviewContext.isTruthy(body?.omitTools)
  def enableToolsRequested = AuthoringPreviewContext.parseEnableTools(body?.enableTools)
  def enableTools = omitTools ? false : enableToolsRequested
  log.info("STREAM endpoint hit: agentId={} llm={} promptLen={} chatIdPresent={} siteId={} contentPathPresent={} previewTokenResolvedPresent={} formEngineSurface={} formEngineClientJsonApply={} formEngineItemPath={} fullSuppressWritesFallback={} omitTools={} enableToolsRequested={} enableToolsEffective={}", agentId, llm, (promptForOrchestration ?: '').length(), (chatId != null && chatId.toString().trim().length() > 0), siteIdBody ?: params?.siteId, (previewPathForLog ? true : false), previewTokenResolvedPresent, formEngineForLog, clientJsonApplyForLog, formEngineItemNorm ?: '(none)', fullSuppressWritesFallback, omitTools, enableToolsRequested, enableTools)

  // Default remote hosted chat adapter requires agentId; in-studio Spring AI paths (OpenAI-wire, Claude, script) may omit it.
  if (!agentId && StudioAiLlmKind.isCrafterQRemoteApi(llmNorm)) {
    response.setStatus(HttpServletResponse.SC_BAD_REQUEST)
    response.setContentType('application/json')
    response.getOutputStream().withWriter('UTF-8') {
      it.write(JsonOutput.toJson([message: 'Missing required field: agentId (required for the default remote hosted chat adapter)']))
    }
    return null
  }

  try {
    def orchestration = new AiOrchestration(request, response, applicationContext, params, pluginConfig)
    def result = orchestration.chatStreamWithSpringAi(agentId, promptForOrchestration.toString(), chatId, llm, openAiModel, openAiApiKey, imageModel, formEngineClientForward, formEngineItemPathRaw, enableTools)
    if (result != null) {
      if (response.isCommitted()) {
        log.warn('chatStreamWithSpringAi returned error map but response already committed (SSE). Client should read metadata.error from stream. result={}', result)
        return null
      }
      response.resetBuffer()
      response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR)
      response.setContentType('application/json')
      response.getOutputStream().withWriter('UTF-8') { it.write(JsonOutput.toJson(result)) }
    }
    return null
  } catch (IllegalStateException ise) {
    if (response.isCommitted()) {
      log.error('stream.post IllegalStateException after response committed: {}', ise.message, ise)
      try {
        def os = response.getOutputStream()
        def frame =
          'data: ' +
            JsonOutput.toJson([
              text    : '',
              metadata: [error: true, completed: true, message: (ise.message ?: ise.class.simpleName).toString()]
            ]) +
            '\n\n'
        synchronized (os) {
          os.write(frame.getBytes(StandardCharsets.UTF_8))
          os.flush()
        }
      } catch (Throwable ignored) {
      }
      return null
    }
    response.resetBuffer()
    response.setStatus(HttpServletResponse.SC_BAD_REQUEST)
    response.setContentType('application/json')
    response.getOutputStream().withWriter('UTF-8') { it.write(JsonOutput.toJson([message: ise.message ?: 'Configuration error'])) }
    return null
  } catch (Throwable e) {
    if (response.isCommitted()) {
      log.error('stream.post Throwable after response committed: {}', e.message, e)
      try {
        def os = response.getOutputStream()
        def frame =
          'data: ' +
            JsonOutput.toJson([
              text    : '',
              metadata: [error: true, completed: true, message: (e.message ?: e.class.simpleName).toString()]
            ]) +
            '\n\n'
        synchronized (os) {
          os.write(frame.getBytes(StandardCharsets.UTF_8))
          os.flush()
        }
      } catch (Throwable ignored) {
      }
      return null
    }
    response.resetBuffer()
    response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR)
    response.setContentType('application/json')
    response.getOutputStream().withWriter('UTF-8') { it.write(JsonOutput.toJson([message: "Stream failed: ${e.message ?: e.class.simpleName}"])) }
    log.error('stream.post: orchestration failed', e)
    return null
  }
} catch (Throwable outer) {
  if (response?.isCommitted()) {
    log.error('stream.post: failure after response committed: {}', outer.message, outer)
    return null
  }
  try {
    response.resetBuffer()
    response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR)
    response.setContentType('application/json')
    response.getOutputStream().withWriter('UTF-8') {
      it.write(JsonOutput.toJson([message: "CrafterQ stream failed: ${outer.message ?: outer.class.simpleName}".toString()]))
    }
  } catch (Throwable ignored) {
  }
  log.error('stream.post: unhandled failure before or during stream setup', outer)
  return null
}
