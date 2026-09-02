# Implementation task index

The initial decisions are complete: the first model is the Dell Server 9712a, the runtime interaction is SVG geometry backed by JSON, the first public scene uses an original realistic generated illustration, Dell names are canonical, and the first-release scope is fixed.

Each remaining task is a self-contained packet under [`tasks/`](tasks/). A task owner should be able to execute one packet without reading preceding task packets. Dependencies identify required artifacts rather than assumed conversational history.

Completed, out-of-sequence work is recorded under [`detours/`](detours/) so the numbered task history remains stable. A detour may satisfy an immediate need while leaving a later task responsible for final-release hardening.

## Effort labels

Filenames use the recommended reasoning effort for the task:

- `low` — bounded documentation, metadata, or mechanical work;
- `medium` — balanced implementation with clear patterns and acceptance criteria;
- `high` — multi-file implementation, visual judgment, or nontrivial validation;
- `xhigh` — the hardest accuracy-sensitive spatial or systems work.

These labels are recommendations, not model pins. Current OpenAI model guidance describes `medium` as a balanced starting point and reserves higher levels for work where additional reasoning produces a measured quality gain: [OpenAI model guidance](https://developers.openai.com/api/docs/guides/latest-model).

## Phase 1 — Foundation

- [x] [TASK-001-low — Establish the content source ledger](tasks/TASK-001-low.md)
- [x] [TASK-002-medium — Scaffold the GitHub Pages application](tasks/TASK-002-medium.md)
- [x] [TASK-003-high — Build the visual system and study workspace](tasks/TASK-003-high.md)
- [x] [TASK-004-high — Implement schemas and build-time validation](tasks/TASK-004-high.md)
- [x] [TASK-005-high — Build the Dell 9712a component catalog](tasks/TASK-005-high.md)

## Phase 2 — Approved realistic image

- [ ] [TASK-006-high — Generate the realistic top-open illustration](tasks/TASK-006-high.md)
- [ ] [TASK-007-xhigh — Validate and revise the generated illustration](tasks/TASK-007-xhigh.md)
- [ ] [TASK-008-medium — Prepare the approved production image asset](tasks/TASK-008-medium.md)

## Completed detours

- [x] [DETOUR-001-high — Publish the tabbed study shell](detours/DETOUR-001-high-publish-tabbed-study-shell.md) — exposes the Visualizer (appearance → name), Location essay (name → chassis location), and Acronyms & labels views; establishes the initial Pages pipeline.
- [x] [DETOUR-002-high — Prototype the cable workbench](detours/DETOUR-002-high-prototype-cable-workbench.md) — adds a chassis-anchored cable map, explicit crossing bridges, evidence states, and the cable-mastery roadmap.

## Phase 3 — Spatial interaction

- [ ] [TASK-009-high — Trace surface component geometry](tasks/TASK-009-high.md)
- [ ] [TASK-010-xhigh — Trace buried geometry and add annotation diagnostics](tasks/TASK-010-xhigh.md)
- [ ] [TASK-011-high — Implement hover, focus, and locked selection](tasks/TASK-011-high.md)
- [ ] [TASK-012-high — Implement X-ray depth interaction](tasks/TASK-012-high.md)
- [ ] [TASK-013-high — Implement details, connections, and service dependencies](tasks/TASK-013-high.md)

## Phase 4 — Learning modes

- [ ] [TASK-014-medium — Implement Study, Locate, and Name modes](tasks/TASK-014-medium.md)
- [ ] [TASK-015-high — Implement Connection and Service-order modes](tasks/TASK-015-high.md)
- [ ] [TASK-016-medium — Add device-local progress](tasks/TASK-016-medium.md)

## Phase 5 — Quality and release

- [ ] [TASK-017-high — Complete accessibility and responsive behavior](tasks/TASK-017-high.md)
- [ ] [TASK-018-high — Add automated tests and content checks](tasks/TASK-018-high.md)
- [ ] [TASK-021-high — Conduct technician accuracy review and corrections](tasks/TASK-021-high.md)
- [ ] [TASK-019-medium — Configure GitHub Pages deployment](tasks/TASK-019-medium.md)
- [ ] [TASK-020-low — Add release metadata and run the production smoke test](tasks/TASK-020-low.md)

## Phase 6 — Expansion

- [ ] [TASK-022-xhigh — Add close-up and disassembly scene illustrations](tasks/TASK-022-xhigh.md)
- [ ] [TASK-023-high — Build a region authoring tool](tasks/TASK-023-high.md)
- [ ] [TASK-024-high — Generalize lesson packs for additional models](tasks/TASK-024-high.md)

## Phase 7 — Cable-management mastery

- [ ] [TASK-025-xhigh — Verify the connector and cable inventory](tasks/TASK-025-xhigh.md)
- [ ] [TASK-026-high — Build lane-aware route authoring](tasks/TASK-026-high.md)
- [ ] [TASK-027-xhigh — Model cable installation order and obstructions](tasks/TASK-027-xhigh.md)
- [ ] [TASK-028-high — Add cable and connector learning modes](tasks/TASK-028-high.md)
- [ ] [TASK-029-high — Add tools, fasteners, and refastening order](tasks/TASK-029-high.md)

## Completed decisions

- [x] Identify the Dell Server 9712a and its GB200-era rack context.
- [x] Select SVG + JSON rather than a learner-facing grid.
- [x] Separate visual depth, physical connections, and removal dependencies.
- [x] Approve a realistic generated illustration as the first public image.
- [x] Approve canonical Dell names with plain-language aliases.
- [x] Approve the first-release learning scope.
