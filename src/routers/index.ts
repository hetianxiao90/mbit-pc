import { useRoutes, DataRouteObject } from 'react-router-dom'
import { lazy } from 'react'
import lazyLoad from '@@/src/components/public/lazyLoad'
import { RouteObject } from '@@/src/type/route'
import notFoundRouter from '@/routers/moudles/404'
import homeRouter from '@/routers/moudles/home'

// 路由集合
export const rootRouter: RouteObject[] = [
  ...notFoundRouter,
  ...homeRouter,
  {
    path: '*',
    element: lazyLoad(lazy(() => import('@/components/error/404'))),
    title: '404',
  },
]
const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}

export default Router
