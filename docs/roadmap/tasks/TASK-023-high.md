# TASK-023 — Build a region authoring tool

- **Recommended reasoning effort:** high
- **Status:** Expansion task after the manual tracing workflow is proven
- **Depends on:** TASK-010 and stable data schemas
- **Primary output:** local/offline geometry editor compatible with lesson maps

## Outcome

Reduce the cost of adding and correcting spatial regions through a focused authoring interface.

## Context

The editor may be a development-only route or a separate local tool. It must produce the same validated JSON consumed by the learner app. A grid is allowed as an authoring aid but is not the runtime representation.

## Work

1. Load a scene image, catalog, and existing map.
2. Draw and edit polygons or paths with point insertion, deletion, and drag controls.
3. Assign component, depth, visibility, validation status, and source note.
4. Support multiple shapes per component and optional grid snapping/cell painting.
5. Preview hit testing, overlap stacks, and learner-mode highlighting.
6. Export deterministic, schema-valid JSON and preserve unknown fields safely.

## Acceptance criteria

- A reviewer can create, edit, inspect, and export multi-region geometry without hand-editing JSON.
- Exported maps pass the same build-time validator.
- Grid-assisted work converts to supported region geometry or an explicitly supported mask.
- The tool never publishes or deploys changes automatically.
- Undo/redo or equivalent recovery prevents routine edit loss.
