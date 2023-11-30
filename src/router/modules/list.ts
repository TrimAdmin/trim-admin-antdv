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
        i18n: 'menu.list.dialog'
      }
    },
    {
      path: 'new-tab',
      name: 'list-new-tab',
      redirect: { name: 'list-new-tab-index' },
      meta: {
        title: t('menu.list.new-tab'),
        i18n: 'menu.list.new-tab'
      },
      children: [
        {
          path: '',
          name: 'list-new-tab-index',
          component: () => import('@/views/list/new-tab/index.vue'),
          meta: {
            title: t('menu.list.new-tab'),
            i18n: 'menu.list.new-tab',
            hideMenu: true
          }
        },
        {
          path: 'create',
          name: 'list-new-tab-create',
          component: () => import('@/views/list/new-tab/form.vue'),
          meta: {
            title: t('menu.list.new-tab-create'),
            i18n: 'menu.list.new-tab-create',
            hideMenu: true
          }
        },
        {
          path: 'update',
          name: 'list-new-tab-update',
          component: () => import('@/views/list/new-tab/form.vue'),
          meta: {
            title: t('menu.list.new-tab-update'),
            i18n: 'menu.list.new-tab-update',
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
        i18n: 'menu.list.drawer'
      }
    }
  ]
} as RouteRecordRaw
