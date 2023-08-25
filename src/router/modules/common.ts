import { RouteRecordRaw } from 'vue-router'

export const commonRoutes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/common/home/index.vue'),
    meta: {
      title: '首页',
      icon: 'ant-design:home-filled'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/common/login/index.vue'),
    meta: {
      publicRoute: true,
      noLayout: true,
      hideMenu: true,
      title: '登录'
    }
  }
]
