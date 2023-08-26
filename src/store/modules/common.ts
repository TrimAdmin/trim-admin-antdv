import router from '@/router'
import store from '..'

interface ICommonStoreState {
  loading: boolean
  refreshing: boolean
  currentRouteName: string
  tabsList: Array<ITabObject>
}

export interface ITabObject {
  key: string
  title: string
  tabAffix: boolean
}

const useCommonStore = defineStore('commonStore', {
  state: (): ICommonStoreState => ({
    loading: false,
    refreshing: false,
    currentRouteName: 'home',
    tabsList: []
  }),
  actions: {
    // 设置loading状态
    setLoading(value: boolean) {
      this.loading = value
    },
    // 设置当前激活的路由name
    setCurrentRouteName(name: string) {
      this.currentRouteName = name
    },
    // 刷新路由
    refreshRoute() {
      this.refreshing = true
      nextTick(() => {
        this.refreshing = false
      })
    },
    // 新增标签
    addTab(tab: ITabObject) {
      if (this.tabsList.findIndex((item) => item.key === tab.key) > -1) return
      this.tabsList.push(tab)
    },
    // 关闭标签
    removeTab(key: string) {
      const index = this.tabsList.findIndex((item) => item.key === key)
      this.tabsList.splice(index, 1)
      if (this.currentRouteName === key) {
        this.currentRouteName = this.tabsList[index - 1].key
        router.push({ name: this.tabsList[index - 1].key })
      }
    }
  },
  persist: [
    {
      key: 'trim-current-route-name',
      paths: ['currentRouteName'],
      storage: sessionStorage
    },
    {
      key: 'trim-tabs-list',
      paths: ['tabsList'],
      storage: sessionStorage
    }
  ]
})

export function useCommonStoreHook() {
  return useCommonStore(store)
}

export default useCommonStore
