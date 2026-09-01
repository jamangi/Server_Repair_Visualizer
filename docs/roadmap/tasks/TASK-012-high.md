# TASK-012 — Implement X-ray depth interaction

- **Recommended reasoning effort:** high
- **Status:** Ready after TASK-010 and TASK-011
- **Depends on:** TASK-010, TASK-011
- **Primary output:** understandable, non-ambiguous depth control

## Outcome

Allow learners to study buried components one depth at a time without creating ambiguous pointer behavior or implying a service sequence.

## Context

Depth 0 is the normal visible surface. Selecting a deeper level ghosts or disables shallower hit regions. Where active shapes overlap, the UI must expose a deterministic selected layer and an optional stack list.

## Work

1. Implement depth 0, 1, and 2 states based on scene metadata.
2. Define rendering, pointer-event, keyboard, and list-filter behavior for each state.
3. Ghost shallower layers while retaining enough context to orient the learner.
4. Add an overlap stack affordance for multiple active candidates.
5. Label the control “visual depth” or equivalent and state that it is not removal order.
6. Preserve selected component state sensibly when changing depth.

## Acceptance criteria

- Only the intended depth receives direct spatial interaction.
- Keyboard and component-list navigation follow the same active-depth rules.
- The learner can return to the normal surface state in one action.
- Overlaps never silently choose an unrelated component.
- Copy and help text do not equate depth with service order.
