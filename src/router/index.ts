import { createRouter, createWebHashHistory } from 'vue-router'
import routerInterceptor from '@/router/interceptor'
import { commonRoutes, basicComponentsRoutes } from './modules'

const routes = [...commonRoutes, ...basicComponentsRoutes]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// 路由守卫
routerInterceptor(router)

export default router
