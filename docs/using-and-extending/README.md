# Using the AI Assistant & developing extensions

Use this section when you **configure or use** the plugin in Crafter Studio, or when you **extend** it without changing the core plugin sources.

## Guides

| Document | What it covers |
|----------|----------------|
| [**configuration-guide.md**](configuration-guide.md) | **Start here for operators** — where to edit `ui.xml`, plugin id, agents, keys, TinyMCE vs Helper vs form vs autonomous; checklist and links to deeper docs |
| [**llm-configuration.md**](llm-configuration.md) | Per-agent `<llm>` values (OpenAI, Claude, Gemini, DeepSeek, CrafterQ, `script:{id}`, …), API keys, CrafterQ bearer identity, built-in CMS / HTTP / CrafterQ tools at a glance |
| [**studio-plugins-guide.md**](studio-plugins-guide.md) | Installing and building Studio plugins (descriptor, paths, `ui.xml`, Rollup, auth), **custom `user-tools/`** Groovy tools + `registry.json`, script LLM layout under `config/studio/scripts/aiassistant/` |

## Where “internals” live

Implementation details, the full **as-is behavior spec** (macros, form vs preview, autonomous REST), and **streaming endpoint design** are under **[`docs/internals/`](../internals/README.md)**. Start in *Using & extending* for day-to-day configuration; open *Internals* when you need contracts, script paths, or orchestration notes.
