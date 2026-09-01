# TASK-006 — Generate the realistic top-open illustration

- **Recommended reasoning effort:** high
- **Status:** Ready after TASK-005
- **Depends on:** TASK-005
- **Primary output:** an original high-resolution candidate image and generation manifest

## Outcome

Use the ImageGen skill to create an original, realistic, orthographic top-down illustration of an open Dell Server 9712a that resembles the technician's real work view.

## Approved visual direction

A-001 selected an original generated illustration. The supplied motherboard examples establish these preferences: realistic materials, clean overhead presentation, sharp technical detail, even lighting, and easily distinguishable parts. They are not references for the 9712a layout.

## Required scene content

- Entire rectangular 1U sled visible with top cover removed.
- Consistent front-to-back orientation documented in the manifest.
- Asymmetric left, center, and right bay layout.
- Eight fan modules, two Bianca boards, cold plates, manifolds, PDB/BMC area, busbars, E1.S/front-I/O area, OSFP/BlueField or PSB bays, and realistic cable management where supported.
- Neutral background, minimal perspective distortion, deep focus, and enough separation for polygon tracing.
- No hands, tools, floating parts, embedded labels, callout lines, invented text, service tag, or copied Dell artwork.

## Work

1. Build the prompt from the catalog and Dell layout sources, not memory alone.
2. Generate one strong base candidate at the highest practical resolution.
3. Inspect the output for duplicated fans, impossible cables, illegible geometry, logos, text, and major layout errors.
4. Retry once if the candidate is structurally unusable.
5. Save the lossless source candidate outside optimized production assets and record the prompt, tool, date, orientation, intended use, and `unvalidated illustration` status in a manifest.

## Acceptance criteria

- The image is original, realistic, top-down, rectangular, and unlabeled.
- All major required zones are visible and traceable.
- No private identifier or false readable text appears.
- The manifest clearly says the image is not yet technically validated.
- The task does not trace regions or claim technical approval.
