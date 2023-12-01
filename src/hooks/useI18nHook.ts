import i18n from '@/i18n'

// 详见：https://vue-i18n.intlify.dev/guide/advanced/composition.html
export function useI18nHook() {
  return <{ t: any }>i18n.global
}
