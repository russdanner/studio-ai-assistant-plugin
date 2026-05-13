# Configuration guide — AI Assistant for Crafter Studio

**Audience:** Studio admins and site builders who need the assistant to **appear**, **authenticate**, and **behave** as intended—without reading the full implementation spec first.

**Related docs:** [llm-configuration.md](llm-configuration.md) for **`<llm>`** wire ids, API keys, CrafterQ headers, and tool availability by provider. [studio-plugins-guide.md](studio-plugins-guide.md) for install, build output paths, **`user-tools/`**, and script LLM layout. [spec.md](../internals/spec.md) for **`ui.xml`** and widget contracts, macros, form vs preview, and autonomous REST.

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

- **`crafterQAgentId`** — Hosted CrafterQ **agent UUID**; sent as `agentId` on stream/chat. Required for **`llm` `crafterQ`**. For purely OpenAI‑wire / Claude agents that never call CrafterQ APIs, it may be empty when your deployment allows it—see [spec.md](../internals/spec.md).
- **`label`** — Display name.
- **`llm`** — Backend for this agent’s chat. **Set `<llm>` explicitly** in `ui.xml`. If omitted, the client may omit `llm` from the POST and the server **normalizes** missing/blank/unknown values to **`crafterQ`**, which is hosted chat only and does not run the CMS tool loop. Allowed values and aliases: [llm-configuration.md § Summary table](llm-configuration.md#summary-table).
- **`llmModel`** — Provider chat model id (optional; JVM defaults apply when omitted for many providers).
- **`imageModel`** — OpenAI **Images** model id when you use **`GenerateImage`** (no server fallback if blank)—see [llm-configuration.md](llm-configuration.md).
- **`prompts`** — Optional quick chips (`<prompt>` plain or structured with `<userText>` / `<additionalContext>` / `<omitTools>`).

Optional toggles (`openAsPopup`, `enableTools`, expert skills, translation concurrency, etc.) are documented field‑by‑field under [spec.md — Agent configuration (ui.xml)](../internals/spec.md#agent-configuration-uixml).

---

## 4. Secrets and API keys (recommended order)

1. **Studio host / JVM** — Environment variables and `-D` system properties (preferred for production). Provider names and variables are listed in [llm-configuration.md](llm-configuration.md).
2. **Per‑agent `ui.xml` / widget JSON** — e.g. `<openAiApiKey>`: **testing only**; discouraged in Git‑tracked sites. Precedence vs env/JVM is described in [chat-and-tools-runtime.md § OpenAI API key](../internals/chat-and-tools-runtime.md#openai-api-key-server-side).
3. **CrafterQ hosted APIs** — Authors may authenticate in the widget (`X-CrafterQ-Chat-User`), and/or you configure **`crafterQBearerTokenEnv`** / **`crafterQBearerToken`** for server‑to‑CrafterQ `Authorization`. Read **identity / auth** in [llm-configuration.md](llm-configuration.md) before debugging 401s on `ListCrafterQAgentChats` / `GetCrafterQAgentChat`.

---

## 5. TinyMCE (RTE)

You must register the external plugin and toolbar buttons under the **TinyMCE** widget in `ui.xml`. The **`siteId`** in the plugin URL must be real.

Step‑by‑step and JSON shape: root [README.md](../../README.md) § **Adding to your RTE (TinyMCE)**.

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
- [ ] For **CrafterQ** `llm`: valid **`crafterQAgentId`** and (if using hosted chat tools) identity headers / bearer as in [llm-configuration.md](llm-configuration.md).
- [ ] For **OpenAI‑wire / Claude / …**: JVM or env API keys set, or you accept testing‑only keys in `ui.xml`.
- [ ] For **GenerateImage**: **`imageModel`** set on the agent (or body) when that tool is used.

---

## 9. Where to go next

| Topic | Document |
|-------|-----------|
| Full `<llm>` matrix, keys, CrafterQ bearer, tool availability | [llm-configuration.md](llm-configuration.md) |
| Build, install, classpath, `user-tools/`, script LLM | [studio-plugins-guide.md](studio-plugins-guide.md) |
| Macros, `omitTools`, ICE vs form engine, REST paths, human tasks | [spec.md](../internals/spec.md) |
| SSE / stream endpoint design | [stream-endpoint-design.md](../internals/stream-endpoint-design.md) |
| Doc map (internals vs using) | [README.md](../README.md) |
