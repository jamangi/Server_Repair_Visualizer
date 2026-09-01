# Approval gates

Only decisions that materially change accuracy, publication rights, or scope should block progress.

## A-001 — First reference image

- **Status:** Approved on 2026-08-31
- **Selected option:** 2 — original generated technical illustration
- **Decision owner:** User

Options considered for the first `top-open` scene:

1. **Technician-provided top-down photo** — recommended if the user or employer has permission to publish it. This will match the training hardware most closely.
2. **Original generated technical illustration** — safe to publish as an original asset, but every component and cable must be checked against the Dell manual and a technician. It must be labeled as an illustration.
3. **Dell manual diagram** — best authoritative reference, but do not copy it into the public repository until reuse permission or an applicable license is confirmed. It may remain an external research link.

**Approved direction:** Generate an original, realistic, top-down image that resembles the technician's view of the open machine. Dell's diagram and service procedures remain factual references for layout and component validation, not source artwork to copy. The supplied motherboard examples establish the desired realism, clean overhead presentation, and technical legibility; they do not establish the 9712a layout.

The generated base image should not bake labels or callout lines into the pixels because labels belong in the interactive overlay. It must be identified in the app as an illustration and pass a separate visual-accuracy review before final geometry tracing or public release.

**Consequence:** Image generation and review tasks are unblocked. Public release remains dependent on successful technical validation, not another image-source approval.

## A-002 — Naming authority

**Status:** Approved on 2026-08-31

Use the Dell service-manual term as `canonicalName`, a clearer repair-floor term as `plainName`, and local lesson terms as aliases. Working names are allowed only when marked `needs-review`.

This policy is now binding for the first release. It keeps invented names visibly provisional.

## A-003 — First-release scope

**Status:** Approved on 2026-08-31

The first release covers one model, the Dell Server 9712a, with:

- one open-system overview scene;
- surface selection;
- a depth/X-ray control;
- component facts and aliases;
- connection and removal-dependency data for the components included in the scene; and
- study, locate, and name modes.

Additional close-up scenes and service-order quizzes follow after the overview content is technician-validated.

## Approval summary

The initial approval phase is complete. No current task is blocked on A-001, A-002, or A-003. Later tasks may still require technician validation when a generated image, component identity, cable endpoint, or service dependency cannot be proven from Dell documentation alone.
