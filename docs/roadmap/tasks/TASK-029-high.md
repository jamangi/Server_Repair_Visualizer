# TASK-029 — Add tools, fasteners, and refastening order

- **Recommended reasoning effort:** high
- **Status:** Ready after TASK-027
- **Depends on:** TASK-027
- **Primary output:** fastener and tool layer linked to service operations

## Outcome

Teach which screws and drivers belong to each operation, including validated loosen/tighten order and torque.

## Context

Dell procedures name Phillips 1, Phillips 2, Torx, screw sizes, captive screws, and torque values for many assemblies. These facts belong to operations, not merely to the component card.

## Work

1. Catalog fastener type, count, captive/removable state, driver, location, and torque.
2. Attach fasteners to the exact operation and configuration where they apply.
3. Record loosen/tighten patterns only when the procedure specifies them.
4. Add a compact tool and fastener layer to assembly-order steps.
5. Prevent unit conversion or torque rounding without an explicit policy and test.
6. Add practice prompts for driver, screw, count, torque, and refastening sequence.

## Acceptance criteria

- Every published fastener value cites the exact Dell procedure.
- Torque values preserve original units and tolerances.
- Captive and removable fasteners are visually distinct.
- Configuration-specific facts cannot leak into another bay configuration.
- Technician review confirms that the workbench is safe as a training reference.
