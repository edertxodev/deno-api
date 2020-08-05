import { Drash } from '../../depts.ts'

const logger = new Drash.CoreLoggers.ConsoleLogger({
  enabled: true,
  level: 'all',
  tag_string: '{datetime} | {level} |',
  tag_string_fns: {
    datetime() {
      return new Date().toISOString().replace('T', ' ')
    }
  }
})

export function LoggingMiddleware(request: any, response?: Drash.Http.Response) {
  if (!response)
    logger.info(`Request received: ${request.method} ${request.url}`)
  if (response) {
    logger.info(`Response: ${response.status_code} ${response.getStatusMessage()}`)
  }
}