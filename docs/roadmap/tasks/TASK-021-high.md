# TASK-021 — Conduct technician accuracy review and corrections

Record technician evidence and claim status under the protocol in [`docs/research/SOURCE_LEDGER.md`](../../research/SOURCE_LEDGER.md).

- **Recommended reasoning effort:** high
- **Status:** Ready after the first complete scene and relationships exist
- **Depends on:** TASK-007, TASK-010, TASK-013, TASK-015
- **Primary outputs:** signed-off review checklist and corrected content

## Outcome

Have a repair technician compare the illustration, regions, names, cable endpoints, and service dependencies with the machine and correct anything that public documentation could not establish.

## Context

Generated realism can conceal factual errors. This review is the final accuracy gate before public release. It does not authorize publishing workplace photos or confidential procedures.

## Work

1. Prepare a checklist organized by physical zone and component ID.
2. Review counts, left/right/index naming, visible shape, approximate placement, connection endpoints, and removal prerequisites.
3. Record each result as confirmed, corrected, unresolved, or out of scope.
4. Apply corrections to source data, geometry, or the generated image as appropriate.
5. Rerun validation and tests after corrections.
6. Preserve a privacy-safe review record with date and reviewer role; do not require the reviewer's personal name.

## Acceptance criteria

- No known incorrect component, connection, or removal instruction remains in learner scoring.
- Unresolved facts are hidden, neutral, or marked for reviewer mode.
- Image edits and geometry changes remain synchronized.
- Automated validation and tests pass after corrections.
- The review record clearly states the approved scene and content version.
