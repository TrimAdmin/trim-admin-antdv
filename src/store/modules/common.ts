import store from '..'

interface ICommonStoreState {
  loading: boolean
  currentRouteName: string
}

const useCommonStore = defineStore('commonStore', {
  state: (): ICommonStoreState => ({
    loading: false,
    currentRouteName: 'home'
  }),
  actions: {
    // 设置loading状态
    setLoading(value: boolean) {
      this.loading = value
    },
    // 设置当前激活的路由name
    setCurrentRouteName(name: string) {
      this.currentRouteName = name
    }
  },
  persist: [
    {
      key: 'trim-current-route-name',
      paths: ['currentRouteName'],
      storage: sessionStorage
    }
  ]
})

export function useCommonStoreHook() {
  return useCommonStore(store)
}

export default useCommonStore
