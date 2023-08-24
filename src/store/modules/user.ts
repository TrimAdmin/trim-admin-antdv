import { cryptoMD5, message } from '@/utils'
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
      if (params.username !== 'admin' || params.password !== cryptoMD5('123456')) {
        message.error('用户名或密码错误')
        return
      }
      if (params.remember) {
        // 推荐这里编写无感刷新token逻辑
      }
      this.isLogged = true
      this.token = cryptoMD5('access-token')
      message.success('登录成功')
      await router.replace({ name: 'home' })
    },
    // 判断登录状态
    async checkLogged() {
      // 这里编写你自己的逻辑
      if (this.token) {
        this.isLogged = true
        await router.replace({ name: 'home' })
        return
      }
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
