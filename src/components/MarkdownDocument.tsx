import type { ReactNode } from 'react'

function inline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)

  return parts.filter(Boolean).map((part, index) => {
    const strong = part.match(/^\*\*(.+)\*\*$/)
    if (strong) return <strong key={index}>{strong[1]}</strong>

    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      const href = link[2].endsWith('ACRONYM_MAP.md') ? '#dell-server-9712a/acronyms' : link[2]
      const external = /^https?:\/\//.test(href)
      return (
        <a key={index} href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
          {link[1]}
        </a>
      )
    }

    return part
  })
}

export function MarkdownDocument({ markdown }: { markdown: string }) {
  const lines = markdown.replace(/\r/g, '').split('\n')
  const blocks: ReactNode[] = []
  let index = 0

  while (index < lines.length) {
    const line = lines[index].trim()
    if (!line) {
      index += 1
      continue
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/)
    if (heading) {
      const Heading = `h${heading[1].length}` as 'h1' | 'h2' | 'h3'
      blocks.push(<Heading key={`heading-${index}`}>{inline(heading[2])}</Heading>)
      index += 1
      continue
    }

    if (/^[-*]\s+/.test(line)) {
      const items: ReactNode[] = []
      while (index < lines.length && /^[-*]\s+/.test(lines[index].trim())) {
        items.push(<li key={index}>{inline(lines[index].trim().replace(/^[-*]\s+/, ''))}</li>)
        index += 1
      }
      blocks.push(<ul key={`list-${index}`}>{items}</ul>)
      continue
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: ReactNode[] = []
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(<li key={index}>{inline(lines[index].trim().replace(/^\d+\.\s+/, ''))}</li>)
        index += 1
      }
      blocks.push(<ol key={`list-${index}`}>{items}</ol>)
      continue
    }

    const paragraph = [line]
    index += 1
    while (
      index < lines.length && lines[index].trim() &&
      !/^(#{1,3})\s+/.test(lines[index].trim()) &&
      !/^[-*]\s+/.test(lines[index].trim()) &&
      !/^\d+\.\s+/.test(lines[index].trim())
    ) {
      paragraph.push(lines[index].trim())
      index += 1
    }
    blocks.push(<p key={`paragraph-${index}`}>{inline(paragraph.join(' '))}</p>)
  }

  return <div className="document-body">{blocks}</div>
}
