import { fetchData, persistData } from './db.ts'
import { User } from '../models/user.ts'
import createId from './createId.ts'

type UserData = Pick<User, 'name' | 'role' | 'isAdmin'>

export const getUsers = async (): Promise<User[]> => {
    const users = await fetchData()

    return users.sort((a, b) => a.name.localeCompare(b.name))
}
