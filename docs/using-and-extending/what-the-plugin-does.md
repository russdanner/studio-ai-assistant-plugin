# What the AI Assistant plugin does

This page describes **what you get** from the plugin in everyday terms. It does **not** cover installation steps, configuration keys, file paths, or how the code is structured—those live in the [configuration guide](configuration-guide.md), [LLM configuration](llm-configuration.md), and the [technical specification](../internals/spec.md).

## For content authors

- **Chat with an AI** while you work in Crafter Studio—where your site enables it—such as from the rich text editor (TinyMCE), from a dedicated panel on content forms, or from the **Helper** entry in the preview toolbar and/or the Tools Panel.
- **Use different assistants (“agents”)** if your site defines more than one, each potentially tuned for a different task or audience.
- **Bring context into the chat** (for example the current field or editor selection, depending on where you opened the assistant) so answers relate to what you are editing.
- **Put AI-generated text back into the editor** when you use the TinyMCE integration and choose to insert the reply.
- **Generate images** when your site turns that on and chooses a supported image backend.

## For Studio and site administrators

- **Turn features on per site** by registering the plugin and configuring **agents** (names, instructions, which model to use, optional tools and schedules).
- **Pick model providers** your organization supports—cloud APIs, local models, optional CrafterQ-hosted chat, or custom script-backed providers—within the limits documented for each option.
- **Control tools** (what the assistant is allowed to call): built-in catalog, allow/deny style policy where supported, optional connections to **MCP** servers for extra tools, and optional **site-defined** scripted tools when your integrator adds them.

## For integrators (without the deep technical spec)

- **Extend behavior** with sandbox scripts: custom tools authors can invoke, custom **LLM** backends wired by id, and custom **image generation** scripts, following the layout and contracts described in the [Studio plugins guide](studio-plugins-guide.md) and [Scripted tools & imagegen](scripted-tools-and-imagegen.md).
- **Adjust prompts and tool policy** from site configuration where the plugin supports overrides (see the configuration guide’s advanced sections).

## Optional: autonomous assistants

Some sites add an **Autonomous assistants** widget so selected agents can run on a **schedule** inside Studio, on the server, with **in-memory** state. That mode is **experimental**: useful for prototypes and demos, not a full substitute for production-grade scheduled jobs. Details and caveats: [Autonomous assistants widget](autonomous-assistants-widget.md) and the [spec](../internals/spec.md#autonomous-assistants-widget-tools-panel).

## What to read next

| If you need… | Open |
|--------------|--------|
| Step-by-step site setup | [Configuration guide](configuration-guide.md) |
| Model names, secrets, and which features each provider supports | [LLM configuration](llm-configuration.md) |
| Image backends | [Image generation](image-generation.md) |
| Exact UI, API, and build contracts | [spec.md](../internals/spec.md) |
