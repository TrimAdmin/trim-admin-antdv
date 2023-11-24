import { RouteRecordRaw } from 'vue-router'
import { useI18nHook } from '@/hooks'

const { t } = useI18nHook()

export default {
  path: '/list',
  name: 'list',
  redirect: { name: 'list-dialog' },
  meta: {
    title: t('menu.list.home'),
    icon: 'material-symbols:event-list-outline',
    order: 2,
    i18n: 'menu.list.home'
  },
  children: [
    {
      path: 'dialog',
      name: 'list-dialog',
      component: () => import('@/views/list/dialog/index.vue'),
      meta: {
        title: t('menu.list.dialog'),
        i18n: 'menu.list.dialog',
        order: 3
      }
    },
    {
      path: 'new-tab',
      name: 'list-new-tab',
      component: () => import('@/views/list/new-tab/index.vue'),
      meta: {
        title: t('menu.list.new-tab'),
        i18n: 'menu.list.new-tab',
        order: 1
      },
      children: [
        {
          path: 'create',
          name: 'list-new-tab-create',
          component: () => import('@/views/basic-components/button/index.vue'),
          meta: {
            title: t('menu.list.new-tab-create'),
            i18n: 'menu.list.new-tab-create',
            hideMenu: true
          }
        }
      ]
    },
    {
      path: 'drawer',
      name: 'list-drawer',
      component: () => import('@/views/list/drawer/index.vue'),
      meta: {
        title: t('menu.list.drawer'),
        i18n: 'menu.list.drawer',
        order: 2
      }
    }
  ]
} as RouteRecordRaw
