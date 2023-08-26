<script setup lang="ts">
import Layout from '@/layout/index.vue'
import zhCN from 'ant-design-vue/locale/zh_CN'
import zhTW from 'ant-design-vue/locale/zh_TW'
import enUS from 'ant-design-vue/locale/en_US'
import { RouterView } from 'vue-router'
import { useAutoAnimate } from '@formkit/auto-animate/vue'
import lightTheme from '@/theme/light-theme'
import darkTheme from '@/theme/dark-theme'
import { useCommonStoreHook, useConfigStoreHook, useUserStoreHook } from '@/store'
import { theme } from 'ant-design-vue'

const route = useRoute()
const router = useRouter()
const show = ref<boolean>(false)
const isDarkTheme = computed(() => useConfigStoreHook().darkTheme)
const locale = computed(() => {
  switch (useConfigStoreHook().i18n) {
    case 'zhHans':
      return zhCN
    case 'zhHant':
      return zhTW
    case 'enUS':
      return enUS
    default:
      return zhCN
  }
})

const [animated] = useAutoAnimate()

// 监听是否暗色模式 给html添加dark类 与tailwind同步
watch(
  () => useConfigStoreHook().darkTheme,
  (newVal) => {
    const htmlClass = document.getElementsByTagName('html')[0].classList
    if (newVal) {
      htmlClass.add('dark')
    } else {
      htmlClass.remove('dark')
    }
  },
  {
    immediate: true
  }
)

useUserStoreHook().checkLogged()
router.isReady().then(async () => {
  console.log('当前环境：' + import.meta.env.MODE)
  // 刷新时跳转到刷新前的路由
  await router.push({ name: useCommonStoreHook().currentRouteName })
  useUserStoreHook().getMenuList()
  await nextTick(() => {
    show.value = true
  })
})
</script>

<template>
  <div v-if="show" ref="animated" class="relative h-full">
    <a-config-provider :locale="locale" :theme="isDarkTheme ? { algorithm: theme.darkAlgorithm, ...darkTheme } : lightTheme">
      <keep-alive v-if="route.meta.keepAlive">
        <component :is="route.meta.noLayout ? RouterView : Layout" />
      </keep-alive>
      <component :is="route.meta.noLayout ? RouterView : Layout" v-else />
    </a-config-provider>
  </div>
  <Loading v-else />
</template>

<style scoped lang="scss"></style>
