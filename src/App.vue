<script lang="ts" setup>
import Layout from '@/layout/index.vue'
import zhCN from 'ant-design-vue/locale/zh_CN'
import zhTW from 'ant-design-vue/locale/zh_TW'
import enUS from 'ant-design-vue/locale/en_US'
import { RouterView } from 'vue-router'
import {
  brightYellowDarkTheme,
  brightYellowTheme,
  darkTheme,
  elementPlusDarkTheme,
  elementPlusTheme,
  energyOrangeDarkTheme,
  energyOrangeTheme,
  forestGreenDarkTheme,
  forestGreenTheme,
  lightTheme,
  tdesignDarkTheme,
  tdesignTheme
} from '@/theme'
import { useCommonStoreHook, useConfigStoreHook, useUserStoreHook } from '@/store'
import { setTrimConfig } from '@/hooks'
import trimConfig from '@/trim-config.ts'
import dayjs from 'dayjs'
import { theme } from 'ant-design-vue'

const antTheme = theme
const route = useRoute()
const router = useRouter()
const show = ref<boolean>(false)
const isDarkTheme = computed<boolean>(() => useConfigStoreHook().darkTheme)
const locale = computed(() => {
  switch (useConfigStoreHook().i18n) {
    case 'zh-Hans':
      dayjs.locale('zh-cn')
      return zhCN
    case 'zh-Hant':
      dayjs.locale('zh-tw')
      return zhTW
    case 'en-US':
      dayjs.locale('en')
      return enUS
    default:
      dayjs.locale('zh-cn')
      return zhCN
  }
})

// 亮色颜色模式
const colorScheme = computed(() => {
  switch (useConfigStoreHook().config.theme.colorScheme || trimConfig.theme.colorScheme) {
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
  switch (useConfigStoreHook().config.theme.colorScheme || trimConfig.theme.colorScheme) {
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
  setTrimConfig()
  // 刷新时跳转到刷新前的路由
  await router.push({ name: useCommonStoreHook().currentRouteName })
  useUserStoreHook().getMenuList()
  await nextTick(() => {
    show.value = true
  })
})
</script>

<template>
  <a-config-provider
    :auto-insert-space-in-button="false"
    :locale="locale"
    :theme="isDarkTheme ? { algorithm: antTheme.darkAlgorithm, ...darkColorScheme } : colorScheme"
  >
    <div v-if="show" class="relative h-full">
      <component :is="route.meta.noLayout ? RouterView : Layout" />
    </div>
    <div v-else class="w-screen h-screen flex-c">
      <loading loading />
    </div>
  </a-config-provider>
</template>

<style lang="scss" scoped></style>
