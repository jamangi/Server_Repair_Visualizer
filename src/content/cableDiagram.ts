export type CableKind = 'data' | 'power' | 'management' | 'optical' | 'coolant' | 'direct'
export type CableEvidence = 'documented' | 'lesson-observation' | 'endpoint-review'

export type CableNode = {
  id: string
  name: string
  shortLabel: string
  x: number
  y: number
  width: number
  height: number
  form: 'large' | 'medium' | 'slim' | 'tiny' | 'assembly' | 'terminal'
  zone: 'rear' | 'middle' | 'fan-wall' | 'front' | 'external'
  note: string
}

export type CableRoute = {
  id: string
  from: string
  to: string
  label: string
  kind: CableKind
  evidence: CableEvidence
  path: string
  routeNote: string
  sourceId: keyof typeof cableSources
  bridge?: { x: number; y: number }
}

export const cableSources = {
  'dell-inside': {
    label: 'Dell: Inside the system',
    url: 'https://www.dell.com/support/manuals/en-us/dell-server-9712a/server_9712a/inside-the-system?guid=guid-db45dd2e-26b7-4c9b-84ee-90385df57b15&lang=en-us',
  },
  'dell-left-bay': {
    label: 'Dell: Installing the left bay',
    url: 'https://www.dell.com/support/manuals/en-us/dell-server-9712a/server_9712a_ism/installing-the-left-bay?guid=guid-82de6e0a-dadd-44bd-bba7-ee73f1ab9149&lang=en-us',
  },
  'dell-ipex': {
    label: 'Dell: Removing the IPEX board',
    url: 'https://www.dell.com/support/manuals/en-us/dell-server-9712a/server_9712a/removing-ipex-board?guid=guid-c9bcba0c-2a0d-4901-ba03-e407c4f6701d&lang=en-us',
  },
  'dell-front-io': {
    label: 'Dell: Installing the front panel I/O module',
    url: 'https://www.dell.com/support/manuals/en-us/dell-9712a-server/server_9712a/installing-front-panel-io-module?guid=guid-7f75e83b-891f-465a-a6b1-91d095a6af97&lang=en-us',
  },
  'dell-m2': {
    label: 'Dell: Installing the M.2 card and SSD',
    url: 'https://www.dell.com/support/manuals/en-us/dell-9712a-server/server_9712a/installing-the-m2-card-and-ssd?guid=guid-47e54520-cc11-4371-8e9b-2892190d5125&lang=en-us',
  },
  'dell-tpm': {
    label: 'Dell: Installing the TPM module',
    url: 'https://www.dell.com/support/manuals/en-us/dell-server-9712a/server_9712a/installing-tpm-module-to-bianca-board?guid=guid-ccbfba51-716e-46d2-b8e8-cf2ea15c7178&lang=en-us',
  },
  'lesson-walkthrough': {
    label: 'Project research: component walk-through',
    url: '#dell-server-9712a/essay',
  },
} as const

export const cableNodes: CableNode[] = [
  { id: 'bianca-left', name: 'Left Bianca motherboard', shortLabel: 'BIANCA L', x: 90, y: 105, width: 350, height: 330, form: 'large', zone: 'rear', note: 'Large left compute board; destination for documented left-bay, HMC, fan, and Ultra-Pass connections.' },
  { id: 'bianca-right', name: 'Right Bianca motherboard', shortLabel: 'BIANCA R', x: 560, y: 105, width: 350, height: 330, form: 'large', zone: 'rear', note: 'Large right compute board carrying the M.2 riser and the studied right-side compute path.' },
  { id: 'hmc', name: 'HMC module', shortLabel: 'HMC', x: 30, y: 175, width: 120, height: 130, form: 'medium', zone: 'rear', note: 'Bracketed medium card at the rear-left chassis side.' },
  { id: 'tpm', name: 'Trusted Platform Module', shortLabel: 'TPM', x: 170, y: 145, width: 50, height: 50, form: 'tiny', zone: 'rear', note: 'Tiny module seated in a Bianca-board slot.' },
  { id: 'm2', name: 'M.2 riser and SSD', shortLabel: 'M.2', x: 830, y: 170, width: 58, height: 150, form: 'slim', zone: 'rear', note: 'Slim riser assembly inserted into the right Bianca.' },
  { id: 'cold-plate-left', name: 'Cold Plate 0', shortLabel: 'CP0', x: 260, y: 245, width: 125, height: 78, form: 'medium', zone: 'rear', note: 'Lesson-numbered left cold plate; color and numbering remain observations.' },
  { id: 'cold-plate-right', name: 'Cold Plate 1', shortLabel: 'CP1', x: 615, y: 245, width: 125, height: 78, form: 'medium', zone: 'rear', note: 'Lesson-numbered right cold plate; color and numbering remain observations.' },
  { id: 'manifold-left', name: 'Left internal manifold', shortLabel: 'L MAN', x: 18, y: 350, width: 52, height: 320, form: 'slim', zone: 'middle', note: 'Long side-mounted coolant assembly; blue in the lesson observation.' },
  { id: 'manifold-right', name: 'Right internal manifold', shortLabel: 'R MAN', x: 930, y: 350, width: 52, height: 320, form: 'slim', zone: 'middle', note: 'Long side-mounted coolant assembly; red in the lesson observation.' },
  { id: 'interposer', name: 'Interposer board', shortLabel: 'INT', x: 455, y: 375, width: 90, height: 120, form: 'slim', zone: 'middle', note: 'Skinny connector board. HMC and BMC endpoints are retained as lesson observations.' },
  { id: 'bmc', name: 'Baseboard Management Controller board', shortLabel: 'BMC', x: 95, y: 505, width: 145, height: 145, form: 'medium', zone: 'middle', note: 'Compact control board beside the PDB tray.' },
  { id: 'pdb', name: 'Power Distribution Board', shortLabel: 'PDB', x: 270, y: 500, width: 230, height: 170, form: 'medium', zone: 'middle', note: 'Compact power board and tray, enlarged enough to expose its J4 study endpoint.' },
  { id: 'busbar', name: '12 V inner busbar and power cable', shortLabel: '12 V BUS', x: 650, y: 520, width: 190, height: 68, form: 'slim', zone: 'middle', note: 'Rigid rails plus the separately serviceable red-and-black cable leading to the PSB.' },
  { id: 'fan-bank', name: 'Fan modules 1–8', shortLabel: 'FANS 1–8', x: 85, y: 735, width: 830, height: 92, form: 'assembly', zone: 'fan-wall', note: 'Eight modules span the chassis. Dell explicitly names Fan 1 and Fan 2 connections to the left Bianca.' },
  { id: 'osfp-left', name: 'Left OSFP card', shortLabel: 'OSFP L', x: 250, y: 1035, width: 145, height: 170, form: 'medium', zone: 'front', note: 'Low card in the left B bay with two front-facing OSFP openings.' },
  { id: 'bf3', name: 'BlueField-3 DPU card', shortLabel: 'BF3', x: 75, y: 915, width: 265, height: 260, form: 'large', zone: 'front', note: 'Large heatsinked card forming the main mass of the left B bay.' },
  { id: 'ipex', name: 'IPEX board', shortLabel: 'IPEX', x: 25, y: 990, width: 120, height: 150, form: 'medium', zone: 'front', note: 'Medium bridge/interface board beside the BlueField-3 card.' },
  { id: 'nic', name: '1 Gb network interface controller', shortLabel: 'NIC', x: 105, y: 1200, width: 68, height: 135, form: 'slim', zone: 'front', note: 'Skinny front-left board. Dell documents two board cables and the JP1 power lead; opposite endpoints need review.' },
  { id: 'left-riser', name: 'Left PCIe riser', shortLabel: 'RISER L', x: 355, y: 930, width: 68, height: 205, form: 'slim', zone: 'front', note: 'Slim riser module in the left bay; the Ultra-Pass route continues rearward from this bay.' },
  { id: 'e1s-backplane', name: 'E1.S backplane assembly', shortLabel: 'E1.S BP', x: 440, y: 930, width: 130, height: 225, form: 'slim', zone: 'front', note: 'Two lesson-numbered backplane sections are represented as one documented assembly.' },
  { id: 'front-io', name: 'Front panel I/O module', shortLabel: 'F I/O', x: 455, y: 1180, width: 105, height: 130, form: 'slim', zone: 'front', note: 'Skinny front-facing module carrying the external management and service openings.' },
  { id: 'control-panel', name: 'Control panel board', shortLabel: 'CP', x: 490, y: 1230, width: 46, height: 46, form: 'tiny', zone: 'front', note: 'Tiny internal panel card mounted within the front I/O bracket.' },
  { id: 'drives', name: 'Eight E1.S SSD carriers', shortLabel: 'E1.S ×8', x: 430, y: 1330, width: 150, height: 58, form: 'assembly', zone: 'front', note: 'Repeated drive carriers at the front edge, seated directly into the backplanes.' },
  { id: 'right-riser', name: 'Right PCIe riser', shortLabel: 'RISER R', x: 580, y: 930, width: 68, height: 205, form: 'slim', zone: 'front', note: 'Slim riser supporting the PSB configuration in the right B bay.' },
  { id: 'osfp-right', name: 'Right OSFP card', shortLabel: 'OSFP R', x: 605, y: 1035, width: 145, height: 170, form: 'medium', zone: 'front', note: 'Low card in the right B bay with two front-facing OSFP openings.' },
  { id: 'psb', name: 'PSB card and enclosure', shortLabel: 'PSB', x: 680, y: 915, width: 255, height: 260, form: 'large', zone: 'front', note: 'Broad right-bay PCIe card/enclosure in the studied PSB configuration.' },
  { id: 'fiber-left', name: 'Left external optical link', shortLabel: 'FIBER', x: 230, y: 1360, width: 105, height: 42, form: 'terminal', zone: 'external', note: 'External optical transceiver or cable assembly at the left OSFP openings.' },
  { id: 'fiber-right', name: 'Right external optical link', shortLabel: 'FIBER', x: 690, y: 1360, width: 105, height: 42, form: 'terminal', zone: 'external', note: 'External optical transceiver or cable assembly at the right OSFP openings.' },
]

export const cableRoutes: CableRoute[] = [
  { id: 'hmc-bianca', from: 'hmc', to: 'bianca-left', label: 'HMC J21 / J22', kind: 'management', evidence: 'documented', path: 'M150 222 H205 V212 H255', routeNote: 'Dell names HMC_J21 and HMC_J22 between the HMC and left Bianca.', sourceId: 'dell-left-bay' },
  { id: 'tpm-bianca', from: 'tpm', to: 'bianca-left', label: 'Bianca slot', kind: 'direct', evidence: 'documented', path: 'M195 195 V218', routeNote: 'Direct board-slot connection, not a loose cable.', sourceId: 'dell-tpm' },
  { id: 'm2-bianca', from: 'm2', to: 'bianca-right', label: 'M.2 riser slot', kind: 'direct', evidence: 'documented', path: 'M830 240 H790', routeNote: 'The M.2 riser inserts directly into the right Bianca.', sourceId: 'dell-m2' },
  { id: 'hmc-interposer', from: 'hmc', to: 'interposer', label: 'HMC cable', kind: 'management', evidence: 'lesson-observation', path: 'M92 305 V455 H455', routeNote: 'The lesson maps an HMC cable to the interposer; public endpoint evidence is incomplete.', sourceId: 'lesson-walkthrough' },
  { id: 'bmc-interposer', from: 'bmc', to: 'interposer', label: 'BMC cable', kind: 'management', evidence: 'lesson-observation', path: 'M167 650 V690 H588 C588 670 608 670 608 690 H610 V435 H545', routeNote: 'The raised arc at x=598 shows this cable jumping over the BF3 data lane.', sourceId: 'lesson-walkthrough', bridge: { x: 598, y: 690 } },
  { id: 'ipex-bf3', from: 'ipex', to: 'bf3', label: 'Black / white IPEX harness', kind: 'data', evidence: 'documented', path: 'M145 1040 H185 V1005 H205', routeNote: 'Dell directs the black and white harnesses between the IPEX board and BlueField-3 card.', sourceId: 'dell-ipex' },
  { id: 'bf3-bianca', from: 'bf3', to: 'bianca-left', label: 'BF3 / left Bianca cable set', kind: 'data', evidence: 'documented', path: 'M340 980 H598 V430 H370', routeNote: 'Uses a reserved routing lane through the fan wall and below the cold-plate tubing.', sourceId: 'dell-left-bay' },
  { id: 'ultrapass-bianca', from: 'left-riser', to: 'bianca-left', label: 'Ultra-Pass ×2', kind: 'data', evidence: 'documented', path: 'M389 930 V850 H288 V827 H255 V455 H335', routeNote: 'Dell specifies two Ultra-Pass connectors at the left Bianca and their fan-channel route.', sourceId: 'dell-left-bay' },
  { id: 'fan12-bianca', from: 'fan-bank', to: 'bianca-left', label: 'Fan 1 / Fan 2 power', kind: 'power', evidence: 'documented', path: 'M205 735 V690 H245 V435', routeNote: 'Dell says these two fan cables route over the cold-plate tubing and connect to the left Bianca.', sourceId: 'dell-left-bay' },
  { id: 'busbar-psb', from: 'busbar', to: 'psb', label: 'Red / black busbar power cable', kind: 'power', evidence: 'documented', path: 'M840 555 H920 V915', routeNote: 'Kept flat in the black plastic tray before connecting to the PSB.', sourceId: 'dell-left-bay' },
  { id: 'psb-bianca', from: 'psb', to: 'bianca-right', label: 'PSB PCIe path', kind: 'data', evidence: 'endpoint-review', path: 'M680 970 H700 V610 H620 V430 H650', routeNote: 'The PSB/riser cable is documented, but the complete board-to-board endpoint needs procedure-level confirmation.', sourceId: 'lesson-walkthrough' },
  { id: 'front-panel-pair', from: 'control-panel', to: 'front-io', label: 'Panel-card connection', kind: 'direct', evidence: 'documented', path: 'M513 1230 V1210', routeNote: 'The panel card and I/O board are installed together in the same bracketed module.', sourceId: 'dell-front-io' },
  { id: 'drives-backplane', from: 'drives', to: 'e1s-backplane', label: 'E1.S edge connectors ×8', kind: 'direct', evidence: 'documented', path: 'M505 1330 V1155', routeNote: 'Each carrier seats directly into a backplane connector.', sourceId: 'dell-inside' },
  { id: 'left-fiber', from: 'fiber-left', to: 'osfp-left', label: 'External optical link', kind: 'optical', evidence: 'lesson-observation', path: 'M282 1360 V1205 H322', routeNote: 'External fiber/transceiver connection is shown; the internal OSFP-card cable endpoint is intentionally omitted.', sourceId: 'lesson-walkthrough' },
  { id: 'right-fiber', from: 'fiber-right', to: 'osfp-right', label: 'External optical link', kind: 'optical', evidence: 'lesson-observation', path: 'M742 1360 V1205 H678', routeNote: 'External fiber/transceiver connection is shown; the internal OSFP-card cable endpoint is intentionally omitted.', sourceId: 'lesson-walkthrough' },
  { id: 'left-manifold-cp0', from: 'manifold-left', to: 'cold-plate-left', label: 'Left coolant hose', kind: 'coolant', evidence: 'lesson-observation', path: 'M44 350 V300 H260', routeNote: 'Blue/left color and cold-plate numbering come from the lesson observation.', sourceId: 'lesson-walkthrough' },
  { id: 'right-manifold-cp1', from: 'manifold-right', to: 'cold-plate-right', label: 'Right coolant hose', kind: 'coolant', evidence: 'lesson-observation', path: 'M956 350 V300 H740', routeNote: 'Red/right color and cold-plate numbering come from the lesson observation.', sourceId: 'lesson-walkthrough' },
]

export const cableKinds: { id: CableKind; label: string }[] = [
  { id: 'data', label: 'Data' },
  { id: 'power', label: 'Power' },
  { id: 'management', label: 'Management' },
  { id: 'optical', label: 'Optical' },
  { id: 'coolant', label: 'Coolant' },
  { id: 'direct', label: 'Board / slot' },
]
