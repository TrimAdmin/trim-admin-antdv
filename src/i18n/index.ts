import { createI18n } from 'vue-i18n'
import zhHans from './locales/zhHans.json'
import zhHant from './locales/zhHant.json'
import enUS from './locales/enUS.json'
import { MessageSchema } from '@/types/i18n'
import { i18nList } from '@/trim-config.ts'

const messages = {
  'en-US': { ...enUS },
  'zh-Hans': { ...zhHans },
  'zh-Hant': { ...zhHant }
}

const i18n = createI18n<MessageSchema, (typeof i18nList)[number]>({
  legacy: false,
  locale: JSON.parse(localStorage.getItem('trim-user-config') || '{}').i18n || 'zh-Hans',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  messages,
  fallbackLocale: 'zh'
})

export default i18n
