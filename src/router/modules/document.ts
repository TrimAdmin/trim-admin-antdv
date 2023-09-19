import { RouteRecordRaw } from 'vue-router'
import { useI18nHook } from '@/hooks'

const { t } = useI18nHook()

export default {
  path: '/document',
  name: 'document',
  redirect: { name: 'document-antdv' },
  meta: {
    title: t('menu.document.document'),
    i18n: 'menu.document.document',
    icon: 'ant-design:profile-outlined',
    order: 100
  },
  children: [
    {
      path: 'external-links',
      name: 'document-external-links',
      meta: {
        title: t('menu.document.external-links'),
        i18n: 'menu.document.external-links'
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
        title: t('menu.document.inner-iframe'),
        i18n: 'menu.document.inner-iframe'
      },
      children: [
        {
          path: 'inner-antdv',
          name: 'document-inner-antdv',
          component: () => import('@/views/common/iframe/index.vue'),
          meta: {
            title: 'Ant Design Vue',
            iframeHref: 'https://antdv.com/components/overview-cn',
            i18n: ''
          }
        },
        {
          path: 'inner-vue',
          name: 'document-inner-vue',
          component: () => import('@/views/common/iframe/index.vue'),
          meta: {
            title: 'Vue.js',
            iframeHref: 'https://cn.vuejs.org',
            i18n: ''
          }
        },
        {
          path: 'inner-pinia',
          name: 'document-inner-pinia',
          component: () => import('@/views/common/iframe/index.vue'),
          meta: {
            title: 'Pinia',
            iframeHref: 'https://pinia.vuejs.org/zh/',
            i18n: ''
          }
        }
      ]
    }
  ]
} as RouteRecordRaw
