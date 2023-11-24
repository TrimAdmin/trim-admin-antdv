import { RouteRecordRaw } from 'vue-router'
import { useI18nHook } from '@/hooks'

const { t } = useI18nHook()
export default {
  path: '/multi-nav',
  name: 'multi-nav',
  redirect: { name: 'multi-nav-1' },
  meta: {
    title: t('menu.multi-nav.home'),
    icon: 'ant-design:unordered-list-outlined',
    order: 6,
    i18n: 'menu.multi-nav.home'
  },
  children: [
    {
      path: 'nav-1',
      name: 'multi-nav-1',
      redirect: { name: 'multi-nav-1-1' },
      meta: {
        title: t('menu.multi-nav.menu-1'),
        i18n: 'menu.multi-nav.menu-1'
      },
      children: [
        {
          path: 'nav-1-1',
          name: 'multi-nav-1-1',
          redirect: { name: 'multi-nav-1-1-1' },
          meta: {
            title: t('menu.multi-nav.menu-1-1'),
            i18n: 'menu.multi-nav.menu-1-1'
          },
          children: [
            {
              path: 'nav-1-1-1',
              name: 'multi-nav-1-1-1',
              component: () => import('@/views/multi-nav/nav-1/nav-1-1/nav-1-1-1/index.vue'),
              meta: {
                title: t('menu.multi-nav.menu-1-1-1'),
                i18n: 'menu.multi-nav.menu-1-1-1'
              }
            },
            {
              path: 'nav-1-1-2',
              name: 'multi-nav-1-1-2',
              component: () => import('@/views/multi-nav/nav-1/nav-1-1/nav-1-1-2/index.vue'),
              meta: {
                title: t('menu.multi-nav.menu-1-1-2'),
                i18n: 'menu.multi-nav.menu-1-1-2'
              }
            }
          ]
        },
        {
          path: 'nav-1-2',
          name: 'multi-nav-1-2',
          component: () => import('@/views/multi-nav/nav-1/nav-1-2/index.vue'),
          meta: {
            title: t('menu.multi-nav.menu-1-2'),
            i18n: 'menu.multi-nav.menu-1-2'
          }
        }
      ]
    },
    {
      path: 'nav-2',
      name: 'multi-nav-2',
      component: () => import('@/views/multi-nav/nav-2/index.vue'),
      meta: {
        title: t('menu.multi-nav.menu-2'),
        i18n: 'menu.multi-nav.menu-2'
      }
    }
  ]
} as RouteRecordRaw
