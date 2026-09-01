# TASK-019 — Configure GitHub Pages deployment

- **Recommended reasoning effort:** medium
- **Status:** Ready after the production build is stable
- **Depends on:** TASK-002, TASK-018, TASK-021
- **Primary outputs:** GitHub Actions Pages workflow and deployment documentation

## Outcome

Build and deploy the validated static application from `main` to the repository's GitHub Pages URL.

## Context

The site must work beneath the `Server_Repair_Visualizer` repository path. Deployment should use GitHub Actions and the official Pages artifact flow, not a committed build directory unless repository policy explicitly requires one.

## Work

1. Add a least-privilege Pages workflow triggered from `main`.
2. Install dependencies reproducibly, run content validation and tests, then build once.
3. Upload the static artifact and deploy through the Pages environment.
4. Configure concurrency so stale deployments are canceled safely.
5. Document any one-time repository setting the owner must enable.
6. Verify asset, refresh, and direct-load behavior at the final subpath.

## Acceptance criteria

- A failing validation, test, or build prevents deployment.
- The workflow requests only permissions required by Pages.
- The deployed root loads without broken images or scripts.
- Direct navigation and refresh work for every supported route.
- Deployment contains no private source files or service tag.
