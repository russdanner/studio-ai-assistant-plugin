# Contributing

This repo is the **Crafter Studio AI Assistant** plugin. The steps below are for people changing **this** codebase (not for site operators configuring `ui.xml` in a project).

- Clone the repo. From **`sources/`**: `yarn install`, then **`yarn package`** before installing the built plugin into a site.
- **`yarn start`** — local development UI at `http://localhost:3000/`.
- Cursor rules / skills — keep **[docs/CURSOR_PROJECT_POLICY.md](docs/CURSOR_PROJECT_POLICY.md)** in sync with repository conventions.
- Behavior or contract changes — update **[docs/internals/spec.md](docs/internals/spec.md)** and/or the guides under **[docs/README.md](docs/README.md)**.

Debug logging (logger names, JVM flags): **[docs/internals/README.md](docs/internals/README.md#debug-logging)**.
