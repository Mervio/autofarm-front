import HttpService from '../HttpService'

export default class AuthService {
  constructor (auth) {
    this.auth = auth
    this._httpService = new HttpService('/api')
  }

  async Login (data) {
    return await this.auth.loginWith('laravelSanctum', data)
  }

  async Logout () {
    return await this.auth.logout()
  }

  async ResetPassword (data) {
    return await this._httpService.post('/reset-password', data)
  }

  async ForgotPassword (data) {
    return await this._httpService.post('/forgot-password', data)
  }
}
