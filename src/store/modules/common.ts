import store from '..'

interface ICommonStoreState {
  loading: boolean
}

const useCommonStore = defineStore('commonStore', {
  state: (): ICommonStoreState => ({
    loading: false
  }),
  actions: {
    setLoading(value: boolean) {
      this.loading = value
    }
  }
})

export function useCommonStoreHook() {
  return useCommonStore(store)
}

export default useCommonStore
