import { colorSchemeList } from '@/trim-config'
import store from '..'
import router from '@/router'
import { ITrimConfig } from '@/types/trim-config'

interface IConfigStoreState {
  i18n: 'zhHans' | 'zhHant' | 'enUS'
  darkTheme: boolean
  menuCollapsed: boolean
  hideTabs: boolean
  hideLogo: boolean
  colorScheme: (typeof colorSchemeList)[number]['scheme']
}

const useConfigStore = defineStore('configStore', {
  state: (): IConfigStoreState => ({
    i18n: 'zhHans',
    darkTheme: false,
    menuCollapsed: false,
    hideTabs: false,
    hideLogo: false,
    colorScheme: 'antd'
  }),
  actions: {
    // 改变i18n语言
    setI18n(i18n: 'zhHans' | 'zhHant' | 'enUS') {
      if (i18n === this.i18n) {
        return
      }
      this.i18n = i18n
      router.go(0)
    },
    // 改变主题
    setDarkTheme(darkTheme: boolean) {
      this.darkTheme = darkTheme
    },
    // 改变菜单收缩
    setMenuCollapsed(collapsed: boolean) {
      this.menuCollapsed = collapsed
    },
    // 隐藏标签页
    setHideTabs(hide: boolean) {
      this.hideTabs = hide
    },
    // 隐藏logo
    setHideLogo(hide: boolean) {
      this.hideLogo = hide
    },
    // 改变配色方案
    setColorScheme(colorScheme: string) {
      this.colorScheme = colorScheme
    },
    // 更新配置
    setConfig(config: ITrimConfig) {
      this.colorScheme = config.theme.colorScheme
      this.i18n = config.defaultI18n
      this.hideLogo = config.theme.hideLogo
      this.hideTabs = config.theme.hideTabs
    }
  },
  persist: [
    {
      key: 'trim-user-config',
      paths: ['i18n', 'darkTheme', 'menuCollapsed', 'hideTabs', 'colorScheme'],
      storage: localStorage
    }
  ]
})

export function useConfigStoreHook() {
  return useConfigStore(store)
}

export default useConfigStore
