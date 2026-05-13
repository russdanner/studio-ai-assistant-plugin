## AI Assistant for Crafter Studio

This repository contains a Crafter Studio plugin that delivers the **Studio AI assistant** in authoring (TinyMCE/RTE and Studio UI), with **OpenAI** (tools) as the primary orchestrator and an optional **CrafterQ**-hosted RAG chat path per agent when `llm` is set to `crafterQ`.

**Developers:** For a detailed guide on building and installing Crafter Studio plugins (plugin ID, paths, ui.xml, auth, Rollup, and troubleshooting 404s), see [docs/DEVELOPERS_GUIDE_CRAFTER_STUDIO_PLUGINS.md](docs/DEVELOPERS_GUIDE_CRAFTER_STUDIO_PLUGINS.md). It can be used as a reference when creating or debugging plugins.

**Cursor / AI:** In-repo rules and the project skill are indexed in [docs/CURSOR_PROJECT_POLICY.md](docs/CURSOR_PROJECT_POLICY.md). Update that file whenever you add or change `.cursor/rules/` or `.cursor/skills/`.

**Upgrading from older “CrafterQ”–branded builds:** the Studio plugin id is now `org.craftercms.aiassistant.studio`, static assets use `type=aiassistant` and `…/studio/aiassistant/…`, the form control registration name is `ai-assistant`, the image datasource type is `aiassistant-img-from-url`, TinyMCE uses the external plugin key `craftercms_aiassistant` and bundle `craftercms_aiassistant.js`, and optional RAG index path is `/config/studio/plugins/org/craftercms/aiassistant/aiassistant-plugin-rag-index.json`. Update `ui.xml`, content types, and RTE config accordingly; keep `llm: crafterQ` in agent XML only if you still use the hosted expert API.

**Server logging:** Prompt/tool HTTP payload previews, OpenAI wire approximations, and similar diagnostics use **DEBUG** on the plugin loggers (e.g. `plugins.org.craftercms.aiassistant.orchestration.AiOrchestration`). Spring AI / WebClient / Reactor Netty HTTP verbosity is **off** unless the Studio JVM is started with **`-Dcrafterq.springAiHttpDebug=true`**.

## Installation

Install the plugin via Crafter Studio's Plugin Management UI under "Project Tools" > "Plugin Management" > "Search & install".

**Maintainer / default local test site:** `new-demo` (sandbox example: `/home/russdanner/crafter-installs/4-4-xE/crafter-authoring/data/repos/sites/new-demo/sandbox`; alternate **`qtest`**: `/home/russdanner/crafter-installs/4-4-xE/crafter-authoring/data/repos/sites/qtest/sandbox`). Preview example: `http://localhost:8080/studio/preview#/?page=%2F&site=new-demo`. From repo root, after `CRAFTER_DATA` and `CRAFTER_STUDIO_TOKEN` are set, run `./scripts/install-plugin.sh` with no arguments to install into that site (override with `./scripts/install-plugin.sh qtest` for another site id).

If you're contributing and want to install from local sources, you can install the plugin
using the [CrafterCMS CLI](https://docs.craftercms.org/en/4.1/by-role/common/crafter-cli.html), or using the `/studio/api/2/marketplace/copy` [API](https://docs.craftercms.org/en/4.1/_static/api/studio.html#tag/marketplace/operation/installPlugin) in Postman or similar.
Either way, you can use the following _JSON_ body (example site id **`new-demo`** — substitute your site id or use **`qtest`** etc.):

```json
{
  "siteId": "new-demo",
  "path": "/Users/your/path/to/this/repo/plugin-studio-crafterq"
}
```

* To install with the CLI:

```bash
./crafter-cli copy-plugin -e local -s new-demo --path /Users/your/path/to/this/repo/plugin-studio-crafterq
```

* To install with the API `/studio/api/2/marketplace/copy`:

```bash
curl --location --request POST 'http://localhost:8080/studio/api/2/marketplace/copy' \
--header 'Authorization: Bearer YOUR_JWT_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
  "siteId": "new-demo",
  "path": "/Users/your/path/to/this/repo/plugin-studio-crafterq"
}'
```

Replace `new-demo` with your Studio site id when different. Example sandbox for **`new-demo`** on this maintainer’s machine: `/home/russdanner/crafter-installs/4-4-xE/crafter-authoring/data/repos/sites/new-demo/sandbox`.

## Usage

### Adding to your RTE (TinyMCE)

On your `ui.xml`, find the widget id "craftercms.components.TinyMCE". Inside of it, you'll find the `tinymceOptions`.

```xml
<widget id="craftercms.components.TinyMCE">
	<configuration>
		<setups>
			<setup id="generic">
				<tinymceOptions>
```

Merge the JSON below with your `tinymceOptions`:

**Notice** you must replace `YOUR_SITE_ID` with your actual site id (e.g. `new-demo` or `qtest`).

```json
{
  ...
  "toolbar1": "... | aiAssistantOpen crafterqshortcuts crafterq",
  ...
  "external_plugins": {
    ...
    "craftercms_aiassistant": "/studio/1/plugin/file?siteId=YOUR_SITE_ID&amp;pluginId=org.craftercms.aiassistant.studio&amp;type=aiassistant&amp;name=tinymce&amp;file=craftercms_aiassistant.js"
  },
  "craftercms_aiassistant": {
    ...config options for the plugin
  }
}
```

The plugin exports certain TinyMCE buttons that you can use in your editor toolbar(s). You don't need to use all of them,
choose the one that suits you best.

#### `aiAssistantOpen`

A simple button that opens the AI Assistant for a free-form authoring chat experience.

(Legacy toolbar id `CrafterQdialog` was removed; update `tinymce` toolbar strings if you still reference it.)

#### `crafterqshortcuts`

A button that provides a list of shortcuts.

Shortcuts are configured via the TinyMCE plugin config key `craftercms_aiassistant`.

The `crafterqshortcuts` and `crafterq` toolbar buttons are configured by the same `shortcuts` property.

#### `crafterq`

A split button that provides both a list of shortcuts and direct access to free-form chat.

### Configuration

To configure the behavior of the AI Assistant for TinyMCE, add a `craftercms_aiassistant` property to your `tinymceOptions` (as described above).

Tooltip strings: **`strings.openAiAssistant`** and **`strings.aiAssistantShortcuts`**. Custom open / shortcut handlers: **`onOpenAiAssistant`** and **`onShortcutClick`** (if either is omitted, the plugin supplies defaults). For older configs, **`strings.crafterqDialog`**, **`strings.crafterqShortcuts`**, and **`oncrafterqDialog`** are still accepted as aliases.

### Helper widget

The Helper widget can be embedded in Studio UI to open the **Studio AI assistant** on demand (agents may use **CrafterQ** or **OpenAI** per `llm`).

Example snippet (adjust location to your needs). The **`plugin id` must be the full descriptor id** (`org.craftercms.aiassistant.studio`); a shortened id loads the wrong path and you get **“Component craftercms.components.aiassistant.Helper not found”** in Studio.

```xml
<widget id="craftercms.components.ToolsPanel">
	<configuration>
		<widgets>
			<widget id="craftercms.components.aiassistant.Helper">
				<plugin id="org.craftercms.aiassistant.studio" type="aiassistant" name="components" file="index.js"/>
				<configuration ui="IconButton" />
			</widget>
		</widgets>
	</configuration>
</widget>
```

#### “Component craftercms.components.aiassistant.Helper not found”

Studio shows this when `ui.xml` references the Helper widget but the **components bundle** did not register (wrong path, missing install, or id mismatch).

1. **Correct `plugin` element** — Use `id="org.craftercms.aiassistant.studio"` (same as `craftercms-plugin.yaml` → `plugin.id` and `sources/index.tsx` `PluginDescriptor.id`). Check both **Tools Panel** and **Preview Toolbar** widgets if you customized `config/studio/ui.xml`.
2. **Install the plugin for this site** — From `sources/`: `yarn package`, then `./scripts/install-plugin.sh` (defaults to **`new-demo`**) or `./scripts/install-plugin.sh qtest` (or Marketplace install) so `authoring/static-assets/plugins/org/craftercms/aiassistant/studio/aiassistant/components/index.js` exists in the site sandbox.
3. **Hard refresh** Studio after deploy (cached `index.js`).

See [docs/SPEC.md](docs/SPEC.md) (plugin id / Helper wiring) and [docs/DEVELOPERS_GUIDE_CRAFTER_STUDIO_PLUGINS.md](docs/DEVELOPERS_GUIDE_CRAFTER_STUDIO_PLUGINS.md) (descriptor vs path). For a **current merged fragment** (Tools Panel + Preview Toolbar + Autonomous widget), copy from **[docs/examples/studio-ui-aiassistant-fragments.xml](docs/examples/studio-ui-aiassistant-fragments.xml)** or reinstall so **`craftercms-plugin.yaml`** installation rules re-apply.

### Studio AI assistant — autonomous (optional widget)

A second Studio widget (**`craftercms.components.aiassistant.AutonomousAssistants`**) can live in the **Tools Panel** next to the Helper. It runs **scheduled, in-memory** assistant steps for the **Studio AI assistant** (prototype): sync agents from `ui.xml`, start/stop a JVM supervisor, scheduled model steps, and **human tasks** (check off, dismiss, copy prompt). Same **`plugin`** element as the Helper (`id="org.craftercms.aiassistant.studio"`, `type="aiassistant"`, `name="components"`, `file="index.js"`).

If the widget **never appears** after install, your site’s `ui.xml` may have been merged with an older descriptor that used the wrong **`element`** shape for Tools Panel. Re-run **`./scripts/install-plugin.sh`** (or pass your site id, e.g. **`qtest`**) from an updated plugin clone, or add the **Autonomous** block from **[docs/examples/studio-ui-aiassistant-fragments.xml](docs/examples/studio-ui-aiassistant-fragments.xml)** under **`ToolsPanel` → `configuration` → `widgets`**, then **commit** the site sandbox and **sync** in Studio.

**Common pitfall:** `AutonomousAssistants` (and `Helper` for the left rail) must be **inside** `//widget[@id='craftercms.components.ToolsPanel']/configuration/widgets` as sibling `<widget>` rows. If either block sits **after** `</configuration>` as a direct child of `ToolsPanel`, Studio will not show it in the sidebar; the merge rule may also have updated that dead node only. Fix placement and use a real `<![CDATA[...]]>` SVG for `<icon>` (not HTML-escaped `&lt;svg` text), then commit.

Full **`autonomousAgents`** / **`agent`** fields, REST paths, **`control`** actions (including human-task actions), and limitations are documented in **[docs/SPEC.md](docs/SPEC.md)** under *Autonomous assistants widget (Tools Panel)*.

## Contributing

- Clone this repository.
- Run `yarn install` to install dependencies.
   - If everything is installed correctly, the `postinstall` script should have copied the TinyMCE directory to `public/tinymce`. If not, you can manually run `yarn postinstall` or `node postinstall.cjs`.
- Run `yarn start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.
- Run `yarn package` to create the CrafterCMS plugin build. See local installation instructions above for instructions on continually deploying and testing locally.
- If you change **`.cursor/rules/`** or **`.cursor/skills/`**, update **[docs/CURSOR_PROJECT_POLICY.md](docs/CURSOR_PROJECT_POLICY.md)** so documentation matches local Cursor policy.
- Fork and create a pull request to contribute.

## Questions

Got questions? Post a question on [CrafterCMS community Slack](https://craftercms.com/slack).
