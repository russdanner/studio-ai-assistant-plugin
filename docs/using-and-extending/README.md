# Using the AI Assistant & developing extensions

Configure or extend the plugin **without** changing core sources unless you are developing the plugin itself. **Plain-language product requirements** (mandatory “must” statements—not technical contracts): **[`product-requirements.md`](product-requirements.md)**. **Official requirements & mechanics** for implementers: **[`../internals/spec.md`](../internals/spec.md)** (with **[`studio-plugins-guide.md`](studio-plugins-guide.md)** for build invariants).

## Guides (table)

| Document | What it covers |
|----------|----------------|
| [product-requirements.md](product-requirements.md) | **Product / review** — what the plugin **must** deliver for authors, admins, and integrators in everyday language (points to **`spec.md`** for engineering detail) |
| [configuration-guide.md](configuration-guide.md) | **Operators — start here** — **Basic:** `ui.xml`, plugin id, agents, keys, TinyMCE, form, autonomous checklist (§1–§8). **Advanced:** [site scripts](configuration-guide.md#cg-adv) — prompts, `tools.json`, MCP, user tools, script LLM. |
| [installation.md](installation.md) | Install from Studio UI, CLI, Marketplace API, **`install-plugin.sh`**, build-before-install |
| [tinymce-integration.md](tinymce-integration.md) | TinyMCE **`tinymceOptions`**, toolbar ids, **`craftercms_aiassistant`** config |
| [helper-widget.md](helper-widget.md) | Helper **`ui.xml`** snippet and “component not found” checklist |
| [autonomous-assistants-widget.md](autonomous-assistants-widget.md) | Optional autonomous widget — placement and links to spec |
| [llm-configuration.md](llm-configuration.md) | **`<llm>`** — **OpenAI-wire / Claude / `script:` first**; env + `ui.xml`; optional hosted-only adapter; **`script:{id}`** |
| [studio-aiassistant-jvm-parameters.md](studio-aiassistant-jvm-parameters.md) | **JVM-only** `-D` / `System.getProperty` tuning (timeouts, fetch/MCP caps, key fallbacks) |
| [image-generation.md](image-generation.md) | **Pluggable `GenerateImage`** — wire vs **`script:{id}`**, **`imageGenerator`** / **`imageModel`**, site overrides |
| [scripted-tools-and-imagegen.md](scripted-tools-and-imagegen.md) | **Integrators** — **`InvokeSiteUserTool`** + **`imagegen/{id}/generate.groovy`**: bindings, contracts, examples, checklists |
| [studio-plugins-guide.md](studio-plugins-guide.md) | Descriptor, paths, Rollup, auth; **`user-tools/`**; **`imagegen/`**; **`tools.json`**; **`prompts/`**; script LLM paths |

## Internals

Contracts, streaming design, and server behavior: **[`docs/internals/`](../internals/README.md)**.
