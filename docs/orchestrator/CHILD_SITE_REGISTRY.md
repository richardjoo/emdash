# Child Site Registry

Every child site repo that consumes `richardjoo/emdash` must be listed here. A repo may represent one branded site or a whole multi-tenant vertical platform.

## Registry Columns

| Site / Platform    | Repo                        | Production URL(s)        | CMS consume target                                                                            | Default policy             | Local patch exception                                                                                                                        | Mode default                                                         | Docs status                                                                                                                   | Last verified | Notes                                                                                                                    |
| ------------------ | --------------------------- | ------------------------ | --------------------------------------------------------------------------------------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Systems and Syntax | `richardjoo/richardjoo-com` | `https://richardjoo.com` | `emdash@0.31.1`, `@emdash-cms/cloudflare@0.31.1`, `astro@7.0.3`, `@astrojs/cloudflare@14.0.1` | Released npm packages only | none | Single-agent for CMS upgrades; two-agent allowed for site-local work | Partial standardization: `README.md`, `AGENTS.md`, and custom docs present; standard runbook/status files still to be aligned | 2026-07-30    | Single-brand reference site; package alignment to released `0.31.1` completed and pushed. Cloudflare Email Sending is configured and selected in production, and live test delivery now succeeds when notifications target `richardjoo@gmail.com` while sender identity remains `aiopsforfounders@richardjoo.com`. |

## Rules

- Add a new row before or with the first substantive child-site PR.
- Update the `CMS consume target`, `Local patch exception`, and `Last verified` columns on every orchestrator-led upgrade.
- `Local patch exception` must say either `none` or a concrete file/path with a removal trigger.
