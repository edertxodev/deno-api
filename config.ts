const env = Deno.env()
export const APP_HOST = env.APP_HOST || 'localhost'
export const APP_PORT = env.APP_PORT || 4000
export const DB_PATH = env.DB_PATH || './db/users.json'