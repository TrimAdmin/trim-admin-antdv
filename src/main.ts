import { createApp } from 'vue'
import './style/index.scss'
import 'ant-design-vue/dist/reset.css'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import { message } from 'ant-design-vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
message.config({})
