# TASK-005 — Build the Dell 9712a component catalog

- **Recommended reasoning effort:** high
- **Status:** Ready after TASK-001 and TASK-004
- **Depends on:** TASK-001, TASK-004
- **Primary output:** validated Dell 9712a component and relationship data

## Outcome

Create the first structured catalog of components, aliases, quantities, categories, sources, and known relationships for the Dell Server 9712a.

## Context

Start from `docs/research/DELL_9712A.md`, the source ledger, and Dell's “Inside the system” inventory. Use Dell terms as canonical names, repair-floor terms as plain names, and local lesson terms as aliases. Never silently promote an invented name to canonical status.

## Work

1. Add records for the overview-scene assemblies and visible components.
2. Include at minimum the bays, E1.S drives/backplanes, front I/O, PSB, OSFP, BlueField-3, NIC, PDB, BMC, fans, manifolds, cold plates, busbars, Bianca boards, HMC, M.2 riser, and TPM.
3. Record quantities and side/index only where a source supports them.
4. Add known ports, cables, connections, and blockers with independent validation states.
5. Attach source-ledger IDs to material claims.
6. Leave location geometry empty; that belongs to later tracing tasks.

## Acceptance criteria

- All records pass TASK-004 validation.
- Canonical names, aliases, and provisional names are distinguishable.
- No unknown acronym expansion is invented.
- No service tag or device-specific identifier appears.
- Unsupported connections and removal steps remain `needs-review` rather than being guessed.
