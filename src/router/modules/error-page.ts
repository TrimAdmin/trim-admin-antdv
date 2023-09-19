import { RouteRecordRaw } from 'vue-router'
import { useI18nHook } from '@/hooks'

const { t } = useI18nHook()

export default {
  path: '/error-page',
  name: 'error-page',
  redirect: { name: 'error-page-no-permission' },
  meta: {
    title: t('menu.error-page.home'),
    i18n: 'menu.error-page.home',
    icon: 'ant-design:appstore-outlined',
    order: 5
  },
  children: [
    {
      path: 'no-permission',
      name: 'error-page-no-permission',
      component: () => import('@/views/error-page/no-permission/index.vue'),
      meta: {
        title: '403',
        i18n: ''
      }
    },
    {
      path: 'not-found',
      name: 'error-page-not-found',
      component: () => import('@/views/error-page/not-found/index.vue'),
      meta: {
        title: '404',
        i18n: ''
      }
    },
    {
      path: 'server-error',
      name: 'error-page-server-error',
      component: () => import('@/views/error-page/server-error/index.vue'),
      meta: {
        title: '500',
        i18n: ''
      }
    }
  ]
} as RouteRecordRaw
