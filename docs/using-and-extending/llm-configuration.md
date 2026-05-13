# Supported LLMs (`<llm>`) — ids, configuration, capabilities

This document lists **which LLM backends the Studio AI assistant supports**, the **`<llm>` wire value** (and aliases), **what you must configure**, and **what each backend can do** in this plugin.

**For site operators:** [configuration-guide.md](configuration-guide.md)  
**For CMS tools, CrafterQ auth, SSE, and troubleshooting:** [chat-and-tools-runtime.md](../internals/chat-and-tools-runtime.md)  
**For script LLMs and `user-tools/`:** [studio-plugins-guide.md](studio-plugins-guide.md)  
**For `ui.xml` contracts, macros, and REST:** [spec.md](../internals/spec.md) · **Doc index:** [README.md](../README.md)

---

## Capability shorthand

| Capability | Meaning |
|------------|--------|
| **Hosted chat** | Remote **`api.crafterq.ai`** conversational chat (`ExpertChatModel`). **No** CMS function tools on this adapter. |
| **CMS tools** | Native Studio tool catalog (`GetContent`, `WriteContent`, `ListPagesAndComponents`, …) on the chat/stream path. |
| **CrafterQ API tools** | **`ConsultCrafterQExpert`**, **`ListCrafterQAgentChats`**, **`GetCrafterQAgentChat`** — calls into hosted CrafterQ **as tools** from a tool-capable session. Requires non-empty **`<crafterQAgentId>`** on the agent. See [chat-and-tools-runtime.md § CrafterQ API tools](../internals/chat-and-tools-runtime.md#crafterq-api-tools-openai-wire). |
| **GenerateImage** | Configurable image backend: default **OpenAI-compatible** **`POST /v1/images/generations`** when key + **`imageModel`** are set; **`script:{id}`** uses site **`/scripts/aiassistant/imagegen/{id}/generate.groovy`**; **`none`** / **`off`** / **`disabled`** omits the tool. **`imageModel`** still selects the default model on the wire path. Obsolete **`dall-e-*`** strings map to **`gpt-image-1`** server-side. |
| **Expert skills** | Optional **`<expertSkill>`** markdown URLs → **`QueryExpertGuidance`** when tools are enabled (same sessions that support CMS tools + Spring vector store). |

---

## Summary table

| `<llm>` wire value | Aliases (normalized) | Required configuration | Common optional agent / JVM fields | Capabilities |
|--------------------|----------------------|--------------------------|-----------------------------------|----------------|
| **`crafterQ`** | `crafter-q` | **`<crafterQAgentId>`** (hosted agent UUID). CrafterQ identity for **`/v1/chats`** (widget session / bearer — see runtime doc). | — | **Hosted chat** only. |
| **`openAI`** | `openai`, `open-ai` | **API key:** `OPENAI_API_KEY` or JVM **`crafter.openai.apiKey`** (or testing **`<openAiApiKey>`** on the agent when no server key). | **`<llmModel>`** (else JVM **`crafter.openai.model`**). **`<imageModel>`** for **GenerateImage**. **`<crafterQAgentId>`** to register **CrafterQ API tools**. | **CMS tools**, **GenerateImage**, **Expert skills**, **CrafterQ API tools** if id set. |
| **`xAI`** | `x-ai`, `grok` | **`XAI_API_KEY`** or JVM **`crafter.xai.apiKey`**. | **`XAI_OPENAI_BASE_URL`** / **`crafter.xai.openAiBaseUrl`**. **`<llmModel>`** (else JVM **`crafter.xai.model`** or `grok-2-latest`). **`<crafterQAgentId>`** for CrafterQ API tools. Same OpenAI-wire stack as **`openAI`**. | **CMS tools**, **GenerateImage**, **Expert skills**, **CrafterQ API tools** if id set. |
| **`deepSeek`** | `deep-seek` | **`DEEPSEEK_API_KEY`** or JVM **`crafter.deepseek.apiKey`**. | Default base `https://api.deepseek.com`. **`<llmModel>`** (else **`crafter.deepseek.model`** / `deepseek-chat`). **`<crafterQAgentId>`** for CrafterQ API tools. | Same as **OpenAI-wire** row. |
| **`llama`** | `ollama`, `meta-llama`, `meta_llama` | Host-specific; often **`LLAMA_API_KEY`** / **`crafter.llama.apiKey`** (Ollama may accept a placeholder). | **`LLAMA_OPENAI_BASE_URL`**, **`OLLAMA_OPENAI_BASE_URL`**, or **`crafter.llama.openAiBaseUrl`** (default `http://127.0.0.1:11434`). **`<llmModel>`** (else **`crafter.llama.model`** / `llama3.2`). **`<crafterQAgentId>`** for CrafterQ API tools. | Same as **OpenAI-wire** row. |
| **`genesis`** / **`gemini`** | `gemini`, `google`, `google-genai`, `google_genai` | **`GEMINI_API_KEY`**, **`GOOGLE_API_KEY`**, or JVM **`crafter.gemini.apiKey`** / **`crafter.google.apiKey`**. | Default Generative Language OpenAI-compatible base. **`<llmModel>`** (else **`crafter.gemini.model`** / `gemini-2.0-flash`). **`<crafterQAgentId>`** for CrafterQ API tools. | Same as **OpenAI-wire** row. |
| **`claude`** | `anthropic` | **`ANTHROPIC_API_KEY`** or JVM **`crafter.anthropic.apiKey`** (or testing **`openAiApiKey`** on the agent when no Anthropic env key — see runtime doc). | **`<llmModel>`** (else **`crafter.anthropic.model`** / `claude-3-5-sonnet-20241022`). **`<crafterQAgentId>`** for CrafterQ API tools. **CMS tools** run inside **Spring AI Anthropic** (not the OpenAI RestClient loop). | **CMS tools** (Anthropic path), **GenerateImage** (still uses OpenAI key material where applicable), **Expert skills**, **CrafterQ API tools** if id set. |
| **`script:{id}`** | — | Site Groovy under **`config/studio/scripts/aiassistant/llm/{id}/runtime.groovy`** (or `llm.groovy`) implementing **`StudioAiLlmRuntime`** or the documented **Map** bundle contract. | Bundle chooses OpenAI-wire vs Anthropic-style transport. | **Configurable:** implementer exposes CMS tools and/or other behavior per returned session map. |

---

## Omitted `<llm>` and POST body

The React client **does not** send **`llm`** on the stream/chat JSON when the agent has no **`<llm>`** in `ui.xml`. The server **normalizes** missing, blank, or unrecognized `llm` strings to **`crafterQ`** (`StudioAiLlmKind.normalize`) for backwards compatibility — **always set `<llm>` explicitly** so routing matches intent.

---

## Per-provider notes

### `crafterQ` (hosted chat only)

- **Transport:** Spring AI **`ExpertChatModel`** → **`POST`** `api.crafterq.ai` **`/v1/chats`** (text in / streamed or non-streamed out).
- **Not supported on this adapter:** CMS function tools, **GenerateImage**, **QueryExpertGuidance**, **CrafterQ API tools** (those require an OpenAI-wire–style or Claude tool loop — use **`openAI`** (or another wire row) **plus** **`<crafterQAgentId>`** for hosted API tools).

### OpenAI-wire family (`openAI`, `xAI`, `deepSeek`, `llama`, `gemini` / `genesis`)

- **Transport:** Spring AI **`OpenAiChatModel`** + **RestClient** **`/v1/chat/completions`** native tool loop (`AiOrchestrationTools`).
- **Shared behavior:** same **CMS tool** catalog; **GenerateImage** and **expert skills** follow the rules in the summary table and [chat-and-tools-runtime.md](../internals/chat-and-tools-runtime.md).
- **Image generation:** set **`<imageModel>`** for the OpenAI-compatible wire (e.g. **`gpt-image-1`**). Use **`<imageGenerator>`** to force **`script:{id}`**, **`none`**, or **`openAiWire`**. Obsolete **`dall-e-*`** strings map to **`gpt-image-1`** before calling the wire.

### `claude`

- **Transport:** Spring AI **`AnthropicChatModel`** — tools are executed **inside Spring AI**, not the OpenAI RestClient loop.
- **Capabilities:** CMS tools + optional CrafterQ API tools + expert skills; **GenerateImage** / embeddings that still use OpenAI are described in the runtime doc.

### `script:{id}` (site Groovy LLM)

- **Wire:** **`<llm>script:mybackend</llm>`** normalizes to **`scriptLlm:mybackend`**.
- **Id pattern:** `{id}` = `a-z`, `0-9`, `_`, `-`, max **64** chars.
- **Capabilities:** Whatever the script’s **`buildSessionBundle`** returns — OpenAI-wire bundles can opt into the same CMS **RestClient** tool path; Anthropic-style bundles set **`nativeToolTransport`** to **`anthropic`**. Full contract: [studio-plugins-guide.md](studio-plugins-guide.md) (AI Assistant — custom LLM) and example **`docs/examples/aiassistant-llm/demo/runtime.groovy`**.

---

## Agent XML fields that apply across LLMs

| Field | Applies to | Purpose |
|-------|------------|---------|
| **`<llm>`** | All | Selects backend; see table above. |
| **`<llmModel>`** | Tool-capable + hosted | Provider chat model id; JVM defaults per provider when omitted (**`crafterQ`** path ignores chat model id the same way other hosted constraints apply). |
| **`<imageGenerator>`** | **GenerateImage** | Optional: blank = wire when configured; **`none`**/**`off`**/**`disabled`**; **`script:{id}`** for site Groovy under **`/scripts/aiassistant/imagegen/{id}/`**. |
| **`<imageModel>`** | **GenerateImage** (wire path) | Required when the model should call **GenerateImage** on the default wire; no JVM fallback. Use a **GPT Image** id (e.g. **`gpt-image-1`**). Obsolete **`dall-e-*`** strings from older configs map to **`gpt-image-1`**. Script backends may ignore this unless they read it from context. |
| **`<crafterQAgentId>`** | **`crafterQ`** + CrafterQ API tools | **Required** for **`crafterQ`** hosted **`agentId`**. On OpenAI-wire / **Claude**, enables **CrafterQ API tools** when non-empty. |
| **`<crafterQBearerTokenEnv>`** / **`<crafterQBearerToken>`** | CrafterQ HTTP | Server **`Authorization: Bearer`** to `api.crafterq.ai` for hosted calls and tools — see [chat-and-tools-runtime.md](../internals/chat-and-tools-runtime.md). |
| **`<openAiApiKey>`** | Testing | Per-agent key when no server env/JVM key for the **target** provider; discouraged in production. |
| **`<enableTools>`** | Tool-capable | When **`false`**, CMS tools are off for that agent (subject to per-request **`omitTools`**). |
| **`<expertSkill>`** | OpenAI-wire + Claude (tools on) | Markdown URL skills → **QueryExpertGuidance**. |

---

## REST / stream body keys (reference)

The widget mirrors **`ui.xml`** onto **`POST …/ai/stream`** and **`…/ai/agent/chat`**. Common keys: **`llm`**, **`llmModel`**, **`imageModel`**, **`imageGenerator`**, **`openAiApiKey`**, **`agentId`**, **`crafterQBearerTokenEnv`**, **`crafterQBearerToken`**, **`expertSkills`**, preview **`contentPath`** / **`contentTypeId`**, **`omitTools`**, **`enableTools`**. Full list and semantics: [chat-and-tools-runtime.md § REST body](../internals/chat-and-tools-runtime.md#rest-body-advanced).

When **`siteId`** + **`agentId`** are present, the server may **merge** missing **`llmModel`**, **`imageModel`**, **`imageGenerator`**, and CrafterQ bearer fields from the matching **`<agent>`** in site **`/ui.xml`** before orchestration (see plugin **`CrafterQBearerUiXmlMerge`** / stream script Groovydoc).

---

## Autonomous widget (`<llm>` there)

**`AutonomousAssistants`** agents use **`openAI`**, **`xAI`**, **`deepSeek`**, **`llama`**, **`genesis`** / **`gemini`** for steps (OpenAI-wire stack). **`claude`** is **not** supported for autonomous runs. Default **`llm`** for new autonomous definitions in code is **`openAI`**. Details: [chat-and-tools-runtime.md § Autonomous](../internals/chat-and-tools-runtime.md#autonomous-assistants) and [spec.md](../internals/spec.md).
