import axios from 'axios'

export default class HttpService {
  constructor (serviceURL) {
    this.ws = this.loadAxios(serviceURL)
  }

  loadAxios (serviceURL) {
    return axios.create({
      baseURL: `${process.env.BASE_API_URL}${serviceURL}`
    })
  }

  get (path, params = null) {
    return this.ws.get(path, {
      params
    })
  }

  post (path, data) {
    return this.ws.post(path, data)
  }

  put (path, data) {
    return this.ws.put(path, data)
  }

  delete (path, params = null) {
    return this.ws.delete(path, {
      params
    })
  }

  all (path, params) {
    const requests = []
    params.forEach((param) => {
      requests.push(this.get(path, {
        [param.label]: param.value
      }))
    })

    return axios.all(requests)
  }
}
