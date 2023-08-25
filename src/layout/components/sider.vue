<script setup lang="ts">
import { useTrimConfig } from '@/hooks'
import { Key } from 'ant-design-vue/es/_util/type'
import { ItemType } from 'ant-design-vue'
import { RouteRecordName } from 'vue-router'
import { useCommonStoreHook, useUserStoreHook } from '@/store'

const router = useRouter()

// 系统标题
const title = computed<string>(() => import.meta.env.VITE_DOCUMENT_NAME)
// 标题高度
const headerHeight = computed<string | number>(() =>
  typeof useTrimConfig().theme.headerHeight === 'string' ? useTrimConfig().theme.headerHeight : useTrimConfig().theme.headerHeight + 'px'
)
// 菜单
const menus = computed<Array<ItemType>>(() => useUserStoreHook().menuList)
// 默认选中的菜单
const defaultSelect = computed<Array<Key>>(() => [useCommonStoreHook().currentRouteName] as Array<Key>)

// 由于selected-keys是v-model 故没有直接监听defaultSelect 改为监听路由位置
watch(
  () => router.currentRoute.value.name,
  (newVal) => {
    useCommonStoreHook().setCurrentRouteName(newVal as string)
  }
)

// 菜单变化时
function handleMenuChange({ key }: { key: RouteRecordName }) {
  router.push({ name: key })
}

// 刷新时跳转到刷新前的路由
router.push({ name: useCommonStoreHook().currentRouteName })
</script>

<template>
  <div class="sider-title"><img src="@/assets/images/logo.png" alt="logo" class="h-4/5 mr-2 inline-block" />{{ title }}</div>
  <a-menu :selected-keys="defaultSelect" mode="inline" :items="menus" @click="handleMenuChange"></a-menu>
</template>

<style scoped lang="scss">
.sider-title {
  height: v-bind(headerHeight);
  line-height: v-bind(headerHeight);
  width: 100%;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.ant-menu {
  height: calc(100% - var(--t-header-height));
}
</style>
