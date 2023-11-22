import { Router } from 'vue-router'
import { useCommonStoreHook, useUserStoreHook } from '@/store'
import pluginNProgress from '@/plugins/nprogress.ts'
import { useMessage } from '@/hooks'

const routerInterceptor = (router: Router) => {
  router.beforeEach((to, from, next) => {
    pluginNProgress.start()
    // 判断是否存在外链
    if (to.meta.href) {
      window.open(to.meta.href, '_blank')
      next({ name: from.name as string })
      return
    }
    // 设置文档标题
    if (to.meta.title) {
      useTitle(to.meta.title + ' - ' + import.meta.env.VITE_DOCUMENT_NAME)
    } else {
      useTitle(import.meta.env.VITE_DOCUMENT_NAME)
    }
    // 登录判断逻辑
    if (!to.meta.publicRoute && !useUserStoreHook().isLogged) {
      useMessage().message.error('未登录或登录过期')
      next({ name: 'login' })
    }
    // 已经登录，返回上一级
    if (useUserStoreHook().isLogged && to.name === 'login') {
      useMessage().message.info('您已经登录过了')
      pluginNProgress.done()
      next({ name: from.name as string })
    }
    // 加入keep-alive列表
    if (to.meta.keepAlive) {
      useCommonStoreHook().addKeepAliveItem(to.name!.toString())
    }
    // 新增tab
    useCommonStoreHook().addTab({
      key: to.name as string,
      title: to.meta.title,
      query: to.query,
      tabAffix: to.meta.tabAffix || false,
      i18n: to.meta.i18n,
      hideTab: to.meta.hideTab || false,
      icon: to.matched[to.matched.length - 1].meta.icon || undefined
    })
    next()
  })

  router.afterEach(async () => {
    await router.isReady()
    pluginNProgress.done()
  })
}

export default routerInterceptor
