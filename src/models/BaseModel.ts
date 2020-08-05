import { database } from '../../depts.ts'

function getTableName(model: BaseModel) {
  return model.constructor.name.toLowerCase()
}

export type Filters = {
  limit?: string | number
}

export default class BaseModel {
  /**
   * Get all items from table
   * @param filters
   */
  protected async all(filters: Filters): Promise<any> {
    let items: BaseModel[] = []
    let query = `SELECT * FROM ${getTableName(this)}`
    if (filters.limit)
      query += ` LIMIT ${filters.limit}`
    
    return (await database.execute(query)).rows
  }

  /**
   * Get items with wheres
   * @param fields 
   */
  protected async where(
    fields: { [key: string]: string | number },
    filters?: Filters
  ): Promise<any> {
    let query = `SELECT * FROM ${getTableName(this)} WHERE `
    let clauses: string[] = []
    for (let field in fields) {
      let value = fields[field]
      clauses.push(`${field} = '${value}'`)
    }
    query += clauses.join(' AND ')
    if (filters?.limit)
      query += ` LIMIT ${filters.limit}`
    const results = (await database.execute(query)).rows
    if (!results)
      return []
    
    return results
  }

  protected async save(item: BaseModel): Promise<any> {
    let query = `INSERT INTO ${getTableName(this)}`
    for (let field in item) {
      //console.log(item[field])
    }
  }
}