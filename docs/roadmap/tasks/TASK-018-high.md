# TASK-018 — Add automated tests and content checks

- **Recommended reasoning effort:** high
- **Status:** Ready throughout implementation; complete before release
- **Depends on:** TASK-004 and the features under test
- **Primary output:** reliable automated regression suite

## Outcome

Protect the content model, interaction engine, quizzes, accessibility basics, and GitHub Pages path from regression.

## Work

1. Unit-test schema validation, geometry bounds, duplicate IDs, unresolved references, and dependency-cycle detection.
2. Test preview versus locked selection and synchronization with the component list.
3. Test active-depth pointer and keyboard rules, including overlap stacks.
4. Test quiz generation, aliases, multi-answer relationships, and exclusion of unvalidated facts.
5. Test local progress versioning and failure behavior.
6. Add a production-build check using the repository base path.
7. Keep fixture data clearly separate from Dell lesson data.

## Acceptance criteria

- Tests fail for intentionally invalid maps and dependency cycles.
- Critical interactions are covered by behavior tests rather than snapshots alone.
- The suite runs locally and in continuous integration.
- A clean checkout can run validation, tests, and build with documented commands.
- No test depends on the private service-tag export.
