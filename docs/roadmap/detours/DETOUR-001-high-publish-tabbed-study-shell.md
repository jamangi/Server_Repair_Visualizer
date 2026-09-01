# DETOUR-001 — Publish the tabbed study shell

- **Recommended reasoning effort:** high
- **Status:** Complete on 2026-09-01
- **Inserted after:** TASK-005
- **Primary outputs:** public one-page study shell, printable research views, and initial GitHub Pages deployment

## Why this is a detour

Tasks 1–5 established the application and content foundation, while Tasks 6–13 intentionally lead through realistic image generation and spatial interaction. The essay and acronym research became useful before that image sequence was complete. Publishing them now creates immediate training value without renumbering completed tasks or pretending the final visualizer exists.

## Outcome

Make the Dell Server 9712a lesson publicly usable as one browser page with two levels of navigation:

1. a model level, beginning with Dell Server 9712a and ready for future models; and
2. study views within the model: **Visualizer**, **Location essay**, and **Acronyms & labels**.

Each view states the memory direction it trains:

- Visualizer: appearance → component name;
- Location essay: component name → chassis location; and
- Acronyms & labels: shorthand → meaning and location.

## Decisions

- Keep one static React application rather than separate documents or routes.
- Use URL hashes for linkable tabs without creating GitHub Pages refresh failures.
- Render the essay from its Markdown source and the glossary from its JSON source so research is not duplicated.
- Preserve the current neutral fixture and explicitly label it as non-authoritative until Tasks 6–13 supply the approved image and geometry.
- Offer printing only where it is useful: the essay and acronym views.
- Use a white, black-text, low-decoration print stylesheet with compact spacing to reduce black ink.
- Establish the official GitHub Actions Pages pipeline now. TASK-019 remains responsible for final-release hardening after its quality dependencies are complete.

## Work completed

1. Added scalable model navigation and hash-linked study tabs.
2. Added cognitive-direction cues to distinguish the essay from the visualizer.
3. Added a safe lightweight Markdown renderer for the location essay.
4. Added a searchable, filterable glossary generated from `ACRONYM_MAP.json`.
5. Added a low-ink print action and print-specific layout for both references.
6. Added an official GitHub Pages artifact workflow with validation, tests, and production build gates.
7. Updated the roadmap and README to preserve this product decision for later task owners.

## Acceptance criteria

- [x] The application remains a one-page static site.
- [x] Dell Server 9712a is visible as the first model-level tab.
- [x] Visualizer, Location essay, and Acronyms & labels are visible within the model.
- [x] Each study view clearly names its memory direction.
- [x] Essay content comes from the research Markdown file.
- [x] Acronym content comes from the research JSON file and can be searched.
- [x] Essay and acronym printing uses a black-on-white, low-ink layout.
- [x] A push to `main` validates, tests, builds, and deploys the Pages artifact.
