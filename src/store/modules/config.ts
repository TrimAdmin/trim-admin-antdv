import store from '..'
import router from '@/router'
import { ITrimConfig } from '@/types/trim-config'
import { colorSchemeList, layoutList, routeAnimateList } from '@/constants'

interface IConfigStoreState {
  i18n: ITrimConfig['defaultI18n']
  darkTheme: boolean
  menuCollapsed: boolean
  config: ITrimConfig
}

const useConfigStore = defineStore('configStore', {
  state: (): IConfigStoreState => ({
    i18n: 'zh-Hans',
    darkTheme: false,
    config: {} as ITrimConfig,
    menuCollapsed: false
  }),
  actions: {
    // 改变i18n语言
    setI18n(i18n: ITrimConfig['defaultI18n']) {
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
    // 改变配色方案
    setColorScheme(colorScheme: (typeof colorSchemeList)[number]['scheme']) {
      this.config.theme.colorScheme = colorScheme
    },
    // 更新路由动画
    setRouteAnimate(animate: (typeof routeAnimateList)[number]['value']) {
      this.config.theme.routeAnimate = animate
    },
    // 更改页面布局
    setLayout(layout: (typeof layoutList)[number]['value']) {
      this.config.theme.layout = layout
    },
    // 更新配置 更新单个配置时请使用上面的方法单独更新
    setConfig(config: ITrimConfig) {
      this.config = config
    }
  },
  persist: [
    {
      key: 'trim-user-config',
      paths: ['i18n', 'darkTheme', 'menuCollapsed', 'config'],
      storage: localStorage
    }
  ]
})

export function useConfigStoreHook() {
  return useConfigStore(store)
}

export default useConfigStore
