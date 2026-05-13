# AI Assistant for Crafter Studio

Crafter Studio plugin that adds **AI-assisted authoring**: configurable **agents**, multiple **LLM** backends, optional **CMS tools**, **pluggable image generation**, and optional **autonomous** scheduled runs.

## Where it shows up

| Surface | Role |
|---------|------|
| **Experience Builder** | AI assistant is part of **preview authoring**: toolbar control opens chat in the XB tools panel (or a popup when configured) |
| **Form engine control** | Per–content-type AI panel on forms |
| **Helper widget** | `ui.xml` registration for the Experience Builder toolbar and, if you add it, the Studio **Tools Panel** list |
| **TinyMCE** | Toolbar actions + RTE config → chat / shortcuts |
| **Autonomous assistants** (optional and experimental) | Scheduled server-side runs + human tasks |

## Capabilities (at a glance)

| Area | Highlights | Notes |
|------|------------|-------|
| **Site setup** | Agents, `ui.xml`, keys, Experience Builder, forms, TinyMCE | [Configuration guide](docs/using-and-extending/configuration-guide.md) |
| **LLMs** | OpenAI, Anthropic, XAI, Ollama, Deepseek, scriptable (**`script:{id}`**) | [LLM configuration](docs/using-and-extending/llm-configuration.md) |
| **Image generation** | OpenAI, scriptable (**`script:{id}`**) | [Image generation](docs/using-and-extending/image-generation.md) |
| **Tools** | CMS / HTTP / optional hosted SaaS API tools / scriptable user tools; optional **MCP** (`mcpEnabled` + `mcpServers` in `tools.json`) | [Chat & tools runtime](docs/internals/chat-and-tools-runtime.md#mcp-client-tools-streamable-http) |
| **Core Config overrides** | **`tools.json`** (built-in allow/deny), **`prompts/*.md`**, same sandbox layout as script LLMs | [Studio plugins guide](docs/using-and-extending/studio-plugins-guide.md) |

## Documentation

| If you want… | Open |
|--------------|--------|
| **Configure agents, keys, `ui.xml`** | [Configuration guide](docs/using-and-extending/configuration-guide.md) |
| **Install or deploy the plugin** | [Installation](docs/using-and-extending/installation.md) |
| **LLM ids, secrets, env + `ui.xml`** | [LLM configuration](docs/using-and-extending/llm-configuration.md) |
| **JVM-only tuning (`-D` properties)** | [Studio AI assistant JVM parameters](docs/using-and-extending/studio-aiassistant-jvm-parameters.md) |
| **Image backends & overrides** | [Image generation](docs/using-and-extending/image-generation.md) |
| **TinyMCE toolbar & JSON** | [TinyMCE integration](docs/using-and-extending/tinymce-integration.md) |
| **Autonomous widget overview** | [Autonomous assistants widget](docs/using-and-extending/autonomous-assistants-widget.md) |
| **Helper widget snippet & troubleshooting** | [Helper widget](docs/using-and-extending/helper-widget.md) |
| **Build paths, Rollup, `user-tools/`, script LLM paths** | [Studio plugins guide](docs/using-and-extending/studio-plugins-guide.md) |
| **Behavior spec, streaming, runtime** | [Internals index](docs/internals/README.md) |
| **Contributing (clone, build, policy, spec updates)** | [CONTRIBUTING.md](CONTRIBUTING.md) |
| **Full doc index** | [docs/README.md](docs/README.md) |

Questions: [CrafterCMS Community Slack](https://craftercms.com/slack).
