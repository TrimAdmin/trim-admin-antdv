import { RouteRecordRaw } from 'vue-router'
import { useI18nHook } from '@/hooks'

const { t } = useI18nHook()
export default {
  path: '/advanced-components',
  name: 'advanced-components',
  redirect: { name: 'advanced-components-button' },
  meta: {
    title: t('menu.advanced-components.home'),
    icon: 'ant-design:database-outlined',
    order: 2,
    i18n: 'menu.advanced-components.home'
  },
  children: [
    {
      path: 'button',
      name: 'advanced-components-button',
      component: () => import('@/views/basic-components/button/index.vue'),
      meta: {
        title: t('menu.advanced-components.button'),
        i18n: 'menu.advanced-components.button'
      }
    }
  ]
} as RouteRecordRaw
