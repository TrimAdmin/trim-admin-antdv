import { message } from '@/utils'
import store from '..'
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
    // 登录逻辑
    async login(params: IUsernameLoginParams) {
      // 这里编写你自己的逻辑
      if (params.username !== 'admin' || params.password !== '123456') {
        message.error('用户名或密码错误')
        return
      }
      if (params.remember) {
      }
      this.isLogged = true
      await router.replace({ name: 'home' })
    },
    // 登出逻辑
    async logout() {
      this.token = ''
      this.isLogged = false
      await router.replace({ name: 'login' })
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
