# TASK-009 — Trace surface component geometry

- **Recommended reasoning effort:** high
- **Status:** Ready after TASK-005 and TASK-008
- **Depends on:** TASK-005, TASK-008, TASK-004
- **Primary output:** depth-0 region map for the top-open scene

## Outcome

Create precise SVG-compatible polygon or path data for every approved component visibly exposed at depth 0.

## Context

Geometry is stored in the scene's JSON sidecar using production-image pixel coordinates. One component may own multiple disconnected shapes. Do not include hidden surfaces merely to make a polygon easier.

## Work

1. Establish the scene `viewBox` from exact production dimensions.
2. Trace visible surface regions for the approved catalog subset.
3. Use multiple shapes for disconnected visible areas of one component.
4. Keep thin cables and small connectors selectable without swallowing adjacent parts; use a separate invisible hit expansion only if documented.
5. Add region IDs and source/validation notes.
6. Review every polygon with outlines enabled at several zoom levels.

## Acceptance criteria

- Selecting any visible part of a component activates the correct component.
- Regions do not activate over unrelated hardware or empty background.
- All points are in bounds and pass schema validation.
- Repeated assemblies such as fans are individually identifiable and can also share a group relationship.
- Hidden parts are not encoded as depth 0.
