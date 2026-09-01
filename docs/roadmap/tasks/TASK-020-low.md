# TASK-020 — Add release metadata and run the production smoke test

- **Recommended reasoning effort:** low
- **Status:** Ready after TASK-019
- **Depends on:** TASK-019, TASK-021
- **Primary outputs:** release metadata, disclosure text, and smoke-test record

## Outcome

Finish the first release with accurate metadata, attribution, an illustration disclosure, and a concise production verification record.

## Work

1. Set the application title and description for the Dell Server 9712a study tool.
2. Add source acknowledgements and an “educational aid, not a replacement for the Dell service manual” notice.
3. State that the machine image is an original generated illustration validated for learning use.
4. Add or generate a social preview that does not expose private data and does not imply Dell endorsement.
5. Smoke-test initial load, image assets, selection, depth switching, component details, one quiz, keyboard use, and a narrow viewport.
6. Record the deployed URL, date, commit, and observed result.

## Acceptance criteria

- Metadata accurately describes the project and model.
- Disclosure and source links are visible without interrupting study.
- The social preview contains no service tag, invented Dell logo, or unsupported claim.
- Every smoke-test item passes or has a filed follow-up issue.
