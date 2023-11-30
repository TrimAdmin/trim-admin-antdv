<script lang="ts" setup>
import { headerHeight } from '@/hooks'
import { Key } from 'ant-design-vue/es/_util/type'
import { RouteRecordName } from 'vue-router'
import { useCommonStoreHook, useConfigStoreHook, useUserStoreHook } from '@/store'
import { ItemType } from 'ant-design-vue/es/menu/src/hooks/useItems'

const router = useRouter()
const collapsed = computed<boolean>(() => useConfigStoreHook().menuCollapsed)

// 系统标题
const title = computed<string>(() => import.meta.env.VITE_DOCUMENT_NAME)
// 菜单项
const menus = computed<Array<ItemType>>(() => useUserStoreHook().menuList)
// 默认选中的菜单
const defaultSelect = computed<Array<Key>>(() => [useCommonStoreHook().currentRouteName] as Array<Key>)
const openKeys = computed<Array<Key>>(() => useCommonStoreHook().currentOpenMenu)
// 侧边栏logo
const hideLogo = computed<boolean>(() => useConfigStoreHook().config.theme.hideLogo)
// 侧边栏暗色模式
const menuDarkMode = computed<boolean>(() => useConfigStoreHook().config.theme.menuDarkMode)

// 由于selected-keys是v-model 故没有直接监听defaultSelect 改为监听路由位置
watch(
  () => router.currentRoute.value.name,
  (newVal) => {
    useCommonStoreHook().setCurrentRouteName(newVal as string)
  }
)

// 菜单变化时
function handleMenuChange(key: RouteRecordName) {
  router.push({ name: key })
}
</script>

<template>
  <scroll-container class="max-h-screen overflow-hidden" :show-back-top="false">
    <div
      v-if="!hideLogo"
      :class="`sider-title ${
        menuDarkMode ? 'text-white' : ''
      } dark:text-white font-bold w-full flex items-center justify-center px-2`"
    >
      <img alt="logo" class="h-4/5 inline-block" src="@/assets/images/logo.png" />
      <span v-if="!collapsed" class="overflow-hidden text-ellipsis whitespace-nowrap text-[18px] ml-2">
        {{ title }}
      </span>
    </div>
    <a-menu
      :items="menus"
      :open-keys="!collapsed ? openKeys : []"
      :selected-keys="defaultSelect"
      :theme="menuDarkMode ? 'dark' : 'light'"
      mode="inline"
      class="ant-custom-menu-popup"
      @click="({ key }) => handleMenuChange(key as RouteRecordName)"
    ></a-menu>
  </scroll-container>
  <div class="sider-placeholder"></div>
</template>

<style lang="scss" scoped>
.sider-title {
  height: v-bind(headerHeight);
  line-height: v-bind(headerHeight);
}

.ant-menu {
  height: calc(100% - var(--t-header-height));
  border: none !important;
}
</style>
