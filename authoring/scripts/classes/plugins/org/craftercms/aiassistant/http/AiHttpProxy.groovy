package plugins.org.craftercms.aiassistant.http

import groovy.json.JsonOutput
import groovy.json.JsonSlurper
import org.slf4j.Logger
import org.slf4j.LoggerFactory

import java.io.BufferedReader
import java.io.InputStream
import java.io.InputStreamReader
import java.nio.charset.StandardCharsets
import java.util.Locale
import java.net.HttpURLConnection
import java.net.SocketTimeoutException
import java.net.URL
import java.net.URLEncoder

/**
 * HTTP helpers for the <strong>external</strong> CrafterQ API only.
 * <p>Studio CMS operations ({@code GetContent}, {@code WriteContent}, etc.) use in-process Spring beans
 * in {@link StudioToolOperations} — this class does not call Studio REST from Groovy.</p>
 */
class AiHttpProxy {
  private static final Logger logger = LoggerFactory.getLogger(AiHttpProxy.class)

  /**
   * Do not forward hop-by-hop headers, wrong host, or headers we must set for the CrafterQ JSON/SSE body.
   */
  private static final Set<String> CRAFTERQ_FORWARD_HEADER_DENYLIST = [
    'host', 'connection', 'keep-alive', 'proxy-authenticate', 'proxy-authorization',
    /** Studio JWT must not be sent to CrafterQ — auth is {@code X-CrafterQ-Chat-User} (browser localStorage). */
    'authorization',
    'te', 'trailer', 'transfer-encoding', 'upgrade', 'expect',
    'content-length', 'content-type', 'accept'
  ] as Set

  /** Truncate long strings for logs (full payload still sent to CrafterQ). */
  static String elideForLog(String s, int maxChars = 8000) {
    if (s == null) return ''
    if (s.length() <= maxChars) return s
    int head = (int) (maxChars * 0.45)
    int tail = (int) (maxChars * 0.45)
    return s.substring(0, head) + "\n... [elided ${s.length() - head - tail} chars] ...\n" + s.substring(s.length() - tail)
  }

  /**
   * Copies inbound Studio/plugin request headers onto the outbound CrafterQ {@link HttpURLConnection},
   * except hop-by-hop and headers that must match the new request (see {@link #CRAFTERQ_FORWARD_HEADER_DENYLIST}).
   * After this, callers should {@code setRequestProperty} for {@code Content-Type} and {@code Accept}.
   * Uses {@code addRequestProperty} so multiple values for the same name are preserved.
   */
  static void applyCrafterQForwardedHeaders(HttpURLConnection conn, def request) {
    if (!conn || !request) return
    def names = request.getHeaderNames()
    if (!names) return
    int forwardedValues = 0
    while (names.hasMoreElements()) {
      String name = names.nextElement() as String
      if (!name?.trim()) continue
      String ln = name.toLowerCase(Locale.ROOT)
      if (CRAFTERQ_FORWARD_HEADER_DENYLIST.contains(ln)) continue
      def vals = request.getHeaders(name)
      if (!vals) continue
      while (vals.hasMoreElements()) {
        def v = vals.nextElement()
        if (v != null) {
          conn.addRequestProperty(name, v.toString())
          forwardedValues++
        }
      }
    }
    if (logger.isDebugEnabled()) {
      logger.debug('CrafterQ forwarded {} inbound header value(s) to upstream (denylist excluded)', forwardedValues)
    }
    try {
      String cq = request.getHeader('X-CrafterQ-Chat-User')?.toString()?.trim()
      if (cq) {
        conn.setRequestProperty('X-CrafterQ-Chat-User', cq)
      }
    } catch (Throwable ignored) {
    }
  }

  /**
   * Extract assistant-visible text from one CrafterQ SSE JSON event (same shapes as {@code ExpertChatModel}).
   */
  static String extractTextFromCrafterQEvent(def obj) {
    if (obj == null) return ''
    if (obj instanceof String) return obj
    if (obj instanceof Map) {
      def m = (Map) obj
      def t = m?.text ?: m?.content ?: m?.delta
      if (t != null && t.toString().trim().length() > 0) return t.toString()
      t = m?.message
      if (t instanceof Map) return (t?.content ?: t?.text ?: t?.delta ?: '').toString()
      if (t instanceof String) return t
      t = m?.response
      if (t instanceof Map) return (t?.message ?: t?.content ?: t?.text ?: '').toString()
      if (t instanceof String) return t
      def choices = m?.choices
      if (choices instanceof List && !choices.isEmpty()) {
        def first = choices.get(0)
        if (first instanceof Map) {
          def delta = first?.delta
          if (delta instanceof Map) return (delta?.content ?: delta?.text ?: '').toString()
          if (delta instanceof String) return delta
        }
      }
      def data = m?.data
      if (data instanceof Map) return (data?.text ?: data?.content ?: '').toString()
      if (data instanceof String) return data
    }
    return ''
  }

  /**
   * POST {@code /v1/chats?stream=true&agentId=…} with JSON body, read SSE until {@code metadata.completed}, return
   * concatenated assistant text. Matches browser/widget assistant calls (see {@code aiAssistantApi.streamChat}).
   */
  static String postCrafterQStreamChat(String agentId, Map payload, def studioRequest = null) {
    String agent = (agentId ?: '').toString().trim()
    if (!agent) throw new IllegalArgumentException('Missing agentId for CrafterQ stream chat')
    String streamUrl = "https://api.crafterq.ai/v1/chats?stream=true&agentId=${URLEncoder.encode(agent, 'UTF-8')}"
    byte[] payloadBytes = JsonOutput.toJson(payload != null ? payload : [:]).getBytes(StandardCharsets.UTF_8)
    int maxAttempts = 2
    int attempt = 0
    while (attempt < maxAttempts) {
      attempt++
      HttpURLConnection conn = null
      InputStream inputStream = null
      try {
        conn = (HttpURLConnection) new URL(streamUrl).openConnection()
        conn.setRequestMethod('POST')
        conn.setDoOutput(true)
        applyCrafterQForwardedHeaders(conn, studioRequest)
        conn.setRequestProperty('Content-Type', 'application/json')
        conn.setRequestProperty('Accept', 'text/event-stream')
        conn.setChunkedStreamingMode(0)
        conn.setConnectTimeout(15000)
        conn.setReadTimeout(120_000)
        if (logger.isDebugEnabled()) {
          logger.debug('CrafterQ SSE TX: url={} jsonBodyChars={} bodyPreview=\n{}', streamUrl, payloadBytes.length,
            elideForLog(new String(payloadBytes, StandardCharsets.UTF_8), 6000))
        }
        conn.getOutputStream().withCloseable { os ->
          os.write(payloadBytes)
        }
        int status = conn.getResponseCode()
        if (status >= 500 && attempt < maxAttempts) {
          logger.warn('POST {} got HTTP {} (attempt {}/{}), retrying once', streamUrl, status, attempt, maxAttempts)
          sleep(400)
          continue
        }
        if (status < 200 || status >= 300) {
          InputStream err = conn.getErrorStream()
          String errText = ''
          if (err != null) {
            err.withCloseable { errText = it.getText('UTF-8') ?: '' }
          }
          throw new RuntimeException("HTTP ${status} calling ${streamUrl}: ${errText ?: conn.getResponseMessage()}")
        }
        inputStream = conn.getInputStream()
        StringBuilder acc = new StringBuilder()
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8))) {
          def slurper = new JsonSlurper()
          String line
          while ((line = reader.readLine()) != null) {
            if (!line.startsWith('data:')) continue
            def data = line.substring(5).trim()
            if (!data) continue
            try {
              def obj = slurper.parseText(data)
              def metaObj = obj?.metadata ?: [:]
              def meta = (metaObj instanceof Map) ? (metaObj as Map) : [:]
              boolean completed = (meta?.completed != null) ? meta.completed.asBoolean() : false
              String chunk = extractTextFromCrafterQEvent(obj)
              if (chunk != null && chunk.length() > 0) {
                acc.append(chunk)
              }
              if (completed) break
            } catch (Exception ex) {
              logger.warn('CrafterQ SSE parse failed: {}', ex.toString())
            }
          }
        }
        inputStream = null
        String out = acc.toString()
        if (logger.isDebugEnabled()) {
          logger.debug('CrafterQ SSE RX: url={} assistantChars={} preview=\n{}', streamUrl, out.length(), elideForLog(out, 4000))
        }
        return out
      } catch (SocketTimeoutException ste) {
        logger.error('POST {} timed out (attempt {}/{}): {}', streamUrl, attempt, maxAttempts, ste.toString())
        if (attempt >= maxAttempts) throw new RuntimeException("Request timed out calling ${streamUrl}", ste)
      } catch (Exception e) {
        if (attempt >= maxAttempts) throw e
        logger.warn('POST {} failed (attempt {}/{}): {}', streamUrl, attempt, maxAttempts, e.toString())
      } finally {
        try {
          inputStream?.close()
        } catch (Throwable ignored) {
        }
        try {
          conn?.disconnect()
        } catch (Throwable ignored2) {
        }
        inputStream = null
      }
    }
    throw new RuntimeException("POST failed after retries calling ${streamUrl}")
  }

  /**
   * POST JSON to CrafterQ. Forwards almost all headers from {@code studioRequest} (inbound plugin call),
   * then forces {@code Content-Type} / {@code Accept} for this JSON body.
   */
  static Object postJson(String url, Object body, def studioRequest = null) {
    int maxAttempts = 2
    int attempt = 0
    while (attempt < maxAttempts) {
      attempt++
      HttpURLConnection conn = null
      try {
        conn = (HttpURLConnection) new URL(url).openConnection()
        conn.setRequestMethod('POST')
        conn.setDoOutput(true)
        applyCrafterQForwardedHeaders(conn, studioRequest)
        conn.setRequestProperty('Content-Type', 'application/json')
        conn.setRequestProperty('Accept', 'application/json')
        conn.setConnectTimeout(15000)
        conn.setReadTimeout(45000)

        def payload = JsonOutput.toJson(body != null ? body : [:])
        if (logger.isDebugEnabled()) {
          logger.debug("CrafterQ HTTP TX: url={} jsonBodyChars={} bodyPreview=\n{}", url, payload.length(), elideForLog(payload, 6000))
        }
        conn.getOutputStream().withCloseable { os ->
          os.write(payload.getBytes(StandardCharsets.UTF_8))
        }

        int status = conn.getResponseCode()
        InputStream is = (status >= 200 && status < 300) ? conn.getInputStream() : conn.getErrorStream()
        String text = ''
        if (is != null) {
          is.withCloseable { stream ->
            text = stream.getText('UTF-8') ?: ''
          }
        }

        if (status >= 500 && attempt < maxAttempts) {
          logger.warn("POST {} got HTTP {} (attempt {}/{}), retrying once", url, status, attempt, maxAttempts)
          sleep(400)
          continue
        }

        if (logger.isDebugEnabled()) {
          logger.debug("CrafterQ HTTP RX: url={} status={} responseChars={} responsePreview=\n{}", url, status, text.length(), elideForLog(text, 6000))
        }

        if (status < 200 || status >= 300) {
          throw new RuntimeException("HTTP ${status} calling ${url}: ${text ?: conn.getResponseMessage()}")
        }

        if (!text?.trim()) return [:]
        try {
          return new JsonSlurper().parseText(text)
        } catch (ignored) {
          return [text: text]
        }
      } catch (SocketTimeoutException ste) {
        logger.error("POST {} timed out (attempt {}/{}): {}", url, attempt, maxAttempts, ste.toString())
        if (attempt >= maxAttempts) throw new RuntimeException("Request timed out calling ${url}")
      } catch (Exception e) {
        logger.error("POST {} failed (attempt {}/{}): {}", url, attempt, maxAttempts, e.toString())
        if (attempt >= maxAttempts) throw e
      } finally {
        try { conn?.disconnect() } catch (ignored) {}
      }
    }
    throw new RuntimeException("POST failed after retries calling ${url}")
  }

  /**
   * Reads the servlet POST body as JSON. Never throws: invalid JSON returns a map with
   * {@code __crafterqInvalidJson} so REST scripts can return 400 instead of an unhandled 500/HTML error page.
   */
  static Map parseJsonBody(def request) {
    def reader = request?.getReader()
    if (!reader) return [:]
    def sb = new StringBuilder()
    String line
    while ((line = reader.readLine()) != null) {
      sb.append(line)
    }
    def text = sb.toString()
    if (!text?.trim()) return [:]
    try {
      def parsed = new JsonSlurper().parseText(text)
      return (parsed instanceof Map) ? (Map) parsed : [value: parsed]
    } catch (Throwable t) {
      logger.warn('parseJsonBody: invalid JSON ({} chars): {}', text.length(), t.message)
      return [
        __crafterqInvalidJson      : true,
        __crafterqInvalidJsonDetail: (t.message ?: t.toString())
      ]
    }
  }
}
