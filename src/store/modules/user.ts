import store from '@/store'
import router from '@/router'

interface IUserStoreState {
  isLogged: boolean
  token: string
}

const useUserStore = defineStore('userStore', {
  state: (): IUserStoreState => ({
    isLogged: false,
    token: ''
  }),
  actions: {
    login() {
      this.isLogged = true
      router.replace({ name: 'home' })
    }
  },
  persist: [
    {
      key: 'token',
      paths: ['token'],
      storage: localStorage
    }
  ]
})

export function useUserStoreHook() {
  return useUserStore(store)
}

export default useUserStore