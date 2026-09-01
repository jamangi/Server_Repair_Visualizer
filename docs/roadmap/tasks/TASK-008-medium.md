# TASK-008 — Prepare the approved production image asset

- **Recommended reasoning effort:** medium
- **Status:** Ready after TASK-007 accepts a candidate
- **Depends on:** TASK-007
- **Primary outputs:** optimized scene image and scene metadata

## Outcome

Convert the accepted generated candidate into stable web assets without changing its geometry or obscuring traceable details.

## Context

The lossless generated source and its manifest remain the audit record. The learner-facing image is an optimized derivative. SVG region coordinates will use the production image's natural pixel dimensions.

## Work

1. Crop only empty margins and preserve the full chassis.
2. Correct orientation if necessary and document which edge is the front.
3. Export a high-quality WebP or similarly appropriate browser format.
4. Record width, height, checksum, source manifest, validation status, and illustration disclosure in scene metadata.
5. Add a small responsive fallback only if performance testing shows it is needed.
6. Wire the asset into the scene without adding geometry yet.

## Acceptance criteria

- Production and source images have documented provenance.
- No resize, crop, or compression step changes component placement unexpectedly.
- Fine cables and small cards remain distinguishable at normal study zoom.
- Scene dimensions exactly match the geometry coordinate system.
- The UI identifies the asset as an illustration.
