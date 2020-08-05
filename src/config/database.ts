import { Client as MySQLClient } from 'https://deno.land/x/mysql/mod.ts'

/**
 * MySQL database config
 */
const database = await new MySQLClient().connect({
  hostname: Deno.env.get("DB_HOST"),
  username: Deno.env.get("DB_USER"),
  password: Deno.env.get("DB_PASSWORD"),
  db: Deno.env.get("DB_DATABASE"),
})

export default database