# Documentation index

High-level map; deep dives live in linked files.

**Official specifications:** Product requirements & mechanics — **[`internals/spec.md`](internals/spec.md)**. Build & install invariants — **[`using-and-extending/studio-plugins-guide.md`](using-and-extending/studio-plugins-guide.md)** (together with **`spec.md`**, they define what “correct” implementation means). Keep them updated when behavior or packaging changes.

## By audience

| Audience | Start here |
|----------|------------|
| **Product / review** — mandatory outcomes in plain English (not setup steps) | [Product requirements](using-and-extending/product-requirements.md) |
| **Operators** — install, `ui.xml`, agents, keys, surfaces, optional **`studio-ui.json`** toggles | [Configuration guide](using-and-extending/configuration-guide.md) |
| **Integrators** — install paths, CLI/API, Helper, autonomous widget shell, **`user-tools/`**, **`imagegen/`** script contracts, optional TinyMCE | [Installation](using-and-extending/installation.md) · [Helper](using-and-extending/helper-widget.md) · [Autonomous widget](using-and-extending/autonomous-assistants-widget.md) · [Scripted tools & imagegen](using-and-extending/scripted-tools-and-imagegen.md) · [TinyMCE](using-and-extending/tinymce-integration.md) |
| **LLM & image backends** — wire ids, secrets, **`script:`** LLM, **pluggable `GenerateImage`** | [LLM configuration](using-and-extending/llm-configuration.md) · [Script LLM — BYO backend](using-and-extending/script-llm-bring-your-own-backend.md) · Cursor script sample: `docs/examples/aiassistant-llm/cursor-cloud-agent/runtime.groovy` · [Image generation](using-and-extending/image-generation.md) · JVM tuning: [studio-aiassistant-jvm-parameters.md](using-and-extending/studio-aiassistant-jvm-parameters.md) |
| **Extension developers** — Rollup, descriptor, classpath, sandbox script layout | [Studio plugins guide](using-and-extending/studio-plugins-guide.md) · [Using & extending index](using-and-extending/README.md) |
| **Maintainers** — **`spec.md`** (requirements & mechanics), streaming, tools runtime | [Internals](internals/README.md) |
| **Plugin repo contributors** — clone, `yarn package`, policy, spec | [CONTRIBUTING.md](../CONTRIBUTING.md) |

## Topic → document

| Topic | Document |
|-------|----------|
| Product requirements in plain English (not technical) | [product-requirements.md](using-and-extending/product-requirements.md) |
| Agents, keys, `ui.xml`, surfaces, **`studio-ui.json`** (toolbar/sidebar, XB augmentation, bulk form field) | [configuration-guide.md](using-and-extending/configuration-guide.md) |
| Product requirements, surfaces, `ui.xml` / stream / form contracts | [internals/spec.md](internals/spec.md) |
| Install / copy-plugin / `install-plugin.sh` | [installation.md](using-and-extending/installation.md) |
| Helper `ui.xml` & “component not found” | [helper-widget.md](using-and-extending/helper-widget.md) |
| Autonomous widget placement & overview | [autonomous-assistants-widget.md](using-and-extending/autonomous-assistants-widget.md) |
| Runtime UI flags, bulk form control, `studio-ui.json` | [configuration-guide.md §1e](using-and-extending/configuration-guide.md#cg-1e) · [spec.md — Studio UI flags](internals/spec.md#studio-ui-flags-studio-uijson) |
| **`imageGenerator`**, **`imagegen/`**, tool/prompt overrides | [image-generation.md](using-and-extending/image-generation.md) · [scripted-tools-and-imagegen.md](using-and-extending/scripted-tools-and-imagegen.md) |
| **`InvokeSiteUserTool`**, `user-tools/registry.json` | [scripted-tools-and-imagegen.md](using-and-extending/scripted-tools-and-imagegen.md) |
| REST/stream body, tools, CrafterQ auth | [chat-and-tools-runtime.md](internals/chat-and-tools-runtime.md) |
| MCP client (`mcpEnabled` + `mcpServers` in `tools.json`, Streamable HTTP) | [chat-and-tools-runtime.md](internals/chat-and-tools-runtime.md#mcp-client-tools-streamable-http) |
| Debug logging (loggers, Spring AI HTTP trace JVM flag) | [internals/README.md](internals/README.md#debug-logging) · JVM reference: [studio-aiassistant-jvm-parameters.md](using-and-extending/studio-aiassistant-jvm-parameters.md) |
| JVM / `-D` tuning (timeouts, HTTP caps, key fallbacks) | [studio-aiassistant-jvm-parameters.md](using-and-extending/studio-aiassistant-jvm-parameters.md) |
| TinyMCE toolbar & `craftercms_aiassistant` | [tinymce-integration.md](using-and-extending/tinymce-integration.md) |

**Examples** (copy-paste fragments): [`examples/`](examples/).
