# Plugin internals

Documentation here is aimed at **maintainers**, **integrators**, and anyone debugging **server-side behavior**, contracts, and orchestration—not at day-to-day site configuration (see **[`docs/using-and-extending/`](../using-and-extending/README.md)** for that).

## Documents

| Document | What it covers |
|----------|----------------|
| [**spec.md**](spec.md) | As-is product/behavior specification: terminology, TinyMCE/Helper/form control, `ui.xml` agent shapes, macros, shortcuts, autonomous widget (`autonomousAgents`), REST scripts, human tasks |
| [**stream-endpoint-design.md**](stream-endpoint-design.md) | SSE stream (and related) contract, CrafterQ vs tool-capable LLMs on the wire, classpath notes |
| [**chat-and-tools-runtime.md**](chat-and-tools-runtime.md) | CMS tool wiring, CrafterQ bearer/auth, API tools, expert skills, SSE/stream behavior, REST body fields, troubleshooting, **MCP Streamable HTTP client** |
| [**reference-spring-ai-completions-with-tools.md**](reference-spring-ai-completions-with-tools.md) | Archived Spring AI pattern reference (may diverge from current wiring) |

## Debug logging

JVM flags and logger categories for Studio when troubleshooting server-side behavior.

| What | How |
|------|-----|
| Plugin orchestration / payload previews | Logger **DEBUG** on `plugins.org.craftercms.aiassistant.*` |
| Spring AI HTTP trace | JVM **`-Dcrafterq.springAiHttpDebug=true`** |

## User-facing configuration

Operators configuring the site (no code changes): start with **[`docs/using-and-extending/configuration-guide.md`](../using-and-extending/configuration-guide.md)**. **`<llm>` ids, keys, and capability matrix:** **[`llm-configuration.md`](../using-and-extending/llm-configuration.md)**. **CMS tools, CrafterQ auth, SSE, troubleshooting:** **[`chat-and-tools-runtime.md`](chat-and-tools-runtime.md)**.
