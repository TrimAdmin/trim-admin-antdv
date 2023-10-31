import { MapToken } from 'ant-design-vue/es/theme/interface'
import store from '@/store'
import { camelToSnakeCase } from '@/utils'

interface IColorTokenStoreState {
  colorToken: MapToken
}

const useColorTokenStore = defineStore('colorToken', {
  state: (): IColorTokenStoreState => ({
    colorToken: {} as MapToken
  }),
  actions: {
    setColorToken(token: MapToken) {
      this.colorToken = token
      // console.log(token)
      Object.entries(this.colorToken).map(([key, value]) => {
        if (!key.includes('color')) return
        document.documentElement.style.setProperty(`--antdv-${camelToSnakeCase(key)}`, value.toString())
      })
    }
  }
})

export function useColorTokenStoreHook() {
  return useColorTokenStore(store)
}

export default useColorTokenStore
