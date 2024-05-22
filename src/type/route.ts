import { NonIndexRouteObject } from 'react-router-dom'

/**
 * @description 路由类型
 */
export interface RouteObject extends NonIndexRouteObject {
  keepAlive?: boolean
  children?: RouteObject[]
  requiresAuth?: boolean
  title?: string
}
