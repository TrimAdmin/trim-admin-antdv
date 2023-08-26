import { RouteRecordName, RouterOptions } from 'vue-router'
import { Key } from 'ant-design-vue/es/_util/type'
import { useIcon } from '@/hooks'
import { ItemType } from 'ant-design-vue'
import router from '@/router/index.ts'

export const menuItems: Array<ItemType> = []

// 路由递归转换为菜单
export function routesToMenu(routes: RouterOptions['routes'], pname?: RouteRecordName) {
  if (pname) {
    const children: Array<ItemType> = []
    const pRoute = router.getRoutes().filter((item) => item.name === pname)
    for (const child of pRoute[0].children!) {
      children.push({
        label: child.meta?.title,
        title: child.meta?.title,
        key: child.name as unknown as Key,
        order: child.meta?.order,
        icon: child.meta?.icon && useIcon(child.meta.icon)
      })
    }
    menuItems.push({
      label: pRoute[0].meta.title,
      title: pRoute[0].meta.title,
      key: pRoute[0].name as unknown as str,
      order: pRoute[0].meta?.order,
      icon: pRoute[0].meta?.icon && useIcon(pRoute[0].meta.icon),
      children
    })
  } else {
    for (const route of routes) {
      // 如果有子节点则递归
      if (route.children && route.children.length !== 0) {
        routesToMenu(route.children, route.name)
        continue
      }
      // 隐藏菜单则不处理
      if (route.meta?.hideMenu) {
        continue
      }
      menuItems.push({
        label: route.meta?.title,
        title: route.meta?.title,
        key: route.name as unknown as Key,
        order: route.meta?.order,
        icon: route.meta?.icon && useIcon(route.meta.icon)
      })
    }
  }
}

// 生成菜单
export function generateMenus() {
  // 清空菜单
  menuItems.splice(0, menuItems.length)
  routesToMenu(router.options.routes)
  // 按顺序排序
  menuItems.sort((prev, curr) => (prev.order || 0) - (curr.order || 0))
  return menuItems
}
