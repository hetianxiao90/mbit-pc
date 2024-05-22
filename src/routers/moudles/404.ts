import { lazy } from 'react'
import { RouteObject } from '@@/src/type/route'
import lazyLoad from '@@/src/components/public/lazyLoad'

// 错误页面模块
const errorRouter: Array<RouteObject> = [
  {
    path: '/404',
    title: '404页面',
    element: lazyLoad(lazy(() => import('@/components/error/404'))),
    requiresAuth: false,
  },
]

export default errorRouter
