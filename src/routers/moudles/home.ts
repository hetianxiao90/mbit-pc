import { lazy } from 'react'
import { RouteObject } from '@@/src/type/route'
import lazyLoad from '@@/src/components/public/lazyLoad'

// 错误页面模块
const errorRouter: Array<RouteObject> = [
  {
    path: '/home',
    title: '首页',
    element: lazyLoad(lazy(() => import('@/views/home'))),
    requiresAuth: false,
  },
]

export default errorRouter
