<script setup lang="ts">
import Layout from '@/layout/normal.vue'
import zhCN from 'ant-design-vue/locale/zh_CN'
import zhTW from 'ant-design-vue/locale/zh_TW'
import enUS from 'ant-design-vue/locale/en_US'
import { RouterView } from 'vue-router'
import { useAutoAnimate } from '@formkit/auto-animate/vue'
import {
  lightTheme,
  darkTheme,
  elementPlusTheme,
  tdesignTheme,
  forestGreenTheme,
  elementPlusDarkTheme,
  tdesignDarkTheme,
  forestGreenDarkTheme,
  brightYellowTheme,
  brightYellowDarkTheme,
  energyOrangeTheme,
  energyOrangeDarkTheme
} from '@/theme'
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

// 亮色颜色模式
const colorScheme = computed(() => {
  switch (useConfigStoreHook().colorScheme) {
    case 'antd':
      return lightTheme
    case 'element':
      return elementPlusTheme
    case 'tdesign':
      return tdesignTheme
    case 'forest-green':
      return forestGreenTheme
    case 'bright-yellow':
      return brightYellowTheme
    case 'energy-orange':
      return energyOrangeTheme
    default:
      break
  }
})

// 暗色颜色模式
const darkColorScheme = computed(() => {
  switch (useConfigStoreHook().colorScheme) {
    case 'antd':
      return darkTheme
    case 'element':
      return elementPlusDarkTheme
    case 'tdesign':
      return tdesignDarkTheme
    case 'forest-green':
      return forestGreenDarkTheme
    case 'bright-yellow':
      return brightYellowDarkTheme
    case 'energy-orange':
      return energyOrangeDarkTheme
    default:
      break
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
    <a-config-provider :locale="locale" :theme="isDarkTheme ? { algorithm: theme.darkAlgorithm, ...darkColorScheme } : colorScheme">
      <keep-alive v-if="route.meta.keepAlive">
        <component :is="route.meta.noLayout ? RouterView : Layout" />
      </keep-alive>
      <component :is="route.meta.noLayout ? RouterView : Layout" v-else />
    </a-config-provider>
  </div>
  <Loading v-else />
</template>

<style scoped lang="scss"></style>
