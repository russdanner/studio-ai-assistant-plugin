# Using the AI Assistant & developing extensions

Configure or extend the plugin **without** changing core sources unless you are developing the plugin itself.

## Guides (table)

| Document | What it covers |
|----------|----------------|
| [configuration-guide.md](configuration-guide.md) | **Operators — start here** — `ui.xml`, plugin id, agents, keys, TinyMCE vs Helper vs form vs autonomous |
| [installation.md](installation.md) | Install from Studio UI, CLI, Marketplace API, **`install-plugin.sh`**, build-before-install |
| [tinymce-integration.md](tinymce-integration.md) | TinyMCE **`tinymceOptions`**, toolbar ids, **`craftercms_aiassistant`** config |
| [helper-widget.md](helper-widget.md) | Helper **`ui.xml`** snippet and “component not found” checklist |
| [autonomous-assistants-widget.md](autonomous-assistants-widget.md) | Optional autonomous widget — placement and links to spec |
| [llm-configuration.md](llm-configuration.md) | **`<llm>`** ids, env + `ui.xml`, **`script:{id}`**, behavior by provider |
| [studio-aiassistant-jvm-parameters.md](studio-aiassistant-jvm-parameters.md) | **JVM-only** `-D` / `System.getProperty` tuning (timeouts, fetch/MCP caps, key fallbacks) |
| [image-generation.md](image-generation.md) | **Pluggable `GenerateImage`** — wire vs **`script:{id}`**, **`imageGenerator`** / **`imageModel`**, site overrides |
| [studio-plugins-guide.md](studio-plugins-guide.md) | Descriptor, paths, Rollup, auth; **`user-tools/`**; **`imagegen/`**; **`tools.json`**; **`prompts/`**; script LLM paths |

## Internals

Contracts, streaming design, and server behavior: **[`docs/internals/`](../internals/README.md)**.
