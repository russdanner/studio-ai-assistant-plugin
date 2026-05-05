# AI streaming endpoint design

## Goal

One endpoint: **agent ID + full prompt in, streamed response out**. The UI does not know or care about tools; all tool execution (getContentType, getContent, writeContent, etc.) and Spring AI orchestration happen server-side inside the endpoint.

## Contract

| | |
|--|--|
| **Method** | `POST` |
| **URL** | Plugin script path: `/studio/api/2/plugin/script/plugins/org/craftercms/aiassistant/studio/aiassistant/ai/stream?siteId=...` (script at `authoring/scripts/rest/plugins/org/craftercms/aiassistant/studio/aiassistant/ai/stream.post.groovy`; path follows Trello pattern: plugin id path + extra segment so Studio resolves pluginId and classpath). |
| **Request body** | JSON: `{ "agentId": "<uuid>", "prompt": "<full prompt>", "chatId": "<optional>", "llm": "crafterQ \| openAI", "llmModel": "<optional>", "imageModel": "<optional OpenAI Images id; required for GenerateImage when no agent imageModel>", "openAiApiKey": "<optional testing>" }` |
| **Request headers** | Almost **all** inbound headers on the Studio→plugin request are forwarded to CrafterQ (`AiHttpProxy.applyCrafterQForwardedHeaders`). Excluded: hop-by-hop (`Connection`, `Transfer-Encoding`, …), `Host`, and `Content-Length` / `Content-Type` / `Accept` (the plugin sets these for the outbound JSON or SSE). So `Authorization`, `Cookie`, `X-CrafterQ-Chat-User`, `User-Agent`, etc. pass through when present. |
| **Response** | `Content-Type: text/event-stream` — same SSE shape as CrafterQ so the existing UI can consume it unchanged. |

## Server-side behavior

- **LLM selection**: Widget configuration (same shape as `ui.xml`) sets per-agent **`<llm>crafterQ</llm>`** or **`<llm>openAI</llm>`**; the UI sends `llm` (and optional **`llmModel`** / **`imageModel`**) on each stream/chat request. See **[LLM_CONFIGURATION.md](LLM_CONFIGURATION.md)**.
- **CrafterQ (`llm=crafterQ`, default)**: Spring AI **`ExpertChatModel`** POSTs a **single text `prompt`** to CrafterQ’s `/v1/chats` API. **No CMS tools** on this path — content/RAG style chat only. Prompt = short system text + `Human:` / `Assistant:` transcript. **DEBUG logs** (when enabled): `CrafterQ HTTP TX/RX` previews, `CrafterQ call start/parsed` (see **README.md** server logging).
- **OpenAI (`llm=openAI`)**: Spring AI **`OpenAiChatModel`** with native **tool** callbacks (`AiOrchestrationTools`). Requires server **`OPENAI_API_KEY`** (or JVM `crafter.openai.apiKey`). System message: `ToolPrompts.OPENAI_AUTHORING_INSTRUCTIONS`. Verbose tool/payload traces are **DEBUG** (e.g. `TOOL INVOKED` with args preview).
- **Prompt length**: CrafterQ may cap `prompt` around **~1000 characters**. Default `maxPromptChars` is **1000**. If the full instructions + transcript exceed that, the plugin **compacts**: shorter system text (`CRAFTERQ_COMPACT_INSTRUCTIONS`), keeps the **first** `Human:` author line (truncated), then fills remaining space with the **newest** transcript blocks from the end (each block truncated). A **WARN** `CrafterQ prompt compacted` is logged when this runs. Raise the cap if your CrafterQ tier allows it: set JVM `-Dcrafterq.maxPromptChars=8000` on Studio (CrafterCMS plugin descriptors only allow specific parameter names; a custom descriptor field caused marketplace install failures).
- **HTTP 5xx / `InternalError` from api.crafterq.ai**: If Studio logs (at **DEBUG**) show **`CrafterQ prompt metrics`** with a **small** `chars` / `utf8Bytes` value (well under `maxPromptChars`), the failure is **not** prompt truncation—treat it as a **CrafterQ API or agent** issue (misconfigured `agentId`, upstream outage, etc.). Inbound headers (e.g. `Authorization`, `Cookie`) are forwarded when present, except the denylist above.
- **Note**: The REST scripts depend on `authoring/scripts/classes` (`AiOrchestration`, `AiHttpProxy`). Marketplace/copy may not copy the classes folder to the site; if the stream fails with “unable to resolve class”, copy `authoring/scripts/classes` to the site’s `config/studio/scripts/classes` manually after install.
- **Studio plugin classpath**: Classes under `scripts/classes` compile in a **restricted** Groovy environment. **`groovy.util.XmlSlurper`** is not available there — use **JDK** `javax.xml.parsers.DocumentBuilderFactory` / `org.w3c.dom` for XML parsing (see `AiOrchestrationTools.extractFormFieldIdsFromFormDefinitionXml`).

## CrafterQ vs OpenAI (tools)

**CrafterQ** is used **only** for **content / RAG** chat in this plugin (no tool bridging in `ExpertChatModel`). **OpenAI** is the **primary orchestrator** when the user selects **`openAI`** — Spring AI runs the full tool loop. A future step is to expose **CrafterQ as a dedicated tool** (e.g. “get content ideas”) callable from the OpenAI path.

## UI

- The Studio plugin (React) continues to send one prompt and display streamed chunks.
- No tool list, no tool parameters, no tool results in the client — everything is encapsulated in the streamed reply.

## Files

- **LLM / keys**: **[LLM_CONFIGURATION.md](LLM_CONFIGURATION.md)**
- **Stream endpoint**: `authoring/scripts/rest/plugins/org/craftercms/aiassistant/studio/aiassistant/ai/stream.post.groovy`
- **Chat endpoint**: `authoring/scripts/rest/plugins/org/craftercms/aiassistant/studio/aiassistant/ai/agent/chat.post.groovy`
- **Classes** (required for Spring AI + tools): `authoring/scripts/classes/plugins/org/craftercms/aiassistant/` — `AiOrchestration.groovy`, `AiHttpProxy.groovy`. If marketplace/copy does not deploy these, copy this folder to the site’s `config/studio/scripts/classes` manually after install.
