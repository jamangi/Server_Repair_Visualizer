# TASK-002 — Scaffold the GitHub Pages application

- **Recommended reasoning effort:** medium
- **Status:** Completed on 2026-09-01
- **Depends on:** None
- **Primary outputs:** application source, package scripts, and a working local build

## Outcome

Create a Vite, React, and TypeScript static application that works locally and when hosted beneath the GitHub repository subpath.

## Context

The repository currently contains planning documents. The first release is a client-only learning application with no account, backend, or private data. Preserve the existing documentation and use the repository's current package manager once established.

## Work

1. Scaffold the minimal application and TypeScript configuration.
2. Configure the production base path for `Server_Repair_Visualizer` on GitHub Pages.
3. Add scripts for development, build, preview, type checking, and tests.
4. Add a minimal route that identifies the Dell Server 9712a learning tool without using an unapproved or temporary third-party image.
5. Confirm generated output contains only static assets.

## Acceptance criteria

- Dependency installation succeeds from a clean checkout.
- Development and production builds succeed.
- The production build resolves assets correctly from a repository subpath.
- No service tag, secret, backend dependency, or copyrighted Dell image is bundled.
- Existing documentation links remain intact.
