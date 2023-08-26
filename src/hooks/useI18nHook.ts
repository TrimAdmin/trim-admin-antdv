import i18n from '@/i18n'

export function useI18nHook() {
  return <{ t: any }>i18n.global
}
