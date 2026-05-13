# Configuration guide — AI Assistant for Crafter Studio

**Audience:** Studio admins and site builders who need the assistant to **appear**, **authenticate**, and **behave** as intended—without reading the full implementation spec first.

**Related docs:** [llm-configuration.md](llm-configuration.md) for **`<llm>`** wire ids, env + XML, and tool availability (OpenAI-wire / Claude first). [studio-plugins-guide.md](studio-plugins-guide.md) for install, build output paths, **`user-tools/`**, and script LLM layout. [spec.md](../internals/spec.md) for **`ui.xml`** and widget contracts, macros, form vs preview, and autonomous REST. Optional hosted SaaS HTTP (bearer, chat audit tools) is covered in [chat-and-tools-runtime.md](../internals/chat-and-tools-runtime.md) when you opt in on a tool-capable agent.

---

## 1. What you are configuring

| Goal | Typical touchpoints |
|------|---------------------|
| Authors use AI from the **rich text editor** | `config/studio/ui.xml` → **TinyMCE** widget → `tinymceOptions` (external plugin URL + `craftercms_aiassistant` JSON) |
| Authors use AI from **Studio chrome** (Tools Panel / preview toolbar) | `ui.xml` → **`craftercms.components.aiassistant.Helper`** widget + `<agents>` |
| Authors use AI on a **content type form** | Content type **form definition** → **AI Assistant** control + `config/studio/ui.xml` **`<agents>`** (merged by stable agent id) |
| **Scheduled** server-side runs (experimental) | `ui.xml` → **`craftercms.components.aiassistant.AutonomousAssistants`** + `<autonomousAgents>` — see [spec.md — Autonomous assistants widget](../internals/spec.md#autonomous-assistants-widget-tools-panel) |

Commit **`config/studio/ui.xml`** (and any content-type changes) to the site sandbox so Studio and other authors load the same configuration.

---

## 2. Non‑negotiables (plugin identity)

These must match or Studio will not load the bundle (“component not found”, 404 on `index.js`, etc.).

| Item | Value |
|------|--------|
| **Plugin id** | `org.craftercms.aiassistant.studio` (same as `craftercms-plugin.yaml` and the plugin’s `PluginDescriptor.id`) |
| **Static type** | `aiassistant` |
| **Components bundle** | `name="components"` `file="index.js"` on every **Helper**, **AutonomousAssistants**, and Preview Toolbar widget that mounts this plugin |

Copy‑paste‑safe **Tools Panel + Preview + Autonomous** fragment: [examples/studio-ui-aiassistant-fragments.xml](../examples/studio-ui-aiassistant-fragments.xml).

Full wiring and troubleshooting: [studio-plugins-guide.md](studio-plugins-guide.md) and [spec.md § Helper widget](../internals/spec.md#helper-widget-studio-ui).

---

## 3. Agents (`<agents>` / `<agent>`)

Each **agent** is one row in the Helper menu (or one accordion row on the form assistant). Per agent you normally set:

- **`label`** — Display name.
- **`llm`** — Backend for this agent’s chat. **Set `<llm>` explicitly** — for authoring with **GetContent** / **WriteContent** / **GenerateImage**, use **`openAI`**, **`xAI`**, **`deepSeek`**, **`llama`**, **`gemini`/`genesis`**, **`claude`**, or **`script:…`**. **`crafterQ`** is **hosted chat only** (no CMS tool loop on that adapter). If **`<llm>`** is omitted and the POST omits **`llm`**, the stream/chat request **400**s unless **`siteId`** + **`agentId`** allow the server to merge **`llm`** from **`/ui.xml`** — see [llm-configuration.md § Omitted `<llm>` and POST body](llm-configuration.md#omitted-llm-and-post-body). Allowed values: [llm-configuration.md § Summary table](llm-configuration.md#summary-table).
- **`llmModel`** — Provider chat model id (optional; when omitted, some providers use a server default — see **[llm-configuration.md](llm-configuration.md)** and JVM defaults in **[studio-aiassistant-jvm-parameters.md](studio-aiassistant-jvm-parameters.md)** only if you rely on non-XML defaults).
- **`imageModel`** — OpenAI **Images** model id for **`GenerateImage`** (no server fallback if blank). Use **`gpt-image-1`** or **`gpt-image-1-mini`**. See [llm-configuration.md](llm-configuration.md).
- **`crafterQAgentId`** — Hosted SaaS **agent UUID**; sent as `agentId` on stream/chat. **Required** only when **`llm` is `crafterQ`**. On **tool-capable** `llm` values, set it **only** if you want optional **hosted SaaS API tools** on that agent — see [chat-and-tools-runtime.md](../internals/chat-and-tools-runtime.md#crafterq-api-tools-openai-wire). Otherwise omit or leave empty per [spec.md](../internals/spec.md).
- **`prompts`** — Optional quick chips (`<prompt>` plain or structured with `<userText>` / `<additionalContext>` / `<omitTools>`).

Optional toggles (`openAsPopup`, `enableTools`, expert skills, translation concurrency, etc.) are documented field‑by‑field under [spec.md — Agent configuration (ui.xml)](../internals/spec.md#agent-configuration-uixml).

---

## 4. Secrets and API keys (recommended order)

1. **Studio host environment variables** — Preferred for production API keys and base URLs. Provider names and variables are listed in [llm-configuration.md](llm-configuration.md).
2. **Per‑agent `ui.xml` / widget JSON** — e.g. `<openAiApiKey>`: **testing only**; discouraged in Git‑tracked sites. Precedence vs host env is described in [chat-and-tools-runtime.md § OpenAI API key](../internals/chat-and-tools-runtime.md#openai-api-key-server-side).
3. **JVM system properties** — Advanced tuning and key fallbacks only; see **[studio-aiassistant-jvm-parameters.md](studio-aiassistant-jvm-parameters.md)** (not alternatives to `ui.xml` fields for normal operators).

**Optional — hosted SaaS HTTP** — If authors use hosted SaaS in the widget (`X-CrafterQ-Chat-User`) and/or you configure **`crafterQBearerTokenEnv`** / **`crafterQBearerToken`** for server‑to‑SaaS `Authorization`, see [chat-and-tools-runtime.md](../internals/chat-and-tools-runtime.md) when debugging 401s on list/get chat tools.

---

## 5. TinyMCE (RTE)

You must register the external plugin and toolbar buttons under the **TinyMCE** widget in `ui.xml`. The **`siteId`** in the plugin URL must be real.

Step‑by‑step and JSON shape: [tinymce-integration.md](tinymce-integration.md).

---

## 6. Form Engine control

The AI Assistant **form control** reads agent definitions from the same **`/ui.xml`** agent collection as the Helper (by stable id). Changing only the Helper widget JSON in Studio UI without updating **`/config/studio/ui.xml`** can leave the form panel out of sync—see the form pipeline notes in [studio-plugins-guide.md](studio-plugins-guide.md) and the frozen rules in `.cursor/rules/crafterq-form-panel-contract.mdc` (repo root).

---

## 7. Autonomous assistants (optional)

Separate widget, separate XML block **`autonomousAgents`**, supervisor and in‑memory state. Not a substitute for interactive chat configuration: you still define **`llm`**, **`llmModel`**, schedules, scopes, and human‑task behavior per [spec.md — Autonomous assistants widget](../internals/spec.md#autonomous-assistants-widget-tools-panel).

---

## 8. Checklist before opening a support thread

- [ ] Plugin installed for the **site** (Marketplace or `copy-plugin` / `install-plugin.sh`); **`org.craftercms.aiassistant.studio`** appears in Plugin Management.
- [ ] **`ui.xml`** committed; Studio **Sync** performed if you rely on git‑backed sandbox.
- [ ] Helper / Autonomous **`plugin`** element matches §2 above.
- [ ] For **OpenAI‑wire / Claude / …**: host **env** API keys set (per [llm-configuration.md](llm-configuration.md)), or you accept testing‑only keys in `ui.xml`.
- [ ] For **GenerateImage**: **`imageModel`** set on the agent (or body) when that tool is used.
- [ ] If you use **`llm` `crafterQ`**: valid **`crafterQAgentId`** and (if needed) identity / bearer as in [llm-configuration.md](llm-configuration.md).

---

## 9. Where to go next

| Topic | Document |
|-------|-----------|
| Full `<llm>` matrix, env + XML, tool availability | [llm-configuration.md](llm-configuration.md) |
| Build, install, classpath, `user-tools/`, script LLM | [studio-plugins-guide.md](studio-plugins-guide.md) |
| Macros, `omitTools`, ICE vs form engine, REST paths, human tasks | [spec.md](../internals/spec.md) |
| SSE / stream endpoint design | [stream-endpoint-design.md](../internals/stream-endpoint-design.md) |
| Doc map (internals vs using) | [README.md](../README.md) |
