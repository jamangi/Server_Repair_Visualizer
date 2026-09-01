import { useMemo, useState } from 'react'
import { ServerFixture } from './components/ServerFixture'
import { lessonContent, type Component } from './content'

const learningModes = ['Study', 'Locate', 'Name'] as const
type LearningMode = (typeof learningModes)[number]

const statusLabels = {
  official: 'Dell documented',
  'technician-verified': 'Technician verified',
  inferred: 'Inferred',
  'needs-review': 'Needs review',
} as const

function ComponentDetails({ component }: { component: Component }) {
  const ports = lessonContent.ports.filter((port) => port.componentId === component.id)
  const connections = lessonContent.connections.filter(
    (connection) =>
      connection.from.componentId === component.id || connection.to.componentId === component.id,
  )
  const blockers = lessonContent.serviceDependencies.filter(
    (dependency) => dependency.blockedComponentId === component.id,
  )

  return (
    <section className="details-panel panel" aria-labelledby="details-title">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Component details</p>
          <h2 id="details-title">{component.canonicalName}</h2>
        </div>
        <span className={`status status-${component.validation}`}>{statusLabels[component.validation]}</span>
      </div>

      <p className="plain-name">{component.plainName ?? component.canonicalName}</p>
      <p className="component-description">{component.description}</p>

      <dl className="fact-grid">
        <div>
          <dt>Category</dt>
          <dd>{component.category.replaceAll('-', ' ')}</dd>
        </div>
        <div>
          <dt>Quantity</dt>
          <dd>{component.quantity ?? 'Not confirmed'}</dd>
        </div>
        <div>
          <dt>Ports</dt>
          <dd>{ports.length || 'None cataloged'}</dd>
        </div>
        <div>
          <dt>Connections</dt>
          <dd>{connections.length || 'None cataloged'}</dd>
        </div>
      </dl>

      <div className="detail-block">
        <h3>Aliases</h3>
        <p>{component.aliases.length ? component.aliases.join(' · ') : 'No aliases recorded'}</p>
      </div>
      <div className="detail-block">
        <h3>Service blockers</h3>
        <p>
          {blockers.length
            ? blockers
                .map((blocker) =>
                  lessonContent.components.find((item) => item.id === blocker.blockerComponentId),
                )
                .filter(Boolean)
                .map((item) => item!.canonicalName)
                .join(' · ')
            : 'No validated blockers recorded'}
        </p>
      </div>
    </section>
  )
}

export function App() {
  const [mode, setMode] = useState<LearningMode>('Study')
  const [depth, setDepth] = useState(0)
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState('left-b-bay')

  const model = lessonContent.models[0]
  const selected =
    lessonContent.components.find((component) => component.id === selectedId) ??
    lessonContent.components[0]
  const filteredComponents = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return lessonContent.components
    return lessonContent.components.filter((component) =>
      [component.canonicalName, component.plainName, ...component.aliases]
        .filter(Boolean)
        .some((name) => name!.toLowerCase().includes(normalized)),
    )
  }, [query])

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand-mark" aria-hidden="true"><span /></div>
        <div className="model-heading">
          <p className="eyebrow">Server Repair Visualizer</p>
          <h1>{model.name}</h1>
          <p>{model.context}</p>
        </div>
        <div className="workspace-status">
          <span className="status-dot" /> Foundation workspace
        </div>
      </header>

      <main className="study-workspace">
        <section className="stage-column">
          <div className="toolbar panel" aria-label="Study controls">
            <label className="select-control">
              <span>Scene</span>
              <select defaultValue="top-open-fixture">
                <option value="top-open-fixture">Top cover removed · fixture</option>
              </select>
            </label>

            <fieldset className="mode-control">
              <legend>Learning mode</legend>
              <div className="segmented-control">
                {learningModes.map((item) => (
                  <button
                    className={mode === item ? 'is-active' : ''}
                    key={item}
                    type="button"
                    aria-pressed={mode === item}
                    onClick={() => setMode(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </fieldset>

            <label className="depth-control">
              <span><b>Depth</b><output>{depth}</output></span>
              <input
                type="range"
                min="0"
                max="2"
                step="1"
                value={depth}
                onChange={(event) => setDepth(Number(event.target.value))}
              />
            </label>
          </div>

          <section className="image-stage panel" aria-labelledby="stage-title">
            <div className="stage-heading">
              <div>
                <p className="eyebrow">{mode} mode</p>
                <h2 id="stage-title">Open-system orientation</h2>
              </div>
              <span className="fixture-badge">Layout fixture · not the 9712a image</span>
            </div>
            <div className="fixture-frame">
              <ServerFixture depth={depth} selectedId={selected.id} onSelect={setSelectedId} />
            </div>
            <p className="stage-help">
              Select a highlighted fixture zone or use the component index. Accurate image geometry will be added after illustration review.
            </p>
          </section>
        </section>

        <aside className="side-column" aria-label="Component study tools">
          <ComponentDetails component={selected} />

          <section className="component-index panel" aria-labelledby="index-title">
            <div className="panel-heading compact">
              <div>
                <p className="eyebrow">Non-spatial selector</p>
                <h2 id="index-title">Component index</h2>
              </div>
              <span className="result-count">{filteredComponents.length}</span>
            </div>
            <label className="search-control">
              <span className="sr-only">Search components</span>
              <input
                type="search"
                placeholder="Search names or aliases"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
            <ul className="component-list">
              {filteredComponents.map((component) => (
                <li key={component.id}>
                  <button
                    type="button"
                    className={selected.id === component.id ? 'is-selected' : ''}
                    onClick={() => setSelectedId(component.id)}
                  >
                    <span>
                      <b>{component.canonicalName}</b>
                      <small>{component.plainName ?? component.category.replaceAll('-', ' ')}</small>
                    </span>
                    {component.quantity && <em>×{component.quantity}</em>}
                  </button>
                </li>
              ))}
              {!filteredComponents.length && <p className="empty-state">No components match that search.</p>}
            </ul>
          </section>
        </aside>
      </main>
    </div>
  )
}
