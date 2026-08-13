# Next AI Guidelines

- Treat `origin/main@5356c303` as the synced fork baseline for this documentation pass.
- Use Node.js `v22.13.0+` in human-facing setup docs unless the pinned package manager or `.nvmrc` changes again.
- Do not broaden `getStaticPaths()` guidance for themes or reusable templates; those content routes should stay SSR unless there is an explicit static-output requirement.
- When documenting sandboxed plugins, distinguish the Cloudflare sandbox runner's D1 bridge from the Node.js workerd runner's configured-database bridge.
- The root `package.json` `engines.node` value was intentionally left unchanged by user decision during this pass.
