import { RouteMeta } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * 是否启用keepAlive
     * @type {boolean}
     */
    keepAlive?: boolean
    /**
     * 是否不需要layout
     * @type {boolean}
     */
    noLayout?: boolean
    /**
     * 是否是公共路由（不需要登录）
     * @type {boolean}
     */
    publicRoute?: boolean
    /**
     * 路由标题
     * @type {string}
     */
    title: string
  }
}
