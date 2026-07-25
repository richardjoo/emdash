# Cross-Reference Map

## Orchestrator Sources

| Document | Why it mattered |
| --- | --- |
| `docs/orchestrator/CHILD_SITE_REGISTRY.md` | Source of truth for the child-site consume target and verification date |
| `docs/orchestrator/SINGLE_AGENT_MODE.md` | Required serial child-site follow-up after the orchestrator repo was current |

## Child-Site Sources

| File | Why it mattered |
| --- | --- |
| `richardjoo-com/package.json` | Direct source of consumed package versions |
| `richardjoo-com/pnpm-lock.yaml` | Lockfile refreshed to the new released package versions |
| `richardjoo-com/AGENTS.md` | Declared the child-site docs/handover read order |
| `richardjoo-com/docs/handover/README.md` | Current site-specific truth hierarchy and resume context |
| `richardjoo-com/docs/handover/handover-summary.md` | Confirmed the outstanding site-local priorities outside this upgrade pass |

## Verification Commands

| Command | Purpose |
| --- | --- |
| `pnpm install` | Refresh lockfile and resolve released `0.30.0` packages |
| `pnpm typecheck` | Verify child-site type safety after package alignment |
| `pnpm build` | Verify production build after package alignment |
