# TASK-003 — Build the visual system and study workspace

- **Recommended reasoning effort:** high
- **Status:** Ready after TASK-002
- **Depends on:** TASK-002
- **Primary outputs:** themed application shell and responsive study workspace

## Outcome

Create the recognizable first viewport: model context, large image stage, mode controls, depth control, component details, and a list-based alternative to spatial selection.

## Context

This is a working learning surface, not a marketing landing page. The visual direction should feel like precise service equipment: dark neutral chassis tones, high-contrast diagnostic accents, compact readable typography, restrained motion, and obvious keyboard focus.

## Work

1. Define shared color, spacing, typography, border, focus, and motion tokens.
2. Create the desktop workspace with the image stage as the dominant surface.
3. Provide sensible tablet and narrow-screen layouts without making targets too small.
4. Add controls for scene, learning mode, and depth; they may be backed by fixture state initially.
5. Add a component details panel and searchable/list-based component selector.
6. Use a neutral fixture image and fake geometry until the approved generated asset exists.

## Acceptance criteria

- A first-time visitor can identify the model and primary study action immediately.
- The image stage remains usable at common desktop and mobile widths.
- Every control has a visible label and focus state.
- The fixture makes the intended interaction clear without pretending to be real 9712a content.
- Styling is driven by shared tokens rather than scattered one-off values.
