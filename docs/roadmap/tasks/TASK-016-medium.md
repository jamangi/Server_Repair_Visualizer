# TASK-016 — Add device-local progress

- **Recommended reasoning effort:** medium
- **Status:** Ready after TASK-014
- **Depends on:** TASK-014; TASK-015 is optional for its metrics
- **Primary output:** private, local study history and preferences

## Outcome

Preserve useful study progress on the visitor's device without accounts, remote storage, or collection of personal data.

## Context

The first release is static-hosted. Store only mode preferences, per-component attempts, correct counts, and optional streak/timestamp data needed for the learner's own review.

## Work

1. Define a versioned local-storage schema.
2. Record results for available study modes by stable model and component IDs.
3. Show compact progress summaries and weak-area cues.
4. Add clear/reset controls with confirmation.
5. Handle unavailable, corrupt, or old local data safely.
6. Document that progress stays on the device.

## Acceptance criteria

- Refreshing preserves valid progress and preferences.
- Clearing progress removes only this app's local data.
- Schema migrations or version mismatches fail safely.
- No service tag, name, email, identifier, or analytics payload is stored.
- The app remains fully usable when storage is blocked.
