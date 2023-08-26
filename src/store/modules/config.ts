import store from '..'
import router from '@/router'

interface IConfigStoreState {
  i18n: string
  darkTheme: boolean
}

const useConfigStore = defineStore('configStore', {
  state: (): IConfigStoreState => ({
    i18n: 'zhHans',
    darkTheme: false
  }),
  actions: {
    // 改变i18n语言
    setI18n(i18n: string) {
      if (i18n === this.i18n) {
        return
      }
      this.i18n = i18n
      router.go(0)
    },
    // 改变主题
    setDarkTheme(darkTheme: boolean) {
      this.darkTheme = darkTheme
    }
  },
  persist: [
    {
      key: 'trim-user-config',
      paths: ['i18n', 'darkTheme'],
      storage: localStorage
    }
  ]
})

export function useConfigStoreHook() {
  return useConfigStore(store)
}

export default useConfigStore
