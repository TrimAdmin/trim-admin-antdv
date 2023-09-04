import router from '@/router'
import store from '..'
import { getParentRoutes } from '@/router/utils.ts'

interface ICommonStoreState {
  loading: boolean
  refreshing: boolean
  currentRouteName: string
  currentOpenMenu: Array<string>
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
    currentOpenMenu: [''],
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
      this.currentOpenMenu = getParentRoutes(name).map((item) => item.name) as Array<string>
    },
    // 设置当前打开的菜单
    setCurrentOpenMenu(list: Array<string>) {
      this.currentOpenMenu = list
    },
    // 刷新路由
    refreshRoute() {
      this.refreshing = true
      setTimeout(() => {
        this.refreshing = false
      }, 100)
    },
    // 新增标签
    addTab(tab: ITabObject) {
      if (this.tabsList.findIndex((item) => item.key === tab.key) > -1 || tab.key === 'login') return
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
    },
    // 关闭其他标签页
    removeOtherTabs(key: string) {
      this.tabsList = this.tabsList.filter((item) => item.tabAffix || item.key === key)
      this.currentRouteName = this.tabsList[this.tabsList.length - 1].key
      router.push({ name: this.tabsList[this.tabsList.length - 1].key })
    },
    // 关闭左侧标签页
    removeLeftTabs(key: string) {
      const index = this.tabsList.findIndex((item) => item.key === key)
      this.tabsList = this.tabsList.filter((item, i) => i >= index || item.tabAffix)
      if (this.currentRouteName !== key) {
        this.currentRouteName = this.tabsList[index - 1].key
        router.push({ name: this.tabsList[index - 1].key })
      } else {
        this.currentRouteName = this.tabsList[this.tabsList.length - 1].key
        router.push({ name: this.tabsList[this.tabsList.length - 1].key })
      }
    },
    // 关闭右侧标签页
    removeRightTabs(key: string) {
      const index = this.tabsList.findIndex((item) => item.key === key)
      this.tabsList = this.tabsList.filter((item, i) => i <= index || item.tabAffix)
      if (this.currentRouteName !== key) {
        this.currentRouteName = this.tabsList[index].key
        router.push({ name: this.tabsList[index].key })
      } else {
        this.currentRouteName = this.tabsList[index - 1].key
        router.push({ name: this.tabsList[index - 1].key })
      }
    },
    // 关闭所有标签页
    closeAllTabs() {
      this.tabsList = this.tabsList.filter((item) => item.tabAffix)
      this.currentRouteName = this.tabsList[0].key
      router.push({ name: this.tabsList[0].key })
    }
  },
  persist: [
    {
      key: 'trim-current-route',
      paths: ['currentRouteName', 'currentOpenMenu'],
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
