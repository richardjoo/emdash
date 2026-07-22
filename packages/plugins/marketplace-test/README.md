# Marketplace Test Plugin

End-to-end test plugin for the EmDash marketplace publish and audit pipeline.

## What it does

- Hooks into `content:beforeSave` to log save events
- Exposes a `/ping` route and an `/events` route
- Declares `content:read` and `content:write` capabilities
- Includes icon and screenshot assets for image audit testing

## Usage

Bundle and publish to a marketplace instance:

```bash
pnpm build
emdash-plugin bundle
# upload dist/plugin-marketplace-test-0.1.2.tar.gz somewhere public
emdash-plugin publish --url https://example.com/plugin-marketplace-test-0.1.2.tar.gz
```

## Testing

This plugin is designed to exercise every step of the marketplace pipeline:

1. **Build** — `pnpm build` produces `dist/plugin.mjs`, `dist/manifest.json`, and `dist/index.mjs`
2. **Bundle** — `emdash-plugin bundle` packs the built artifacts plus icon, screenshot, and README
3. **Upload** — the hosted tarball URL is published into the registry release record
4. **Code audit** — Workers AI analyzes the bundled plugin runtime (should pass — clean code)
5. **Image audit** — Workers AI analyzes `icon.png` and `screenshots/` (should pass)
6. **Status resolution** — enforcement mode determines final status
