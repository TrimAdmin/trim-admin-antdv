import { RouteRecordRaw } from 'vue-router'
import { useI18nHook } from '@/hooks'

const { t } = useI18nHook()

export default {
  path: '/feature',
  name: 'feature',
  redirect: { name: 'feature-regex' },
  meta: {
    title: t('menu.feature.home'),
    icon: 'ant-design:thunderbolt-outlined',
    order: 6,
    i18n: 'menu.feature.home'
  },
  children: [
    {
      path: 'regex',
      name: 'feature-regex',
      component: () => import('@/views/feature/regex/index.vue'),
      meta: {
        title: t('menu.feature.regex'),
        icon: 'material-symbols:regular-expression',
        i18n: 'menu.feature.regex'
      }
    }
  ]
} as RouteRecordRaw
