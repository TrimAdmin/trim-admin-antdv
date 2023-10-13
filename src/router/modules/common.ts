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
      i18n: 'menu.home',
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
      hideTab: true,
      title: t('menu.login'),
      i18n: 'menu.login'
    }
  },
  {
    path: '/iframe',
    name: 'iframe',
    component: () => import('@/views/common/iframe/index.vue'),
    meta: {
      hideMenu: true,
      title: 'iframe',
      i18n: ''
    }
  },
  {
    path: '/screen',
    name: 'screen',
    component: () => import('@/views/screen/index.vue'),
    meta: {
      noLayout: true,
      title: '数字大屏',
      icon: 'ant-design:bar-chart-outlined',
      order: 20,
      hideTab: true,
      i18n: ''
    }
  },
  {
    path: '/not-found',
    name: 'not-found',
    component: () => import('@/views/error-page/not-found/index.vue'),
    meta: {
      publicRoute: true,
      title: '404',
      hideMenu: true,
      i18n: ''
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'not-found' },
    meta: {
      title: '',
      hideMenu: true,
      publicRoute: true,
      i18n: ''
    }
  }
]

export default commonRoutes
