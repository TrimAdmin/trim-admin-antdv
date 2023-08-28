import { colorSchemeList } from '@/trim-config'

interface ITrimConfig {
  theme: ITrimConfigTheme
  defaultI18n: 'zhHans' | 'zhHant' | 'enUS'
}

interface IColorScheme {
  scheme: string
  primaryColor: string
  name: string
}

interface ITrimConfigTheme {
  headerHeight: string | number
  siderWidth: string | number
  siderWidthCollapse: string | number
  layout: 'normal' | 'mix' | 'top'
  colorScheme: (typeof colorSchemeList)[number]['scheme']
  hideTabs: boolean
  hideLogo: boolean
}
