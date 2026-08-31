# Approval gates

Only decisions that materially change accuracy, publication rights, or scope should block progress.

## A-001 — First reference image

- **Status:** Pending
- **Blocks:** final region tracing and public release of the first model
- **Does not block:** application shell, data schema, interaction engine, or test fixtures

Choose one source for the first `top-open` scene:

1. **Technician-provided top-down photo** — recommended if the user or employer has permission to publish it. This will match the training hardware most closely.
2. **Original generated technical illustration** — safe to publish as an original asset, but every component and cable must be checked against the Dell manual and a technician. It must be labeled as an illustration.
3. **Dell manual diagram** — best authoritative reference, but do not copy it into the public repository until reuse permission or an applicable license is confirmed. It may remain an external research link.

**Approval needed:** identify which option should become the first public scene and, for a supplied photo, confirm that it may be committed to a public repository.

## A-002 — Naming authority

**Status:** Default accepted unless changed

Use the Dell service-manual term as `canonicalName`, a clearer repair-floor term as `plainName`, and local lesson terms as aliases. Working names are allowed only when marked `needs-review`.

This approach avoids blocking early content work while keeping invented names visibly provisional.

## A-003 — First-release scope

**Status:** Default accepted unless changed

The first release covers one model, the Dell Server 9712a, with:

- one open-system overview scene;
- surface selection;
- a depth/X-ray control;
- component facts and aliases;
- connection and removal-dependency data for the components included in the scene; and
- study, locate, and name modes.

Additional close-up scenes and service-order quizzes follow after the overview content is technician-validated.
