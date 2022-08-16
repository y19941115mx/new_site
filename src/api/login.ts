import http from '@/utils/http'

const loginApi: Api.LoginApi = {
  login(params) {
    return http.post('/mock/login', params)
  },
}

export default loginApi
