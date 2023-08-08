import { createI18n } from 'vue-i18n'
import zhHans from './locales/zhHans.json'
import zhHant from './locales/zhHant.json'
import enUS from './locales/enUS.json'
import { MessageSchema } from '@/types/i18n'

const messages = {
  enUS: { ...enUS },
  zhHans: { ...zhHans },
  zhHant: { ...zhHant }
}

const i18n = createI18n<MessageSchema, 'enUS' | 'zhHans' | 'zhHant'>({
  legacy: false,
  locale: JSON.parse(localStorage.getItem('user-config') || '{}').i18n || 'zhHans',
  messages,
  fallbackLocale: 'zh'
})

export default i18n
