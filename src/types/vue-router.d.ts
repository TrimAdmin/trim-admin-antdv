import { Key } from 'ant-design-vue/es/_util/type'

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
     * 路由菜单标题
     * @type {string}
     */
    title: string
    /**
     * i18n对象
     */
    i18n: string
    /**
     * 菜单顺序
     * @type {number}
     */
    order?: number
    /**
     * 菜单图标
     * @type {string}
     */
    icon?: string
    /**
     * 是否隐藏菜单
     * @type {boolean}
     */
    hideMenu?: boolean
    /**
     * 标签页不可关闭
     * @type {boolean}
     */
    tabAffix?: boolean
    /**
     * 外链，有值时直接打开新页面
     * @type {string}
     */
    href?: string
    /**
     * iframe外链
     */
    iframeHref?: string
  }
}

interface IMenuItem {
  title: string | undefined
  key: Key
  icon: string | undefined
  children?: Array<IMenuItem>
}

export {}
