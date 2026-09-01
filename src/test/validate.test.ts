import { describe, expect, it } from 'vitest'
import { validateLessonContent } from '../content/validate'

const makeValidFixture = () => ({
  sources: [
    {
      id: 'official-source',
      title: 'Official source',
      kind: 'official',
      url: 'https://example.com/manual',
      scope: 'Test scope',
      facts: ['Test facts'],
      access: 'public',
    },
  ],
  models: [
    {
      id: 'test-model',
      name: 'Test model',
      context: 'Test context',
      status: 'draft',
      sourceIds: ['official-source'],
    },
  ],
  components: [
    {
      id: 'component-a',
      modelId: 'test-model',
      canonicalName: 'Component A',
      aliases: [],
      category: 'assembly',
      description: 'First test component',
      partNumbers: [],
      validation: 'official',
      sourceIds: ['official-source'],
    },
    {
      id: 'component-b',
      modelId: 'test-model',
      canonicalName: 'Component B',
      aliases: [],
      category: 'assembly',
      description: 'Second test component',
      partNumbers: [],
      validation: 'official',
      sourceIds: ['official-source'],
    },
    {
      id: 'component-c',
      modelId: 'test-model',
      canonicalName: 'Component C',
      aliases: [],
      category: 'assembly',
      description: 'Third test component',
      partNumbers: [],
      validation: 'official',
      sourceIds: ['official-source'],
    },
  ],
  scenes: [
    {
      id: 'scene-one',
      modelId: 'test-model',
      label: 'Scene one',
      image: 'scene-one.webp',
      width: 100,
      height: 100,
      maxDepth: 2,
      sourceIds: ['official-source'],
    },
    {
      id: 'scene-two',
      modelId: 'test-model',
      label: 'Scene two',
      image: 'scene-two.webp',
      width: 200,
      height: 100,
      maxDepth: 1,
      sourceIds: ['official-source'],
    },
  ],
  regions: [
    {
      id: 'region-a-one',
      componentId: 'component-a',
      sceneId: 'scene-one',
      depth: 2,
      visibility: 'buried',
      shapes: [
        { type: 'polygon', points: [[0, 0], [25, 0], [25, 25]] },
        { type: 'path', d: 'M 30 30 H 40 V 40 Z' },
      ],
      validation: 'official',
      sourceIds: ['official-source'],
    },
    {
      id: 'region-a-two',
      componentId: 'component-a',
      sceneId: 'scene-two',
      depth: 0,
      visibility: 'visible',
      shapes: [{ type: 'polygon', points: [[0, 0], [20, 0], [20, 20]] }],
      validation: 'official',
      sourceIds: ['official-source'],
    },
  ],
  ports: [],
  connections: [],
  serviceDependencies: [
    {
      id: 'a-requires-b',
      blockedComponentId: 'component-a',
      blockerComponentId: 'component-b',
      action: 'remove',
      note: 'B blocks A',
      validation: 'official',
      sourceIds: ['official-source'],
    },
  ],
})

describe('validateLessonContent', () => {
  it('accepts components with multiple regions across multiple scenes', () => {
    expect(validateLessonContent(makeValidFixture()).regions).toHaveLength(2)
  })

  it('keeps visual depth independent from removal dependencies', () => {
    const fixture = makeValidFixture()
    fixture.regions[0].depth = 0
    fixture.serviceDependencies[0].blockerComponentId = 'component-c'

    expect(validateLessonContent(fixture).serviceDependencies[0].blockerComponentId).toBe(
      'component-c',
    )
  })

  it('reports missing references and out-of-bounds geometry', () => {
    const fixture = makeValidFixture()
    fixture.regions[0].componentId = 'missing-component'
    fixture.regions[0].shapes = [
      { type: 'polygon', points: [[0, 0], [101, 0], [20, 20]] },
    ]

    expect(() => validateLessonContent(fixture)).toThrow(/missing component "missing-component"/)
    expect(() => validateLessonContent(fixture)).toThrow(/outside 100x100/)
  })

  it('reports depth values above the scene maximum', () => {
    const fixture = makeValidFixture()
    fixture.regions[0].depth = 3

    expect(() => validateLessonContent(fixture)).toThrow(/depth 3 exceeds scene-one maxDepth 2/)
  })

  it('reports the exact service dependency cycle', () => {
    const fixture = makeValidFixture()
    fixture.serviceDependencies.push(
      {
        ...fixture.serviceDependencies[0],
        id: 'b-requires-c',
        blockedComponentId: 'component-b',
        blockerComponentId: 'component-c',
      },
      {
        ...fixture.serviceDependencies[0],
        id: 'c-requires-a',
        blockedComponentId: 'component-c',
        blockerComponentId: 'component-a',
      },
    )

    expect(() => validateLessonContent(fixture)).toThrow(
      /component-a -> component-b -> component-c -> component-a/,
    )
  })

  it('rejects confidence states without a compatible source type', () => {
    const fixture = makeValidFixture()
    fixture.components[0].validation = 'technician-verified'

    expect(() => validateLessonContent(fixture)).toThrow(/has no technician-observation source/)
  })
})
