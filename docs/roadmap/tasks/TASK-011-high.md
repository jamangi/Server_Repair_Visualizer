# TASK-011 — Implement hover, focus, and locked selection

- **Recommended reasoning effort:** high
- **Status:** Ready after TASK-003, TASK-004, and TASK-009
- **Depends on:** TASK-003, TASK-004, TASK-009
- **Primary output:** accessible SVG selection engine

## Outcome

Let users preview and select components through mouse, keyboard, touch, and the component list while highlighting every region belonging to the active component.

## Context

Hover or focus previews a component. Click, Enter, Space, or tap locks it. The list and spatial map are two interfaces to the same selection state. Depth-0 is the only active layer until TASK-012.

## Work

1. Render scene shapes in a responsive SVG sharing the image dimensions.
2. Implement preview and locked-selection states with clear precedence.
3. Highlight all shapes for a component, not only the shape under the pointer.
4. Synchronize the SVG, component list, and details panel.
5. Add stable accessible names and predictable keyboard order.
6. Provide a way to clear a locked selection.

## Acceptance criteria

- Mouse, keyboard, and touch reach the same results.
- Moving off a preview does not clear a locked selection.
- Focus is never hidden behind a purely visual glow.
- Selecting from the list highlights the matching spatial regions.
- Repeated components remain individually selectable.
