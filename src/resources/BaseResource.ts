import { Drash } from "../../depts.ts"
import { Filters } from "../models/BaseModel.ts"

class BaseResource extends Drash.Http.Resource
{
  protected errorResponse(statusCode: number, message: string): Drash.Http.Response {
    this.response.status_code = statusCode
    this.response.body = {
      errors: {
        body: [message]
      }
    }

    return this.response
  }

  protected async getQueryFilters(): Promise<Filters> {
    const limit = this.request.getUrlQueryParam('limit')
    let filters: Filters = {}
    if (limit)
      filters.limit = limit

    return filters
  }
}

export default BaseResource