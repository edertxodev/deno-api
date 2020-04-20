import { Application } from './deps.ts'
import { APP_HOST, APP_PORT } from './config.ts'

const app = new Application()

console.log(`Listening on ${APP_PORT}`)