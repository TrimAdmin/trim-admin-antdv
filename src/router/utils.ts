import { RouteRecordRaw, RouterOptions } from 'vue-router'
import router from '@/router/index.ts'
import { Key } from 'ant-design-vue/es/_util/type'
import { useIcon } from '@/hooks'
import { sortBy } from 'lodash'

// 自动从modules文件夹导入路由
export function autoImportRoutes() {
  const modules = import.meta.glob(['./modules/*.ts', '!./modules/index.ts'], {
    eager: true
  })
  const routes = []
  // 路由处理
  for (const [key, value] of Object.entries(modules)) {
    if (Array.isArray(value.default)) {
      routes.push(...value.default)
    } else {
      routes.push(value.default)
    }
  }
  return routes
}

// 路由递归转换为菜单
export function routesToMenu(routes: RouterOptions['routes']) {
  const tree = []

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
      children: node.children || null
    })
  })

  return tree
}

// 生成菜单并排序
export function generateMenus() {
  const menus = routesToMenu(router.options.routes)
  return sortBy(menus, (item) => item.order || 0)
}

// 获取父级路由节点列表
export function getParentRoutes(value: string) {
  const routes = router.options.routes

  // 深度遍历
  function dfs(routes: RouteRecordRaw[], value: string, parents: RouteRecordRaw[]) {
    for (let i = 0; i < routes.length; i++) {
      const item = routes[i]
      // 返回父级
      if (item.name === value) {
        return parents
      }
      if (!item.children || !item.children.length) {
        continue
      }
      parents.push(item)

      if (dfs(item.children, value, parents).length) {
        return parents
      }
      // 未找到时将当前节点出栈
      parents.pop()
    }
    return []
  }

  return dfs(routes, value, [])
}
