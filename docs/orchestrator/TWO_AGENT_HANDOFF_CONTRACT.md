# Two-Agent Handoff Contract

Two-agent mode is allowed only after the orchestrator agent freezes the package contract and hands a child site explicit boundaries.

## Preconditions

- `richardjoo/emdash` contract work is already merged, or the orchestrator explicitly says the child site should not wait.
- The child site task is site-local in scope.
- The child site agent does not need to redefine CMS behavior.

## Forbidden Without Explicit Approval

- Changing `emdash`, `@emdash-cms/*`, `astro`, `@astrojs/*`, or `wrangler` dependencies
- Adding, removing, or editing `patchedDependencies`
- Changing shared CMS integration behavior in a way that would need to be copied to sibling sites

## Required Handoff Fields

Copy and fill this block before a site-local delegated task:

```markdown
## Orchestrator Handoff

- Child site repo:
- Orchestrator repo branch/commit:
- Child site branch/commit:
- Package consumption target:
- Local patch policy:
- Task type: site-local only / contract-following only
- Allowed files/areas:
- Explicitly forbidden files/areas:
- Required commands to verify:
- Expected output:
- Removal or follow-up trigger:
```

## Completion Rules

- The site agent reports only within the handed scope.
- If the task reveals a CMS/package bug, the site agent stops and hands it back to the orchestrator agent.
- The site agent does not silently expand scope into dependency or package work.
