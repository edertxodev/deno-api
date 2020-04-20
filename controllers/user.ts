import { getUsers } from '../services/users.ts'

export const allUsers = async ({ response }) => {
    response.body = await getUsers()
}
