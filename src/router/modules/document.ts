import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/document',
  name: 'document',
  redirect: { name: 'document-antdv' },
  meta: {
    title: '相关文档',
    icon: 'ant-design:profile-outlined'
  },
  children: [
    {
      path: 'external-links',
      name: 'document-external-links',
      meta: {
        title: '外链'
      },
      children: [
        {
          path: 'antdv',
          name: 'document-antdv',
          meta: {
            title: 'Ant Design Vue',
            href: 'https://antdv.com/components/overview-cn'
          }
        }
      ]
    },
    {
      path: 'inner-iframe',
      name: 'document-inner-iframe',
      meta: {
        title: '内嵌（iframe）'
      },
      children: [
        {
          path: 'inner-antdv',
          name: 'document-inner-antdv',
          component: () => import('@/views/common/iframe/index.vue'),
          meta: {
            title: 'Ant Design Vue官方文档',
            iframeHref: 'https://antdv.com/components/overview-cn'
          }
        },
        {
          path: 'inner-vue',
          name: 'document-inner-vue',
          component: () => import('@/views/common/iframe/index.vue'),
          meta: {
            title: 'Vue.js官方文档',
            iframeHref: 'https://cn.vuejs.org'
          }
        },
        {
          path: 'inner-pinia',
          name: 'document-inner-pinia',
          component: () => import('@/views/common/iframe/index.vue'),
          meta: {
            title: 'Pinia官方文档',
            iframeHref: 'https://pinia.vuejs.org/zh/'
          }
        }
      ]
    }
  ]
} as RouteRecordRaw
