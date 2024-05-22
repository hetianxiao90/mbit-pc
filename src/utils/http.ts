import axios, {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios'
import { MOptions, ResultData } from '@/type/http'
import { message } from 'antd'

const pendingMap = new Map<string, AbortController>()

class AxiosRequest {
  private service: AxiosInstance
  private options: MOptions
  constructor(options: MOptions) {
    this.service = axios.create(options)
    this.options = options

    this.interceptorHandle()
  }
  interceptorHandle() {
    // 请求拦截
    this.service.interceptors.request.use(this.requestInterceptor, (error: AxiosError) => {
      return Promise.reject(error)
    })

    // 响应拦截
    this.service.interceptors.response.use(this.responseInterceptor, this.responeErrorInterceptor)
  }

  // 请求拦截器
  private async requestInterceptor(config: InternalAxiosRequestConfig) {
    const ignoreRepeat = (config as unknown as any)?.ignoreRepeat ?? this.options.ignoreRepeat

    // 是否忽略重复请求
    if (ignoreRepeat) {
      addPending(config)
    }
    // 自动携带token
    // config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
    return config
  }

  // 响应拦截器
  private async responseInterceptor(res: AxiosResponse) {
    // 取消请求
    res && removePending(res.config)
    let resultData

    // 是否获取原数据
    if (!this.options.rawData) {
      resultData = res.data
    }

    // 如果返回结果不是200 并且需要弹错误提示
    if (this.options.codeMessageShow && res.data && res.data.code !== 200) {
      message.error(res.data.message) // 需要根据状态码获取对应多语言
      return Promise.reject(resultData)
    }

    return resultData
  }

  // 错误拦截器
  private async responeErrorInterceptor(err: AxiosError) {
    // 取消的重复请求
    if (axios.isCancel(err)) {
      return Promise.reject(err)
    }

    // 如果是超时，重试
    if ((err as AxiosError).code === 'ECONNABORTED') {
      return retry(this.service, err as AxiosError)

      // 非超时走状态码处理
    } else {
      httpErrorStatusHandle(err)
    }
  }

  // * 常用请求方法封装
  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    console.log(url, { params, ..._object })
    return this.service.get(url, { params, ..._object })
  }
  post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, _object)
  }
  put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.put(url, params, _object)
  }
  delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
    return this.service.delete(url, { params, ..._object })
  }
}

/**
 * @description 添加请求
 * @param config
 */
function addPending(config: AxiosRequestConfig) {
  removePending(config)
  const url = getPendingKey(config)
  const abortController = new AbortController()
  config.signal = abortController.signal
  if (!pendingMap.has(url)) {
    pendingMap.set(url, abortController)
  }
}

/**
 * @description 删除请求
 * @param config
 */
function removePending(config: AxiosRequestConfig) {
  const url = getPendingKey(config)
  if (pendingMap.has(url)) {
    const abortController = pendingMap.get(url)
    abortController?.abort()
    pendingMap.delete(url)
  }
}

/**
 * @description 请求唯一标识
 * @param config
 * @returns
 */
function getPendingKey(config: AxiosRequestConfig) {
  return [config.url, config.method].join('&')
}

/**
 * @description 重试处理
 * @param instance
 * @param err
 * @returns
 */
async function retry(instance: AxiosInstance, err: AxiosError) {
  const config: any = err.config
  const { time, count } = config.retryConfig ?? {}
  config.currentCount = config.currentCount ?? 0
  console.log(`接口：${config.url},第${config.currentCount}次重连`)
  if (config.currentCount >= count) {
    return Promise.reject(err)
  }
  config.currentCount++
  await wait(time)
  return await instance(config)
}

/**
 * @description 重试间隔时间
 * @param time
 * @returns
 */
function wait(time: number) {
  return new Promise(resolve => setTimeout(resolve, time))
}

/**
 * @description 处理异常
 * @param err
 */
function httpErrorStatusHandle(err: AxiosError) {
  let message = ''
  if (err && err.response) {
    switch (err.response.status) {
      case 302:
        message = '接口重定向！'
        break
      case 400:
        message = '接口参数不正确！'
        break
      case 401:
        message = '未登录！'
        break
      case 403:
        message = '无权限！'
        break
      case 404:
        message = `接口地址不正确！`
        break
      case 500:
        message = '服务器内部错误！'
        break
      case 502:
        message = '网关错误！'
        break
      case 503:
        message = '服务不可用！'
        break
      case 504:
        message = '服务暂时无法访问，请稍后再试！'
        break
      default:
        message = '异常问题，请联系管理员！'
        break
    }
  }
  if (err.code === 'ERR_NETWORK')
    message = window.navigator.onLine ? '服务端异常！' : '网络异常，请检查您的网络！'

  console.log(message)
}

const axiosRequest = new AxiosRequest({
  rawData: false,
  ignoreRepeat: true,
  withToken: true,
  codeMessageShow: true,
  retryConfig: {
    isOpen: true,
    count: 5,
    time: 1000,
  },
  timeout: 3000,
  withCredentials: true,
  baseURL: 'https://api.muchui.net',
})

export default axiosRequest
