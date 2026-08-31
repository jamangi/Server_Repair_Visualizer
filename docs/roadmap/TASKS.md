# Implementation tasks

Each task is sized to produce a reviewable result. Tasks are ordered by dependency; tasks at the same level may be developed in parallel later.

## Phase 0 — Evidence and approval

- [x] **T000 Identify the first server.** Record the Dell Server 9712a identity and rack-scale context with authoritative sources.
- [x] **T001 Choose the interaction architecture.** Record SVG + JSON as the primary approach and separate depth from removal order.
- [ ] **T002 Approve the first publishable reference image.** Resolve A-001 in [`APPROVALS.md`](../decisions/APPROVALS.md).
- [ ] **T003 Establish the content source ledger.** List the Dell manual pages and technician observations allowed for component names, connections, and removal steps.

**Gate:** Geometry may be prototyped with a disposable fixture, but final tracing waits for T002.

## Phase 1 — GitHub Pages application shell

- [ ] **T100 Scaffold a Vite + React + TypeScript static app.** Keep it compatible with a repository subpath and client-side static hosting.
- [ ] **T101 Add the visual design system.** Use an equipment-service palette, compact readable typography, strong focus states, and responsive layout tokens.
- [ ] **T102 Add the main workspace.** Provide a model header, image stage, layer control, component details panel, and non-spatial component list.
- [ ] **T103 Add sample fixture data.** Use a neutral placeholder rectangle and a few fake regions so no unapproved image enters the repository.

**Acceptance:** The page loads locally and from a subpath; mouse, keyboard, and touch can select the same fixture regions.

## Phase 2 — Data and validation

- [ ] **T200 Implement typed model, component, scene, region, connection, and dependency schemas.** Validate JSON at build time.
- [ ] **T201 Add content validation.** Reject duplicate IDs, missing component references, points outside the image bounds, invalid depth values, and dependency cycles.
- [ ] **T202 Add source and confidence fields.** Make uncertain names and relationships visible to reviewers without showing those warnings in normal learner mode.
- [ ] **T203 Create the first Dell 9712a component catalog.** Start with the official “Inside the system” list, then expand from removal procedures and technician notes.

**Acceptance:** Bad maps fail before deployment with a clear message; the catalog contains no service tag.

## Phase 3 — Region authoring and the first scene

- [ ] **T300 Prepare the approved image.** Crop, orient, compress, and record natural dimensions without distorting the chassis.
- [ ] **T301 Trace surface components.** Create multi-polygon regions for the overview components visible at depth 0.
- [ ] **T302 Trace buried components.** Add depth 1–2 geometry only where the source supports the location.
- [ ] **T303 Add an annotation/debug overlay.** Offer point coordinates, region IDs, outlines, and optional grid snapping to make review easier.
- [ ] **T304 Perform technician geometry review.** Check false-positive hover areas, small targets, and ambiguous overlaps.

**Acceptance:** Every included component can be selected from all of its visible surface and does not activate over unrelated hardware.

## Phase 4 — Learning interactions

- [ ] **T400 Implement hover/focus preview and click/tap lock.** Highlight all regions for the selected component.
- [ ] **T401 Implement the depth control.** Normal mode exposes depth 0; X-ray mode ghosts shallower layers and prevents ambiguous simultaneous hit targets.
- [ ] **T402 Implement the details panel.** Show official name, plain name, aliases, purpose, quantity, part number when appropriate, and validation status in reviewer mode.
- [ ] **T403 Implement connection highlighting.** Selecting a port, cable, or board can reveal connected endpoints.
- [ ] **T404 Implement service dependencies.** Display blockers and prerequisites from the explicit dependency graph.

**Acceptance:** Depth changes do not imply removal permission, and the UI never presents an unvalidated service order as authoritative.

## Phase 5 — Study modes

- [ ] **T500 Add Study mode.** Labels and facts are visible.
- [ ] **T501 Add Locate mode.** Prompt for a component and score spatial selections.
- [ ] **T502 Add Name mode.** Highlight a component and ask the learner to choose or enter its name.
- [ ] **T503 Add Connection mode.** Ask what a cable or board connects to.
- [ ] **T504 Add local progress.** Store only on-device study settings and scores; no account is required for the first release.

**Acceptance:** A new visitor can begin a quiz without sign-in, and refreshing preserves only non-sensitive local progress.

## Phase 6 — Accuracy, accessibility, and quality

- [ ] **T600 Verify component names and aliases with a repair technician.** Mark unresolved items explicitly.
- [ ] **T601 Verify connection endpoints and removal prerequisites against the Dell manual.** Technician knowledge can supplement but not silently replace sourced procedures.
- [ ] **T602 Complete keyboard, screen-reader, contrast, and touch-target testing.** Include a list-based alternative to spatial exploration.
- [ ] **T603 Test responsive layouts.** Cover desktop, tablet, and narrow mobile views without shrinking the server image into an unusable target.
- [ ] **T604 Add automated tests.** Cover map validation, selection, overlapping depth regions, quizzes, and the configured GitHub Pages base path.

## Phase 7 — GitHub Pages release

- [ ] **T700 Add a GitHub Actions Pages workflow.** Build the static app on pushes to `main` and deploy the generated artifact.
- [ ] **T701 Configure repository Pages settings.** Use GitHub Actions as the source and confirm the final repository-subpath URL.
- [ ] **T702 Add release metadata.** Include a title, description, social preview, model/source acknowledgements, and an “educational aid, not a service manual” notice.
- [ ] **T703 Run a production smoke test.** Verify direct loading, asset URLs, keyboard selection, touch selection, depth switching, and at least one quiz.

**Acceptance:** A visitor with no account can open the GitHub Pages URL and immediately study the Dell Server 9712a.

## Phase 8 — Expansion

- [ ] **T800 Add close-up and disassembly scenes.** Prioritize bays, Bianca boards, PDB/BMC, and liquid-cooling hardware.
- [ ] **T801 Add an authoring interface or offline map editor.** Allow polygon editing, multi-region assignment, depth selection, and review status.
- [ ] **T802 Add additional models.** Reuse the same schema and interaction engine; keep model-specific data and assets isolated.
- [ ] **T803 Add import/export for reviewed lesson packs.** Keep the core app static-host compatible.
