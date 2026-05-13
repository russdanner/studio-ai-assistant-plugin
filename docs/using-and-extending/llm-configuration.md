# Supported LLMs (`<llm>`) — ids, configuration, behavior

This document lists **which LLM backends the Studio AI assistant supports**, the **`<llm>` wire value** (and aliases), **what you configure in `ui.xml`**, and **environment variables** you can set on the Studio host as alternatives to putting secrets in XML.

**JVM system properties (`-D…`)** used for tuning and alternate defaults are **not** listed here — see **[studio-aiassistant-jvm-parameters.md](studio-aiassistant-jvm-parameters.md)**.

**For site operators:** [configuration-guide.md](configuration-guide.md)  
**For CMS tools, CrafterQ auth, SSE, and troubleshooting:** [chat-and-tools-runtime.md](../internals/chat-and-tools-runtime.md)  
**For script LLMs and `user-tools/`:** [studio-plugins-guide.md](studio-plugins-guide.md)  
**For pluggable image backends (`imageGenerator`, `imagegen/` scripts, site overrides):** [image-generation.md](image-generation.md)  
**For `ui.xml` contracts, macros, and REST:** [spec.md](../internals/spec.md) · **Doc index:** [README.md](../README.md)

---

## Summary table

| `<llm>` wire value | Aliases (normalized) | Required configuration | Optional `ui.xml` / env | What you get |
|--------------------|----------------------|-------------------------|-------------------------|--------------|
| **`crafterQ`** | `crafter-q` | **`<crafterQAgentId>`** (hosted agent UUID). CrafterQ identity for **`/v1/chats`** (widget session and/or bearer — see runtime doc). | — | Remote **hosted chat** only: **no** CMS function tools, **GenerateImage**, expert vector tool, or CrafterQ API tools on this adapter. |
| **`openAI`** | `openai`, `open-ai` | **API key:** host env **`OPENAI_API_KEY`** (recommended). | **`<llmModel>`** (chat model id). **`<imageModel>`** when the model should call **GenerateImage**. **`<crafterQAgentId>`** to register **CrafterQ API tools** on the OpenAI-wire path. **`<openAiApiKey>`** — *testing only* when no env key. | **CMS tools**, **GenerateImage** (when `imageModel` + key allow), **`<expertSkill>`** → **QueryExpertGuidance**, **CrafterQ API tools** when **`crafterQAgentId`** is set. |
| **`xAI`** | `x-ai`, `grok` | **`XAI_API_KEY`** | **`XAI_OPENAI_BASE_URL`** (OpenAI-compatible base). **`<llmModel>`**. **`<crafterQAgentId>`** for CrafterQ API tools. Same stack as **`openAI`**. | Same tool surface as **OpenAI** row. |
| **`deepSeek`** | `deep-seek` | **`DEEPSEEK_API_KEY`** | **`DEEPSEEK_OPENAI_BASE_URL`** (optional). **`<llmModel>`**. **`<crafterQAgentId>`** for CrafterQ API tools. | Same tool surface as **OpenAI** row. |
| **`llama`** | `ollama`, `meta-llama`, `meta_llama` | Often **`LLAMA_API_KEY`** (Ollama may accept a placeholder). | **`LLAMA_OPENAI_BASE_URL`** or **`OLLAMA_OPENAI_BASE_URL`**. **`<llmModel>`**. **`<crafterQAgentId>`** for CrafterQ API tools. | Same tool surface as **OpenAI** row. |
| **`genesis`** / **`gemini`** | `gemini`, `google`, `google-genai`, `google_genai` | **`GEMINI_API_KEY`** or **`GOOGLE_API_KEY`** | **`GEMINI_OPENAI_BASE_URL`** / **`GOOGLE_GENAI_OPENAI_BASE_URL`**. **`<llmModel>`**. **`<crafterQAgentId>`** for CrafterQ API tools. | Same tool surface as **OpenAI** row. |
| **`claude`** | `anthropic` | **`ANTHROPIC_API_KEY`** | **`<llmModel>`**. **`<crafterQAgentId>`** for CrafterQ API tools. **`<openAiApiKey>`** — *testing only* for Anthropic when no **`ANTHROPIC_API_KEY`** (see runtime doc). | **CMS tools** via Spring AI **Anthropic** (not the OpenAI RestClient loop). **GenerateImage** / embeddings that still use OpenAI key material are described in the runtime doc. **Expert skills** + **CrafterQ API tools** when configured. |
| **`script:{id}`** | — | Site Groovy under **`config/studio/scripts/aiassistant/llm/{id}/runtime.groovy`** (or `llm.groovy`) implementing **`StudioAiLlmRuntime`** or the documented **Map** bundle contract. | Bundle chooses OpenAI-wire vs Anthropic-style transport. | **Configurable** by the script (CMS tools, custom behavior). |

---

## Configuration examples (`ui.xml`)

Paths are under site configuration (commonly **`/config/studio/ui.xml`**). The widget registers **`craftercms.components.aiassistant.Helper`** with a **`configuration`** → **`agents`** → **`agent`** tree.

### Hosted CrafterQ only

```xml
<widget id="craftercms.components.aiassistant.Helper">
  <plugin id="org.craftercms.aiassistant.studio" type="aiassistant" name="components" file="index.js"/>
  <configuration>
    <agents>
      <agent>
        <label>Hosted CrafterQ</label>
        <llm>crafterQ</llm>
        <crafterQAgentId>00000000-0000-4000-8000-000000000001</crafterQAgentId>
      </agent>
    </agents>
  </configuration>
</widget>
```

Replace **`crafterQAgentId`** with your real hosted agent UUID. CrafterQ identity (browser session vs bearer) is covered in **[chat-and-tools-runtime.md](../internals/chat-and-tools-runtime.md)**.

### OpenAI with tools and optional image model

```xml
<widget id="craftercms.components.aiassistant.Helper">
  <plugin id="org.craftercms.aiassistant.studio" type="aiassistant" name="components" file="index.js"/>
  <configuration>
    <agents>
      <agent>
        <label>OpenAI authoring</label>
        <llm>openAI</llm>
        <llmModel>gpt-4o-mini</llmModel>
        <imageModel>gpt-image-1-mini</imageModel>
        <crafterQAgentId>00000000-0000-4000-8000-000000000002</crafterQAgentId>
        <crafterQBearerTokenEnv>CRAFTQ_ADMIN_JWT</crafterQBearerTokenEnv>
      </agent>
    </agents>
  </configuration>
</widget>
```

- Set **`OPENAI_API_KEY`** on the Studio host (recommended). Do **not** commit keys to Git.
- **`imageModel`** is required for **GenerateImage** on the default wire; there is no silent default in site config.
- **`crafterQAgentId`** + bearer env (or widget session) enable **CrafterQ API tools** on this OpenAI-wire agent.

### Claude (Anthropic)

```xml
<agent>
  <label>Claude authoring</label>
  <llm>claude</llm>
  <llmModel>claude-3-5-sonnet-20241022</llmModel>
</agent>
```

Set **`ANTHROPIC_API_KEY`** on the Studio host.

### xAI (Grok) — env for key and optional base URL

```xml
<agent>
  <label>xAI</label>
  <llm>xAI</llm>
  <llmModel>grok-2-latest</llmModel>
</agent>
```

Set **`XAI_API_KEY`**. Optionally set **`XAI_OPENAI_BASE_URL`** if your deployment uses a non-default OpenAI-compatible base.

### Ollama / local Llama-compatible endpoint

```xml
<agent>
  <label>Local Ollama</label>
  <llm>llama</llm>
  <llmModel>llama3.2</llmModel>
</agent>
```

Set **`LLAMA_OPENAI_BASE_URL`** or **`OLLAMA_OPENAI_BASE_URL`** (e.g. `http://127.0.0.1:11434`). **`LLAMA_API_KEY`** may be a placeholder for local Ollama.

### DeepSeek

```xml
<agent>
  <label>DeepSeek</label>
  <llm>deepSeek</llm>
  <llmModel>deepseek-chat</llmModel>
</agent>
```

Set **`DEEPSEEK_API_KEY`**. Optional **`DEEPSEEK_OPENAI_BASE_URL`**.

### Gemini / Google GenAI (OpenAI-compatible wire)

```xml
<agent>
  <label>Gemini</label>
  <llm>gemini</llm>
  <llmModel>gemini-2.0-flash</llmModel>
</agent>
```

Set **`GEMINI_API_KEY`** or **`GOOGLE_API_KEY`**. Optional **`GEMINI_OPENAI_BASE_URL`** / **`GOOGLE_GENAI_OPENAI_BASE_URL`**.

### Script LLM

```xml
<agent>
  <label>Custom backend</label>
  <llm>script:mybackend</llm>
</agent>
```

Wire normalizes to **`scriptLlm:mybackend`**. Implement **`config/studio/scripts/aiassistant/llm/mybackend/runtime.groovy`** per **[studio-plugins-guide.md](studio-plugins-guide.md)**.

---

## Omitted `<llm>` and POST body

The React client **does not** send **`llm`** on the stream/chat JSON when the agent has no **`<llm>`** in `ui.xml`. The server **normalizes** missing, blank, or unrecognized `llm` strings to **`crafterQ`** (`StudioAiLlmKind.normalize`) for backwards compatibility — **always set `<llm>` explicitly** so routing matches intent.

---

## Per-provider notes

### `crafterQ` (hosted chat only)

- **Transport:** Spring AI **`ExpertChatModel`** → **`POST`** `api.crafterq.ai` **`/v1/chats`**.
- **Not on this adapter:** CMS function tools, **GenerateImage**, **QueryExpertGuidance**, **CrafterQ API tools**. For those, use **`openAI`** (or another tool-capable row) **plus** **`<crafterQAgentId>`** where applicable.

### OpenAI-wire family (`openAI`, `xAI`, `deepSeek`, `llama`, `gemini` / `genesis`)

- **Transport:** Spring AI **`OpenAiChatModel`** + **RestClient** **`/v1/chat/completions`** native tool loop (`AiOrchestrationTools`).
- **Image generation:** **`<imageModel>`** for the OpenAI-compatible wire (e.g. **`gpt-image-1`**). **`<imageGenerator>`** selects **`script:{id}`**, **`none`**, or default wire. Obsolete **`dall-e-*`** strings map to **`gpt-image-1`** server-side.

### `claude`

- **Transport:** Spring AI **`AnthropicChatModel`** — tools run inside Spring AI’s Anthropic integration, not the OpenAI RestClient loop.

### `script:{id}` (site Groovy LLM)

- **Wire:** **`<llm>script:mybackend</llm>`** → **`scriptLlm:mybackend`**.
- **Id pattern:** `{id}` = `a-z`, `0-9`, `_`, `-`, max **64** chars.
- Full contract: [studio-plugins-guide.md](studio-plugins-guide.md) and **`docs/examples/aiassistant-llm/demo/runtime.groovy`**.

---

## Agent XML fields (cross-LLM)

| Field | Applies to | Purpose |
|-------|------------|---------|
| **`<llm>`** | All | Selects backend; see summary table. |
| **`<llmModel>`** | Tool-capable + hosted | Provider chat model id when the provider uses it. |
| **`<imageGenerator>`** | **GenerateImage** | Blank = default wire when configured; **`none`**/**`off`**/**`disabled`**; **`script:{id}`** for site Groovy under **`/scripts/aiassistant/imagegen/{id}/`**. |
| **`<imageModel>`** | **GenerateImage** (wire path) | Required when the model should call **GenerateImage** on the default wire. |
| **`<crafterQAgentId>`** | **`crafterQ`** + CrafterQ API tools | **Required** for **`crafterQ`** hosted **`agentId`**. On OpenAI-wire / **Claude**, enables **CrafterQ API tools** when non-empty. |
| **`<crafterQBearerTokenEnv>`** / **`<crafterQBearerToken>`** | CrafterQ HTTP | Server **`Authorization: Bearer`** to `api.crafterq.ai` — see [chat-and-tools-runtime.md](../internals/chat-and-tools-runtime.md). |
| **`<openAiApiKey>`** | Testing | Per-agent key when no **env** key for the **target** provider; discouraged in production. |
| **`<enableTools>`** | Tool-capable | When **`false`**, CMS tools are off for that agent (subject to per-request **`omitTools`**). |
| **`<expertSkill>`** | OpenAI-wire + Claude (tools on) | Markdown URL skills → **QueryExpertGuidance**. |

---

## REST / stream body keys (reference)

The widget mirrors **`ui.xml`** onto **`POST …/ai/stream`** and **`…/ai/agent/chat`**. Common keys: **`llm`**, **`llmModel`**, **`imageModel`**, **`imageGenerator`**, **`openAiApiKey`**, **`agentId`**, **`crafterQBearerTokenEnv`**, **`crafterQBearerToken`**, **`expertSkills`**, preview **`contentPath`** / **`contentTypeId`**, **`omitTools`**, **`enableTools`**. Full list: [chat-and-tools-runtime.md § REST body](../internals/chat-and-tools-runtime.md#rest-body-advanced).

When **`siteId`** + **`agentId`** are present, the server may **merge** missing **`llmModel`**, **`imageModel`**, **`imageGenerator`**, and CrafterQ bearer fields from the matching **`<agent>`** in site **`/ui.xml`** before orchestration.

---

## Autonomous widget (`<llm>` there)

**`AutonomousAssistants`** agents use **`openAI`**, **`xAI`**, **`deepSeek`**, **`llama`**, **`genesis`** / **`gemini`** for steps (OpenAI-wire stack). **`claude`** is **not** supported for autonomous runs. Default **`llm`** for new autonomous definitions in code is **`openAI`**. Details: [chat-and-tools-runtime.md § Autonomous](../internals/chat-and-tools-runtime.md#autonomous-assistants) and [spec.md](../internals/spec.md).
