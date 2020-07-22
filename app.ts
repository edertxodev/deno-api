import { Application, Router, Status } from "https://deno.land/x/oak/mod.ts"
import logger from './middleware/logger.ts'
import timer from './middleware/timer.ts'
import routes from './routes.ts'

const app = new Application()
const router = new Router()

router.get('/', (ctx: any) => {
  ctx.response.status = Status.OK,
  ctx.response.type = 'json'
  ctx.response.body = {
    status: 'success',
    message: 'Kaixo mundua!',
    data: null
  }
})

app
  .use(logger)
  .use(timer)
  .use(router.routes())
  .use(routes.routes())

console.log('app running -> http://localhost:1992')
await app.listen({ port: 1992 })