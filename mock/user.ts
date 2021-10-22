export default [
  {
    url: '/api/getUsers',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: ['张三', '李四', '王五', '赵六']
      }
    }
  }
]