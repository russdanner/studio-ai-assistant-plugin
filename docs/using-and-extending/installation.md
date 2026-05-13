# Installing the plugin

## Studio UI

Install via **Project Tools → Plugin Management → Search & install**.

## Local / from-repo install

From repo root (with `CRAFTER_DATA` and `CRAFTER_STUDIO_TOKEN` set when using scripts), after **`yarn package`** in **`sources/`**:

| Method | Notes |
|--------|--------|
| **`./scripts/install-plugin.sh`** | No args → default site **`new-demo`**; pass site id as first arg (e.g. **`./scripts/install-plugin.sh qtest`**) |
| [CrafterCMS CLI](https://docs.craftercms.org/en/4.1/by-role/common/crafter-cli.html) `copy-plugin` | Point `--path` at this repository |
| Marketplace **`/studio/api/2/marketplace/copy`** | POST JSON `siteId` + `path` to the plugin directory |

Example **`copy`** body (replace site and path):

```json
{
  "siteId": "new-demo",
  "path": "/absolute/path/to/plugin-studio-crafterq"
}
```

Example CLI:

```bash
./crafter-cli copy-plugin -e local -s new-demo --path /absolute/path/to/plugin-studio-crafterq
```

Example **`curl`** (replace host, JWT, site, path):

```bash
curl --location --request POST 'http://localhost:8080/studio/api/2/marketplace/copy' \
  --header 'Authorization: Bearer YOUR_JWT_TOKEN' \
  --header 'Content-Type: application/json' \
  --data-raw '{"siteId":"new-demo","path":"/absolute/path/to/plugin-studio-crafterq"}'
```

## Maintainer note (optional)

Default local test site id is often **`new-demo`**. After install, confirm the site sandbox contains the plugin static assets under **`config/studio/static-assets/plugins/org/craftercms/aiassistant/studio/aiassistant/`** (see [studio-plugins-guide.md](studio-plugins-guide.md) for path rules).

## Build before install

From **`sources/`**: `yarn install`, then **`yarn package`** (Rollup + form-control verify). See root **Contributing** for dev server vs package workflow.
