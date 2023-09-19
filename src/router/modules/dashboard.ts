import { RouteRecordRaw } from 'vue-router'
import { useI18nHook } from '@/hooks'

const { t } = useI18nHook()

export const dashboardRoutes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: 'dashboard',
    redirect: { name: 'workbench' },
    meta: {
      title: t('menu.dashboard.dashboard'),
      i18n: 'menu.dashboard.dashboard',
      icon: 'ant-design:dashboard-outlined',
      order: 0
    },
    children: [
      {
        path: 'workbench',
        name: 'workbench',
        component: () => import('@/views/dashboard/workbench/index.vue'),
        meta: {
          title: t('menu.dashboard.workbench'),
          i18n: 'menu.dashboard.workbench'
        }
      },
      {
        path: 'analysis',
        name: 'analysis',
        component: () => import('@/views/dashboard/analysis/index.vue'),
        meta: {
          title: t('menu.dashboard.analysis'),
          i18n: 'menu.dashboard.analysis'
        }
      }
    ]
  }
]

export default dashboardRoutes
