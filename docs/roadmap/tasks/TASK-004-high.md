# TASK-004 — Implement schemas and build-time validation

- **Recommended reasoning effort:** high
- **Status:** Ready after TASK-002
- **Depends on:** TASK-002
- **Primary outputs:** typed data contracts and failing-fast content validation

## Outcome

Implement the model, component, scene, region, port, connection, service-dependency, source, and validation-status contracts described in `docs/architecture/DATA_MODEL.md`.

## Context

Spatial regions, physical connections, and removal dependencies are separate graphs. Geometry belongs to a scene and component. Visual depth must never imply service order.

## Work

1. Create TypeScript types and runtime schemas for every content record.
2. Validate unique IDs, referenced IDs, image dimensions, supported shapes, point bounds, and depth ranges.
3. Detect missing sources and invalid confidence states.
4. Detect cycles in removal dependencies and report the exact cycle.
5. Add a build-time command that validates all lesson data before application compilation or deployment.
6. Provide minimal valid and intentionally invalid fixtures for tests.

## Acceptance criteria

- Invalid IDs, references, geometry, depth values, and dependency cycles fail with actionable messages.
- Valid multi-region and multi-scene components pass.
- Build and deployment commands cannot silently skip content validation.
- Tests demonstrate that visual depth and removal dependencies are independent.
