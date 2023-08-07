import { createRouter, createWebHashHistory } from 'vue-router'
import commonRoutes from '@/router/modules/common.ts'
import routerInterceptor from '@/router/interceptor.ts'

const router = createRouter({
  routes: [...commonRoutes],
  history: createWebHashHistory()
})

// 路由守卫
routerInterceptor(router)

export default router
