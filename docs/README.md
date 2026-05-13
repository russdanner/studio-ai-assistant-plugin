# Documentation index

High-level map; deep dives live in linked files.

## By audience

| Audience | Start here |
|----------|------------|
| **Operators** — install, `ui.xml`, agents, keys, surfaces | [Configuration guide](using-and-extending/configuration-guide.md) |
| **Integrators** — install paths, CLI/API, TinyMCE, Helper, autonomous widget shell | [Installation](using-and-extending/installation.md) · [TinyMCE](using-and-extending/tinymce-integration.md) · [Helper](using-and-extending/helper-widget.md) · [Autonomous widget](using-and-extending/autonomous-assistants-widget.md) |
| **LLM & image backends** — wire ids, secrets, **`script:`** LLM, **pluggable `GenerateImage`** | [LLM configuration](using-and-extending/llm-configuration.md) · [Image generation](using-and-extending/image-generation.md) |
| **Extension developers** — `user-tools/`, Rollup, descriptor, sandbox script layout | [Studio plugins guide](using-and-extending/studio-plugins-guide.md) · [Using & extending index](using-and-extending/README.md) |
| **Maintainers** — spec, streaming, runtime | [Internals](internals/README.md) |
| **Plugin repo contributors** — clone, `yarn package`, policy, spec | [CONTRIBUTING.md](../CONTRIBUTING.md) |
| **Cursor / repo policy** | [CURSOR_PROJECT_POLICY.md](CURSOR_PROJECT_POLICY.md) |

## Topic → document

| Topic | Document |
|-------|----------|
| Install / copy-plugin / `install-plugin.sh` | [installation.md](using-and-extending/installation.md) |
| TinyMCE toolbar & `craftercms_aiassistant` | [tinymce-integration.md](using-and-extending/tinymce-integration.md) |
| Helper `ui.xml` & “component not found” | [helper-widget.md](using-and-extending/helper-widget.md) |
| Autonomous widget placement & overview | [autonomous-assistants-widget.md](using-and-extending/autonomous-assistants-widget.md) |
| **`imageGenerator`**, **`imagegen/`**, tool/prompt overrides | [image-generation.md](using-and-extending/image-generation.md) |
| REST/stream body, tools, CrafterQ auth | [chat-and-tools-runtime.md](internals/chat-and-tools-runtime.md) |
| MCP client (`mcpEnabled` + `mcpServers` in `tools.json`, Streamable HTTP) | [chat-and-tools-runtime.md](internals/chat-and-tools-runtime.md#mcp-client-tools-streamable-http) |
| Debug logging (loggers, Spring AI HTTP trace) | [internals/README.md](internals/README.md#debug-logging) |
| Full product spec | [spec.md](internals/spec.md) |

**Examples** (copy-paste fragments): [`examples/`](examples/).
