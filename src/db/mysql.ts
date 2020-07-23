import { MySQLClient } from '../../depts.ts'

const db = await new MySQLClient().connect({
  hostname: Deno.env.get("DB_HOST"),
  username: Deno.env.get("DB_USER"),
  password: Deno.env.get("DB_PASSWORD"),
  db: Deno.env.get("DB_DATABASE"),
})

export default db