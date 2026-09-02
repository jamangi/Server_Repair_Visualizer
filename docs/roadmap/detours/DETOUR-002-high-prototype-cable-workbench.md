# DETOUR-002 — Prototype the cable workbench

- **Recommended reasoning effort:** high
- **Status:** Complete on 2026-09-01
- **Inserted after:** DETOUR-001
- **Primary outputs:** interactive Dell 9712a cable diagram, evidence-aware routes, and cable-mastery roadmap

## Why this is a detour

The main roadmap is still producing the realistic chassis image and its component geometry. Cable knowledge can be explored independently with a schematic whose geometry is anchored to chassis zones. Building this prototype now tests a layout and interaction strategy without claiming that the connection inventory or installation sequence is complete.

## Outcome

Add a **Workbench** view to the Dell Server 9712a model. Its first scratch tool is a cable and connector map organized from rear to front like the physical sled.

## Decisions

- Use deterministic, authored SVG coordinates rather than a force-directed graph.
- Make node area loosely reflect physical service footprint.
- Reserve chassis routing lanes before drawing individual connections.
- Draw cable bridges at crossings so the upper route visually jumps the lower route.
- Use hover for rapid scanning and focus/click/tap for accessible durable selection.
- Keep documented routes solid and review/observation routes dashed.
- Separate connection, route, assembly-order, and fastener data.
- Keep the workbench visibly marked as a draft rather than an assembly procedure.

## Completed work

1. Added a scalable Workbench tab and stable hash URL.
2. Added a portrait 9712a schematic with rear, cable-management, fan-wall, and front-bay zones.
3. Added relative-size cards for Bianca, BF3, PSB, PDB, BMC, HMC, IPEX, OSFP, M.2, TPM, NIC, interposer, front I/O, control panel, fans, drives, and cooling assemblies.
4. Added category filters, route evidence styles, endpoint inspection, source links, and keyboard access.
5. Added an explicit route bridge and route halos to prevent ambiguous crossings.
6. Added a documented architecture and Tasks 25–29 for evidence completion and procedural learning.

## Layout correction — 2026-09-02

The initial prototype placed the PDB/BMC/interposer group rearward of the fan wall and put the 12 V busbar on the right. A technician-provided annotated top view and Dell's left-bay installation view showed the studied configuration more clearly. The authored layout now follows this rear-to-front order:

1. two Bianca boards with the 12 V inner busbar on their shared centerline;
2. the transverse eight-fan wall immediately forward of the Bianca boards;
3. the PDB, BMC, interposer, and cable-management zone in front of the fans; and
4. the three front service bays.

Cable paths were rerouted through reserved fan-module gaps, and the essay and acronym locations were corrected at the same time so the two study modes do not teach conflicting spatial memories.

## Acceptance criteria

- [x] Rear components appear above front components.
- [x] Large boards visually dominate smaller cards.
- [x] Routes do not visibly slice across unrelated node bodies.
- [x] At least one crossing uses an explicit cable bridge.
- [x] Full labels are available by hover, focus, click, and tap.
- [x] Each route displays endpoints, evidence state, and a source.
- [x] Unknown or lesson-only endpoints are not styled as confirmed.
- [x] The UI warns that the diagram is not an assembly procedure.
