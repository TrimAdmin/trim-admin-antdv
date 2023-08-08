import persistedStatePlugin from 'pinia-plugin-persistedstate'

const store = createPinia()
store.use(persistedStatePlugin)

export default store

export * from './modules/user'
export * from './modules/config'
