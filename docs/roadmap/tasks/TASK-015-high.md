# TASK-015 — Implement Connection and Service-order modes

- **Recommended reasoning effort:** high
- **Status:** Ready after TASK-013
- **Depends on:** TASK-013, TASK-005
- **Primary output:** relationship-based practice modes

## Outcome

Teach what components plug into and which validated blocker or prerequisite comes first during service.

## Context

Only sourced or technician-validated relationships may become quiz answers. Visual depth is never an acceptable substitute for a removal dependency. Questions with multiple valid answers must encode that explicitly.

## Work

1. Generate connection questions from validated connection records.
2. Generate blocker/prerequisite questions from validated dependency records.
3. Support one-to-many and many-to-many relationships.
4. Explain the relationship after grading and link it visually when possible.
5. Exclude `needs-review`, inferred, or cyclic data from learner scoring.
6. Add empty states when the current scene lacks enough validated relationships.

## Acceptance criteria

- Every scored answer traces to a validated source record.
- The engine supports multiple correct endpoints or prerequisites.
- No question uses z-depth as removal evidence.
- Explanations distinguish “connected to,” “disconnect first,” and “remove first.”
- Sparse content produces an honest empty state rather than fabricated questions.
