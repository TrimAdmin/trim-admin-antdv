import { RouteRecordRaw } from 'vue-router'
import { useI18nHook } from '@/hooks'

const { t } = useI18nHook()
export default {
  path: '/extended-components',
  name: 'extended-components',
  redirect: { name: 'extended-components-page-header' },
  meta: {
    title: t('menu.extended-components.home'),
    icon: 'ant-design:database-outlined',
    order: 4,
    i18n: 'menu.extended-components.home'
  },
  children: [
    {
      path: 'page-header',
      name: 'extended-components-page-header',
      component: () => import('@/views/extended-components/page-header/index.vue'),
      meta: {
        title: t('menu.extended-components.page-header'),
        i18n: 'menu.extended-components.page-header'
      }
    },
    {
      path: 'fixed-footer',
      name: 'extended-components-fixed-footer',
      component: () => import('@/views/extended-components/fixed-footer/index.vue'),
      meta: {
        title: t('menu.extended-components.fixed-footer'),
        i18n: 'menu.extended-components.fixed-footer'
      }
    },
    {
      path: 'regular-layout',
      name: 'extended-components-regular-layout',
      component: () => import('@/views/extended-components/regular-layout/index.vue'),
      meta: {
        title: t('menu.extended-components.regular-layout'),
        i18n: 'menu.extended-components.regular-layout'
      }
    },
    {
      path: 'search-panel',
      name: 'extended-components-search-panel',
      component: () => import('@/views/extended-components/search-panel/index.vue'),
      meta: {
        title: t('menu.extended-components.search-panel'),
        i18n: 'menu.extended-components.search-panel'
      }
    },
    {
      path: 'file-upload',
      name: 'extended-components-file-upload',
      component: () => import('@/views/extended-components/file-upload/index.vue'),
      meta: {
        title: t('menu.extended-components.file-upload'),
        i18n: 'menu.extended-components.file-upload'
      }
    }
  ]
} as RouteRecordRaw
