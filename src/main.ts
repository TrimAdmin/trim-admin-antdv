import { createApp } from 'vue'
import './style/index.scss'
import 'ant-design-vue/dist/reset.css'
import 'overlayscrollbars/overlayscrollbars.css'
import 'animate.css'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import i18n from '@/i18n'
import { useTable } from '@/plugins'
import 'uno.css'
import 'virtual:unocss-devtools'
import { setupDirectives } from '@/directives'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(i18n)
app.use(useTable)
setupDirectives(app)
app.mount('#app')
