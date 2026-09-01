# Dell Server 9712a source ledger

This ledger is the project's auditable authority list for component names, quantities, layout claims, connections, and service prerequisites. Structured lesson records cite the stable IDs below through `sourceIds`; a source's presence does not raise a claim above the validation state recorded on that claim.

No service tag, device-specific CSV, private photograph, employee-only material, or configuration identifier belongs in this repository.

## Public Dell sources

| Ledger ID | Title and URL | Relevant topic | Facts this source may support |
| --- | --- | --- | --- |
| `dell-9712a-support` | [Dell Server 9712a support and manuals](https://www.dell.com/support/product-details/en-us/product/dell-server-9712a/resources/manuals) | Model-level support landing page | Model identity and the public manual set. It is not by itself evidence for a component relationship. |
| `dell-9712a-service-manual` | [Dell Server 9712a/9712b Installation and Service Manual](https://www.dell.com/support/manuals/en-us/dell-server-9712a/server_9712a_ism/Introduction?guid=guid-92f4ae28-dee6-4ba1-96c2-64326abb8d51&lang=en-us) | Canonical service vocabulary and procedures | Dell component terms and procedure-specific prerequisites when the exact procedure is cited during content review. |
| `dell-9712a-inside-system` | [Inside the system](https://www.dell.com/support/manuals/en-us/dell-server-9712a/server_9712a/inside-the-system?guid=guid-db45dd2e-26b7-4c9b-84ee-90385df57b15&lang=en-us) | Open-system inventory and relative layout | Named assemblies, quantities explicitly enumerated by Dell, and high-level left/center/right placement. It does not prove cable endpoints or removal order. |
| `dell-xe9712-announcement` | [Dell announcement referencing PowerEdge XE9712 with NVIDIA GB200 NVL72](https://www.dell.com/en-au/dt/corporate/newsroom/announcements/detailpage.press-releases~usa~2024~12~dell-cw-customer-announce.htm) | Rack-scale product context | The relationship between PowerEdge XE9712 and NVIDIA GB200 NVL72. It is not a service-data source. |

Dell pages are linked as factual references and are not copied into application assets. Public availability does not establish redistribution rights for Dell imagery.

## Private configuration evidence

### `private-configuration-export`

The user supplied a Dell configuration export that establishes the studied sled as a Dell Server 9712a and lists configured storage, networking, control, power, and cooling assemblies. It can support configuration-specific presence and quantity claims when paired with an official Dell term.

The export remains outside version control. Citations use only the ledger ID; they must not include the original filename, service tag, order/customer data, device-specific identifiers, or copied CSV rows. A reviewer with authorized access may compare a claim to the private export, record the review outcome, and leave the private material in its approved storage location.

## Technician observations

Technician evidence receives an ID in the form `tech-observation-YYYY-MM-DD-short-topic`. Its project record must include:

- observation date and reviewer name or approved reviewer code;
- the model and scene or procedure observed;
- a narrowly stated claim, such as a connector endpoint or which assembly blocks removal;
- status `pending` until a second authorized check or an authoritative procedure confirms it, then `verified` with verification date;
- whether the observation was direct, photo-assisted, or procedure-assisted; and
- any conflict with a Dell source, without attaching private photographs or employee-only material.

Only a `verified` observation may support the structured validation state `technician-verified`. A pending observation remains `needs-review`. If the project later stores these records in a non-public system, the public catalog keeps only its stable observation ID and non-sensitive claim scope.

No technician observation has been promoted to verified in the initial catalog.

## Claim classes and precedence

Each material record must distinguish its evidence class:

1. **Official fact** — use Dell's canonical term and `official` only when an official ledger entry directly supports the claim.
2. **Technician-confirmed layout or procedure** — use `technician-verified` only under the observation protocol above. This may resolve configuration-specific physical details that a general Dell figure does not show.
3. **Plain-language alias** — keep it in `plainName` or `aliases`; it never replaces the Dell canonical term.
4. **Provisional working claim** — use `needs-review` and state the uncertainty. `inferred` is reserved for a documented inference with a reviewable reasoning record, not a guess.

When sources conflict, preserve the Dell canonical name, then prefer a verified technician observation for the studied configuration's layout, then attach plain-language aliases. Leave the disputed fact `needs-review` until the conflict is resolved. Visual depth, physical connection, and removal dependency are independent claims and require independent evidence.

## Project-only review queue

`catalog-review-queue` is an explicit inference/review record used to retain candidate port labels, cable endpoints, and blockers for later verification. It is not an authority for repair guidance. Any catalog item citing it must remain `needs-review` unless another source directly proves the claim.

## Maintenance rules

- Add a ledger entry before adding a new source ID to lesson data.
- Cite the narrowest page or private-source description that proves the material claim.
- Record quantities, side, and index only when the cited source supports them.
- Do not infer a removal sequence from the scene's visual depth.
- If a URL changes, update it here while keeping the stable ledger ID.
- Run `pnpm validate:data` after source or lesson-data changes; missing sources and incompatible validation states fail the check.
