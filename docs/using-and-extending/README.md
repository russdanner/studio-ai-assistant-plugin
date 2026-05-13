# Using the AI Assistant & developing extensions

Use this section when you **configure or use** the plugin in Crafter Studio, or when you **extend** it without changing the core plugin sources.

## Guides

| Document | What it covers |
|----------|----------------|
| [**configuration-guide.md**](configuration-guide.md) | **Start here for operators** — where to edit `ui.xml`, plugin id, agents, keys, TinyMCE vs Helper vs form vs autonomous; checklist and links to deeper docs |
| [**llm-configuration.md**](llm-configuration.md) | Supported **`<llm>`** wire ids and aliases, required configuration per provider, capability matrix, and **`script:{id}`** rules |
| [**studio-plugins-guide.md**](studio-plugins-guide.md) | Installing and building Studio plugins: descriptor, paths, **`ui.xml`**, Rollup, auth; custom **`user-tools/`** Groovy tools and **`registry.json`**; script LLM paths under **`config/studio/scripts/aiassistant/`** |

## Where “internals” live

Implementation details, the full **as-is behavior spec**, and **streaming endpoint design** live under **[`docs/internals/`](../internals/README.md)**. Use **Using and extending** for routine configuration; use **Internals** for contracts, script paths, and orchestration.
