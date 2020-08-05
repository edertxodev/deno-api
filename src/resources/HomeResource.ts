import BaseResource from './BaseResource.ts'

export default class HomeResource extends BaseResource
{
  static paths = [
    '/'
  ]

  public async GET() {
    this.response.body = 'kaixo'

    return this.response
  }
}