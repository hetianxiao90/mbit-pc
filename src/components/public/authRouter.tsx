import { useLocation } from 'react-router-dom'
import { rootRouter } from '@/routers/index'
import { RouteObject } from '@@/src/type/route'

/**
 * @description 路由守卫组件
 * */
const AuthRouter = (props: { children: JSX.Element }) => {
  const { pathname } = useLocation()
  const route = searchRoute(pathname, rootRouter)

  // 设置title
  document.title = route?.title ? route?.title : ''

  // * 判断当前路由是否需要访问权限(不需要权限直接放行)
  if (!route?.requiresAuth) return props.children

  // * 判断是否有Token
  // const token = store.getState().global.token
  // if (!token) return <Navigate to='/login' replace />

  // * 当前账号有权限返回 Router，正常访问页面
  return props.children
}

/**
 * @description 递归查询对应的路由
 * @param {String} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns {RouteObject}
 */
export const searchRoute = (path: string, routes: RouteObject[] = []): RouteObject => {
  let result: RouteObject = {}
  for (let item of routes) {
    if (item.path === path) return item
    if (item.children) {
      const res = searchRoute(path, item.children)
      if (Object.keys(res).length) result = res
    }
  }
  return result
}

export default AuthRouter
