<script lang="ts" setup>
import { headerHeight } from '@/hooks'
import { Key } from 'ant-design-vue/es/_util/type'
import { RouteRecordName } from 'vue-router'
import { useCommonStoreHook, useConfigStoreHook } from '@/store'
import { ItemType } from 'ant-design-vue/es/menu/src/hooks/useItems'
import { getChildRoutes, routesToMenu } from '@/router/utils.ts'

const router = useRouter()
const collapsed = computed<boolean>(() => useConfigStoreHook().menuCollapsed)
const props = defineProps<{
  parentMenu: string
}>()

// 菜单项
const menus = ref<Array<ItemType>>()
// 默认选中的菜单
const defaultSelect = computed<Array<Key>>(() => [useCommonStoreHook().currentRouteName] as Array<Key>)
const openKeys = computed<Array<Key>>(() => useCommonStoreHook().currentOpenMenu)
// 菜单暗色模式
const menuDarkMode = computed<boolean>(() => useConfigStoreHook().config.theme.menuDarkMode)

// 由于selected-keys是v-model 故没有直接监听defaultSelect 改为监听路由位置
watch(
  () => router.currentRoute.value.name,
  (newVal) => {
    useCommonStoreHook().setCurrentRouteName(newVal as string)
  }
)

watch(
  () => props.parentMenu,
  (newVal: string) => {
    // console.log(newVal)
    useCommonStoreHook().setCurrentOpenMenu([newVal])
    menus.value = routesToMenu(getChildRoutes(newVal))
    if (!menus.value.length) {
      router.push({ name: newVal })
    }
  },
  {
    immediate: true
  }
)

// 菜单变化时
function handleMenuChange(key: RouteRecordName) {
  router.push({ name: key })
}
</script>

<template>
  <div>
    <a-menu
      v-if="menus"
      :items="menus"
      :open-keys="openKeys"
      :selected-keys="defaultSelect"
      :theme="menuDarkMode ? 'dark' : 'light'"
      mode="inline"
      @click="({ key }) => handleMenuChange(key as RouteRecordName)"
    ></a-menu>
    <div v-else>暂无数据</div>
    <div class="sider-placeholder"></div>
  </div>
</template>

<style lang="scss" scoped>
.sider-title {
  height: v-bind(headerHeight);
  line-height: v-bind(headerHeight);
}

.ant-menu {
  height: calc(100% - var(--t-header-height));
}
</style>
