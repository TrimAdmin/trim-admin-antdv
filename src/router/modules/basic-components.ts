import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/basic-components',
  name: 'basic-components',
  redirect: { name: 'basic-components-button' },
  meta: {
    title: '基础组件',
    icon: 'ant-design:appstore-outlined',
    order: 1
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
} as RouteRecordRaw
