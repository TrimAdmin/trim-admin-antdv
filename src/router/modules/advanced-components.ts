import { RouteRecordRaw } from 'vue-router'

export const advancedComponentsRoutes: Array<RouteRecordRaw> = [
  {
    path: '/advanced-components',
    name: 'advanced-components',
    redirect: { name: 'advanced-components-button' },
    meta: {
      title: '进阶组件',
      icon: 'ant-design:database-outlined',
      order: 2
    },
    children: [
      {
        path: 'button',
        name: 'advanced-components-button',
        component: () => import('@/views/basic-components/button/index.vue'),
        meta: {
          title: '按钮'
        }
      }
    ]
  }
]

export default advancedComponentsRoutes
