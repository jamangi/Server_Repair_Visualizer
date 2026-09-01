# Target model: Dell Server 9712a

The project's permitted evidence, citation IDs, precedence rules, and private-source handling are maintained in the [Dell Server 9712a source ledger](SOURCE_LEDGER.md).

## Conclusion

The server is a **Dell Server 9712a**. Confidence is high enough to use this as the first model identifier in the visualizer.

The serviceable unit is a 9712a compute sled. In broader product language, this GB200-era sled belongs to Dell's **PowerEdge XE9712** rack-scale NVIDIA GB200 NVL72 offering. Those names describe different scopes and should not be treated as interchangeable in the UI:

- **Dell Server 9712a** — the individual 1U sled being studied and serviced;
- **PowerEdge XE9712** — the rack-scale product/system context.

The app should use “Dell Server 9712a” as the model title and mention “PowerEdge XE9712 / GB200 NVL72 context” as secondary metadata.

## Why the identification is conclusive

The supplied Dell configuration export contains all of the following:

- `210-BQVP : Dell Server 9712a`;
- `389-FKVW : 9712a MX`;
- an NVIDIA GB200 HMC control card;
- a ConnectX-7 network mezzanine card;
- an NVIDIA BlueField-3 dual-port 200 GbE/NDR200 card;
- eight 3.84 TB E1.S NVMe drives;
- a 9712a PSB enclosure; and
- 9712a-specific OSFP, IPEX, BMC, PDB, TPM, M.2 riser, fan, manifold, busbar, and cable assemblies.

The official Dell support page independently describes the 9712a as a two-socket, 1U sled with NVIDIA Grace processors and 480 GB of ECC memory.

Most importantly, Dell's official **Inside the system** figure lists the same physical layout described in the repair lesson:

1. left B bay with BlueField-3 and OSFP;
2. C bay with E1.S drives and front I/O;
3. right B bay with either BlueField-3 + OSFP or PSB + OSFP;
4. the MGX 1RU chassis assembly;
5. two Bianca boards, one HMC, an M.2 riser, one TPM, cold plates, and the rear-wall bracket;
6. busbar cable and bridge bracket;
7. internal manifolds and floating quick disconnects;
8. 12 V inner busbar and partition;
9. top cover;
10. PDB, PDB tray, and BMC board; and
11. eight 40 × 56 mm fan modules and their cover.

This is a near-exact match for the observed system, including its asymmetry.

## Authoritative imagery

Dell publishes an open-system diagram on the [Inside the system](https://www.dell.com/support/manuals/en-us/dell-server-9712a/server_9712a/inside-the-system?guid=guid-db45dd2e-26b7-4c9b-84ee-90385df57b15&lang=en-us) page. The diagram is the best immediate reference for validating the overall layout.

The same manual includes step-specific images for bays, boards, cards, and cables. Those images can support multiple disassembly scenes and more accurate region tracing than a single top-down image.

An official image being publicly viewable does not automatically establish permission to redistribute it as an application asset. For that reason, this repository links to the Dell material but does not copy it. A-001 in [Approvals](../decisions/APPROVALS.md) instead selects an original realistic generated illustration, with Dell imagery retained as a factual layout reference.

## Initial component vocabulary

The app should preserve both official and training-floor names:

| Canonical label | Useful aliases or notes |
| --- | --- |
| E1.S drive and carrier | SSD, E1.S NVMe drive |
| Front panel I/O module | Front control panel |
| Control panel board | Internal control panel |
| PSB | Keep acronym; expand only when a validated Dell source does |
| OSFP card | Fiber/network port card; do not call the optical cable itself a card |
| E1.S backplane | Backplane 0 / Backplane 1 where position is confirmed |
| 1 Gb NIC board | NIC card |
| NVIDIA BlueField-3 DPU | BF3, BlueField 3 |
| PDB | Power distribution board |
| BMC board | Baseboard management controller board |
| IPEX board | Preserve Dell's board name; document connected cables separately |
| Interposer board | Keep distinct from IPEX unless a source proves they are the same assembly |
| Fan module | Eight total in the observed configuration |
| Internal manifold | Left/right; inlet/outlet and color must be verified from the actual view |
| Cold plate | Two assemblies associated with the Bianca boards |
| M.2 riser card | M.2 / riser |
| Inner busbar | Left/right 12 V busbar |
| Bianca board | Motherboard; two total |
| HMC module | One on a Bianca board in the observed configuration |
| TPM module | One on a Bianca board in the observed configuration |

Names that are ambiguous in a lesson should not be invented silently. The data model supports an official label, a plain-language label, aliases, and a validation status.

## Sources

The auditable source scopes and stable IDs are defined in the [source ledger](SOURCE_LEDGER.md). Starting links are repeated here for convenience.

- [Dell Server 9712a support and manuals](https://www.dell.com/support/product-details/en-us/product/dell-server-9712a/resources/manuals)
- [Dell Server 9712a/9712b Installation and Service Manual](https://www.dell.com/support/manuals/en-us/dell-server-9712a/server_9712a_ism/Introduction?guid=guid-92f4ae28-dee6-4ba1-96c2-64326abb8d51&lang=en-us)
- [Dell manual: Inside the system](https://www.dell.com/support/manuals/en-us/dell-server-9712a/server_9712a/inside-the-system?guid=guid-db45dd2e-26b7-4c9b-84ee-90385df57b15&lang=en-us)
- [Dell announcement referencing PowerEdge XE9712 with NVIDIA GB200 NVL72](https://www.dell.com/en-au/dt/corporate/newsroom/announcements/detailpage.press-releases~usa~2024~12~dell-cw-customer-announce.htm)
