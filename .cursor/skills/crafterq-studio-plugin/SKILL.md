---
name: crafterq-studio-plugin
description: Maintains and extends the AI Assistant Crafter Studio plugin per in-repo Cursor rules and docs without regressing locked UX.
---

# AI Assistant Studio plugin (this repository)

Use this skill when editing **this repo**: `plugin-studio-crafterq` — Studio plugin (React bundle, form control `main.js`, server scripts, `authoring/static-assets`).

## Product language (do not conflate)

- **Studio AI assistant** — The product-facing assistant in Studio (Helper, form control, optional autonomous runs). Prefer this in **author-facing** copy and docs.
- **Two delivery modes** — **(1) Interactive chat** — authors drive each turn (Helper, form-engine control, TinyMCE, preview/XB). **(2) Autonomous assistants (experimental)** — the **`AutonomousAssistants`** Tools Panel widget runs **scheduled** server-side steps; see **`docs/internals/spec.md`**.
- **CrafterQ** — The **CrafterQ API / SaaS integration** when an agent uses **`llm: crafterQ`**. It is a **tool/backend**, not the name of the whole assistant. **`openAI`** is another tool on the same assistant.

## Canonical local policy (read first)

1. **`.cursor/rules/`** — Project rules (often `alwaysApply: true`). They override casual assumptions.
   - **`crafterq-form-panel-contract.mdc`** — Form Engine assistant: agent visibility from `config.properties`, accordion-style panel in `AiAssistantFormControlPanel.tsx`, sync `sources/control/ai-assistant/main.js` copies, `yarn package` after TS or React changes.
   - **`no-unauthorized-ui-changes.mdc`** — Do not change visible UI or UX or interaction unless the user explicitly requests it in the same task; feature work defaults to wiring, API, server, types, and build only.

2. **`docs/CURSOR_PROJECT_POLICY.md`** — Manifest of Cursor artifacts in this repo. **When adding or changing a rule or skill, update that doc** so it stays accurate.

## Documentation map

- **`docs/README.md`** — Index: **using & extending** vs **internals**.
- **`docs/using-and-extending/configuration-guide.md`** — Operators: `ui.xml` surfaces, plugin id, agents, keys checklist.
- **`docs/using-and-extending/`** — **`llm-configuration.md`**, **`studio-plugins-guide.md`**, **`README.md`** (install, `user-tools/`, script LLM paths).
- **`docs/internals/`** — Maintainers: **`docs/internals/README.md`**, **`docs/internals/spec.md`**, **`docs/internals/stream-endpoint-design.md`**.

## Mechanical checklist (non-UI changes)

- **Form control `main.js`:** Edit **`sources/control/ai-assistant/main.js` only**. Rollup **`yarn package`** copies it into **`authoring/static-assets/plugins/.../studio/control/ai-assistant/main.js`**. Editing only the `authoring/...` copy is overwritten on the next package — that pattern makes fixes “disappear.”
- After TS/React changes: run **`yarn package`** from **`sources/`**; do not hand-edit **`authoring/.../aiassistant/components/index.js`** (generated bundle).
- After edits to `sources/src` form or chat bundle: run **`yarn package`** from `sources/`.
- If behavior or API visible to authors changes: update **`docs/internals/spec.md`** (and **`README.md`** / **`docs/using-and-extending/studio-plugins-guide.md`** when install or `ui.xml` contracts change; **`docs/CURSOR_PROJECT_POLICY.md`** or this skill if policy or rules changed).

## Do not

- Redesign the form assistant panel, accordion rows, or shared chat placement without explicit maintainer request (see rules).
- Replace `cqVisibleAgentsFromProperties` or property-bag wiring with shortcuts that filter all agents out when Studio sends loose property values.
