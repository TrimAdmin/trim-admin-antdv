import { RouterOptions } from 'vue-router'
import router from '@/router/index.ts'
import { Key } from 'ant-design-vue/es/_util/type'
import { useIcon } from '@/hooks'

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

// 生成菜单
export function generateMenus() {
  return routesToMenu(router.options.routes)
}
