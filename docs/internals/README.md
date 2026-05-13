# Plugin internals

Documentation here is aimed at **maintainers**, **integrators**, and anyone debugging **server-side behavior**, contracts, and orchestration—not at day-to-day site configuration (see **[`docs/using-and-extending/`](../using-and-extending/README.md)** for that).

## Documents

| Document | What it covers |
|----------|----------------|
| [**spec.md**](spec.md) | As-is product/behavior specification: terminology, TinyMCE/Helper/form control, `ui.xml` agent shapes, macros, shortcuts, autonomous widget (`autonomousAgents`), REST scripts, human tasks |
| [**stream-endpoint-design.md**](stream-endpoint-design.md) | SSE stream (and related) contract, CrafterQ vs tool-capable LLMs on the wire, classpath notes |
| [**reference-spring-ai-completions-with-tools.md**](reference-spring-ai-completions-with-tools.md) | Archived Spring AI pattern reference (may diverge from current wiring) |

## User-facing configuration

Agent LLM values, keys, and tool summaries for operators: **[`docs/using-and-extending/llm-configuration.md`](../using-and-extending/llm-configuration.md)**.
