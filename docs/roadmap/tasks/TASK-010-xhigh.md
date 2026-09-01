# TASK-010 — Trace buried geometry and add annotation diagnostics

- **Recommended reasoning effort:** xhigh
- **Status:** Ready after TASK-009
- **Depends on:** TASK-009, TASK-005, TASK-004
- **Primary outputs:** depth-1/2 map data and reviewer diagnostics

## Outcome

Add defensible geometry for buried components and a diagnostic overlay that makes spatial review practical.

## Context

Depth means visual occlusion only. A depth-1 or depth-2 region may overlap shallower shapes, but it must not claim a removal sequence. Fully hidden geometry requires a documented source, disassembly view, or technician confirmation; do not invent silhouettes from a name alone.

## Work

1. Identify buried components supported by Dell removal images or verified observation.
2. Trace only defensible extents and record the evidence for each region.
3. Add diagnostic controls for region ID, component ID, depth, point handles, coordinates, outlines, and optional grid snapping.
4. Show the hit stack at the pointer position for overlapping regions.
5. Flag regions whose location or shape still requires technician review.

## Acceptance criteria

- Depth values are consistent within the scene and pass validation.
- Every fully hidden region cites evidence or is explicitly marked provisional.
- Diagnostic mode can isolate one component, one depth, or all overlaps.
- Normal learner mode does not expose diagnostic controls.
- No removal relationship is inferred from depth alone.
