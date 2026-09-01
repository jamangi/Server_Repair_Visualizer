import { useMemo, useState } from 'react'

type Expansion = { text: string; confidence: string; appliesTo?: string; note?: string }
type ChassisLocation = { zone: string; side: string; detail: string; confidence: string }
type AcronymEntry = {
  term: string
  forms: string[]
  kind: string
  expansions: Expansion[]
  dependsOn: string[]
  examples: string[]
  chassisLocations: ChassisLocation[]
}
type AcronymMap = { title: string; ordering: string; entries: AcronymEntry[] }

const filters = [
  { id: 'all', label: 'All entries' },
  { id: 'acronym', label: 'Acronyms' },
  { id: 'label', label: 'Names & labels' },
  { id: 'review', label: 'Needs context' },
] as const
type FilterId = (typeof filters)[number]['id']

function matchesFilter(entry: AcronymEntry, filter: FilterId) {
  if (filter === 'all') return true
  if (filter === 'acronym') return entry.kind === 'acronym'
  if (filter === 'label') return entry.kind !== 'acronym' && entry.kind !== 'unit'
  return entry.expansions.some((item) => ['working-expansion', 'documented-alternate'].includes(item.confidence)) ||
    entry.chassisLocations.some((item) => item.confidence !== 'confirmed')
}

function readable(value: string) {
  return value.replaceAll('-', ' ')
}

export function AcronymGlossary({ data }: { data: AcronymMap }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<FilterId>('all')
  const entries = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return data.entries.filter((entry) => {
      const searchable = [entry.term, ...entry.forms, ...entry.expansions.map((item) => item.text),
        ...entry.chassisLocations.map((item) => `${item.zone} ${item.side} ${item.detail}`)].join(' ').toLowerCase()
      return matchesFilter(entry, filter) && (!normalized || searchable.includes(normalized))
    })
  }, [data.entries, filter, query])

  return (
    <div className="glossary">
      <div className="glossary-tools screen-only">
        <label className="glossary-search">
          <span>Search terms, meanings, or locations</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try BMC, rear, or management" />
        </label>
        <div className="filter-chips" aria-label="Filter acronym entries">
          {filters.map((item) => (
            <button key={item.id} type="button" className={filter === item.id ? 'is-active' : ''}
              aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>{item.label}</button>
          ))}
        </div>
      </div>
      <p className="glossary-summary">Showing {entries.length} of {data.entries.length} entries. {data.ordering}</p>
      <div className="glossary-grid">
        {entries.map((entry) => (
          <article className="glossary-card" key={entry.term}>
            <header><div><h2>{entry.term}</h2><p>{entry.forms.filter((form) => form !== entry.term).join(' · ') || 'Canonical label'}</p></div><span className="kind-badge">{readable(entry.kind)}</span></header>
            <div className="glossary-section">
              <h3>Meaning</h3>
              {entry.expansions.map((expansion) => (
                <p key={`${entry.term}-${expansion.text}`}><strong>{expansion.text}</strong>{expansion.appliesTo && <> · applies to {expansion.appliesTo}</>}{expansion.note && <> · {expansion.note}</>}<span className={`confidence confidence-${expansion.confidence}`}>{readable(expansion.confidence)}</span></p>
              ))}
            </div>
            <div className="glossary-section">
              <h3>Where to look</h3>
              {entry.chassisLocations.map((location, index) => (
                <p key={`${entry.term}-location-${index}`}><strong>{readable(location.zone)} · {readable(location.side)}</strong> — {location.detail}<span className={`confidence confidence-${location.confidence}`}>{readable(location.confidence)}</span></p>
              ))}
            </div>
            {(entry.examples.length > 0 || entry.dependsOn.length > 0) && (
              <footer>{entry.examples.length > 0 && <span>Examples: {entry.examples.join(' · ')}</span>}{entry.dependsOn.length > 0 && <span>Read with: {entry.dependsOn.join(' · ')}</span>}</footer>
            )}
          </article>
        ))}
      </div>
      {!entries.length && <p className="empty-state">No glossary entries match those filters.</p>}
    </div>
  )
}

export type { AcronymMap }
