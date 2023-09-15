import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/forms',
  name: 'forms',
  redirect: { name: 'forms-basic' },
  meta: {
    title: '表单页',
    icon: 'ant-design:form-outlined'
  },
  children: [
    {
      path: 'basic',
      name: 'forms-basic',
      component: () => import('@/views/forms/basic/index.vue'),
      meta: {
        title: '基础表单'
      }
    },
    {
      path: 'advanced',
      name: 'forms-advanced',
      component: () => import('@/views/forms/advanced/index.vue'),
      meta: {
        title: '高级表单'
      }
    },
    {
      path: 'step',
      name: 'forms-step',
      component: () => import('@/views/forms/step/index.vue'),
      meta: {
        title: '分步表单'
      }
    }
  ]
} as RouteRecordRaw
