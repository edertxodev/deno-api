import { Router } from "https://deno.land/x/oak/mod.ts"
import { index } from './controllers/blog.ts'

const router = new Router()

router.get('/blogs', index)

export default router