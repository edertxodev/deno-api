import { Drash } from '../../depts.ts'
import BaseModel from '../models/BaseModel.ts'
import { Meow, MeowEntity } from '../models/Meow.ts'
import BaseResource from "./BaseResource.ts"

export default class MeowResource extends BaseResource
{
  private model = new Meow
  static paths = [
    '/meows',
    '/meows/:id'
  ]

  public async GET(): Promise<Drash.Http.Response> {
    const id = this.request.getPathParam('id')
    if (id) {
      const item = await this.model.getById(parseInt(id))
      if (!item)
        return this.errorResponse(404, 'Resource not found')
      this.response.body = {
        item
      }
    } else {
      const items = await this.model.all(await this.getQueryFilters())
      this.response.body = {
        items
      }
    }

    return this.response
  }

  public async POST(): Promise<Drash.Http.Response> {
    const id = this.request.getPathParam('id')
    if (id) {
      // todo: Update
    } else {
      const input: any = this.request.getBodyParam('item')
      if (input) {
        const item: Meow | null = await this.model.save(new Meow(input))
      } else {
        return this.errorResponse(400, 'Bad body request')
      }
      
      // todo: Insert
    }

    return this.response
  }
}