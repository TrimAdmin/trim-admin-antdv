import { RouteRecordRaw } from 'vue-router'
import { useI18nHook } from '@/hooks'

const { t } = useI18nHook()

export default {
  path: '/basic-components',
  name: 'basic-components',
  redirect: { name: 'basic-components-button' },
  meta: {
    title: t('menu.basic-components.home'),
    icon: 'ant-design:appstore-outlined',
    order: 1,
    i18n: 'menu.basic-components.home'
  },
  children: [
    {
      path: 'button',
      name: 'basic-components-button',
      component: () => import('@/views/basic-components/button/index.vue'),
      meta: {
        title: t('menu.basic-components.button'),
        i18n: 'menu.basic-components.button'
      }
    }
  ]
} as RouteRecordRaw
