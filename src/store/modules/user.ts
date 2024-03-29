import { cryptoMD5 } from '@/utils'
import store, { useCommonStoreHook } from '..'
import router from '@/router'
import { ItemType } from 'ant-design-vue'
import { generateMenus } from '@/router/utils.ts'
import { useToast } from '@/hooks'

interface IUserStoreState {
  isLogged: boolean
  token: string
  remember: boolean
  menuList: Array<ItemType>
  userInfo: IUserInfo
}

const useUserStore = defineStore('userStore', {
  state: (): IUserStoreState => ({
    isLogged: false,
    token: '',
    remember: false,
    menuList: [],
    userInfo: {} as IUserInfo
  }),
  actions: {
    // 登录逻辑
    async login(params: IUsernameLoginParams) {
      // 这里编写你自己的逻辑
      if (params.username !== 'admin' || params.password !== cryptoMD5('123456')) {
        useToast().message.error('用户名或密码错误')
        return
      }
      if (params.remember) {
        this.remember = true
      }
      this.isLogged = true
      this.token = cryptoMD5('access-token')
      useToast().message.success('登录成功')
      this.setUserInfo({
        username: 'admin',
        email: 'w729567588@163.com',
        roleName: '超级管理员',
        avatar: 'http://img.dcwedu.top/i/2023/08/14/64d9ed0eafb95.jpg'
      })
      await router.replace({ name: 'home' })
      useCommonStoreHook().setCurrentRouteName('home')
    },
    // 判断登录状态
    async checkLogged() {
      // 这里编写你自己的逻辑
      if (this.remember) {
        // 推荐这里编写无感刷新token逻辑
        this.isLogged = true
      }
      if (this.token) {
        // 这里判断token是否有效
        this.isLogged = true
        this.setUserInfo({
          username: 'admin',
          email: 'w729567588@163.com',
          roleName: '超级管理员',
          avatar: 'http://img.dcwedu.top/i/2023/08/14/64d9ed0eafb95.jpg'
        })
        await router.replace({ name: 'home' })
        return
      }
    },
    // 登出逻辑
    async logout() {
      this.token = ''
      this.isLogged = false
      useCommonStoreHook().clearTabs()
      await router.replace({ name: 'login' })
    },
    // 获取菜单
    getMenuList() {
      this.menuList = generateMenus()
      console.log('菜单项：', this.menuList)
    },
    // 设置用户信息
    setUserInfo(info: IUserInfo) {
      this.userInfo = info
    }
  },
  persist: [
    {
      key: 'trim-token',
      paths: ['token'],
      storage: localStorage
    },
    {
      key: 'trim-remember',
      paths: ['remember'],
      storage: localStorage
    },
    {
      key: 'trim-menu-list',
      paths: ['menuList'],
      storage: sessionStorage
    }
  ]
})

export function useUserStoreHook() {
  return useUserStore(store)
}

export default useUserStore
