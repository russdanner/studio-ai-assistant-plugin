# Script LLM: bring your own backend (full `StudioAiLlmRuntime`)

Site script LLMs (**`<llm>script:{id}</llm>`**) are **not** required to call built-in **`OpenAiSpringAiLlmRuntime`**, **`AnthropicSpringAiLlmRuntime`**, or **`ExpertApiLlmRuntime`**. They are **complete replacements**: your Groovy constructs the same **session bundle** those classes return — **`chatClient`**, **`chatModel`**, **`tools`**, **`useTools`**, **`studioOps`**, plus transport hints the orchestration reads.

**Related:** [llm-configuration.md](llm-configuration.md) (`script:{id}`), [studio-plugins-guide.md](studio-plugins-guide.md), [scripted-tools-and-imagegen.md](scripted-tools-and-imagegen.md) (bindings / `llmId`). The small **Map** proxy demo in **`docs/examples/aiassistant-llm/demo/runtime.groovy`** only shows wiring; it is **not** the product contract for how you must implement scripts.

## What you must return

Implement **`StudioAiLlmRuntime`** (or a **Map** with **`buildSessionBundle`** — see **`StudioAiScriptLlmLoader`**) so **`buildSessionBundle(StudioAiRuntimeBuildRequest req)`** returns a **non-null** `Map` aligned with **`StudioAiLlmRuntime`** Javadoc and the built-in runtimes:

| Key | Role |
|-----|------|
| **`chatClient`** | Spring AI **`ChatClient`** (typically **`DefaultChatClientBuilder`** around your **`ChatModel`**). |
| **`chatModel`** | Spring AI **`ChatModel`** for your provider. |
| **`tools`** | Built with **`AiOrchestrationTools.build(...)`** when CMS tools should be available (same arguments pattern as **`OpenAiSpringAiLlmRuntime`** / **`AnthropicSpringAiLlmRuntime`**). |
| **`useTools`** | Mirrors **`req.enableTools`**. |
| **`studioOps`** | Pass through **`req.studioOps`**. |
| **`openAiApiKeyResolved`** | For **OpenAI-wire** RestClient tool rounds: the API key used toward **`/v1/chat/completions`** on your host (see below). |
| **`openAiWireBaseUrl`** + **`resolvedChatModel`** | When both are set on a **script** session, orchestration treats the session like the **OpenAI RestClient native-tool loop** (see **`StudioAiLlmKind#useOpenAiRestClientToolLoop`**). |
| **`nativeToolTransport`** | Optional override: **`openAiWire`** or **`anthropic`** (see **`StudioAiLlmKind`**). |

**Note:** **`StudioAiScriptLlmContainerRuntime`** overwrites **`bundle.llm`** with **`scriptLlm:{id}`** after your script returns — do not rely on **`llm`** inside the map for transport detection; use **`nativeToolTransport`** / wire fields as needed.

## Example: OpenAI-compatible HTTP stack (no built-in runtime)

**Source:** [`docs/examples/aiassistant-llm/byo-openai-compat/runtime.groovy`](../examples/aiassistant-llm/byo-openai-compat/runtime.groovy)

Copy to **`config/studio/scripts/aiassistant/llm/byo-openai-compat/runtime.groovy`** and set **`<llm>script:byo-openai-compat</llm>`**.

Secrets and base URL are **yours**, not **`OPENAI_API_KEY`** / OpenAI’s default host:

| Variable / JVM | Purpose |
|----------------|---------|
| **`SCRIPT_LLM_OPENAI_COMPAT_BASE_URL`** or **`-Dstudio.scriptLlm.openAiCompatBaseUrl`** | Host-only OpenAI-compatible base (no trailing **`/v1`**). |
| **`SCRIPT_LLM_API_KEY`** or **`-Dstudio.scriptLlm.apiKey`** | Bearer/API key for that host. |
| **`<llmModel>`** / POST **`llmModel`** | Chat model id forwarded as **`req.openAiModelParam`**. |

**GenerateImage** and expert embeddings still use the Studio **`OPENAI_API_KEY`** path where the built-in tool stack expects it — configure that separately if authors need images or expert-vector tools.

## Example: Cursor Cloud Agents v1 (runnable script)

**Source:** [`docs/examples/aiassistant-llm/cursor-cloud-agent/runtime.groovy`](../examples/aiassistant-llm/cursor-cloud-agent/runtime.groovy)

Copy to **`config/studio/scripts/aiassistant/llm/cursor-cloud-agent/runtime.groovy`** and set **`<llm>script:cursor-cloud-agent</llm>`** (the directory name after **`llm/`** must match the script id; do **not** put the Cloud Agents sample under **`llm/cursor/`** unless your agent uses **`script:cursor`** — use the minimal delegate instead: [`docs/examples/aiassistant-llm/cursor/runtime.groovy`](../examples/aiassistant-llm/cursor/runtime.groovy)).

| Variable / JVM | Required | Purpose |
|------------------|----------|---------|
| **`CURSOR_API_KEY`** (or **`CURSOR_CLOUD_AGENT_API_KEY`**, or **`-Dcursor.api.key`**) | Yes | Cursor API key (Basic auth user name; password empty). |
| **`CURSOR_CLOUD_AGENT_REPO_URL`** | Yes | GitHub **`https://github.com/org/repo`** URL for **`repos[0].url`** on **`POST /v1/agents`**. |
| **`CURSOR_CLOUD_AGENT_STARTING_REF`** | No | Branch / tag / commit for the repo. |
| **`<llmModel>`** / POST **`llmModel`** | No | Cursor **`model.id`** on first agent create (default **`composer-2`** in the sample). |

Uses **`POST /v1/agents`** then **`POST /v1/agents/{id}/runs`** and **`GET .../runs/{runId}/stream`** (`event: assistant`). Cloud Agents API v1 is **public beta** — see [Cursor Cloud Agents API](https://cursor.com/docs/cloud-agent/api/endpoints).

## Anthropic-style session

To replace **`<llm>claude</llm>`** entirely in a script, build **`AnthropicApi`** + **`AnthropicChatModel`** + **`DefaultChatClientBuilder`** the same way **`AnthropicSpringAiLlmRuntime`** does, return **`nativeToolTransport: 'anthropic'`**, and omit **`openAiWireBaseUrl`** (or leave it null). Do not call **`AnthropicSpringAiLlmRuntime.INSTANCE`** unless you intentionally want that coupling.

## Cursor as the **entire** LLM (no extra “gateway” product)

You do **not** need a separate gateway service unless **you** want one for ops. **Cursor can be the only model provider**: your site script is the integration layer.

What the plugin requires is a **Spring AI `ChatModel`** (and the usual **`buildSessionBundle`** map). Built-in adapters speak **OpenAI-style** **`/v1/chat/completions`** or **Anthropic**; **Cursor’s documented HTTPS API** (e.g. **Cloud Agents** — create run, poll/stream SSE, etc.) is a **different wire shape**. So “entire LLM = Cursor” in Studio means: **implement `ChatModel` in Groovy** (or a small Java class your script instantiates) whose `call` / stream methods **call Cursor’s HTTP API directly** and map responses into Spring AI types. That logic can live **only** in **`runtime.groovy`** — still one backend, still “Cursor is the LLM.”

This repo does **not** ship a generic Cursor **`ChatModel`** in the plugin JAR; use the **Cursor Cloud Agents** site script in the previous section. The **`byo-openai-compat`** example remains the baseline for **OpenAI-compatible** HTTP hosts (`OpenAiApi` + `OpenAiChatModel`).
