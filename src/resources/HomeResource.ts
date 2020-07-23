import { Drash } from "../../depts.ts"
import db from '../db/mysql.ts'

export default class HomeResource extends Drash.Http.Resource {
  static paths = [
    '/'
  ]

  public async GET() {
    const blogs: any = (await db.execute('SELECT * FROM blogs')).rows
    this.response.body = blogs

    return this.response
  }
}