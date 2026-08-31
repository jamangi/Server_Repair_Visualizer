# Interaction model decision

## Decision

Use a **responsive SVG overlay backed by JSON geometry** as the learner-facing interaction model.

Keep a grid only as an optional annotation, prototyping, or debugging tool.

## Why SVG wins

SVG polygons and paths can follow irregular cards, cable bundles, manifolds, and partially visible assemblies. A component can own multiple disconnected regions in the same view, and overlapping regions can represent parts at different depths. The overlay scales with the image through a shared `viewBox`, avoiding device-dependent grid math.

It also gives the app the behaviors the learning experience needs:

- hover, keyboard focus, click, and touch selection;
- a glow or outline around the component's full visible shape;
- accessible labels on each region;
- overlapping hit regions with explicit depth rules;
- animated transitions between normal and X-ray study states; and
- geometry stored separately from both the image and the rendering code.

A grid is fast to author but creates blocky outlines, false positives around narrow cables, and excessive data when cell size becomes small enough to be accurate. It is valuable as a fallback region editor because a reviewer can paint cells without drawing polygons, but the saved or exported result should normally become polygons or masks.

## Geometry is data

Each scene pairs one rectangular image with one map file:

```text
public/models/dell-9712a/
  top-open.webp
  top-open.map.json
```

The image keeps its natural dimensions. The SVG uses the same values as its `viewBox`, and region points are stored in source-image pixels. That keeps authoring and review simple while the browser handles responsive scaling.

A component may have multiple regions:

```json
{
  "componentId": "fan-module-0",
  "sceneId": "top-open",
  "depth": 0,
  "shapes": [
    {
      "type": "polygon",
      "points": [[88, 214], [142, 212], [146, 278], [86, 280]]
    }
  ]
}
```

The same component can have different shapes in different scenes.

## Buried components

Visual depth and service order are related, but they are not the same fact.

### Visual depth

- `depth: 0` — visible and directly interactive in the normal open-system scene;
- `depth: 1` — partially or fully covered by a depth-0 assembly;
- `depth: 2` — below a depth-1 assembly.

Normal mode activates only depth 0. X-ray mode exposes a chosen depth and ghosts shallower components. When multiple components overlap at one pointer position, the UI presents the active component and an optional “stack here” list instead of pretending one grid cell has only one owner.

### Removal dependencies

Use a directed dependency graph for service order:

```json
{
  "componentId": "ipex-board",
  "requiresRemovalOf": ["left-bay", "bluefield-3-cable"]
}
```

This captures blockers that are beside a component, connected by a cable, or at the same visual depth. The graph should be validated against Dell's removal prerequisites and technician review. A numeric depth must never be used as a substitute for a service procedure.

### Disassembly scenes

Use additional scenes when removal materially changes what can be seen:

- top cover removed;
- left bay removed;
- right bay removed;
- rear wall / liquid-cooling tray exposed;
- Bianca board close-up.

This gives buried parts an honest visible surface while X-ray mode remains available for memorization.

## Recommended learner interactions

- **Hover/focus:** preview the label and highlight every region belonging to the component.
- **Click/tap:** lock selection and open the component card.
- **Study mode:** show labels, purpose, aliases, ports, connections, and blockers.
- **Locate mode:** ask the learner to select a named component.
- **Name mode:** highlight a region and ask the learner to name it.
- **Connection mode:** ask what a cable or board connects to.
- **Service-order mode:** ask which blocker must be removed first.
- **X-ray depth control:** expose one buried layer at a time; never activate all overlapping layers without a selection affordance.

## Accessibility requirements

Every pointer interaction must have a keyboard and touch equivalent. Regions need stable accessible names. Highlighting may use color, but must also change outline, opacity, or pattern. The component list should provide a non-spatial way to select the same items.
