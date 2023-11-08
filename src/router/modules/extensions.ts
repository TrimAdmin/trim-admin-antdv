import { RouteRecordRaw } from 'vue-router'
import { useI18nHook } from '@/hooks'

const { t } = useI18nHook()

export default {
  path: '/extensions',
  name: 'extensions',
  redirect: { name: 'extensions-rich-editor' },
  meta: {
    title: t('menu.extensions.home'),
    icon: 'mdi:puzzle-edit',
    order: 5,
    i18n: 'menu.extensions.home'
  },
  children: [
    {
      path: 'rich-editor',
      name: 'extensions-rich-editor',
      component: () => import('@/views/extensions/rich-editor/index.vue'),
      meta: {
        title: t('menu.extensions.rich-editor'),
        i18n: 'menu.extensions.rich-editor'
      }
    },
    {
      path: 'digit-scroll',
      name: 'extensions-digit-scroll',
      component: () => import('@/views/extensions/digit-scroll/index.vue'),
      meta: {
        title: t('menu.extensions.digit-scroll'),
        i18n: 'menu.extensions.digit-scroll'
      }
    },
    {
      path: 'vxe-table',
      name: 'extensions-vxe-table',
      component: () => import('@/views/extensions/vxe-table/index.vue'),
      meta: {
        title: t('menu.extensions.vxe-table'),
        i18n: 'menu.extensions.vxe-table'
      }
    }
  ]
} as RouteRecordRaw
