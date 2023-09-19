import { RouteRecordRaw } from 'vue-router'
import { useI18nHook } from '@/hooks'

const { t } = useI18nHook()
export default {
  path: '/forms',
  name: 'forms',
  redirect: { name: 'forms-basic' },
  meta: {
    title: t('menu.forms.home'),
    icon: 'ant-design:form-outlined',
    i18n: 'menu.forms.home'
  },
  children: [
    {
      path: 'basic',
      name: 'forms-basic',
      component: () => import('@/views/forms/basic/index.vue'),
      meta: {
        title: t('menu.forms.basic'),
        i18n: 'menu.forms.basic',
        keepAlive: true
      }
    },
    {
      path: 'advanced',
      name: 'forms-advanced',
      component: () => import('@/views/forms/advanced/index.vue'),
      meta: {
        title: t('menu.forms.advanced'),
        i18n: 'menu.forms.advanced',
        keepAlive: true
      }
    },
    {
      path: 'step',
      name: 'forms-step',
      component: () => import('@/views/forms/step/index.vue'),
      meta: {
        title: t('menu.forms.step'),
        i18n: 'menu.forms.step',
        keepAlive: true
      }
    }
  ]
} as RouteRecordRaw
