# TASK-014 — Implement Study, Locate, and Name modes

- **Recommended reasoning effort:** medium
- **Status:** Ready after TASK-011 and TASK-013
- **Depends on:** TASK-011, TASK-013
- **Primary output:** first complete learning loop

## Outcome

Provide three usable learning modes: free exploration, locating a named component, and naming a highlighted component.

## Context

The first release must be immediately usable without an account. Questions should draw only from components available in the current scene and active visual depth.

## Work

1. Study mode shows labels and details during exploration.
2. Locate mode prompts for a component and scores the next spatial or list selection.
3. Name mode highlights a component and asks for its name through choices or an accessible text response.
4. Accept configured aliases while keeping the canonical answer visible after grading.
5. Provide correct/incorrect feedback and the next-question action.
6. Avoid immediately repeating the same component when alternatives exist.

## Acceptance criteria

- A new visitor can start a mode without setup or sign-in.
- Questions never target unavailable or unvalidated geometry.
- Keyboard-only learners can complete every question.
- Alias handling is deterministic and tested.
- Feedback identifies the correct component without blocking continued study.
