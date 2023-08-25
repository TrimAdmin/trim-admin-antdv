<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ItemType } from 'ant-design-vue'
import { useIcon } from '@/hooks'

const dropdownMenuItems = reactive<
  Array<
    | ItemType
    | {
        type: 'divider' | 'group'
      }
  >
>([
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
</script>

<template>
  <div class="h-full flex justify-between items-center">
    <!-- 菜单折叠按钮 -->
    <Icon :height="18" icon="ant-design:menu-fold-outlined" class="cursor-pointer" />
    <!-- 右侧菜单 -->
    <div class="flex items-center gap-4">
      <!-- 搜索 -->
      <Icon :height="18" icon="ant-design:search-outlined" class="cursor-pointer" />
      <!-- 切换语言 -->
      <SwitchLanguage />
      <!-- 全屏 -->
      <Icon v-if="true" :height="18" icon="ant-design:fullscreen-outlined" class="cursor-pointer" />
      <Icon v-else :height="18" icon="ant-design:fullscreen-exit-outlined" class="cursor-pointer" />
      <!-- 主题 -->
      <Icon v-if="true" :height="18" icon="ri:sun-line" class="cursor-pointer" />
      <Icon v-else :height="18" icon="ri:moon-line" class="cursor-pointer" />
      <!-- 刷新 -->
      <Icon :height="18" icon="ant-design:sync-outlined" class="cursor-pointer" />
      <!-- 用户下拉框 -->
      <a-dropdown class="cursor-pointer ml-2" arrow placement="bottom">
        <div class="flex items-center gap-1">
          <a-avatar size="small">
            <template #icon>
              <Icon icon="ant-design:user-outlined" class="cursor-pointer mt-[4px]" inline />
            </template>
          </a-avatar>
          <span class="text-gray-700">admin</span>
          <Icon icon="ant-design:caret-down-filled" class="cursor-pointer text-[12px] text-gray-500" />
        </div>
        <template #overlay>
          <a-menu :items="dropdownMenuItems" />
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
