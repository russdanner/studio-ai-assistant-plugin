# Pluggable image generation (`GenerateImage`)

The **GenerateImage** tool is not hard-wired to a single vendor. The server picks a backend from the agent / request and site scripts.

## Options (summary)

| Mechanism | When it applies |
|-----------|------------------|
| **Default wire** | Blank **`imageGenerator`** + OpenAI-compatible Images URL + API key + **`imageModel`** (e.g. GPT Image ids) |
| **`none` / `off` / `disabled`** | Tool is not registered |
| **`script:{id}`** | Site Groovy: **`config/studio/scripts/aiassistant/imagegen/{id}/generate.groovy`** |

Configure per agent in **`/config/studio/ui.xml`**: **`<imageModel>`** (default model on the wire path), **`<imageGenerator>`** (backend selector). The stream/chat POST body may send **`imageModel`** and **`imageGenerator`**; when **`siteId`** + **`agentId`** are present, missing values can be merged from the matching **`<agent>`** row (see server merge behavior in [llm-configuration.md](llm-configuration.md)).

## Related site configuration

| Path / file | Purpose |
|-------------|---------|
| **`/scripts/aiassistant/imagegen/{id}/generate.groovy`** | Custom backend implementation |
| **`/scripts/aiassistant/config/tools.json`** | Optional allow/deny list for **built-in** tools (including hiding **GenerateImage**) |
| **`/scripts/aiassistant/prompts/*.md`** | Override tool-related prompt snippets per site |

Full conventions (paths, env for Images base URL, classpath vs sandbox): **[studio-plugins-guide.md](studio-plugins-guide.md)** (sections on **imagegen**, **tools.json**, **prompts**).
