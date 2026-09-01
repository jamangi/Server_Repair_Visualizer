interface ServerFixtureProps {
  depth: number
  selectedId: string
  onSelect: (componentId: string) => void
}

const fixtureRegions = [
  { id: 'left-b-bay', label: 'Left B bay fixture region', x: 78, y: 108, width: 222, height: 238 },
  { id: 'c-bay', label: 'C bay fixture region', x: 316, y: 108, width: 192, height: 238 },
  { id: 'right-b-bay', label: 'Right B bay fixture region', x: 524, y: 108, width: 222, height: 238 },
  { id: 'bianca-board', label: 'Bianca board fixture region', x: 192, y: 374, width: 432, height: 196 },
] as const

export function ServerFixture({ depth, selectedId, onSelect }: ServerFixtureProps) {
  const handleKeyDown = (event: React.KeyboardEvent<SVGGElement>, componentId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onSelect(componentId)
    }
  }

  return (
    <svg
      className="server-fixture"
      viewBox="0 0 824 640"
      role="img"
      aria-labelledby="fixture-title fixture-description"
    >
      <title id="fixture-title">Neutral interactive chassis layout fixture</title>
      <desc id="fixture-description">
        An abstract, non-authoritative layout used to demonstrate future component selection.
      </desc>
      <defs>
        <linearGradient id="chassis" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#25323b" />
          <stop offset="1" stopColor="#11181e" />
        </linearGradient>
        <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(133, 160, 174, .11)" strokeWidth="1" />
        </pattern>
      </defs>

      <rect x="28" y="30" width="768" height="580" rx="28" fill="url(#chassis)" stroke="#51616b" strokeWidth="2" />
      <rect x="47" y="52" width="730" height="536" rx="18" fill="url(#grid)" stroke="#1b262d" />

      <g className="fixture-fans" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, index) => {
          const x = 72 + index * 86
          return (
            <g key={x} transform={`translate(${x} 73)`}>
              <rect width="66" height="22" rx="5" fill="#34434c" stroke="#60717b" />
              <circle cx="33" cy="11" r="7" fill="#172027" stroke="#8a9aa3" />
            </g>
          )
        })}
      </g>

      {fixtureRegions.map((region) => (
        <g
          className={`fixture-region ${selectedId === region.id ? 'is-selected' : ''}`}
          key={region.id}
          role="button"
          tabIndex={0}
          aria-label={region.label}
          onClick={() => onSelect(region.id)}
          onKeyDown={(event) => handleKeyDown(event, region.id)}
        >
          <rect {...region} rx="12" />
          <path
            d={`M ${region.x + 18} ${region.y + 26} H ${region.x + region.width - 18}`}
            className="fixture-trace"
          />
          <text x={region.x + 18} y={region.y + 54}>{region.label.replace(' fixture region', '')}</text>
        </g>
      ))}

      <g className={`depth-layer ${depth >= 1 ? 'is-visible' : ''}`} aria-hidden={depth < 1}>
        <rect x="136" y="426" width="548" height="80" rx="14" />
        <text x="410" y="472" textAnchor="middle">Depth 1 study layer — fixture only</text>
      </g>
      <g className={`depth-layer depth-two ${depth >= 2 ? 'is-visible' : ''}`} aria-hidden={depth < 2}>
        <rect x="264" y="516" width="292" height="40" rx="10" />
        <text x="410" y="542" textAnchor="middle">Depth 2</text>
      </g>

      <g
        className={`fixture-region fan-hit-area ${selectedId === 'fan-module' ? 'is-selected' : ''}`}
        role="button"
        tabIndex={0}
        aria-label="Fan module fixture region"
        onClick={() => onSelect('fan-module')}
        onKeyDown={(event) => handleKeyDown(event, 'fan-module')}
      >
        <rect x="66" y="67" width="692" height="34" rx="8" />
      </g>

      <text className="orientation-label" x="410" y="600" textAnchor="middle">
        FRONT / SERVICE AISLE
      </text>
    </svg>
  )
}
