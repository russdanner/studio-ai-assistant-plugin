# LLM configuration (CrafterQ vs OpenAI)

The Studio widget can run chat against **two backends**, chosen per agent in the plugin UI configuration (same structure as `ui.xml` when edited in Studio).

## Crafter Studio version (CMS tools)

OpenAI **tool** calls that read/write repository content (`GetContent`, `WriteContent`, etc.) are wired to **CrafterCMS 4.5.x** Studio Java APIs:

- **Writes:** Bean **`cstudioContentService`** only (same as Crafter Studio in-process v1 content service, [studio support/4.x](https://github.com/craftercms/studio/tree/support/4.x)). Default path: **`writeContentAndNotify(site, path, stream)`** (publishes `ContentEvent` for UI refresh). If `unlock` is false: **8-arg `writeContent`** + **`notifyContentEvent`**.
- **Reads:** v1 `getContent`-style methods when present; otherwise v2 `getContentAsResource` and `getItemDescriptor` (see `StudioToolOperations.groovy`).
- **Content item XML:** Pages and components are stored as `<page>` / `<component>` XML whose child element names come from the **content type** (form-definition field ids). Prompts and tool descriptions tell the model **not** to invent unrelated tags (e.g. generic `<article>` trees). The **`update_content`** tool loads the item’s **`form-definition.xml`** (when `<content-type>` is present in the file) and returns **`contentTypeId`**, **`formFieldIds`**, and the full **`formDefinitionForContentType`** so the model can edit **in place** before **`WriteContent`**. (Typical Studio forms + page XML are small relative to modern OpenAI context windows.) On **`WriteContent`**, the server may also append **`checkbox-group`** **`item`** rows for **taxonomy-backed** datasources when the form requires selections but the model omitted them (see **SPEC.md**).
- **`ListContentTranslationScope`:** Returns a **nested tree** and **`pathChunks`** of `/site/.../*.xml` paths reachable from a page (or component) via `<key>` references — **metadata only** (no bulk XML). Default **`pathChunks`** use **one path per chunk** so full-page translate/copy uses **`GetContent`** / **`WriteContent`** per item and stays within LLM context.
- **`ConsultCrafterQExpert` (OpenAI only):** Calls **`api.crafterq.ai/v1/chats`** with the **same `agentId`** as the widget session so CrafterQ acts as a **subject-matter / RAG expert** (copy, tone, SEO, IA). Does **not** read or write the repository. Prompt length is capped with the same JVM limit as the CrafterQ chat adapter: **`crafterq.maxPromptChars`** (default 1000 chars — increase if consults are trimmed).
- **`GetContentTypeFormDefinition`:** Prefer **`contentPath`** (same repository path as the page/component XML). The server reads **`<content-type>`** from that file so the model must not guess types from filenames (e.g. `/site/website/index.xml` → **`/page/index`** is wrong). If **`contentPath`** and **`contentTypeId`** disagree, **`contentPath`** wins.
- **`GenerateImage` (OpenAI only):** Calls **`POST /v1/images/generations`** with the same API key as chat. The image model is **only** from the agent **`<imageModel>`** (widget JSON **`imageModel`**) or the stream/chat POST body **`imageModel`** — there is **no** JVM or legacy-key fallback; if omitted or blank, image generation errors until configured. Returned image URLs are short-lived; for the site, download into **`/static-assets/`** and reference that path.

**Conversation vs focused generation (OpenAI only — all AI panel surfaces):** The same rules apply whether the author opens the assistant from **Experience Builder / ICE** (preview sidebar), the **floating dialog**, or the **content-type form assistant** (`authoringSurface: formEngine`). Normal chat turns register CMS **function tools** when the agent / request enables them. **`AiAssistantChat`** prepends an **abbreviated prior-turn block** (last several user/assistant messages, capped in size) on every send so each HTTP request stays single-shot while preserving context. For a **focused copy or generation step**, send **`omitTools: true`** on that POST (or set **`&lt;omitTools&gt;true&lt;/omitTools&gt;`** on a quick **`&lt;prompt&gt;`** in ui.xml); that **one** request omits tool schemas so more context remains for large payloads (e.g. serialized form XML or expanded content macros). **`omitTools`** overrides **`enableTools`** for that round-trip only on **any** surface.

## Values

| `<llm>` value | Behavior |
|----------------|----------|
| **`crafterQ`** (default) | Calls **CrafterQ** (`api.crafterq.ai`) via `ExpertChatModel`. **Content / RAG style chat only** — the adapter does **not** run CMS tools. |
| **`openAI`** | Uses **OpenAI** through Spring AI with **native tool calling** (GetContent, **ListContentTranslationScope**, WriteContent, ListPagesAndComponents, **ConsultCrafterQExpert**, etc.). |

Optional **`<llmModel>`** (e.g. `gpt-4o-mini`, `gpt-4o`) is sent to the server; if omitted, the server uses JVM property `crafter.openai.model` or **`gpt-4o-mini`**.

Optional **`<imageModel>`** (e.g. `dall-e-3`, `dall-e-2`) selects the **OpenAI Images API** model for the **`GenerateImage`** tool. If omitted or blank, **`GenerateImage`** fails until you set it (or pass **`imageModel`** on the stream/chat request). The tool may also pass an optional per-call **`model`** argument to override. There is **no** JVM **`crafter.openai.imageModel`** fallback.

## OpenAI API key (server-side)

**Recommended:** set on the **Studio** JVM/host (never commit real keys to site config):

- Environment variable: **`OPENAI_API_KEY`**
- Or JVM: **`-Dcrafter.openai.apiKey=sk-...`**

### Optional: `<openAiApiKey>` in ui.xml (testing only)

**Not recommended** for production: the key lives in Studio configuration (often Git-tracked), is visible to anyone who can read/edit that config, and is sent from the browser on each chat request.

Use only for **local testing** when you cannot set env/JVM on Studio. Add **inside the same `<agent>`** that uses `<llm>openAI</llm>`:

```xml
<agent>
  <crafterQAgentId>ANOTHER_AGENT_UUID</crafterQAgentId>
  <label>OpenAI tools</label>
  <llm>openAI</llm>
  <llmModel>gpt-4o-mini</llmModel>
  <openAiApiKey>sk-...</openAiApiKey>
</agent>
```

**Precedence:** if `OPENAI_API_KEY` or JVM `crafter.openai.apiKey` / `OPENAI_API_KEY` is set, those win and **`<openAiApiKey>` is ignored**. The widget value is used only when no server-side key is configured.

The REST body may also include `openAiApiKey` (same precedence); the React widget sends it when parsed from configuration.

## Example (Preview Toolbar widget)

See `craftercms-plugin.yaml` under `installation` → `configuration` → `agents` → `agent`:

```xml
<agent>
  <crafterQAgentId>YOUR_CRAFTERQ_AGENT_UUID</crafterQAgentId>
  <label>CrafterQ content</label>
  <llm>crafterQ</llm>
</agent>
<agent>
  <crafterQAgentId>ANOTHER_AGENT_UUID</crafterQAgentId>
  <label>OpenAI tools</label>
  <llm>openAI</llm>
  <llmModel>gpt-4o</llmModel>
  <imageModel>dall-e-3</imageModel>
</agent>
```

### Optional: per-agent expert skills (markdown RAG, OpenAI + tools)

Inside an `<agent>` that uses `<llm>openAI</llm>`, add one or more **`<expertSkill>`** children. Each row points to a **public `http(s)` URL** whose response body is treated as **UTF-8 markdown**. On first use, Studio **fetches** that URL (same SSRF rules as **`FetchHttpUrl`**), **chunks** the text, **embeds** it with Spring AI (**`text-embedding-3-small`** by default), and stores vectors in a **per-skill in-memory `SimpleVectorStore`**. The model gets a system appendix with **`skillId`** (stable hash from the URL) and may call **`QueryExpertGuidance`** (`skillId`, `query`, optional `topK`).

```xml
<agent>
  <crafterQAgentId>ANOTHER_AGENT_UUID</crafterQAgentId>
  <label>OpenAI with playbook</label>
  <llm>openAI</llm>
  <expertSkill
    name="Crafterizing skill"
    url="https://example.com/my-team-crafterizing-skill.md"
    description="Use for full HTML-template-to-CrafterCMS migrations and content modeling."
  />
</agent>
```

Element form is also supported: `<expertSkill><name>…</name><url>…</url><description>…</description></expertSkill>`.

**JVM tuning (optional):** `crafterq.expertSkill.embeddingModel`, `crafterq.expertSkill.maxSkills` (default 12), `crafterq.expertSkill.maxChunks`, `crafterq.expertSkill.maxChunkChars`.

## Chat widget: stream completion

The Studio React client stops reading the SSE body as soon as it sees **`metadata.completed: true`** or **`metadata.error: true`**, then **`cancel()`s** the fetch reader. That avoids waiting for the HTTP connection to close (some servlet/async stacks keep it open), which previously surfaced as **“Timed out waiting for chat response”** after 65s. The safety timeout is now **5 minutes** for long tool runs.

**Server-side (OpenAI + Spring AI flux / OpenAI native tool loop):** `AiOrchestration` waits up to **5 minutes** by default (`CHAT_FLUX_AWAIT_MS`, same order of magnitude as the chat widget’s 5m safety timeout; override JVM `crafterq.chatFluxAwaitMs` in the range **120_000–600_000**) for the `chatResponse()` flux to complete or error, or for the OpenAI **RestClient** multi-round tool `Future` to finish—then **disposes** / **cancels** so the outbound HTTP call is torn down (OpenAI may see a **client disconnect**). Each **sync** `POST /v1/chat/completions` uses `SimpleClientHttpRequestFactory` with read timeout **`CHAT_FLUX_AWAIT_MS` + 30s** by default (override `crafterq.openai.restReadTimeoutMs`, **60_000–900_000**) so JDK **Read timed out** does not fire before that outer budget. On timeout it sends an **SSE error** so authors see a reason in chat. **HTTP visibility:** on the first chat request that hits `AiOrchestration` in a Studio JVM, the plugin calls **Log4j2** `Configurator.setLevel(..., DEBUG)` (via reflection) for `org.springframework.ai`, `org.springframework.ai.openai`, `org.springframework.ai.chat.client`, `org.springframework.web.reactive.function.client`, `org.springframework.http.codec`, and `reactor.netty.http.client`, so OpenAI/WebClient traffic appears in Studio logs. Crafter Studio uses **Log4j2**, not Logback — Logback APIs must not be referenced from plugin Groovy. Logs: first SSE chunk, `onComplete`, `onError`, and a **WARN** if the await times out.

### Author-visible progress (OpenAI + tools)

- **Prompts** (`ToolPrompts.OPENAI_AUTHORING_INSTRUCTIONS` + `[TOOL-GUARD]` + optional user prefix): the model must stream a **## Plan** heading and numbered steps **before** the first tool call, follow that plan, **re-post the same checklist after each tool** with **✅** / **❌** / **⚠️** / **⬜** (pending — not the hourglass emoji, to avoid mimicking server logs), and prefix **🛠️** when narrating tool use in its own words (use **🤓** when narrating **QueryExpertGuidance**, **GetCrafterizingPlaybook**, or **ConsultCrafterQExpert**). It must **not** fabricate server-style tool-progress lines; real progress is SSE-injected. The closing message repeats the checklist with the same markers.
- **OpenAI + tools (RestClient loop):** the model emits **`## Plan`** and **`tool_calls` in the same** `stream:false` **chat.completions** round when the API allows; the plan text is **streamed to the client** (SSE) **before** server-executed tools run. There is **no separate author “approve plan” step** in Studio — the gate only **withholds tools** briefly if the plan is empty/meta, then retries with a nudge (see `ToolPrompts` / `AiOrchestration`).
- **Server SSE:** while tools run, **`AiOrchestration`** injects SSE chunks with **`metadata.status: "tool-progress"`** and **`metadata.phase`**. Each injected line starts with **🛠️** plus a category emoji: **🔍** read tools, **✏️** write/revert/publish and `update_*` / **GenerateImage**, **📈** **analyze_template** (and **ConsultCrafterQExpert** uses **📈** after **🤓**), **🔄** other tools. **Expert** tools **QueryExpertGuidance**, **GetCrafterizingPlaybook**, and **ConsultCrafterQExpert** use **🛠️🤓** before the category (e.g. `start` → `🛠️🤓🔍 **QueryExpertGuidance** …`, `🛠️🤓📈 **ConsultCrafterQExpert** …`). Other tools stay `🛠️` + category only (e.g. `🛠️🔍 **GetContent** …`). The generic “tools working” hint uses **🛠️🔄**. The chat UI appends **`text`** like normal stream tokens.

## SSE stream errors (OpenAI tool failures)

If a tool throws mid-stream (e.g. Spring AI `MessageAggregator` / `UndeclaredThrowableException`), the plugin **does not** switch the HTTP response to JSON — that caused `AsyncRequestNotUsableException` when the body was already `text/event-stream`. Instead, **`AiOrchestration`** emits a final SSE frame with `metadata.error: true`, `metadata.message`, and `metadata.completed: true`. The React chat app surfaces that as **Stream error** in the assistant bubble.

## REST body (advanced)

`POST` … `/ai/stream` and `/ai/agent/chat` accept:

- `llm`: `crafterQ` | `openAI` (optional; default `crafterQ`)
- `llmModel`: optional string
- `imageModel`: optional string — OpenAI Images model for **GenerateImage**; must be set on the agent and/or this body field when the model should call **GenerateImage** (no server default).
- `openAiApiKey`: optional string — **testing only**; ignored when server env/JVM key is set
- `contentPath`: optional repository path of the item open in Studio preview (e.g. `/site/website/about/index.xml`). When set, the server appends **Studio authoring context** to the user prompt so the model treats phrases like “this page”, “my page”, or “update my content” (with no path) as that item.
- `contentTypeId`: optional preview content type (e.g. `/page/home`); included in that context when present.
- `expertSkills`: optional JSON array of `{ "name", "url", "description" }` — same semantics as ui.xml **`<expertSkill>`**; server normalizes URLs and registers **`QueryExpertGuidance`** when non-empty and tools are on.

The React widget sends `llm` / model / key from the selected agent config and sends `contentPath` / `contentTypeId` from the current preview item when available. When the agent defines expert skills, the widget also sends **`expertSkills`** on stream/chat POST.

## Crafterizing playbook tool

OpenAI tool mode registers **`GetCrafterizingPlaybook`**, which returns markdown from an **editable file** shipped with the plugin classes:

- **Path in repo:** `authoring/scripts/classes/plugins/org/craftercms/aiassistant/CrafterizingPlaybook.md`
- **Typical path in a site sandbox** (after `scripts/install-plugin.sh` copy): `config/studio/scripts/classes/plugins/org/craftercms/aiassistant/CrafterizingPlaybook.md`

Edit that file to change phases, checklists, and team conventions without changing Groovy.

**Override (optional):** JVM system property **`crafterq.crafterizingPlaybook.path`** = absolute path to a markdown file (takes precedence over the bundled file).

If the file is missing at runtime, the tool still returns a short embedded fallback and sets `loadedFromEditableFile: false` in the JSON result.

## Troubleshooting: OpenAI `400 Bad Request` on `/v1/chat/completions`

Often caused by **invalid tool `parameters` JSON Schema**. This plugin registers Spring AI `FunctionToolCallback` tools with explicit `inputSchema` strings so OpenAI accepts the request. If you still see 400, check Studio logs for a line **`OpenAI chat.completions error response body:`** — it includes OpenAI’s JSON error (`error.message`, `param`, etc.).

### Tool / edit prompts: `JsonEOFException` or empty JSON from OpenAI

If you see **`Unexpected end-of-input`** while parsing `ChatCompletion` during **edit / write / create** style prompts, that was typically caused by a **blocking** `ChatClient.call()` tool path on a worker thread. The plugin uses the **SSE `chatResponse` flux** for all OpenAI tool chats (including those prompts) so Spring AI can finish the full tool loop. `extractContentFromCallResult` also prefers **`chatResponse()`** over **`content()`** for non-streaming fallbacks.

### `ListPagesAndComponents` / `java.net.ConnectException: Connection refused` (OpenSearch)

**This is not an OpenAI or Spring AI failure.** The model successfully requested the tool; the failure happens when Studio calls **`authoringSearchService`** → OpenSearch (same stack Studio uses for search in the UI).

- **Fix (ops):** Ensure the **authoring OpenSearch** service is running and reachable from the Studio JVM (Docker Compose / Kubernetes / local install — match your Crafter distribution docs). Until search is up, **`GetContent` / `WriteContent` / `GetContentTypeFormDefinition`** still work when you pass a real **`siteId`** and repository **`path`**.
- **Plugin behavior:** If OpenSearch is down, `ListPagesAndComponents` returns a JSON tool result with **`error: true`** and a short message instead of throwing, so the chat stream can continue and the model can fall back to paths the user provides.
- **`siteId`:** The widget and REST body should send the **actual Studio site id** (e.g. `ebay-ai` for this repo’s default test site). If the model passes `default`, the server substitutes the request’s `siteId` when present (`crafterq.siteId` attribute / query / body).

### `WriteContent` returns `ok: false` / “no commit” (Studio did not save)

Crafter’s `writeContentAndNotify` only succeeds when the sandbox creates a **new git commit**. If the body you send is **identical** to the file already in the repo, the commit id is empty and the plugin returns **`ok: false`** with `skippedReason: no_commit` — this is **not** a Spring/stream exception anymore; the model should read the hint, call **GetContent** for that path, and only write when there is a real diff.

### 404 on `/static/...` in preview

Engine serves static files from **`/static-assets/`**. Templates that use `/static/images/...` will not resolve. Prefer **`/static-assets/images/...`**, existing repo paths, or CSS-only backgrounds until assets exist.

### “No error” but content did not change in Studio

`update_content`, `update_template`, and `update_content_type` only **fetch** current text and return guidance. **Nothing is persisted** until the model calls **`WriteContent`** with the full updated XML/FTL. If the assistant stops after `update_content`, the repo is unchanged by design.

The plugin sends preparatory tool results as **JSON** (including `nextStep` and `instructions`) so the model sees that a **`WriteContent`** call is required; `GetContent` alone is still shortened to raw XML for token savings.

### `WriteContent` / `IllegalStateException` (contentService)

CMS tools call Studio **in-process** (`cstudioContentService`, configuration beans, etc.). There is **no HTTP fallback** to Studio REST. If write/read fails, check Studio logs for the wrapped exception and ensure the plugin runs in the **authoring** web app with a full Spring context.

### `PermissionException` / `SubjectNotFoundException: Current subject was not found`

OpenAI streaming runs tool callbacks on **Reactor / HTTP client worker threads**, where Spring Security’s **`SecurityContextHolder` is empty** by default. Studio’s `ContentService.writeContent` (and similar) use **`@HasPermission`**, which resolves the current user from that holder — so writes fail with **subject not found** unless the request’s security context is restored on the worker thread.

The plugin **captures** `SecurityContextHolder.getContext()` on the **Studio servlet thread** when building the Spring AI client (`AiOrchestration.buildSpringAiChatClient`) and passes a **copy** into `StudioToolOperations`, which calls `SecurityContextHolder.setContext(...)` around tool I/O (`writeContent`, `getContent`, `DeploymentService.deploy`, v1 `revertContentItem`, OpenSearch-backed listing, etc.). `@HasPermission` checks use that context.

- If you still see this error, confirm the chat/stream REST call is authenticated as a **Studio user** with **write** permission on the path (not an anonymous session with no `Authentication`).
- Custom entry points that construct `StudioToolOperations` without going through `AiOrchestration` must pass the same **security context copy** (4th argument) or tools will log a one-time warning and may fail on worker threads. Optional **5th** = CrafterQ `agentId` for **`ConsultCrafterQExpert`**; **6th** = max consult prompt chars (same as **`crafterq.maxPromptChars`**).

## Studio AI assistant — autonomous (scheduled steps)

The **Tools Panel** widget **`craftercms.components.aiassistant.AutonomousAssistants`** (**Studio AI assistant — autonomous**) uses **`autonomousAgents`** / **`agent`** rows with **`llm`**, **`llmModel`**, optional **`openAiApiKey`**, optional **`startAutomatically`** (default **true**; when **false**, sync registers the agent as **stopped** until **Start** in the widget), optional **`stopOnFailure`** (default **true**; when **false**, a failed run records **`lastError`** and schedules a retry instead of **`error`** status), and optional **`expertSkills`** (same JSON shape as Helper **`<expertSkill>`** for **QueryExpertGuidance**). Each OpenAI autonomous step uses the **same authoring system stack** as **`/ai/stream`** (full **`ToolPrompts`**, optional plugin RAG, site-id lines, expert appendix when skills are present, plan machine instructions), then the agent’s per-step JSON contract. **Key precedence** matches Helper **`openAI`** agents: **`OPENAI_API_KEY`** / JVM **`crafter.openai.apiKey`** win; per-agent **`<openAiApiKey>`** is only used when no server-side key is set.

That feature runs **OpenAI** with the same **native `tools[]` catalog** as interactive chat (Spring AI tool loop on the server), then a **final JSON-only** reply per the worker contract. For prose or transforms **without** other CMS tools in the inner pass, the model calls the **`GenerateTextNoTools`** tool (one-shot completion inside a tool result). Schedules, REST (`sync` / `status` / `control`), and **human tasks** are specified in **[SPEC.md](SPEC.md)** (§ *Autonomous assistants widget (Tools Panel)*).

## Future

**CrafterQ as a tool** (RAG/content ideas) alongside OpenAI as orchestrator is planned next; this document will be extended.
