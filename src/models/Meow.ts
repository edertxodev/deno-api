import BaseModel, { Filters } from "./BaseModel.ts"
import ModelInterface from "./ModelInterface.ts"

export type MeowEntity = {
  id?: number
  content: string
  created_at?: string
}

export class Meow extends BaseModel implements ModelInterface
{
  public id?: number
  public content?: string
  public created_at?: string

  /**
   * Model constructor
   * @param opts 
   */
  constructor(opts?: MeowEntity) {
    super()
    if (opts) {
      this.id = opts.id || undefined
      this.content = opts.content || undefined
      this.created_at = opts.created_at || undefined
    }
  }

  /**
   * Get all items
   * @param filters 
   */
  async all(filters: Filters): Promise<Meow[] | []> {
    const items = []
    const results = await super.all(filters)
    for (const result of results) {
      items.push(new Meow(result))
    }

    return items
  }

  /**
   * Get item by ID
   * @param id 
   */
  async getById(id: number): Promise<Meow | null> {
    const result = await super.where({ id })
    if (result.length > 0)
      return new Meow(result[0])
    
    return null
  }

  async save(input: this): Promise<Meow | null> {
    const result = await super.save(input)
    return null
  }
}