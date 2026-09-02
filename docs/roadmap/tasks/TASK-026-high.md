# TASK-026 — Build lane-aware route authoring

- **Recommended reasoning effort:** high
- **Status:** Ready after TASK-025
- **Depends on:** TASK-025
- **Primary output:** maintainable route geometry and crossing diagnostics

## Outcome

Replace hand-written SVG path strings with reviewable route data that can grow without returning to edge-through-node clutter.

## Context

The prototype proves deterministic chassis anchoring but directly authors SVG paths. A larger verified cable set needs structured waypoints, named trunk lanes, port anchors, collision checks, and explicit crossing order.

## Work

1. Store node rectangles, named port anchors, reserved lanes, and orthogonal waypoints as data.
2. Convert waypoints into rounded SVG paths at runtime.
3. Detect any segment entering an unrelated node and fail validation.
4. Detect crossings and require an explicit over/under choice.
5. Generate bridge arcs and background gaps from the crossing record.
6. Add an annotation mode showing lanes, port names, bounds, crossings, and collision errors.
7. Preserve usable route inspection at narrow viewport sizes.

## Acceptance criteria

- No production path depends on a hand-authored SVG `d` string.
- A route cannot pass through an unrelated node without a validation failure.
- Every crossing has one declared upper route.
- Route geometry remains stable across page reloads and viewport sizes.
- Keyboard and touch selection remain available.
