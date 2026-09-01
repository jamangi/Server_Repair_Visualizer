import { useEffect, useMemo, useState } from 'react'
import essayMarkdown from '../docs/research/DELL_9712A_COMPONENT_WALKTHROUGH.md?raw'
import acronymData from '../docs/research/ACRONYM_MAP.json'
import { AcronymGlossary, type AcronymMap } from './components/AcronymGlossary'
import { MarkdownDocument } from './components/MarkdownDocument'
import { ServerFixture } from './components/ServerFixture'
import { lessonContent, type Component } from './content'

const learningModes = ['Study', 'Locate', 'Name'] as const
type LearningMode = (typeof learningModes)[number]
type StudyTab = 'visualizer' | 'essay' | 'acronyms'

const studyTabs: { id: StudyTab; label: string; direction: string }[] = [
  { id: 'visualizer', label: 'Visualizer', direction: 'Appearance → name' },
  { id: 'essay', label: 'Location essay', direction: 'Name → chassis location' },
  { id: 'acronyms', label: 'Acronyms & labels', direction: 'Shorthand → meaning + location' },
]

const statusLabels = {
  official: 'Dell documented',
  'technician-verified': 'Technician verified',
  inferred: 'Inferred',
  'needs-review': 'Needs review',
} as const

function tabFromHash(): StudyTab {
  const candidate = window.location.hash.split('/').at(-1)
  return studyTabs.some((tab) => tab.id === candidate) ? candidate as StudyTab : 'visualizer'
}

function ComponentDetails({ component }: { component: Component }) {
  const ports = lessonContent.ports.filter((port) => port.componentId === component.id)
  const connections = lessonContent.connections.filter(
    (connection) => connection.from.componentId === component.id || connection.to.componentId === component.id,
  )
  const blockers = lessonContent.serviceDependencies.filter(
    (dependency) => dependency.blockedComponentId === component.id,
  )

  return (
    <section className="details-panel panel" aria-labelledby="details-title">
      <div className="panel-heading">
        <div><p className="eyebrow">Component details</p><h2 id="details-title">{component.canonicalName}</h2></div>
        <span className={`status status-${component.validation}`}>{statusLabels[component.validation]}</span>
      </div>
      <p className="plain-name">{component.plainName ?? component.canonicalName}</p>
      <p className="component-description">{component.description}</p>
      <dl className="fact-grid">
        <div><dt>Category</dt><dd>{component.category.replaceAll('-', ' ')}</dd></div>
        <div><dt>Quantity</dt><dd>{component.quantity ?? 'Not confirmed'}</dd></div>
        <div><dt>Ports</dt><dd>{ports.length || 'None cataloged'}</dd></div>
        <div><dt>Connections</dt><dd>{connections.length || 'None cataloged'}</dd></div>
      </dl>
      <div className="detail-block"><h3>Aliases</h3><p>{component.aliases.length ? component.aliases.join(' · ') : 'No aliases recorded'}</p></div>
      <div className="detail-block">
        <h3>Service blockers</h3>
        <p>{blockers.length ? blockers.map((blocker) => lessonContent.components.find((item) => item.id === blocker.blockerComponentId)).filter(Boolean).map((item) => item!.canonicalName).join(' · ') : 'No validated blockers recorded'}</p>
      </div>
    </section>
  )
}

function VisualizerPanel() {
  const [mode, setMode] = useState<LearningMode>('Study')
  const [depth, setDepth] = useState(0)
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState('left-b-bay')
  const selected = lessonContent.components.find((item) => item.id === selectedId) ?? lessonContent.components[0]
  const filteredComponents = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return lessonContent.components
    return lessonContent.components.filter((component) =>
      [component.canonicalName, component.plainName, ...component.aliases].filter(Boolean)
        .some((name) => name!.toLowerCase().includes(normalized)),
    )
  }, [query])

  return (
    <main className="study-workspace" id="panel-visualizer" role="tabpanel" aria-labelledby="tab-visualizer">
      <section className="stage-column">
        <div className="toolbar panel" aria-label="Study controls">
          <label className="select-control"><span>Scene</span><select defaultValue="top-open-fixture"><option value="top-open-fixture">Top cover removed · fixture</option></select></label>
          <fieldset className="mode-control">
            <legend>Learning mode</legend>
            <div className="segmented-control">{learningModes.map((item) => <button className={mode === item ? 'is-active' : ''} key={item} type="button" aria-pressed={mode === item} onClick={() => setMode(item)}>{item}</button>)}</div>
          </fieldset>
          <label className="depth-control"><span><b>Depth</b><output>{depth}</output></span><input type="range" min="0" max="2" step="1" value={depth} onChange={(event) => setDepth(Number(event.target.value))} /></label>
        </div>
        <section className="image-stage panel" aria-labelledby="stage-title">
          <div className="stage-heading"><div><p className="eyebrow">{mode} mode</p><h2 id="stage-title">Open-system orientation</h2></div><span className="fixture-badge">Layout fixture · not the 9712a image</span></div>
          <div className="fixture-frame"><ServerFixture depth={depth} selectedId={selected.id} onSelect={setSelectedId} /></div>
          <p className="stage-help">Select a highlighted fixture zone or use the component index. Accurate image geometry will be added after illustration review.</p>
        </section>
      </section>
      <aside className="side-column" aria-label="Component study tools">
        <ComponentDetails component={selected} />
        <section className="component-index panel" aria-labelledby="index-title">
          <div className="panel-heading compact"><div><p className="eyebrow">Non-spatial selector</p><h2 id="index-title">Component index</h2></div><span className="result-count">{filteredComponents.length}</span></div>
          <label className="search-control"><span className="sr-only">Search components</span><input type="search" placeholder="Search names or aliases" value={query} onChange={(event) => setQuery(event.target.value)} /></label>
          <ul className="component-list">
            {filteredComponents.map((component) => <li key={component.id}><button type="button" className={selected.id === component.id ? 'is-selected' : ''} onClick={() => setSelectedId(component.id)}><span><b>{component.canonicalName}</b><small>{component.plainName ?? component.category.replaceAll('-', ' ')}</small></span>{component.quantity && <em>×{component.quantity}</em>}</button></li>)}
            {!filteredComponents.length && <li className="empty-state">No components match that search.</li>}
          </ul>
        </section>
      </aside>
    </main>
  )
}

export function App() {
  const [activeTab, setActiveTab] = useState<StudyTab>(tabFromHash)
  const model = lessonContent.models[0]
  const activeTabDetails = studyTabs.find((tab) => tab.id === activeTab)!

  useEffect(() => {
    const handleHashChange = () => setActiveTab(tabFromHash())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  function chooseTab(tab: StudyTab) {
    setActiveTab(tab)
    window.history.replaceState(null, '', `#dell-server-9712a/${tab}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand-mark" aria-hidden="true"><span /></div>
        <div className="model-heading"><p className="eyebrow">Server Repair Visualizer</p><h1>{model.name}</h1><p>{model.context}</p></div>
        <div className="workspace-status"><span className="status-dot" /> Public study workspace</div>
      </header>
      <nav className="model-nav screen-only" aria-label="Server models"><p>Models</p><button type="button" className="is-active" aria-current="page">Dell Server 9712a</button></nav>
      <div className="study-nav-wrap screen-only">
        <div className="study-nav" role="tablist" aria-label="Dell Server 9712a study views">
          {studyTabs.map((tab) => <button key={tab.id} id={`tab-${tab.id}`} type="button" role="tab" aria-selected={activeTab === tab.id} aria-controls={`panel-${tab.id}`} className={activeTab === tab.id ? 'is-active' : ''} onClick={() => chooseTab(tab.id)}><span>{tab.label}</span><small>{tab.direction}</small></button>)}
        </div>
        {activeTab !== 'visualizer' && <button className="print-button" type="button" onClick={() => window.print()} aria-label={`Print ${activeTabDetails.label}`}><span aria-hidden="true">⌑</span> Print low-ink view</button>}
      </div>
      <section className="learning-direction" aria-live="polite"><span>{activeTabDetails.direction}</span><p>{activeTab === 'visualizer' ? 'Recognize a component by what and where you see.' : activeTab === 'essay' ? 'Recall where to hunt after hearing a component name.' : 'Decode Dell, NVIDIA, and lesson shorthand without guessing.'}</p></section>
      {activeTab === 'visualizer' && <VisualizerPanel />}
      {activeTab === 'essay' && <main className="reference-page print-section" id="panel-essay" role="tabpanel" aria-labelledby="tab-essay"><article className="document-surface panel"><MarkdownDocument markdown={essayMarkdown} /></article></main>}
      {activeTab === 'acronyms' && <main className="reference-page print-section" id="panel-acronyms" role="tabpanel" aria-labelledby="tab-acronyms"><header className="reference-heading"><p className="eyebrow">Technician reference</p><h1>{(acronymData as AcronymMap).title}</h1><p>Search names, expansions, examples, and physical chassis locations. Confidence labels keep confirmed terms separate from useful working interpretations.</p></header><AcronymGlossary data={acronymData as AcronymMap} /></main>}
    </div>
  )
}
