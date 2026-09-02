# Cable-map architecture

## Purpose

The cable map teaches a third memory direction alongside the image visualizer and location essay:

- image visualizer: visual appearance → component name;
- location essay: component name → chassis location; and
- cable workbench: connector or component → route → opposite endpoint.

The workbench is not yet an installation procedure. It shows connection knowledge and preserves uncertainty without converting lesson observations into repair instructions.

## Why the layout is deterministic

A general force-directed graph optimizes edge length and separation without understanding a server chassis. It can place a rear motherboard beside a front-panel board or route a cable through an unrelated card. The 9712a map instead uses a portrait chassis coordinate system:

1. rear compute boards occupy the highest band, with the inner busbar centered between them;
2. the fan bank forms a transverse wall immediately forward of the compute boards, with reserved routing gaps;
3. the PDB, BMC, interposer, and cable-handling parts occupy the band in front of the fans; and
4. the three front bays occupy the lowest internal band.

Each node receives an authored rectangle in normalized SVG coordinates. Its area loosely represents physical service footprint, while its position preserves front/back and left/right memory. This is a schematic, not a dimensional drawing.

## Routing strategy

Connections are data records rather than DOM-specific lines. A record names:

- both endpoint component IDs;
- cable or connector label;
- category such as data, power, management, optical, coolant, or direct board/slot connection;
- evidence status;
- an orthogonal route; and
- the narrow source that supports the claim.

The current prototype authors SVG paths directly because the connection set is small and accuracy matters more than automatic layout. The next routing implementation should convert waypoint arrays into paths and reserve named lanes before it resolves individual cables:

```text
node ports → local exit lane → chassis trunk lane → local entry lane → node port
```

Route penalties should be applied in this order:

1. never enter an unrelated node rectangle;
2. prefer the chassis lane matching the physical route;
3. minimize crossings;
4. minimize bends; and
5. minimize length only after the first four constraints.

A crossing is represented as an ordered relationship. The upper route receives a small bridge arc plus a background halo, making the over/under decision visible in color and monochrome. Crossings are not allowed to imply physical cable depth unless a source confirms that relationship.

## Interaction

- Hovering, focusing, or selecting a node reveals its full name and connections in the inspector.
- Hovering, focusing, or selecting a route reveals both endpoints, routing notes, evidence state, and source.
- Category toggles reduce clutter without changing the underlying connection data.
- Solid routes are supported by Dell endpoint language. Dashed routes are lesson observations or incomplete endpoint mappings.
- Essential names and evidence remain available without hover through keyboard selection and the inspector.

## Four separate graphs

The project must not collapse these concerns into one edge type:

1. **Connection graph:** what is plugged into what.
2. **Route graph:** where a cable or hose physically travels and what it crosses.
3. **Assembly-order graph:** what must be installed, plugged, or routed before another operation.
4. **Fastener graph:** screw type, driver, torque, location, and unfasten/refasten sequence.

The current cable workbench implements the first two as a draft. Tasks 25–29 verify and expand all four before the workbench can present procedural guidance.

## Accuracy rules

- Do not infer an endpoint because two components are nearby.
- Do not infer installation order from cable depth or a crossing bridge.
- Keep unknown opposite endpoints out of the graph or mark the full edge `endpoint-review`.
- Dell-documented claims must link to the narrow procedure that names the relationship.
- Lesson observations remain dashed until verified under the technician-observation protocol.
- The route map may simplify geometry, but it must not reverse chassis orientation or component side.
