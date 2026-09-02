# TASK-027 — Model cable installation order and obstructions

- **Recommended reasoning effort:** xhigh
- **Status:** Ready after TASK-025 and technician review
- **Depends on:** TASK-025, TASK-021
- **Primary outputs:** evidence-backed assembly-order graph and strategy viewer

## Outcome

Teach when a cable, hose, fan, card, bracket, or tray must be installed or routed relative to another operation.

## Context

Connection and route geometry do not prove assembly order. Claims such as routing smaller leads before heavy coolant hoses or installing outer fans last require exact procedure evidence or verified technician observations.

## Work

1. Define operation records for place, plug, route, fasten, unfasten, and verify-clearance actions.
2. Express prerequisites as a directed graph separate from component depth and cable crossings.
3. Cite each mandatory order edge to a Dell procedure or verified observation.
4. Distinguish required prerequisites from optional efficiency strategies.
5. Detect dependency cycles and contradictory side/configuration claims.
6. Add a step-through workbench view that highlights only the affected nodes and routes.
7. Include a recovery note when an operation is performed out of order, if validated.

## Acceptance criteria

- No order edge is inferred solely from diagram overlap or z-depth.
- Required and recommended orderings are visibly distinct.
- Cycles or missing prerequisites fail validation.
- A technician reviewer signs off on every procedural sequence before publication.
- The UI continues to warn when a sequence is incomplete.
