# Data model

The visualizer needs three linked graphs rather than one large image map:

1. **spatial regions** — where a component is visible in each scene;
2. **connections** — what plugs into what; and
3. **service dependencies** — what must be disconnected or removed first.

## Model record

```json
{
  "id": "dell-server-9712a",
  "name": "Dell Server 9712a",
  "context": "PowerEdge XE9712 / NVIDIA GB200 NVL72",
  "status": "draft",
  "sources": []
}
```

## Component record

```json
{
  "id": "hmc-module",
  "modelId": "dell-server-9712a",
  "canonicalName": "HMC module",
  "plainName": "HMC card",
  "aliases": ["HMC"],
  "category": "control-board",
  "quantity": 1,
  "description": "Mounted on a Bianca board in the observed configuration.",
  "partNumbers": [],
  "validation": "official-name-layout-pending",
  "sources": []
}
```

`validation` should distinguish official Dell terms from technician labels and working names. Suggested values are `official`, `technician-verified`, `inferred`, and `needs-review`.

## Scene and region records

```json
{
  "id": "top-open",
  "modelId": "dell-server-9712a",
  "label": "Top cover removed",
  "image": "top-open.webp",
  "width": 1600,
  "height": 900,
  "maxDepth": 2
}
```

```json
{
  "componentId": "hmc-module",
  "sceneId": "top-open",
  "depth": 0,
  "visibility": "visible",
  "shapes": [
    {"type": "polygon", "points": [[0, 0], [1, 0], [1, 1], [0, 1]]}
  ]
}
```

Supported shapes should begin with `polygon` and `path`. Add bitmap masks only when a component's silhouette is too detailed for maintainable vector geometry.

## Ports and connections

A board and a cable should not be modeled as one object merely because they are attached.

```json
{
  "id": "hmc-to-interposer",
  "from": {"componentId": "hmc-module", "portId": "hmc-cable-port"},
  "to": {"componentId": "interposer", "portId": "hmc-input"},
  "cableComponentId": "hmc-cable-1",
  "validation": "needs-review"
}
```

Connection direction describes the record, not necessarily electrical signal direction. If direction matters, add a separately validated `signalDirection` field.

## Service dependencies

```json
{
  "blockedComponentId": "hmc-module",
  "blockerComponentId": "rear-wall-bracket",
  "action": "remove",
  "source": "Dell service manual prerequisite",
  "validation": "needs-review"
}
```

The app may calculate a learning sequence from this graph, but the source data should remain explicit and reviewable.

## Content rules

- Never expose a service tag in public model data.
- Preserve Dell names and part numbers exactly when sourced.
- Put uncertain or made-up names in `plainName` or `aliases`, not `canonicalName`.
- Cite the manual page or technician review behind each service dependency.
- Keep geometry separate from component facts so an image can be replaced without rewriting the lesson content.
- Support several regions per component and several scenes per model.
