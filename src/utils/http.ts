// axios封装的请求方法
import { useCommonStoreHook, useUserStoreHook } from '@/store'
import { message } from '@/utils'
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { EHttpResponseStatusCode } from '@/enums'
import pluginNProgress from '@/plugins/nprogress.ts'

const http = axios.create({
  baseURL: import.meta.env.PROD ? import.meta.env.VITE_REQUEST_BASE_URL : '/proxyUrl',
  timeout: 30 * 1000,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

// 请求拦截
http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    useCommonStoreHook().setLoading(true)
    pluginNProgress.start()
    config.headers.token = useUserStoreHook().token
    return config
  },
  (err) => {
    useCommonStoreHook().setLoading(false)
    pluginNProgress.done()
    message.error(err.msg)
    return Promise.reject(err)
  }
)

// 响应拦截
http.interceptors.response.use(
  (res: AxiosResponse) => {
    useCommonStoreHook().setLoading(false)
    // 用户未登录或token过期
    if (res.data.success === false && res.data.code === EHttpResponseStatusCode.UNAUTHORIZED) {
      message.error(res.data.msg)
      useUserStoreHook().logout()
      // 接口报错
    } else if (res.data.success === false && res.data.code === EHttpResponseStatusCode.INTERNAL_SERVER_ERROR) {
      message.error(res.data.msg)
    }
    pluginNProgress.done()
    return res.data
  },
  (err) => {
    if (err.response.status === EHttpResponseStatusCode.NOT_FOUND) {
      message.error('访问的接口不存在')
    } else {
      message.error(err.msg)
    }
    pluginNProgress.done()
    return Promise.reject(err)
  }
)

/**
 * 为路径添加前置接口根路径
 * @param url 路径
 * @return {string} 完整路径
 */
export function useBaseUrl(url?: string): string {
  return import.meta.env.PROD ? import.meta.env.VITE_REQUEST_BASE_URL + url : `/proxyUrl${url}`
}

export default http
