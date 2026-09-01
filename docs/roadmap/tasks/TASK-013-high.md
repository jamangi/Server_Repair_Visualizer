# TASK-013 — Implement details, connections, and service dependencies

- **Recommended reasoning effort:** high
- **Status:** Ready after TASK-005, TASK-011, and TASK-004
- **Depends on:** TASK-005, TASK-011, TASK-004
- **Primary output:** component information and relationship exploration

## Outcome

Make a selected component useful by showing its identity, aliases, purpose, ports, connections, and validated service blockers.

## Context

Connections and service dependencies are distinct graphs. A cable may connect two boards without blocking removal, and a bracket may block removal without being electrically connected. Reviewer-only confidence information must not clutter normal study mode.

## Work

1. Present canonical name, plain name, aliases, category, quantity, description, and part number when appropriate.
2. Display connected components and the cable/port relationship when known.
3. Highlight connected endpoints without changing the selected component unexpectedly.
4. Display validated disconnect/remove prerequisites from the dependency graph.
5. Add reviewer mode for sources and validation status.
6. Handle unknown or disputed facts without inventing filler.

## Acceptance criteria

- Canonical and plain-language names remain distinguishable.
- Connection direction is not misrepresented as signal direction.
- Service blockers cite validated data and never derive from depth.
- Missing facts have a neutral unknown state.
- Reviewer metadata is accessible but hidden from ordinary learner mode.
