<script lang="ts" setup>
import { ItemType, Modal } from 'ant-design-vue'
import { headerHeight, useIcon } from '@/hooks'
import { Key } from 'ant-design-vue/lib/_util/type'
import { useUserStoreHook } from '@/store'
import MenuCollapse from './header/menu-collapse/index.vue'
import GlobalSearch from './header/global-search/index.vue'
import Refresh from './header/refresh/index.vue'
import FullScreen from './header/full-screen/index.vue'
import ToggleTheme from './header/toggle-theme/index.vue'
import ConfigDrawer from './header/config-drawer/index.vue'
import Breadcrumbs from './header/breadcrumbs/index.vue'

const router = useRouter()
const username = computed<string>(() => useUserStoreHook().userInfo.username)
const avatar = computed<string>(() => useUserStoreHook().userInfo.avatar || '')

const dropdownMenuItems = reactive<Array<ItemType>>([
  {
    label: '首页',
    title: '首页',
    key: 'home',
    icon: useIcon('ant-design:home-outlined')
  },
  {
    label: '个人中心',
    title: '个人中心',
    key: 'user-info',
    icon: useIcon('ant-design:user-outlined')
  },
  {
    type: 'divider'
  },
  {
    label: '退出登录',
    title: '退出登录',
    key: 'logout',
    icon: useIcon('ant-design:logout-outlined')
  }
])

function handleDropdown(key: Key) {
  switch (key) {
    case 'home':
      router.push({ name: 'home' })
      break
    case 'user-info':
      break
    case 'logout':
      Modal.confirm({
        title: '提示',
        content: '确定退出登录吗？',
        okText: '确定',
        centered: true,
        maskClosable: true,
        onOk: () => {
          useUserStoreHook().logout()
        }
      })
      break
    default:
      break
  }
}
</script>

<template>
  <div class="normal-header h-full flex justify-between items-center px-4">
    <div class="flex-c h-full">
      <!-- 菜单折叠按钮 -->
      <MenuCollapse />
      <!-- 面包屑 -->
      <Breadcrumbs class="ml-2" />
    </div>
    <!-- 右侧菜单 -->
    <div class="flex items-center h-full">
      <!-- 搜索 -->
      <GlobalSearch />
      <!-- 切换语言 -->
      <SwitchLanguage class="h-full" />
      <!-- 全屏 -->
      <FullScreen />
      <!-- 主题 -->
      <ToggleTheme />
      <!-- 刷新 -->
      <Refresh />
      <!-- 全局设置 -->
      <ConfigDrawer />
      <!-- 用户下拉框 -->
      <a-dropdown arrow class="cursor-pointer ml-2" placement="bottom">
        <div class="flex items-center gap-1">
          <a-avatar :src="avatar" size="small">
            <template #icon>
              <Icon class="cursor-pointer mt-[4px]" icon="ant-design:user-outlined" inline />
            </template>
          </a-avatar>
          <span class="text-gray-700 dark:text-white leading-[1]">{{ username }}</span>
          <Icon
            class="cursor-pointer text-[12px] text-gray-500 dark:text-gray-300"
            icon="ant-design:caret-down-filled"
          />
        </div>
        <template #overlay>
          <a-menu :items="dropdownMenuItems" @click="({ key }) => handleDropdown(key)" />
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.normal-header {
  height: v-bind(headerHeight);
  outline: 1px solid rgb(100 100 100 / 10%);
}
</style>
