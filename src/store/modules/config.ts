import store from '@/store'
import router from '@/router'

interface IConfigStoreState {
  i18n: string
}

const useConfigStore = defineStore('configStore', {
  state: (): IConfigStoreState => ({
    i18n: 'zhHans'
  }),
  actions: {
    setI18n(i18n: string) {
      if (i18n === this.i18n) {
        return
      }
      this.i18n = i18n
      router.go(0)
    }
  },
  persist: [
    {
      key: 'user-config',
      paths: ['i18n'],
      storage: localStorage
    }
  ]
})

export function useConfigStoreHook() {
  return useConfigStore(store)
}

export default useConfigStore
