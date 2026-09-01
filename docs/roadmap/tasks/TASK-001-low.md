# TASK-001 — Establish the content source ledger

- **Recommended reasoning effort:** low
- **Status:** Ready
- **Depends on:** None
- **Primary output:** `docs/research/SOURCE_LEDGER.md`

## Outcome

Create one auditable inventory of the sources allowed to support Dell Server 9712a names, locations, connections, quantities, and removal prerequisites.

## Context

The target is the Dell Server 9712a. Existing starting points are `docs/research/DELL_9712A.md`, Dell's installation and service manual, the supplied configuration export, and technician observations. Do not commit the service tag or the device-specific CSV.

## Work

1. List each authoritative Dell page used by the project, with title, URL, relevant topic, and facts it supports.
2. Describe the configuration export as private source evidence without copying it into the repository.
3. Define how technician observations are recorded, dated, and marked as verified or pending.
4. Define source precedence: Dell canonical term, technician-confirmed layout, plain-language alias, then explicitly provisional working name.
5. Link the ledger from the research document and task packets that rely on it.

## Acceptance criteria

- Every source has a clear scope and URL or private-source description.
- No service tag, employee-only material, or private photograph is committed.
- The ledger distinguishes official facts, technician verification, inference, and unresolved claims.
- Later catalog and dependency work can cite a ledger entry rather than conversational history.
