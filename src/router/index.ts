import { createRouter, createWebHashHistory } from 'vue-router'
import routerInterceptor from '@/router/interceptor'
import { advancedComponentsRoutes, basicComponentsRoutes, commonRoutes, multiNavRoutes } from './modules'

const routes = [...commonRoutes, ...basicComponentsRoutes, ...advancedComponentsRoutes, ...multiNavRoutes]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// 路由守卫
routerInterceptor(router)

export default router
