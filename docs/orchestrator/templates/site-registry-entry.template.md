# Site Registry Entry Template

Copy this row into `docs/orchestrator/CHILD_SITE_REGISTRY.md` when onboarding a new child site.

```markdown
| Site        | Repo             | Production URL          | CMS consume target                            | Default policy             | Local patch exception                          | Mode default                                                         | Docs status                  | Last verified  | Notes                                          |
| ----------- | ---------------- | ----------------------- | --------------------------------------------- | -------------------------- | ---------------------------------------------- | -------------------------------------------------------------------- | ---------------------------- | -------------- | ---------------------------------------------- |
| <site name> | `<owner>/<repo>` | `<https://example.com>` | `<emdash version + adapter/runtime versions>` | Released npm packages only | `none` or `<patch path>`, plus removal trigger | Single-agent for CMS upgrades; two-agent allowed for site-local work | `<complete/partial/pending>` | `<YYYY-MM-DD>` | `<important constraints or environment notes>` |
```
