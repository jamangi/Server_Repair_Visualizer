import { z } from 'zod'

const idSchema = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'must be a lowercase kebab-case ID')

export const validationStatusSchema = z.enum([
  'official',
  'technician-verified',
  'inferred',
  'needs-review',
])

export const sourceSchema = z
  .object({
    id: idSchema,
    title: z.string().min(1),
    kind: z.enum(['official', 'private-configuration', 'technician-observation', 'inference']),
    url: z.url().optional(),
    scope: z.string().min(1),
    facts: z.array(z.string().min(1)).min(1),
    access: z.enum(['public', 'private-not-committed', 'project-record']),
  })
  .strict()

export const modelSchema = z
  .object({
    id: idSchema,
    name: z.string().min(1),
    context: z.string().min(1),
    status: z.enum(['draft', 'reviewed', 'published']),
    sourceIds: z.array(idSchema).min(1),
  })
  .strict()

export const componentSchema = z
  .object({
    id: idSchema,
    modelId: idSchema,
    canonicalName: z.string().min(1),
    plainName: z.string().min(1).optional(),
    aliases: z.array(z.string().min(1)).default([]),
    category: z.enum([
      'assembly',
      'bay',
      'storage',
      'backplane',
      'io-board',
      'network-board',
      'power-board',
      'control-board',
      'compute-board',
      'cooling',
      'power-delivery',
      'security',
      'cable',
      'bracket',
    ]),
    quantity: z.number().int().positive().optional(),
    side: z.enum(['left', 'right', 'center']).optional(),
    index: z.number().int().nonnegative().optional(),
    description: z.string().min(1),
    partNumbers: z.array(z.string().min(1)).default([]),
    validation: validationStatusSchema,
    sourceIds: z.array(idSchema).min(1),
  })
  .strict()

export const sceneSchema = z
  .object({
    id: idSchema,
    modelId: idSchema,
    label: z.string().min(1),
    image: z.string().min(1),
    width: z.number().int().positive(),
    height: z.number().int().positive(),
    maxDepth: z.number().int().nonnegative(),
    sourceIds: z.array(idSchema).min(1),
  })
  .strict()

const pointSchema = z.tuple([z.number().finite(), z.number().finite()])

export const shapeSchema = z.discriminatedUnion('type', [
  z
    .object({
      type: z.literal('polygon'),
      points: z.array(pointSchema).min(3),
    })
    .strict(),
  z
    .object({
      type: z.literal('path'),
      d: z.string().trim().min(1),
    })
    .strict(),
])

export const regionSchema = z
  .object({
    id: idSchema,
    componentId: idSchema,
    sceneId: idSchema,
    depth: z.number().int().nonnegative(),
    visibility: z.enum(['visible', 'partial', 'buried']),
    shapes: z.array(shapeSchema).min(1),
    validation: validationStatusSchema,
    sourceIds: z.array(idSchema).min(1),
  })
  .strict()

export const portSchema = z
  .object({
    id: idSchema,
    componentId: idSchema,
    label: z.string().min(1),
    kind: z.enum(['power', 'data', 'network', 'management', 'coolant', 'unknown']),
    validation: validationStatusSchema,
    sourceIds: z.array(idSchema).min(1),
  })
  .strict()

const endpointSchema = z
  .object({
    componentId: idSchema,
    portId: idSchema,
  })
  .strict()

export const connectionSchema = z
  .object({
    id: idSchema,
    from: endpointSchema,
    to: endpointSchema,
    cableComponentId: idSchema.optional(),
    signalDirection: z.enum(['from-to', 'to-from', 'bidirectional', 'unknown']).optional(),
    validation: validationStatusSchema,
    sourceIds: z.array(idSchema).min(1),
  })
  .strict()

export const serviceDependencySchema = z
  .object({
    id: idSchema,
    blockedComponentId: idSchema,
    blockerComponentId: idSchema,
    action: z.enum(['disconnect', 'remove', 'unfasten']),
    note: z.string().min(1),
    validation: validationStatusSchema,
    sourceIds: z.array(idSchema).min(1),
  })
  .strict()

export const lessonContentSchema = z
  .object({
    sources: z.array(sourceSchema).min(1),
    models: z.array(modelSchema).min(1),
    components: z.array(componentSchema),
    scenes: z.array(sceneSchema),
    regions: z.array(regionSchema),
    ports: z.array(portSchema),
    connections: z.array(connectionSchema),
    serviceDependencies: z.array(serviceDependencySchema),
  })
  .strict()

export type ValidationStatus = z.infer<typeof validationStatusSchema>
export type Source = z.infer<typeof sourceSchema>
export type Model = z.infer<typeof modelSchema>
export type Component = z.infer<typeof componentSchema>
export type Scene = z.infer<typeof sceneSchema>
export type Region = z.infer<typeof regionSchema>
export type Port = z.infer<typeof portSchema>
export type Connection = z.infer<typeof connectionSchema>
export type ServiceDependency = z.infer<typeof serviceDependencySchema>
export type LessonContent = z.infer<typeof lessonContentSchema>
