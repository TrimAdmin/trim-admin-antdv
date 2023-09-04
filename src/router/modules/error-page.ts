import { RouteRecordRaw } from 'vue-router'

export const errorPageRoutes: Array<RouteRecordRaw> = [
  {
    path: '/error-page',
    name: 'error-page',
    redirect: { name: 'error-page-no-permission' },
    meta: {
      title: '异常页面',
      icon: 'ant-design:appstore-outlined',
      order: 5
    },
    children: [
      {
        path: 'no-permission',
        name: 'error-page-no-permission',
        component: () => import('@/views/error-page/no-permission/index.vue'),
        meta: {
          title: '403'
        }
      },
      {
        path: 'not-found',
        name: 'error-page-not-found',
        component: () => import('@/views/error-page/not-found/index.vue'),
        meta: {
          title: '404'
        }
      },
      {
        path: 'server-error',
        name: 'error-page-server-error',
        component: () => import('@/views/error-page/server-error/index.vue'),
        meta: {
          title: '500'
        }
      }
    ]
  }
]

export default errorPageRoutes
