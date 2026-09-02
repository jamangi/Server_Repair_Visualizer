# TASK-025 — Verify the connector and cable inventory

- **Recommended reasoning effort:** xhigh
- **Status:** Ready after DETOUR-002
- **Depends on:** TASK-005, DETOUR-002
- **Primary outputs:** complete evidence-backed ports, cables, and endpoint records

## Outcome

Replace the scratch map's partial connection inventory with a connector-level catalog that a technician can audit against the exact 9712a configuration.

## Context

DETOUR-002 deliberately shows only public Dell relationships and clearly marked observations. Many endpoints—including C-Link, BMC/interposer, internal OSFP cabling, NIC A/B, PDB J4 source, and right-bay PCIe paths—remain incomplete. No proximity-based guesses are allowed.

## Work

1. Inventory every utilized socket or plug on each in-scope board and cable.
2. Record printed designators such as J3, J4, J9, J21, J22, JP1, J80, J82, J86, and J117 with the board that owns them.
3. Identify both cable endpoints from Dell procedures or the technician-observation protocol.
4. Give every cable its own component record when it is separately serviceable.
5. Record connector family, cable color/marker, bundle count, and source confidence where supported.
6. Add validator checks for duplicate connector ownership, missing endpoints, and unsupported official status.
7. Update the workbench only from the verified catalog.

## Acceptance criteria

- Every displayed route resolves to two cataloged endpoint ports.
- Every official route cites a procedure that names or unambiguously depicts both endpoints.
- Unverified endpoints remain absent or `needs-review`.
- The same printed designator cannot silently belong to two boards.
- Content validation and endpoint tests pass.
