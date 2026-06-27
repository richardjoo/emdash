# CMS Orchestrator

Internal governance for running `richardjoo/emdash` as the orchestration source of truth for child EmDash site repositories.

## Scope

- `richardjoo/emdash` is the CMS source-of-truth repo.
- Child site repos such as `richardjoo/richardjoo-com` consume the CMS and apply site-specific configuration, content, and operations.
- A child site repo may represent a single branded site or a multi-tenant vertical platform that serves many tenant domains.
- Reference/template repos such as `richardjoo/saas-template` are governed here as starter assets, not as live child CMS sites.
- These docs regulate how AI agents work across the orchestrator repo, child site repos, and starter/template repos.

## Default Dependency Policy

The default policy for child sites is:

- Consume released npm packages only.
- Allow a site-local patch only as a documented exception.
- Remove the patch as soon as the consumed package release contains the needed fix.

Disallowed by default:

- Direct Git dependencies to `richardjoo/emdash`
- Cross-repo workspace links
- Unpublished tarball consumption
- Ad hoc branch or commit pinning

These are emergency-only exceptions and require an explicit orchestrator decision plus a registry entry describing why they exist and when they are removed.

## Mode Selection

| Mode | Use when | Owner |
| --- | --- | --- |
| Single-agent mode | Upstream sync, package/runtime changes, dependency alignment, patch removal, shared security/config work | Orchestrator agent |
| Two-agent mode | Site-local work only: content, images, copy, layout tweaks, page SEO, non-contract local ops | Site agent under orchestrator handoff |
| Hybrid mode | Complex work where the package contract changes first and site-specific execution follows | Orchestrator agent + site agent with strict handoff |

## Hard Rules

- Child sites do not invent CMS/package behavior independently.
- Any package-contract change starts in single-agent mode.
- Two-agent mode is forbidden from changing package dependencies, EmDash patches, or lockstep CMS config unless the orchestrator explicitly authorizes it.
- Every active site-local patch must be tracked in the child-site registry with an explicit removal trigger.

## Documents

- [SINGLE_AGENT_MODE.md](SINGLE_AGENT_MODE.md) -- authoritative sequence for orchestrator-led cross-repo work
- [TWO_AGENT_HANDOFF_CONTRACT.md](TWO_AGENT_HANDOFF_CONTRACT.md) -- handoff fields and boundaries for site-local delegated work
- [MULTI_TENANT_PLATFORM_ARCHITECTURE.md](MULTI_TENANT_PLATFORM_ARCHITECTURE.md) -- recommended repo, domain, backend, and template model for future vertical platforms
- [AUTH_AND_DASHBOARD_STRATEGY.md](AUTH_AND_DASHBOARD_STRATEGY.md) -- session boundaries, custom-domain auth rules, and dashboard placement strategy
- [TENANT_CONTENT_AND_OPERATIONS_MODEL.md](TENANT_CONTENT_AND_OPERATIONS_MODEL.md) -- how business owners, team members, and AI agents share content ownership safely
- [LAUNCH_AND_MAINTENANCE_PLAYBOOK.md](LAUNCH_AND_MAINTENANCE_PLAYBOOK.md) -- fast-launch and low-touch maintenance guidance for scaling many businesses per vertical
- [CHILD_SITE_REGISTRY.md](CHILD_SITE_REGISTRY.md) -- active child sites, their consumption state, and patch exceptions
- [TEMPLATE_AND_STARTER_REGISTRY.md](TEMPLATE_AND_STARTER_REGISTRY.md) -- starter/reference repos such as the SaaS-side template foundation
- [CHILD_SITE_DOC_STANDARD.md](CHILD_SITE_DOC_STANDARD.md) -- minimum documentation set every child site must maintain
- [templates/site-registry-entry.template.md](templates/site-registry-entry.template.md) -- copy/paste template for adding a new site to the registry
- [templates/site-runbook.template.md](templates/site-runbook.template.md) -- required runbook skeleton for each child site
- [templates/site-status.template.md](templates/site-status.template.md) -- current-state snapshot skeleton for each child site
