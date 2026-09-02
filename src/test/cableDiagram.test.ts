import { describe, expect, it } from 'vitest'
import { cableKinds, cableNodes, cableRoutes, cableSources } from '../content/cableDiagram'

describe('cable diagram data', () => {
  it('uses unique node and route IDs', () => {
    expect(new Set(cableNodes.map((node) => node.id)).size).toBe(cableNodes.length)
    expect(new Set(cableRoutes.map((route) => route.id)).size).toBe(cableRoutes.length)
  })

  it('resolves every route to two known nodes', () => {
    const nodeIds = new Set(cableNodes.map((node) => node.id))
    for (const route of cableRoutes) {
      expect(nodeIds.has(route.from), `${route.id} has an unknown from endpoint`).toBe(true)
      expect(nodeIds.has(route.to), `${route.id} has an unknown to endpoint`).toBe(true)
      expect(route.from).not.toBe(route.to)
    }
  })

  it('uses known categories, sources, and SVG paths', () => {
    const kinds = new Set(cableKinds.map((kind) => kind.id))
    for (const route of cableRoutes) {
      expect(kinds.has(route.kind)).toBe(true)
      expect(cableSources[route.sourceId]).toBeDefined()
      expect(route.path.startsWith('M')).toBe(true)
    }
  })

  it('does not cite the lesson walkthrough as documented endpoint evidence', () => {
    for (const route of cableRoutes.filter((item) => item.evidence === 'documented')) {
      expect(route.sourceId).not.toBe('lesson-walkthrough')
      expect(cableSources[route.sourceId].url.startsWith('https://www.dell.com/')).toBe(true)
    }
  })

  it('declares bridge coordinates only on routed crossing records', () => {
    const bridges = cableRoutes.filter((route) => route.bridge)
    expect(bridges.length).toBeGreaterThan(0)
    for (const route of bridges) {
      expect(Number.isFinite(route.bridge?.x)).toBe(true)
      expect(Number.isFinite(route.bridge?.y)).toBe(true)
    }
  })

  it('preserves the studied rear-to-front chassis order', () => {
    const node = (id: string) => cableNodes.find((item) => item.id === id)!
    const leftBianca = node('bianca-left')
    const rightBianca = node('bianca-right')
    const busbar = node('busbar')
    const fanBank = node('fan-bank')
    const frontBay = node('bf3')

    expect(busbar.x).toBeGreaterThanOrEqual(leftBianca.x + leftBianca.width)
    expect(busbar.x + busbar.width).toBeLessThanOrEqual(rightBianca.x)
    expect(fanBank.y).toBeGreaterThanOrEqual(leftBianca.y + leftBianca.height)

    for (const id of ['bmc', 'pdb', 'interposer']) {
      const controlNode = node(id)
      expect(controlNode.y).toBeGreaterThanOrEqual(fanBank.y + fanBank.height)
      expect(controlNode.y + controlNode.height).toBeLessThanOrEqual(frontBay.y)
    }
  })
})
