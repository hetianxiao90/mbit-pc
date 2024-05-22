import { AxiosRequestConfig } from 'axios'

/**
 *  扩展AxiosRequestConfig类型
 */
export interface MOptions extends AxiosRequestConfig {
  rawData?: boolean // 是否返回原生响应数据
  ignoreRepeat?: boolean // 是否忽略重复请求
  withToken?: boolean // 是否携带token
  codeMessageShow?: boolean // 是否显示错误信息
  retryConfig?: {
    isOpen: boolean // 是否开启重连
    count: number // 重连次数
    time: number // 每次请求间隔时间
  }
}

/**
 *  定义返回类型
 */
export interface ResultData<T = any> {
  code: number
  message: string
  result: T
}
