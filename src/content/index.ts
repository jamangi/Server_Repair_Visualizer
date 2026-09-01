import rawContent from './data/dell-9712a.json'
import { validateLessonContent } from './validate'

export const lessonContent = validateLessonContent(rawContent)
export type {
  Component,
  Connection,
  LessonContent,
  Model,
  Port,
  Region,
  Scene,
  ServiceDependency,
  Source,
  ValidationStatus,
} from './schema'
