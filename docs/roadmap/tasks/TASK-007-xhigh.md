# TASK-007 — Validate and revise the generated illustration

- **Recommended reasoning effort:** xhigh
- **Status:** Ready after TASK-006
- **Depends on:** TASK-006, TASK-005, TASK-001
- **Primary outputs:** reviewed image candidate, discrepancy report, and validation status

## Outcome

Compare the generated top-open illustration against Dell documentation and the component catalog, correct material errors, and produce a candidate safe for geometry work.

## Context

Photorealism is not evidence of correctness. Generated components, cable routes, quantities, colors, and spatial relationships must be treated as suspect until checked. Dell's diagram controls layout facts; technician knowledge resolves what public documentation cannot show.

## Work

1. Create a checklist for every required zone and countable assembly.
2. Compare orientation, bay arrangement, eight-fan count, two Bianca boards, cold plates, manifolds, PDB/BMC, busbars, E1.S/front I/O, OSFP, BlueField/PSB, HMC, M.2 riser, and TPM placement.
3. Record discrepancies as `confirmed error`, `unverifiable`, or `cosmetic`.
4. Use ImageGen editing for localized corrections where possible; regenerate only when the structure is broadly wrong.
5. Repeat the checklist after the final edit.
6. Mark the result `documentation-validated`, `technician-review-needed`, or `rejected`.

## Acceptance criteria

- Counts and high-level layout match authoritative documentation.
- No known impossible connection, duplicated assembly, or contradictory orientation remains.
- Unverifiable details are documented and queued for technician review.
- The final status is explicit; `technician-review-needed` is acceptable for continued prototyping but not for a claim of service-manual accuracy.
- The discrepancy report is committed beside the image manifest.
