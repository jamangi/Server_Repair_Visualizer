# TASK-022 — Add close-up and disassembly scene illustrations

- **Recommended reasoning effort:** xhigh
- **Status:** Expansion task after first release
- **Depends on:** TASK-021 and a stable scene/data pipeline
- **Primary outputs:** validated additional scene images and maps

## Outcome

Create original realistic illustrations for service states that reveal components hidden in the top-open overview.

## Priority scenes

1. Left bay removed.
2. Right bay removed.
3. Rear wall and liquid-cooling tray exposed.
4. Bianca board close-up with HMC, TPM, M.2 riser, and cold-plate context.

## Work

1. Use the ImageGen skill with Dell removal procedures and the approved catalog as factual references.
2. Preserve orientation, chassis proportions, component identity, and visual language across scenes.
3. Keep labels and callouts out of the pixels.
4. Validate each image with the TASK-007 method and technician review where required.
5. Add scene metadata and component regions without duplicating component facts.
6. Add transitions or scene navigation that explain what assembly was removed.

## Acceptance criteria

- Every scene is original, realistic, consistent, and separately validated.
- Newly visible components cite a source or technician confirmation.
- The same component ID is reused across scenes.
- Scene changes do not imply a service step unless the dependency graph supports it.
- Performance remains acceptable with the larger asset set.
