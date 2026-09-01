# TASK-024 — Generalize lesson packs for additional models

- **Recommended reasoning effort:** high
- **Status:** Expansion task after the Dell 9712a release
- **Depends on:** stable schemas, authoring workflow, and first-release lessons
- **Primary output:** model-independent lesson-pack contract and second-model proof

## Outcome

Turn the Dell 9712a implementation into a reusable platform where new computer models are data and assets rather than forks of application code.

## Context

A lesson pack contains model metadata, components, scenes, maps, connections, service dependencies, sources, and optional quiz configuration. The shared application engine owns interaction and learning behavior.

## Work

1. Audit the code for 9712a-specific assumptions and replace them with pack configuration.
2. Define a versioned pack manifest and compatibility policy.
3. Isolate each model's assets and data beneath a stable directory.
4. Add import/export validation suitable for reviewed lesson packs.
5. Build a minimal second-model fixture to prove reuse without copying 9712a facts.
6. Document how a contributor creates, validates, reviews, and adds a model.

## Acceptance criteria

- The shared engine loads at least two packs without model-specific conditionals.
- Invalid or incompatible packs fail with actionable errors.
- Each model retains independent sources, validation status, geometry, and imagery.
- A contributor can add a model without reading previous task packets or modifying core interaction code.
- Private device identifiers remain forbidden by the pack schema and contribution guidance.
