# Autonomous assistants widget (optional)

Second Studio widget: **`craftercms.components.aiassistant.AutonomousAssistants`**. Same **`plugin`** element as the Helper (`id="org.craftercms.aiassistant.studio"`, `type="aiassistant"`, `name="components"`, `file="index.js"`).

| Aspect | Summary |
|--------|---------|
| **Purpose** | Scheduled, in-memory assistant steps, supervisor, human tasks (prototype) |
| **LLM support** | OpenAI-wire family for steps; see [spec.md](../internals/spec.md) *Autonomous assistants* |
| **Full contract** | REST paths, `control` actions, `autonomousAgents` XML fields: [spec.md](../internals/spec.md) |

## If the widget never appears

| Cause | Fix |
|-------|-----|
| Wrong **`ui.xml` nesting** | **`Helper`** / **`AutonomousAssistants`** must be inside **`ToolsPanel → configuration → widgets`** as sibling `<widget>` rows—not after `</configuration>` |
| Stale merge | Re-run **`./scripts/install-plugin.sh`** from an updated clone, or paste the block from [studio-ui-aiassistant-fragments.xml](../examples/studio-ui-aiassistant-fragments.xml), commit sandbox, sync in Studio |
| **`<icon>`** | Use real `<![CDATA[...]]>` SVG, not HTML-escaped markup |
