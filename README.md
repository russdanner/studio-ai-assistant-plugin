# AI Assistant for Crafter Studio

Crafter Studio plugin that adds **AI-assisted authoring**: configurable **agents**, multiple **LLM** backends, optional **CMS tools**, **pluggable image generation**, and optional **autonomous** scheduled runs.

## Where it shows up

| Surface | Role |
|---------|------|
| **Experience Builder / preview** | In-context chat where configured |
| **Form engine control** | Per–content-type AI panel on forms |
| **Helper widget** | Tools Panel or preview toolbar entry |
| **TinyMCE** | Toolbar actions + RTE config → chat / shortcuts |
| **Autonomous assistants** (optional and expermintental) | Scheduled server-side runs + human tasks |

## Capabilities (at a glance)

| Area | Highlights | Notes |
|------|------------|--------| 
| **LLMs** |   * OpenAI, 
               * Anthropic, 
               * XAI, 
               * Ollama, 
               * Deepseek, 
               * Scriptable  (**`script:{id}`**)
| See [LLM configuration](docs/using-and-extending/llm-configuration.md) |
| **Image generation** | * OpenAI, 
                         * Scribtable (**`script:{id}`**) |
| See [Image generation](docs/using-and-extending/image-generation.md) |
| **Tools** | * General tools (HTTP GET, POST)
              * Built-in Studio/CMS tools
              * CrafterQ tools (Get Chats, Get Chat) 
              * Scriptable tools |   |
| **Core Config overrides** | **`tools.json`** (built-in allow/deny), **`prompts/*.md`**, same sandbox layout as script LLMs — [Studio plugins guide](docs/using-and-extending/studio-plugins-guide.md) | |

## Documentation

| If you want… | Open |
|--------------|--------|
| **Install or deploy the plugin** | [Installation](docs/using-and-extending/installation.md) |
| **Configure agents, keys, `ui.xml`** | [Configuration guide](docs/using-and-extending/configuration-guide.md) |
| **TinyMCE toolbar & JSON** | [TinyMCE integration](docs/using-and-extending/tinymce-integration.md) |
| **Helper widget snippet & troubleshooting** | [Helper widget](docs/using-and-extending/helper-widget.md) |
| **Autonomous widget overview** | [Autonomous assistants widget](docs/using-and-extending/autonomous-assistants-widget.md) |
| **LLM ids, secrets, capability matrix** | [LLM configuration](docs/using-and-extending/llm-configuration.md) |
| **Image backends & overrides** | [Image generation](docs/using-and-extending/image-generation.md) |
| **Build paths, Rollup, `user-tools/`, script LLM paths** | [Studio plugins guide](docs/using-and-extending/studio-plugins-guide.md) |
| **Behavior spec, streaming, runtime** | [Internals index](docs/internals/README.md) |
| **Full doc index** | [docs/README.md](docs/README.md) |


## Logging (debug)

| What | How |
|------|-----|
| Plugin orchestration / payload previews | Logger **DEBUG** on `plugins.org.craftercms.aiassistant.*` |
| Spring AI HTTP trace | JVM **`-Dcrafterq.springAiHttpDebug=true`** |

## Contributing

- Clone repo → from **`sources/`**: `yarn install`, **`yarn package`** before installing into a site.
- `yarn start` — local dev UI at `http://localhost:3000/`.
- Cursor rules / skills — keep **[docs/CURSOR_PROJECT_POLICY.md](docs/CURSOR_PROJECT_POLICY.md)** in sync.
- Behavior or contract changes — update **[docs/internals/spec.md](docs/internals/spec.md)** and/or the guides above.

Questions: [CrafterCMS community Slack](https://craftercms.com/slack).
