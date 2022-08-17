import http from '@/utils/http'

export const userLogin = (params: NetReq.UserLogin): Promise<NetResp.userLogin> => {
  return http.post('/mock/login', params)
}
