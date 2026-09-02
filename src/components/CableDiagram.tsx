import { useMemo, useState } from 'react'
import {
  cableKinds,
  cableNodes,
  cableRoutes,
  cableSources,
  type CableKind,
  type CableNode,
  type CableRoute,
} from '../content/cableDiagram'

type Selection = { type: 'node'; id: string } | { type: 'route'; id: string }

const evidenceLabels = {
  documented: 'Dell documented',
  'lesson-observation': 'Lesson observation',
  'endpoint-review': 'Endpoint review',
} as const

function NodeShape({ node, selected, related, onSelect }: {
  node: CableNode
  selected: boolean
  related: boolean
  onSelect: () => void
}) {
  const handleKeyDown = (event: React.KeyboardEvent<SVGGElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onSelect()
    }
  }
  const className = `cable-node cable-node-${node.form}${selected ? ' is-selected' : ''}${related ? ' is-related' : ''}`

  if (node.id === 'fan-bank') {
    const fanWidth = 88
    const gap = 15
    return (
      <g className={className} role="button" tabIndex={0} aria-label={node.name} onMouseEnter={onSelect} onClick={onSelect} onKeyDown={handleKeyDown}>
        <title>{node.name}</title>
        <rect className="fan-bank-hit" x={node.x} y={node.y} width={node.width} height={node.height} rx="12" />
        {Array.from({ length: 8 }, (_, index) => {
          const x = node.x + 5 + index * (fanWidth + gap)
          return <rect className="fan-module-box" key={x} x={x} y={node.y + 8} width={fanWidth} height={node.height - 16} rx="8" />
        })}
        <text x={node.x + node.width / 2} y={node.y + node.height / 2 + 6} textAnchor="middle">{node.shortLabel}</text>
      </g>
    )
  }

  return (
    <g className={className} role="button" tabIndex={0} aria-label={node.name} onMouseEnter={onSelect} onClick={onSelect} onKeyDown={handleKeyDown}>
      <title>{node.name}</title>
      <rect x={node.x} y={node.y} width={node.width} height={node.height} rx={node.form === 'tiny' ? 6 : 12} />
      <text x={node.x + node.width / 2} y={node.y + node.height / 2 + 6} textAnchor="middle">{node.shortLabel}</text>
    </g>
  )
}

function RouteShape({ route, selected, related, muted, onSelect }: {
  route: CableRoute
  selected: boolean
  related: boolean
  muted: boolean
  onSelect: () => void
}) {
  const handleKeyDown = (event: React.KeyboardEvent<SVGPathElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onSelect()
    }
  }
  const classes = `cable-route cable-kind-${route.kind} evidence-${route.evidence}${selected ? ' is-selected' : ''}${related ? ' is-related' : ''}${muted ? ' is-muted' : ''}`

  return (
    <g className={classes}>
      <path className="cable-route-halo" d={route.path} />
      <path className="cable-route-line" d={route.path} />
      <path className="cable-route-hit" d={route.path} role="button" tabIndex={0} aria-label={`${route.label}: ${route.from} to ${route.to}`} onMouseEnter={onSelect} onClick={onSelect} onKeyDown={handleKeyDown}>
        <title>{route.label}</title>
      </path>
    </g>
  )
}

export function CableDiagram() {
  const [selection, setSelection] = useState<Selection>({ type: 'node', id: 'bf3' })
  const [activeKinds, setActiveKinds] = useState<Set<CableKind>>(() => new Set(cableKinds.map((kind) => kind.id)))
  const nodeById = useMemo(() => new Map(cableNodes.map((node) => [node.id, node])), [])
  const selectedNode = selection.type === 'node' ? nodeById.get(selection.id) : undefined
  const selectedRoute = selection.type === 'route' ? cableRoutes.find((route) => route.id === selection.id) : undefined
  const connectedRoutes = selectedNode
    ? cableRoutes.filter((route) => route.from === selectedNode.id || route.to === selectedNode.id)
    : []
  const connectedNodeIds = new Set(selectedRoute ? [selectedRoute.from, selectedRoute.to] : [])
  const ordinaryRoutes = cableRoutes.filter((route) => !route.bridge && activeKinds.has(route.kind))
  const bridgeRoutes = cableRoutes.filter((route) => route.bridge && activeKinds.has(route.kind))

  function toggleKind(kind: CableKind) {
    setActiveKinds((current) => {
      const next = new Set(current)
      if (next.has(kind)) next.delete(kind)
      else next.add(kind)
      return next
    })
  }

  function isRouteRelated(route: CableRoute) {
    return selection.type === 'node' && (route.from === selection.id || route.to === selection.id)
  }

  return (
    <main className="workbench-page" id="panel-workbench" role="tabpanel" aria-labelledby="tab-workbench">
      <header className="workbench-heading">
        <div>
          <p className="eyebrow">Scratch workbench · Cable diagram</p>
          <h1>Chassis-anchored connection map</h1>
          <p>Rear is at the top and front bays are at the bottom. Component area loosely follows service footprint; it is not manufacturing-scale geometry.</p>
        </div>
        <span className="draft-badge">Draft · not an assembly procedure</span>
      </header>

      <div className="cable-kind-controls" aria-label="Show cable categories">
        {cableKinds.map((kind) => (
          <button key={kind.id} type="button" className={`cable-kind-toggle cable-kind-${kind.id}`} aria-pressed={activeKinds.has(kind.id)} onClick={() => toggleKind(kind.id)}>
            <span aria-hidden="true" />{kind.label}
          </button>
        ))}
        <span className="route-style-key"><i className="solid-line" /> documented <i className="dashed-line" /> review / observation</span>
      </div>

      <div className="cable-workspace">
        <div className="cable-canvas panel">
          <svg viewBox="0 0 1000 1430" role="img" aria-labelledby="cable-map-title cable-map-description">
            <title id="cable-map-title">Dell Server 9712a draft cable and connector diagram</title>
            <desc id="cable-map-description">A portrait schematic organized like the studied chassis: rear Bianca boards and a central busbar at the top, the fan wall immediately forward, the PDB, BMC, and interposer ahead of the fans, and front bays at the bottom. Select a node or line for details.</desc>
            <rect className="chassis-outline" x="8" y="65" width="984" height="1280" rx="28" />
            <g className="zone-labels" aria-hidden="true">
              <text x="35" y="92">REAR / COMPUTE</text>
              <text x="35" y="495">FAN WALL</text>
              <text x="35" y="645">POWER / MANAGEMENT</text>
              <text x="35" y="895">FRONT BAYS</text>
              <text x="500" y="1418" textAnchor="middle">FRONT / SERVICE AISLE</text>
            </g>
            <g className="routing-lanes" aria-hidden="true">
              <path d="M288 460 V905" />
              <path d="M700 460 V905" />
              <path d="M920 460 V905" />
            </g>

            {cableNodes.map((node) => (
              <NodeShape key={node.id} node={node} selected={selectedNode?.id === node.id} related={connectedNodeIds.has(node.id)} onSelect={() => setSelection({ type: 'node', id: node.id })} />
            ))}

            {[...ordinaryRoutes, ...bridgeRoutes].map((route) => (
              <RouteShape key={route.id} route={route} selected={selectedRoute?.id === route.id} related={isRouteRelated(route)} muted={Boolean(selectedRoute && selectedRoute.id !== route.id)} onSelect={() => setSelection({ type: 'route', id: route.id })} />
            ))}
          </svg>
        </div>

        <aside className="cable-inspector panel" aria-live="polite">
          {selectedNode && (
            <>
              <p className="eyebrow">Selected component</p>
              <h2>{selectedNode.name}</h2>
              <p className="inspector-meta">{selectedNode.zone.replace('-', ' ')} zone · {selectedNode.form} footprint</p>
              <p>{selectedNode.note}</p>
              <h3>Shown connections</h3>
              {connectedRoutes.length ? (
                <ul className="inspector-connections">
                  {connectedRoutes.map((route) => {
                    const other = nodeById.get(route.from === selectedNode.id ? route.to : route.from)
                    return <li key={route.id}><button type="button" onClick={() => setSelection({ type: 'route', id: route.id })}><span className={`connection-swatch cable-kind-${route.kind}`} /> <b>{route.label}</b><small>{other?.name}</small></button></li>
                  })}
                </ul>
              ) : <p className="no-connection">No verified component-to-component endpoint is shown yet.</p>}
            </>
          )}
          {selectedRoute && (
            <>
              <p className="eyebrow">Selected connection</p>
              <h2>{selectedRoute.label}</h2>
              <p className={`route-evidence evidence-${selectedRoute.evidence}`}>{evidenceLabels[selectedRoute.evidence]}</p>
              <p className="endpoint-pair"><b>{nodeById.get(selectedRoute.from)?.name}</b><span>connects to</span><b>{nodeById.get(selectedRoute.to)?.name}</b></p>
              <p>{selectedRoute.routeNote}</p>
              {selectedRoute.bridge && <p className="bridge-note"><span aria-hidden="true">⌒</span> The arc at this crossing means this route passes visually over the other line.</p>}
              <a className="source-link" href={cableSources[selectedRoute.sourceId].url} target={cableSources[selectedRoute.sourceId].url.startsWith('http') ? '_blank' : undefined} rel={cableSources[selectedRoute.sourceId].url.startsWith('http') ? 'noreferrer' : undefined}>Review source → {cableSources[selectedRoute.sourceId].label}</a>
            </>
          )}
          <div className="inspector-boundary">
            <h3>Accuracy boundary</h3>
            <p>Solid routes name endpoints in Dell material. Dashed routes remain lesson observations or incomplete endpoint mappings. This view does not yet prescribe installation order.</p>
          </div>
        </aside>
      </div>
    </main>
  )
}
