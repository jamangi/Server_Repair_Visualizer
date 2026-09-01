# Server Repair Visualizer

Server Repair Visualizer is a browser-based study tool for repair technicians who need to learn more than a parts list. It teaches:

- what each component, board, cable, connector, and service assembly is called;
- where it is located in a specific computer or server model;
- what it connects to;
- what blocks it from view or removal; and
- which parts must be removed first during a service sequence.

The first target is the **Dell Server 9712a**, a liquid-cooled 1U compute sled used in Dell's GB200-era rack-scale AI system. The identification is supported by the supplied Dell configuration export and Dell's own service documentation. See [Dell 9712a research](docs/research/DELL_9712A.md).

## Product direction

The primary experience will place an SVG interaction layer over a rectangular source image. Polygon or path geometry lives in a JSON sidecar, so the source image does not need to be converted into or manually edited as an SVG.

Users will be able to hover, focus, or tap a visible component to highlight its full shape, then select it to learn its name, aliases, purpose, connectors, and service relationships. A depth control will support an optional X-ray study mode for buried parts. Actual removal order will be represented separately as dependency data rather than inferred from visual depth alone.

SVG regions are the recommended runtime approach. A grid may still be useful as an authoring or debugging aid, but it is too coarse to be the main learner-facing interaction model. The reasoning is recorded in [Interaction model](docs/architecture/INTERACTION_MODEL.md).

## Repository map

| Path | Purpose |
| --- | --- |
| [`docs/research/`](docs/research/) | Evidence about the target server and component vocabulary |
| [`docs/architecture/`](docs/architecture/) | Interaction, layering, connection, and data-model decisions |
| [`docs/decisions/`](docs/decisions/) | User approval gates and settled defaults |
| [`docs/roadmap/`](docs/roadmap/) | Ordered, testable tasks from prototype through GitHub Pages release |
| [`docs/roadmap/tasks/`](docs/roadmap/tasks/) | Self-contained task packets with recommended reasoning effort in each filename |

All three initial product gates are approved. The first scene will use an original, realistic generated technical illustration, validated against Dell documentation and technician knowledge before geometry is finalized. Implementation is organized as [self-contained task packets](docs/roadmap/TASKS.md), so a task owner can work from one packet without reading the full project history.

## Current status

- Server model identified with high confidence.
- Official interior diagram and service manual located.
- SVG + JSON interaction architecture selected.
- Component depth, connection graph, and removal dependency concepts separated.
- Original realistic illustration selected for the first public scene.
- Naming policy and first-release scope approved.
- Phase 1 foundation complete: Vite, React, and TypeScript static application scaffolded.
- Responsive, keyboard-accessible study workspace implemented with an explicitly neutral layout fixture.
- Auditable source ledger and initial 33-component Dell 9712a catalog added.
- Runtime schemas, cross-record validation, dependency-cycle detection, and automated tests added.

No service tag or device-specific configuration export is committed to this public-facing repository.

## Local development

The repository uses `pnpm` and requires a current Node.js release.

```text
pnpm install
pnpm dev
```

Use `pnpm test` for the content-validation tests, `pnpm typecheck` for TypeScript checks, and `pnpm build` for the production build. Every production build runs `pnpm validate:data` first, so invalid lesson content cannot be silently deployed. Vite's production base is `/Server_Repair_Visualizer/` for GitHub Pages hosting beneath the repository path.

## Source starting points

- [Dell Server 9712a/9712b Installation and Service Manual](https://www.dell.com/support/manuals/en-us/dell-server-9712a/server_9712a_ism/Introduction?guid=guid-92f4ae28-dee6-4ba1-96c2-64326abb8d51&lang=en-us)
- [Dell manual: Inside the system](https://www.dell.com/support/manuals/en-us/dell-server-9712a/server_9712a/inside-the-system?guid=guid-db45dd2e-26b7-4c9b-84ee-90385df57b15&lang=en-us)
- [Implementation task sequence](docs/roadmap/TASKS.md)
