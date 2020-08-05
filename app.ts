import { Drash, config } from './depts.ts'
import { HomeResource, MeowResource } from './src/resources/index.ts'
import { LoggingMiddleware } from './src/middlewares/logging.ts'

const port = parseInt(config()['APP_PORT'])

const server = new Drash.Http.Server({
  middleware: {
    before_request: [LoggingMiddleware],
    after_request: [LoggingMiddleware]
  },
  response_output: 'application/json',
  resources: [
    HomeResource,
    MeowResource
  ],
})

server.run({
  hostname: 'deno_api',
  port: port
})
console.log(`Server listening on ${server.hostname}:${server.port}`)