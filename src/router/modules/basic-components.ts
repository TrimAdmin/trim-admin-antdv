import { RouteRecordRaw } from 'vue-router'
import { useI18nHook } from '@/hooks'

const { t } = useI18nHook()

export default {
  path: '/basic-components',
  name: 'basic-components',
  redirect: { name: 'basic-components-button' },
  meta: {
    title: t('menu.basic-components.home'),
    icon: 'ant-design:appstore-outlined',
    order: 3,
    i18n: 'menu.basic-components.home'
  },
  children: [
    {
      path: 'button',
      name: 'basic-components-button',
      component: () => import('@/views/basic-components/button/index.vue'),
      meta: {
        title: t('menu.basic-components.button'),
        i18n: 'menu.basic-components.button'
      }
    },
    {
      path: 'radio',
      name: 'basic-components-radio',
      component: () => import('@/views/basic-components/radio/index.vue'),
      meta: {
        title: t('menu.basic-components.radio'),
        i18n: 'menu.basic-components.radio'
      }
    },
    {
      path: 'checkbox',
      name: 'basic-components-checkbox',
      component: () => import('@/views/basic-components/checkbox/index.vue'),
      meta: {
        title: t('menu.basic-components.checkbox'),
        i18n: 'menu.basic-components.checkbox'
      }
    },
    {
      path: 'input',
      name: 'basic-components-input',
      component: () => import('@/views/basic-components/input/index.vue'),
      meta: {
        title: t('menu.basic-components.input'),
        i18n: 'menu.basic-components.input'
      }
    },
    {
      path: 'select',
      name: 'basic-components-select',
      component: () => import('@/views/basic-components/select/index.vue'),
      meta: {
        title: t('menu.basic-components.select'),
        i18n: 'menu.basic-components.select'
      }
    }
  ]
} as RouteRecordRaw
