# TASK-017 — Complete accessibility and responsive behavior

- **Recommended reasoning effort:** high
- **Status:** Ready after TASK-011 through TASK-016
- **Depends on:** TASK-011, TASK-012, TASK-013, TASK-014
- **Primary output:** equivalent mouse, keyboard, touch, and non-spatial experience

## Outcome

Make the complete first-release learning flow usable across input methods, screen sizes, color perception, and assistive technology.

## Context

SVG geometry is inherently visual, so the synchronized component list is the required non-spatial equivalent. Color may reinforce state but cannot be the only signal.

## Work

1. Audit headings, landmarks, control names, focus order, announcements, and error/feedback states.
2. Ensure every region action has a list and keyboard equivalent.
3. Pair glow/color states with outline, opacity, pattern, or text changes.
4. Respect reduced-motion and zoom settings.
5. Refine desktop, tablet, and narrow layouts while preserving useful target sizes.
6. Test screen-reader navigation and quiz feedback.

## Acceptance criteria

- All modes can be completed without a pointer.
- Focus is visible and predictable across SVG, list, controls, and details.
- Touch targets remain usable without covering neighboring regions incorrectly.
- At 200% zoom, content remains operable without hidden controls.
- Automated checks and a documented manual accessibility pass succeed.
