import http from '@@/src/utils/http'

/**
 * @name 测试模块
 */
export const testApi = (params: any) => {
  console.log(params)
  return http.get<any>('/test', params)
}
