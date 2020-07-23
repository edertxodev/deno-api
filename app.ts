import { Drash, config } from './depts.ts'
import { HomeResource } from './src/resources/index.ts'

const port = parseInt(config()['APP_PORT'])

const server = new Drash.Http.Server({
  response_output: 'application/json',
  resources: [HomeResource],
  logger: new Drash.CoreLoggers.ConsoleLogger({
    enabled: true,
    level: "all",
    tag_string: "{datetime} | {level} |",
    tag_string_fns: {
      datetime() {
        return new Date().toISOString().replace("T", " ");
      },
    },
  }),
})

server.run({
  hostname: 'deno_api',
  port: port
})
console.log(`Server listening on ${server.hostname}:${server.port}`);