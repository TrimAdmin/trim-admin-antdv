import { RouteRecordRaw } from 'vue-router'

export const dashboardRoutes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: 'dashboard',
    redirect: { name: 'workbench' },
    meta: {
      title: '仪表盘',
      icon: 'ant-design:dashboard-outlined',
      order: 0
    },
    children: [
      {
        path: 'workbench',
        name: 'workbench',
        component: () => import('@/views/dashboard/workbench/index.vue'),
        meta: {
          title: '工作台'
        }
      },
      {
        path: 'analysis',
        name: 'analysis',
        component: () => import('@/views/dashboard/analysis/index.vue'),
        meta: {
          title: '分析页'
        }
      }
    ]
  }
]

export default dashboardRoutes
