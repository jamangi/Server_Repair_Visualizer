# TASK-028 — Add cable and connector learning modes

- **Recommended reasoning effort:** high
- **Status:** Ready after TASK-025 and TASK-026
- **Depends on:** TASK-025, TASK-026, TASK-014
- **Primary output:** cable identification and endpoint practice

## Outcome

Turn the verified workbench into repeatable practice for cable names, connector ownership, endpoints, and physical routes.

## Work

1. Add Identify mode: highlight a route and ask for its cable name.
2. Add Endpoint mode: name one endpoint and ask for the other component and connector.
3. Add Route mode: name a cable and ask the learner to select its path or endpoint pair.
4. Add Socket mode: select a board and ask which utilized connector accepts a named cable.
5. Draw questions only from verified data unless an explicit review mode is enabled.
6. Accept configured aliases while revealing canonical Dell terminology after grading.
7. Store device-local progress separately from the component-image modes.

## Acceptance criteria

- Every question can be completed with keyboard, pointer, or touch.
- Questions never expose a review-only relationship as fact.
- Scoring distinguishes the cable, connector, and opposite endpoint.
- Incorrect feedback reveals the verified route without ending the session.
- Question selection avoids immediate repetition when alternatives exist.
