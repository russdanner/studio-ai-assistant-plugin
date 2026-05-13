# Configuration guide — AI Assistant for Crafter Studio

**Audience:** Studio admins and site builders who need the assistant to **appear**, **authenticate**, and **behave** as intended—without reading the full implementation spec first.

**Related docs:** [llm-configuration.md](llm-configuration.md) for **`<llm>`** wire ids, env + XML, and tool availability by provider. [studio-plugins-guide.md](studio-plugins-guide.md) for install, build output paths, **`user-tools/`**, and script LLM layout. [spec.md](../internals/spec.md) for **`ui.xml`** and widget contracts, macros, form vs preview, and autonomous REST. Optional hosted SaaS HTTP (bearer, chat audit tools) is covered in [chat-and-tools-runtime.md](../internals/chat-and-tools-runtime.md) when you opt in on a tool-capable agent.

---

## 1. What you are configuring

| Goal | Typical touchpoints |
|------|---------------------|
| Authors use AI **in Experience Builder** while authoring in **preview** | `ui.xml` → **`craftercms.components.aiassistant.Helper`** registers the agent in the **Experience Builder** workflow (preview toolbar control opens the assistant in the XB tools panel by default) + `<agents>` |
| Authors use AI on a **content type form** | Content type **form definition** → **AI Assistant** control + `config/studio/ui.xml` **`<agents>`** (merged by stable agent id) |
| **Scheduled** server-side runs (experimental) | `ui.xml` → **`craftercms.components.aiassistant.AutonomousAssistants`** + `<autonomousAgents>` — see [spec.md — Autonomous assistants widget](../internals/spec.md#autonomous-assistants-widget-tools-panel) |
| Authors use AI from the **rich text editor** | `config/studio/ui.xml` → **TinyMCE** widget → `tinymceOptions` (external plugin URL + `craftercms_aiassistant` JSON) — details at the end of this guide (**§8**) and in [tinymce-integration.md](tinymce-integration.md) |

Commit **`config/studio/ui.xml`** (and any content-type changes) to the site sandbox so Studio and other authors load the same configuration.

### Where to put XML (file + parent elements)

| What | File on disk (site Git sandbox) | Where inside the file |
|------|-----------------------------------|------------------------|
| **Helper** (Experience Builder toolbar, optional Tools Panel) | **`config/studio/ui.xml`** | **A** (Preview toolbar) and/or **B** (Tools Panel) — the `<widget id="craftercms.components.aiassistant.Helper">` block is a **child of an existing `widgets` list**, not a loose sibling of `ToolsPanel`. |
| **Autonomous** (optional) | **`config/studio/ui.xml`** | **D** — under **`craftercms.components.ToolsPanel`** → **`configuration`** → **`widgets`** (same list as Helper when both are used). |
| **Form assistant** | **`config/studio/content-types/<your-type>/form-definition.xml`** | New **field** inside the right **`<section>`** / **`<fields>`** — prefer adding the **Studio AI Assistant** control from the Content Types UI after install (see **C**). |
| **TinyMCE** | **`config/studio/ui.xml`** | Under **`craftercms.components.TinyMCE`** → **`configuration`** → **`setups`** → **`setup`** → **`tinymceOptions`** (JSON). See **§8**. |

---

#### A) Experience Builder — Preview Toolbar

**Locate in `config/studio/ui.xml`:** the widget **`craftercms.components.PreviewToolbar`** → **`configuration`** → **`middleSection`** → **`widgets`**.

**Add** the block below as **another** `<widget>` sibling next to the other toolbar widgets (indentation may differ in your file):

```xml
        <!-- config/studio/ui.xml — PreviewToolbar / configuration / middleSection / widgets -->
        <widget id="craftercms.components.aiassistant.Helper">
          <plugin id="org.craftercms.aiassistant.studio" type="aiassistant" name="components" file="index.js"/>
          <configuration ui="IconButton">
            <agents>
              <agent>
                <label>Authoring Assistant</label>
                <llm>openAI</llm>
                <llmModel>gpt-4o-mini</llmModel>
                <imageModel>gpt-image-1-mini</imageModel>
              </agent>
            </agents>
          </configuration>
        </widget>
```

Longer copy-paste blocks (Tools Panel + Preview + Autonomous together): [examples/studio-ui-aiassistant-fragments.xml](../examples/studio-ui-aiassistant-fragments.xml).

---

#### B) Studio Tools Panel (left rail)

**Locate:** **`craftercms.components.ToolsPanel`** → **`configuration`** → **`widgets`**.

**Add** the Helper (and optionally **Autonomous**) as `<widget>` children **inside that `widgets` element** — not after `</configuration>` at the wrong level.

```xml
        <!-- config/studio/ui.xml — ToolsPanel / configuration / widgets -->
        <widget id="craftercms.components.aiassistant.Helper">
          <plugin id="org.craftercms.aiassistant.studio" type="aiassistant" name="components" file="index.js"/>
          <configuration>
            <agents>
              <agent>
                <label>Authoring Assistant</label>
                <llm>openAI</llm>
                <llmModel>gpt-4o-mini</llmModel>
              </agent>
            </agents>
          </configuration>
        </widget>
```

---

#### C) Content type form (AI Assistant field)

**Locate:** `config/studio/content-types/<content-type-id>/form-definition.xml` — inside the **`<fields>`** collection for the section where you want the accordion.

**Recommended:** In Studio, **Project Tools → Content Types →** open the type → **Add field** → choose **Studio AI Assistant** from the palette (the plugin registers that control in **`config/studio/administration/site-config-tools.xml`** on install). That writes the correct control wiring; hand-editing is easy to get wrong.

Agent rows still come from **`config/studio/ui.xml`** **`<agents>`** (same stable ids as the Helper). Do not define agents only in the form field.

---

#### D) Autonomous assistants (Tools Panel only)

**Locate:** same parent as **B** — **`craftercms.components.ToolsPanel`** → **`configuration`** → **`widgets`**.

**Add** a **second** widget sibling (after or before Helper). Minimal shape:

```xml
        <!-- config/studio/ui.xml — ToolsPanel / configuration / widgets -->
        <widget id="craftercms.components.aiassistant.AutonomousAssistants">
          <plugin id="org.craftercms.aiassistant.studio" type="aiassistant" name="components" file="index.js"/>
          <configuration>
            <title>Autonomous Agents</title>
            <autonomousAgents>
              <agent>
                <name>Example agent</name>
                <schedule>0 * * * * ?</schedule>
                <prompt>You are an autonomous assistant. Reply with JSON only as instructed by the server.</prompt>
                <scope>project</scope>
                <llm>openAI</llm>
                <llmModel>gpt-4o-mini</llmModel>
              </agent>
            </autonomousAgents>
          </configuration>
        </widget>
```

Full sample (including optional SVG icon): [examples/studio-ui-aiassistant-fragments.xml](../examples/studio-ui-aiassistant-fragments.xml).

---

## 2. Helper, Autonomous, and toolbar widgets: `plugin` element

Studio resolves the **JavaScript bundle** from the **`plugin`** child on each widget that mounts this plugin (Helper, AutonomousAssistants, and any **Experience Builder preview toolbar** entry that uses the same pattern). Use the same values everywhere so Studio loads **`index.js`** from the installed plugin.

| Attribute / concept | Use this value |
|------------------------|----------------|
| **`id`** (plugin id) | `org.craftercms.aiassistant.studio` — must match **`craftercms-plugin.yaml`** and the plugin’s internal **`PluginDescriptor.id`**. |
| **`type`** | `aiassistant` |
| **`name`** | `components` |
| **`file`** | `index.js` |

Example **`plugin`** line (use **inside** every Helper / Autonomous / toolbar widget — see **§1** for parent paths):

```xml
<plugin id="org.craftercms.aiassistant.studio" type="aiassistant" name="components" file="index.js"/>
```

Full **Experience Builder + Tools Panel + Autonomous** examples: [examples/studio-ui-aiassistant-fragments.xml](../examples/studio-ui-aiassistant-fragments.xml).

If the id or `file` path is wrong, Studio shows **component not found** or **404** on `index.js`. Install path, classpath, and toolbar wiring are covered in [studio-plugins-guide.md](studio-plugins-guide.md); widget XML contract in [spec.md § Helper widget](../internals/spec.md#helper-widget-studio-ui).

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

**Example — multiple `<agent>` rows** (replace or extend the **`<agents>`** block **inside** the Helper `<configuration>` from **§1**; each `<agent>` is one picker row):

```xml
            <agents>
              <agent>
                <label>OpenAI authoring</label>
                <llm>openAI</llm>
                <llmModel>gpt-4o-mini</llmModel>
                <imageModel>gpt-image-1-mini</imageModel>
              </agent>
              <agent>
                <label>Claude</label>
                <llm>claude</llm>
                <llmModel>claude-3-5-sonnet-20241022</llmModel>
              </agent>
            </agents>
```

---

## 4. Secrets and API keys (recommended order)

1. **Studio host environment variables** — Preferred for production API keys and base URLs. Provider names and variables are listed in [llm-configuration.md](llm-configuration.md).
2. **Per‑agent `ui.xml` / widget JSON** — e.g. `<openAiApiKey>`: **testing only**; discouraged in Git‑tracked sites. Precedence vs host env is described in [chat-and-tools-runtime.md § OpenAI API key](../internals/chat-and-tools-runtime.md#openai-api-key-server-side).
3. **JVM system properties** — Advanced tuning and key fallbacks only; see **[studio-aiassistant-jvm-parameters.md](studio-aiassistant-jvm-parameters.md)** (not alternatives to `ui.xml` fields for normal operators).

**Optional — hosted SaaS HTTP** — If authors use hosted SaaS in the widget (`X-CrafterQ-Chat-User`) and/or you configure **`crafterQBearerTokenEnv`** / **`crafterQBearerToken`** for server‑to‑SaaS `Authorization`, see [chat-and-tools-runtime.md](../internals/chat-and-tools-runtime.md) when debugging 401s on list/get chat tools.

---

## 5. Form Engine control

The AI Assistant **form control** reads agent definitions from the same **`/ui.xml`** agent collection as the Helper (by stable id). Changing only the Helper widget JSON in Studio UI without updating **`/config/studio/ui.xml`** can leave the form panel out of sync—see the form pipeline notes in [studio-plugins-guide.md](studio-plugins-guide.md) and the frozen rules in `.cursor/rules/crafterq-form-panel-contract.mdc` (repo root).

---

## 6. Autonomous assistants (optional)

Separate widget, separate XML block **`autonomousAgents`**, supervisor and in‑memory state. Not a substitute for interactive chat configuration: you still define **`llm`**, **`llmModel`**, schedules, scopes, and human‑task behavior per [spec.md — Autonomous assistants widget](../internals/spec.md#autonomous-assistants-widget-tools-panel).

---

## 7. Checklist before opening a support thread

- [ ] Plugin installed for the **site** (Marketplace or `copy-plugin` / `install-plugin.sh`); **`org.craftercms.aiassistant.studio`** appears in Plugin Management.
- [ ] **`ui.xml`** committed; Studio **Sync** performed if you rely on git‑backed sandbox.
- [ ] Helper / Autonomous / toolbar widgets are **nested under the correct parents** in **`config/studio/ui.xml`** (**§1** A / B / D), and the **`plugin`** line matches **§2**.
- [ ] For **OpenAI‑wire / Claude / …**: host **env** API keys set (per [llm-configuration.md](llm-configuration.md)), or you accept testing‑only keys in `ui.xml`.
- [ ] For **GenerateImage**: **`imageModel`** set on the agent (or body) when that tool is used.
- [ ] If you use **`llm` `crafterQ`**: valid **`crafterQAgentId`** and (if needed) identity / bearer as in [llm-configuration.md](llm-configuration.md).

---

## 8. TinyMCE (rich text editor)

**File:** **`config/studio/ui.xml`**

**Locate:** widget **`craftercms.components.TinyMCE`** → **`configuration`** → **`setups`** → **`setup`** (the setup your site uses) → **`tinymceOptions`**. That node holds JSON (often as text); merge the plugin URL and toolbar ids there.

Path in the tree (names may differ):

```text
config/studio/ui.xml
  └── widget[@id='craftercms.components.TinyMCE']
        └── configuration
              └── setups
                    └── setup
                          └── tinymceOptions   ← merge here (JSON)
```

**Example JSON** (replace **`YOUR_SITE_ID`**; use **`&amp;`** for `&` when this JSON is inlined inside an XML attribute):

```json
{
  "toolbar1": "... | aiAssistantOpen crafterqshortcuts crafterq",
  "external_plugins": {
    "craftercms_aiassistant": "/studio/1/plugin/file?siteId=YOUR_SITE_ID&pluginId=org.craftercms.aiassistant.studio&type=aiassistant&name=tinymce&file=craftercms_aiassistant.js"
  },
  "craftercms_aiassistant": {}
}
```

Full toolbar list and keys: [tinymce-integration.md](tinymce-integration.md).

---

## 9. Where to go next

| Topic | Document |
|-------|-----------|
| Full `<llm>` matrix, env + XML, tool availability | [llm-configuration.md](llm-configuration.md) |
| Build, install, classpath, `user-tools/`, script LLM | [studio-plugins-guide.md](studio-plugins-guide.md) |
| Macros, `omitTools`, ICE vs form engine, REST paths, human tasks | [spec.md](../internals/spec.md) |
| SSE / stream endpoint design | [stream-endpoint-design.md](../internals/stream-endpoint-design.md) |
| Doc map (internals vs using) | [README.md](../README.md) |
