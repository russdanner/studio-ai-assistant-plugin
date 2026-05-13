# Product requirements (plain English)

This document states **what the AI Assistant Studio plugin is required to deliver**—obligations and acceptance criteria in everyday language.

It is **not** a feature brochure (“what it does” as marketing). It is **not** the technical specification: no wire formats, REST field lists, `ui.xml` grammar, file paths, or build steps. Those live in **[`spec.md`](../internals/spec.md)** and the linked guides; implementation **must** satisfy this document **and** the technical spec together.

**How to use it:** Product owners and reviewers judge releases against these statements. Engineers trace each requirement to **`spec.md`** and code.

---

## Author-facing requirements

1. **Chat access** — Authors who have Studio access to a site where the plugin is configured **must** be able to open an AI chat from each surface the site enables: at minimum, the plugin **must** support opening chat from the form-engine control, from the Helper (preview toolbar and/or Tools Panel, per site configuration), and from TinyMCE when that integration is configured.

2. **Multiple agents** — When the site defines more than one agent, the plugin **must** let the author choose which agent to use (or follow the documented single-agent shortcut) without editing code.

3. **Editing context** — Where a surface provides editor or field context (for example selection or current field), the plugin **must** pass that context into the assistant workflow as documented, so replies can align with what the author is editing.

4. **Apply replies in TinyMCE** — When the author uses the TinyMCE integration, the plugin **must** offer a supported path to insert or apply model output into the editor, subject to editor permissions.

5. **Image generation** — When the site configures a supported image backend, the plugin **must** expose image generation to authors through the same assistant flows documented for that configuration.

---

## Administrator requirements

6. **Per-site configuration** — Administrators **must** be able to enable, disable, or tune assistant behavior per site using Studio-supported configuration (for example `ui.xml` widget definitions and documented sandbox files)—without changing plugin source in the repository.

7. **Agents** — Administrators **must** be able to define one or more agents with distinct display metadata, instructions, model choice (`llm` / model identifiers as documented), and tool options where the product supports them.

8. **Secrets and keys** — Administrators **must** be able to supply credentials and endpoints through documented mechanisms (environment, Studio configuration, or site sandbox files as applicable), without embedding secrets in client-only bundles in violation of the security model documented in **`spec.md`**.

9. **Tool governance** — Where the product advertises tool allow/deny or MCP attachment, administrators **must** be able to apply that governance through documented configuration so that authors cannot invoke disallowed tools solely by UI manipulation.

---

## Integrator requirements

10. **Scripted extensions** — Integrators **must** be able to add sandbox Groovy tools, script-backed LLM identifiers, and script-backed image generators in the repository paths and registration shapes documented in the [Studio plugins guide](studio-plugins-guide.md) and [Scripted tools & imagegen](scripted-tools-and-imagegen.md), and have Studio load them without rebuilding the core TypeScript bundle for those scripts alone.

11. **Overrides** — Where **`spec.md`** promises site-level overrides (for example prompts or `tools.json` policy), integrators **must** be able to supply those overrides from site `config/studio` content as documented.

---

## Optional / experimental requirements (autonomous widget)

12. **Autonomous mode** — If the Autonomous assistants widget is installed and configured, the plugin **must** enforce the documented scheduling, scope, and in-memory semantics so administrators can predict lifecycle (including loss of state on JVM restart) as described in **[`spec.md`](../internals/spec.md#autonomous-assistants-widget-tools-panel)** and the [Autonomous assistants widget](autonomous-assistants-widget.md) guide. This area remains **experimental**; it **must not** be documented as a production-grade job scheduler.

---

## Technical and release requirements

13. **Spec alignment** — Any change that adds, removes, or materially alters author-visible behavior, configuration contracts, or security boundaries **must** update **[`spec.md`](../internals/spec.md)** (and companions where applicable) in the same release train, per **[`CONTRIBUTING.md`](../../CONTRIBUTING.md)**.

14. **Studio baseline** — The plugin **must** target the Crafter Studio branch documented for this repository (see **`spec.md`** and the Studio plugins guide); breaking Studio API changes **must** be accompanied by version and migration notes.

---

## Related documents

| Need | Document |
|------|----------|
| How to configure a site | [Configuration guide](configuration-guide.md) |
| Model identifiers and provider matrix | [LLM configuration](llm-configuration.md) |
| Engineering contracts and behavior | [`spec.md`](../internals/spec.md) |
