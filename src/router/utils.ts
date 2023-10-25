import { RouteParamsRaw, RouteRecordName, RouteRecordRaw, RouterOptions } from 'vue-router'
import router from '@/router/index.ts'
import { Key } from 'ant-design-vue/es/_util/type'
import { useI18nHook, useIcon, useMessage } from '@/hooks'
import { sortBy } from 'lodash'
import { useCommonStoreHook } from '@/store'

// 自动从modules文件夹导入路由
export function autoImportRoutes(): Array<RouteRecordRaw> {
  const modules = import.meta.glob(['./modules/*.ts', '!./modules/index.ts'], {
    eager: true
  })
  const routes = []
  // 路由处理
  for (const [_, value] of Object.entries(modules) as any) {
    if (Array.isArray(value.default)) {
      routes.push(...value.default)
    } else {
      routes.push(value.default)
    }
  }
  return routes
}

// 路由递归转换为菜单
export function routesToMenu(routes: RouterOptions['routes']): Array<any> {
  const tree: Array<any> = []
  // console.log(routes)

  routes.map((route) => {
    const node = { ...route }
    if (route.children && route.children.length > 0) {
      node.children = routesToMenu(route.children)
    }
    if (route.meta?.hideMenu) {
      return
    }
    tree.push({
      label: node.meta?.title,
      title: node.meta?.title,
      key: node.name as unknown as Key,
      order: node.meta?.order,
      icon: node.meta?.icon && useIcon(node.meta.icon),
      children: node.children || undefined
    })
  })

  return tree
}

// 获取keep-alive路由
export function getKeepAliveMenus() {
  const list = router
    .getRoutes()
    .filter((item) => item.meta.keepAlive)
    .map((i) => i.name as string)
  console.log('keep-alive路由列表：', list)
  return list
}

// 生成菜单并排序
export function generateMenus() {
  const menus = routesToMenu(router.options.routes)
  return sortBy(menus, (item: RouteRecordRaw['meta']) => item?.order || 0)
}

// 获取父级路由节点列表
export function getParentRoutes(name: string) {
  const routes = router.options.routes

  // 深度遍历
  function dfs(
    routes: ReadonlyArray<RouteRecordRaw>,
    name: string,
    parents: Array<RouteRecordRaw>
  ): Array<RouteRecordRaw> {
    for (const route of routes) {
      // 返回父级
      if (route.name === name) {
        return parents
      }
      if (!route.children || !route.children.length) {
        continue
      }
      parents.push(route)

      if (dfs(route.children, name, parents).length) {
        return parents
      }
      // 未找到时将当前节点出栈
      parents.pop()
    }
    return []
  }

  return dfs(routes, name, [])
}

// 获取子路由列表
export function getChildRoutes(name: string) {
  console.log(router.options.routes.filter((item) => item.name === name))
  return router.options.routes.filter((item) => item.name === name)[0].children || []
}

export function handleJumpTo(name: RouteRecordName, params?: RouteParamsRaw) {
  router.push({ name, params }).then(() => {
    useCommonStoreHook().setCurrentRouteName(name.toString())
  })
}

export function handleCloseTag(name: string, msg?: string) {
  const { t } = useI18nHook()
  if (msg) {
    useMessage().createConfirm({
      iconType: 'warning',
      title: t('title.warning'),
      content: msg,
      onOk: () => {
        useCommonStoreHook().removeTab(name)
      }
    })
  } else {
    useCommonStoreHook().removeTab(name)
  }
}
