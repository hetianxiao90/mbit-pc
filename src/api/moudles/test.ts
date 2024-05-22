import { axiosRequest } from '@/utils'

/**
 * @name 测试模块
 */
export const testApi = (params: any) => {
  console.log(params)
  return axiosRequest.get<any>('/test', params)
}
