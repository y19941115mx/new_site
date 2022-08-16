declare namespace Api {
  interface LoginParams {
    userName: string
    passWord: string | number
  }

  interface LoginApi {
    login: (params: LoginParams) => Promise<any>
  }
}
