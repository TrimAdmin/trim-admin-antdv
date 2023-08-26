import { Router } from 'vue-router'
import { useCommonStoreHook, useUserStoreHook } from '@/store'
import { message } from '@/utils'
import pluginNProgress from '@/plugins/nprogress.ts'

const routerInterceptor = (router: Router) => {
  router.beforeEach((to, from, next) => {
    pluginNProgress.start()
    // 设置文档标题
    if (to.meta.title) {
      useTitle(to.meta.title + ' - ' + import.meta.env.VITE_DOCUMENT_NAME)
    } else {
      useTitle(import.meta.env.VITE_DOCUMENT_NAME)
    }
    // 登录判断逻辑
    if (!to.meta.publicRoute && !useUserStoreHook().isLogged) {
      message.error('未登录或登录过期')
      next({ name: 'login' })
    } else if (useUserStoreHook().isLogged && to.name === 'login') {
      message.info('您已经登录过了')
      pluginNProgress.done()
      next({ name: from.name as string })
    } else {
      next()
      useCommonStoreHook().addTab({
        key: to.name as string,
        title: to.meta.title,
        tabAffix: to.meta.tabAffix || false
      })
    }
  })

  router.afterEach(async () => {
    await router.isReady()
    pluginNProgress.done()
  })
}

export default routerInterceptor
