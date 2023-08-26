import i18n from '@/i18n'

export function useI18nHook() {
  console.log(i18n.global.t('menu.home'))

  return <{ t: any }>i18n.global
}
