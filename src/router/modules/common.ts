import { useI18nHook } from '@/hooks'
import { RouteRecordRaw } from 'vue-router'

const { t } = useI18nHook()

export const commonRoutes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/common/home/index.vue'),
    meta: {
      title: t('menu.home'),
      icon: 'ant-design:home-filled',
      tabAffix: true,
      order: 0
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
