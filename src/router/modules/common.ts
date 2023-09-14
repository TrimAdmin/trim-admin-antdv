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
  },
  {
    path: '/iframe',
    name: 'iframe',
    component: () => import('@/views/common/iframe/index.vue'),
    meta: {
      hideMenu: true,
      title: 'iframe'
    }
  },
  {
    path: '/not-found',
    name: 'not-found',
    component: () => import('@/views/error-page/not-found/index.vue'),
    meta: {
      publicRoute: true,
      title: '404',
      hideMenu: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'not-found' },
    meta: {
      title: '',
      hideMenu: true,
      publicRoute: true
    }
  }
]

export default commonRoutes
