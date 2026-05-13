# Helper widget (Tools Panel / preview toolbar)

Embeds the **Studio AI assistant** so authors open chat on demand. Each agent’s **`<llm>`** selects the backend; see [llm-configuration.md](llm-configuration.md).

## Minimal `ui.xml` snippet

The **`plugin` id must be the full descriptor id** `org.craftercms.aiassistant.studio`. A shortened id loads the wrong path and Studio cannot resolve the bundle.

```xml
<widget id="craftercms.components.ToolsPanel">
  <configuration>
    <widgets>
      <widget id="craftercms.components.aiassistant.Helper">
        <plugin id="org.craftercms.aiassistant.studio" type="aiassistant" name="components" file="index.js"/>
        <configuration ui="IconButton" />
      </widget>
    </widgets>
  </configuration>
</widget>
```

## “Component craftercms.components.aiassistant.Helper not found”

| Check | Action |
|-------|--------|
| **`plugin` element** | `id="org.craftercms.aiassistant.studio"` (matches `craftercms-plugin.yaml` and `sources/index.tsx` `PluginDescriptor.id`) |
| **Install** | From `sources/`: `yarn package`, then `./scripts/install-plugin.sh` (or Marketplace) so **`…/studio/aiassistant/components/index.js`** exists in the site sandbox |
| **Cache** | Hard refresh Studio after deploy |

Deeper wiring: [spec.md](../internals/spec.md), paths: [studio-plugins-guide.md](studio-plugins-guide.md). For a merged **Tools Panel + Preview Toolbar + Autonomous** fragment, see [examples/studio-ui-aiassistant-fragments.xml](../examples/studio-ui-aiassistant-fragments.xml).
