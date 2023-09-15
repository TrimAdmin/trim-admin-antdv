import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/extensions',
  name: 'extensions',
  redirect: { name: 'extensions-rich-editor' },
  meta: {
    title: '扩展组件',
    icon: 'mdi:puzzle-edit'
  },
  children: [
    {
      path: 'rich-editor',
      name: 'extensions-rich-editor',
      component: () => import('@/views/extensions/rich-editor/index.vue'),
      meta: {
        title: '富文本编辑器'
      }
    }
  ]
} as RouteRecordRaw
