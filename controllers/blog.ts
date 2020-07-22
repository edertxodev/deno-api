import { Status } from "https://deno.land/x/oak/mod.ts"

import client from '../db/mysql.ts'

export async function index(ctx: any) {
  const blogs: any = (await client.execute('SELECT * FROM blogs')).rows

  ctx.response.status = Status.OK
  ctx.response.type = 'json'
  ctx.response.body = {
    status: 'success',
    message: `${blogs.length} blogs found in database`,
    data: { blogs }
  }
}