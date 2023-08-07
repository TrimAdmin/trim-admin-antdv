import { RouteRecordRaw } from 'vue-router'

const commonRoute: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/common/home/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/common/login/index.vue'),
    meta: {
      publicRoute: true,
      noLayout: true,
      title: '登录'
    }
  }
]
export default commonRoute
