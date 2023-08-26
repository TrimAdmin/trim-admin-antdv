<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ItemType, Modal } from 'ant-design-vue'
import { useIcon } from '@/hooks'
import { Key } from 'ant-design-vue/lib/_util/type'
import { useUserStoreHook } from '@/store'

const router = useRouter()

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
  <div class="h-full flex justify-between items-center">
    <!-- 菜单折叠按钮 -->
    <MenuCollapse />
    <!-- 右侧菜单 -->
    <div class="flex items-center h-full">
      <!-- 搜索 -->
      <GlobalSearch />
      <!-- 切换语言 -->
      <SwitchLanguage />
      <!-- 全屏 -->
      <FullScreen />
      <!-- 主题 -->
      <ToggleTheme />
      <!-- 刷新 -->
      <Refresh />
      <!-- 全局设置 -->
      <ConfigDrawer />
      <!-- 用户下拉框 -->
      <a-dropdown class="cursor-pointer ml-2" arrow placement="bottom">
        <div class="flex items-center gap-1">
          <a-avatar size="small">
            <template #icon>
              <Icon icon="ant-design:user-outlined" class="cursor-pointer mt-[4px]" inline />
            </template>
          </a-avatar>
          <span class="text-gray-700 dark:text-white">admin</span>
          <Icon icon="ant-design:caret-down-filled" class="cursor-pointer text-[12px] text-gray-500 dark:text-gray-300" />
        </div>
        <template #overlay>
          <a-menu :items="dropdownMenuItems" @click="({ key }) => handleDropdown(key)" />
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
