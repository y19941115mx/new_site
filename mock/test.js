export default [
  {
    url: '/mock/get', // 请求地址
    method: 'get', // 请求方法
    response: ({ query }) => {
      // 响应内容
      return {
        code: 0,
        data: {
          name: 'hello world',
        },
      }
    },
  },
  {
    url: '/mock/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'hello world',
      },
    },
  },
  {
    url: '/mock/500',
    method: 'get',
    statusCode: 500,
    response: {
      code: 500,
      message: '内部错误',
      data: null,
    },
  },
]
