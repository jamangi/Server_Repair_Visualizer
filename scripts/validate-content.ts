import content from '../src/content/data/dell-9712a.json'
import { validateLessonContent } from '../src/content/validate'

try {
  const validated = validateLessonContent(content)
  console.log(
    `Validated ${validated.models.length} model, ${validated.components.length} components, ` +
      `${validated.regions.length} regions, ${validated.connections.length} connections, and ` +
      `${validated.serviceDependencies.length} service dependencies.`,
  )
} catch (error) {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
}
