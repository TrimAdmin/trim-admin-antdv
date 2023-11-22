import { createRouter, createWebHashHistory } from 'vue-router'
import routerInterceptor from '@/router/interceptor'
import { autoImportRoutes } from '@/router/utils'

const router = createRouter({
  routes: autoImportRoutes(),
  history: createWebHashHistory()
})

// 路由守卫
routerInterceptor(router)

export default router
