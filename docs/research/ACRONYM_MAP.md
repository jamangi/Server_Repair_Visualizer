# Dell Server 9712a acronym and designator map

This companion to the [physical component walk-through](DELL_9712A_COMPONENT_WALKTHROUGH.md) explains every acronym, initialism, unit abbreviation, connector reference, and acronym-like product label used in the essay. It is a comprehension aid, not a service procedure.

Entries are approximately alphabetical, with dependency order taking priority: a foundational term is explained before a term that uses it. Within an entry, nested terms are expanded immediately. For example, **PSB** is presented as the working expansion **PCIe Switch Board**, and **PCIe** is immediately restated as **Peripheral Component Interconnect Express**.

## Confidence labels

- **Confirmed** — expanded by Dell, a standards body, or the named vendor.
- **Documented alternate** — used by an authoritative source in the same GB200 product family, but not spelled out by the Dell 9712a manual.
- **Working expansion** — pedagogically useful and consistent with the hardware context, but not confirmed by Dell; do not treat it as a part-ordering name.
- **Name/designator** — a brand, form-factor code, bay label, or connector reference rather than an acronym describing function.
- **Unit** — a measurement abbreviation, not a component name.

## Map

| Term as seen | Expansion or meaning | Confidence | Where it appears in the chassis |
| --- | --- | --- | --- |
| **1RU / 1U / RU** | **one rack unit / rack unit**. “U” is the rack-height unit; 1U is nominally 44.45 mm (1.75 inches). “1RU” is an equivalent spelling. | Confirmed unit | Describes the height of the entire sled, not one internal part. |
| **B bay / C bay** | Position designators, not expansions. Dell calls the two outer front cages left and right **B bays** and the center storage/I/O cage **C bay**. | Name/designator | Front: B bay on machine-left, C bay in the center, B bay on machine-right. |
| **Bianca** | Dell/NVIDIA board name, not an acronym. The lesson calls the two motherboards Bianca 0 and Bianca 1. | Name/designator | Rear half: Bianca 0 on machine-left and Bianca 1 on machine-right in the lesson numbering. |
| **BlueField-3** | NVIDIA product-family name, not an acronym. The board is also described by the functional acronym **DPU** below. | Name/designator | Front-left B bay in the studied PSB configuration. |
| **BMC** | **Baseboard Management Controller** in common Dell usage. NVIDIA’s GB rack guide also uses **Board Management Controller**, a documented shorter alternate. | Confirmed; documented alternate | BMC board in the small PDB/BMC tray immediately in front of the fan row toward machine-left/center; its BMC LAN port is exposed at the front panel. |
| **C-Link / Clink** | A printed NVIDIA/Dell link-family label. No dependable public expansion was found; likely readings such as “chip link,” “compute link,” or “coherent link” should remain hypotheses, not definitions. | Name/designator | Lesson-observed central cable-management field; exact endpoints remain unverified. |
| **DPU** | **Data Processing Unit**. | Confirmed | The term describes the BlueField-3 card in the front-left B bay. |
| **EDSFF** | **Enterprise and Datacenter Standard Form Factor**. Older material sometimes says **Enterprise and Datacenter SSD Form Factor**, where **SSD** means **Solid-State Drive**. | Confirmed | Center-front C bay: the standards family to which the E1.S drives and backplanes belong. |
| **E1.S** | **EDSFF 1U Short** device form factor: **Enterprise and Datacenter Standard Form Factor, one-rack-unit short**. E1.S is a form-factor designation, not a word-by-word acronym. | Confirmed name/designator | Eight narrow drive carriers across the center-front C bay and their two lesson-numbered backplane sections directly behind them. |
| **Gb** | **gigabit**. Lowercase **b** means bit; uppercase **B** would mean byte. | Confirmed unit | Used for the 1 Gb NIC/Host LAN connection in the front-left B bay. |
| **HMC** | **Host Management Controller** in NVIDIA’s DGX GB rack user guide; **Hardware Management Controller** in NVIDIA Mission Control terminology. Both are documented, while Dell’s 9712a manual says only “HMC module.” | Documented alternates | Rear-left service cluster, bracketed at the side of the chassis above/at the left Bianca board; HMC J21/J22 leads connect to the left Bianca, and lesson-mapped cables run to the interposer. |
| **I/O** | **Input/Output**. | Confirmed | Most visibly the front panel I/O module beside the E1.S carriers; also appears in board and connector labels. |
| **I-PEX / IPEX** | Vendor/brand name. I-PEX officially expands its corporate name as **Innovative Product development & Engineering solutions eXpert**. In Dell phrases such as “IPEX board,” “IPEX cable,” and “IPEX bridge cable,” it identifies the vendor/product family rather than the cable’s function. | Confirmed vendor name | Front-left B bay, beside the BlueField-3 DPU and PCIe auxiliary card; paired black-and-white harnesses and bridge cables attach there. |
| **J / JP numbers** | Printed-circuit-board reference designators, not functional acronyms. **J4, J21, and J22** identify particular jacks/connectors; **JP1** is a board-specific connector/jumper-style reference. The number is meaningful only with the board name. | Name/designator | J4 at the PDB; J21/J22 at the HMC/left-Bianca path; JP1 on the front-left mezzanine/NIC power path. |
| **LAN** | **Local Area Network**. | Confirmed | Front face: Host LAN at machine-left and BMC LAN beside the center drive/front-I/O area. |
| **M.2** | Storage/card form-factor designation, not a current acronym. It replaced the development name “Next Generation Form Factor,” but **M.2** itself is the official name rather than an expansion. | Name/designator | Rear-right, on an M.2 riser plugged into the right Bianca board. |
| **Mezz** | **mezzanine**, an abbreviation rather than an acronym. “Mezz Board_LAN JP1” is a cable/connector label in the Dell procedure. | Name/designator | Front-left B bay at the 1 Gb NIC/mezzanine-board power connection. |
| **mm** | **millimetre/millimeter**. | Confirmed unit | Used in the 40 × 56 mm dimensions of each of the eight fans in the transverse fan bank. |
| **NIC** | **Network Interface Controller**; “network interface card” is the common physical-card reading. | Confirmed | The 1 Gb NIC board is in the front-left B bay; its Host LAN jack is visible at the front. |
| **NVIDIA** | Company and brand name, not an acronym in the essay. | Name/designator | Names the supplier of BlueField-3 and the broader GB200 platform; it is not a single chassis location. |
| **NVM / NVMe** | **NVM** is **Non-Volatile Memory**. **NVMe** is **NVM Express**, commonly written out as **Non-Volatile Memory Express**; the lowercase “e” belongs to the stylized acronym. | Confirmed | Center-front E1.S SSDs and the rear-right M.2 SSD use NVMe storage. |
| **OSFP** | **Octal Small Form Factor Pluggable**. “Octal” refers to the eight high-speed electrical lanes in the module form factor, not to eight OSFP sockets in this sled. | Confirmed | One OSFP card in each outer front B bay; each card presents two rectangular front openings in the photographed configuration. |
| **PCIe** | **Peripheral Component Interconnect Express**. The lowercase “e” distinguishes the PCI Express form from the older PCI name. | Confirmed | Front-left BlueField/riser and front-right PSB/riser areas; PCIe/Ultra-Pass cabling continues rearward through the fan channel toward the Bianca boards. |
| **PDB** | **Power Distribution Board**. | Confirmed | Small tray assembly immediately in front of the fan row toward machine-left/center, adjacent to the BMC board. |
| **PSB** | Working expansion: **PCIe Switch Board** (also naturally phrased **PCIe Switching Board**), where **PCIe** means **Peripheral Component Interconnect Express**. Dell identifies the part as a PCIe card and calls it PSB but does not spell out the letters. | Working expansion | Front-right B bay, seated in a PCIe riser beside the right OSFP card; connected to the red-and-black busbar power cable. |
| **QD / QDs** | **Quick Disconnect / Quick Disconnects**. Dell’s figure says “floating QDs.” | Confirmed | Rear end of the two internal coolant manifolds, where the sled meets the external cooling loop. |
| **QSFP** | **Quad Small Form-factor Pluggable**. | Confirmed | Two QSFP network openings on the front of the BlueField-3 assembly in the machine-left B bay. |
| **SD** | **Secure Digital**. In this essay it appears only to correct the phrase “SD card slots”; the server’s eight narrow front devices are E1.S SSD carriers, not SD slots. | Confirmed | No SD slot is identified in the studied front layout. |
| **SSD** | **Solid-State Drive**. | Confirmed | Eight E1.S SSD carriers at center-front and one M.2 SSD on the rear-right riser. |
| **TPM** | **Trusted Platform Module**. | Confirmed | Rear-left lesson cluster, in a small bracket/slot on a Bianca board. Dell confirms the Bianca connection; the precise left-side placement is retained as a lesson observation. |
| **Ultra-Pass / UltraPass** | Product/cable-family name, not a published acronym in the cited Dell procedure. | Name/designator | Runs from the front-left bay through the channel between the fans and under cold-plate tubing to sockets on the left Bianca board. |
| **USB** | **Universal Serial Bus**. | Confirmed | Host USB port on the front panel I/O module beside the E1.S drive row. |
| **V** | **volt**; **12 V** means twelve volts. | Confirmed unit | The paired 12 V inner busbars occupy the centerline between the two rear Bianca boards; associated power cabling continues toward the front-right PSB. |

## Important ambiguity notes

**HMC:** “Host Management Controller” and “Hardware Management Controller” are not idle guesses: both occur in NVIDIA material for the GB rack-management family. Dell’s 9712a service manual does not choose between them, so the UI should retain both and mark the expansion as context-dependent.

**PSB:** “PCIe Switch Board” is the strongest working reading because Dell treats the PSB as a PCIe card in the right bay and NVIDIA’s GB200 block diagram includes PCIe switches. It is still not a Dell-confirmed expansion. Use **PSB** as the canonical service label and show the expansion as an explanatory hypothesis.

**IPEX:** The essay originally treated IPEX only as a manufacturer name. The manufacturer does provide the corporate expansion “Innovative Product development & Engineering solutions eXpert.” That expansion explains the brand’s origin, not what the Dell IPEX board or cable does.

**C-Link:** NVIDIA diagrams label “Clinks,” but the reviewed public material does not expand the “C.” Preserve C-Link as the component/cable label until a platform schematic or cable list defines it.

## Sources

- [Dell Server 9712a: Inside the system](https://www.dell.com/support/manuals/en-us/dell-server-9712a/server_9712a/inside-the-system?guid=guid-db45dd2e-26b7-4c9b-84ee-90385df57b15&lang=en-us)
- [Dell Server 9712a: Installing the left bay](https://www.dell.com/support/manuals/en-us/dell-server-9712a/server_9712a_ism/installing-the-left-bay?guid=guid-82de6e0a-dadd-44bd-bba7-ee73f1ab9149&lang=en-us)
- [NVIDIA DGX GB Rack Scale Systems User Guide](https://docs.nvidia.com/dgx/dgxgb200-user-guide/dgxgb200-user-guide.pdf)
- [NVIDIA Mission Control terms and definitions](https://docs.nvidia.com/pdf/sbom-2-3-0.pdf)
- [I-PEX company-name explanation](https://corp.i-pex.com/en/ir/faq)
- [SNIA SSD form factors and EDSFF](https://www.snia.org/forums/cmsi/knowledge/formfactors)
- [NVM Express](https://nvmexpress.org/)
- [OSFP Multi-Source Agreement specification](https://osfpmsa.org/specification.html)
- [PCI-SIG PCI Express specifications](https://pcisig.com/specifications)
- [Trusted Computing Group TPM resources](https://trustedcomputinggroup.org/work-groups/trusted-platform-module/)
- [USB Implementers Forum](https://www.usb.org/)

The machine-readable companion is [ACRONYM_MAP.json](ACRONYM_MAP.json). Its ordered records include expansion confidence, nested dependencies, examples, and chassis locations for later use in the GitHub Pages study interface.
