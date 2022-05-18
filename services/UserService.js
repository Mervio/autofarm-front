import HttpService from './HttpService'

export default class UserService {
  constructor () {
    this._httpService = new HttpService('/api/v1/user')
  }

  async Create (data) {
    return await this._httpService.post('', data)
  }
}
