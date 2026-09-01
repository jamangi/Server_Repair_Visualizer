import { lessonContentSchema, type LessonContent, type Source, type ValidationStatus } from './schema'

export class ContentValidationError extends Error {
  readonly issues: string[]

  constructor(issues: string[]) {
    super(`Lesson content is invalid:\n- ${issues.join('\n- ')}`)
    this.name = 'ContentValidationError'
    this.issues = issues
  }
}

const addDuplicateIssues = (
  issues: string[],
  collectionName: string,
  records: ReadonlyArray<{ id: string }>,
) => {
  const seen = new Set<string>()
  for (const record of records) {
    if (seen.has(record.id)) {
      issues.push(`${collectionName} contains duplicate ID "${record.id}"`)
    }
    seen.add(record.id)
  }
}

const expectedSourceKind: Partial<Record<ValidationStatus, Source['kind']>> = {
  official: 'official',
  'technician-verified': 'technician-observation',
  inferred: 'inference',
}

const findDependencyCycle = (content: LessonContent): string[] | null => {
  const graph = new Map<string, string[]>()
  for (const dependency of content.serviceDependencies) {
    const blockers = graph.get(dependency.blockedComponentId) ?? []
    blockers.push(dependency.blockerComponentId)
    graph.set(dependency.blockedComponentId, blockers)
  }

  const visiting = new Set<string>()
  const visited = new Set<string>()
  const stack: string[] = []

  const visit = (node: string): string[] | null => {
    if (visiting.has(node)) {
      const cycleStart = stack.indexOf(node)
      return [...stack.slice(cycleStart), node]
    }
    if (visited.has(node)) return null

    visiting.add(node)
    stack.push(node)
    for (const next of graph.get(node) ?? []) {
      const cycle = visit(next)
      if (cycle) return cycle
    }
    stack.pop()
    visiting.delete(node)
    visited.add(node)
    return null
  }

  for (const node of graph.keys()) {
    const cycle = visit(node)
    if (cycle) return cycle
  }
  return null
}

export const validateLessonContent = (input: unknown): LessonContent => {
  const parsed = lessonContentSchema.safeParse(input)
  if (!parsed.success) {
    throw new ContentValidationError(
      parsed.error.issues.map((issue) => {
        const path = issue.path.length ? issue.path.join('.') : 'content'
        return `${path}: ${issue.message}`
      }),
    )
  }

  const content = parsed.data
  const issues: string[] = []
  const collections: Array<[string, ReadonlyArray<{ id: string }>]> = [
    ['sources', content.sources],
    ['models', content.models],
    ['components', content.components],
    ['scenes', content.scenes],
    ['regions', content.regions],
    ['ports', content.ports],
    ['connections', content.connections],
    ['serviceDependencies', content.serviceDependencies],
  ]
  for (const [name, records] of collections) addDuplicateIssues(issues, name, records)

  const sources = new Map(content.sources.map((source) => [source.id, source]))
  const models = new Map(content.models.map((model) => [model.id, model]))
  const components = new Map(content.components.map((component) => [component.id, component]))
  const scenes = new Map(content.scenes.map((scene) => [scene.id, scene]))
  const ports = new Map(content.ports.map((port) => [port.id, port]))

  const sourcedRecords = [
    ...content.models,
    ...content.components,
    ...content.scenes,
    ...content.regions,
    ...content.ports,
    ...content.connections,
    ...content.serviceDependencies,
  ]

  for (const record of sourcedRecords) {
    for (const sourceId of record.sourceIds) {
      if (!sources.has(sourceId)) issues.push(`${record.id} references missing source "${sourceId}"`)
    }

    if ('validation' in record) {
      const requiredKind = expectedSourceKind[record.validation]
      if (requiredKind && !record.sourceIds.some((id) => sources.get(id)?.kind === requiredKind)) {
        issues.push(
          `${record.id} is ${record.validation} but has no ${requiredKind} source`,
        )
      }
    }
  }

  for (const component of content.components) {
    if (!models.has(component.modelId)) {
      issues.push(`${component.id} references missing model "${component.modelId}"`)
    }
  }

  for (const scene of content.scenes) {
    if (!models.has(scene.modelId)) issues.push(`${scene.id} references missing model "${scene.modelId}"`)
  }

  for (const region of content.regions) {
    if (!components.has(region.componentId)) {
      issues.push(`${region.id} references missing component "${region.componentId}"`)
    }
    const scene = scenes.get(region.sceneId)
    if (!scene) {
      issues.push(`${region.id} references missing scene "${region.sceneId}"`)
      continue
    }
    if (region.depth > scene.maxDepth) {
      issues.push(`${region.id} depth ${region.depth} exceeds ${scene.id} maxDepth ${scene.maxDepth}`)
    }
    for (const [shapeIndex, shape] of region.shapes.entries()) {
      if (shape.type !== 'polygon') continue
      for (const [pointIndex, [x, y]] of shape.points.entries()) {
        if (x < 0 || x > scene.width || y < 0 || y > scene.height) {
          issues.push(
            `${region.id} shape ${shapeIndex} point ${pointIndex} [${x}, ${y}] is outside ${scene.width}x${scene.height}`,
          )
        }
      }
    }
  }

  for (const port of content.ports) {
    if (!components.has(port.componentId)) {
      issues.push(`${port.id} references missing component "${port.componentId}"`)
    }
  }

  for (const connection of content.connections) {
    for (const [label, endpoint] of [
      ['from', connection.from],
      ['to', connection.to],
    ] as const) {
      if (!components.has(endpoint.componentId)) {
        issues.push(`${connection.id} ${label} references missing component "${endpoint.componentId}"`)
      }
      const port = ports.get(endpoint.portId)
      if (!port) {
        issues.push(`${connection.id} ${label} references missing port "${endpoint.portId}"`)
      } else if (port.componentId !== endpoint.componentId) {
        issues.push(
          `${connection.id} ${label} port "${endpoint.portId}" belongs to ${port.componentId}, not ${endpoint.componentId}`,
        )
      }
    }
    if (connection.cableComponentId && !components.has(connection.cableComponentId)) {
      issues.push(
        `${connection.id} references missing cable component "${connection.cableComponentId}"`,
      )
    }
  }

  for (const dependency of content.serviceDependencies) {
    if (!components.has(dependency.blockedComponentId)) {
      issues.push(
        `${dependency.id} references missing blocked component "${dependency.blockedComponentId}"`,
      )
    }
    if (!components.has(dependency.blockerComponentId)) {
      issues.push(
        `${dependency.id} references missing blocker component "${dependency.blockerComponentId}"`,
      )
    }
    if (dependency.blockedComponentId === dependency.blockerComponentId) {
      issues.push(`${dependency.id} cannot make a component block itself`)
    }
  }

  const cycle = findDependencyCycle(content)
  if (cycle) issues.push(`service dependency cycle detected: ${cycle.join(' -> ')}`)

  if (issues.length) throw new ContentValidationError(issues)
  return content
}
