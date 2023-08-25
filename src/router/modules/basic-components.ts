import { RouteRecordRaw } from 'vue-router'

export const basicComponentsRoutes: Array<RouteRecordRaw> = [
  {
    path: '/basic-components',
    name: 'basic-components',
    redirect: { name: 'basic-components-button' },
    meta: {
      title: '基础组件',
      icon: 'ant-design:appstore-outlined'
    },
    children: [
      {
        path: 'button',
        name: 'basic-components-button',
        component: () => import('@/views/basic-components/button/index.vue'),
        meta: {
          title: '按钮'
        }
      }
    ]
  }
]
