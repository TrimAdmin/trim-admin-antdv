<script setup lang="ts">
import { useConfigStoreHook } from '@/store'
import { Icon } from '@iconify/vue'

const collapsed = computed<boolean>(() => useConfigStoreHook().menuCollapsed)

function handleCollapse() {
  useConfigStoreHook().setMenuCollapsed(!collapsed.value)
}
</script>

<template>
  <div class="h-full flex items-center hover:bg-gray-50 px-2 dark:hover:bg-slate-700">
    <a-tooltip>
      <template #title>
        {{ collapsed ? '展开菜单' : '折叠菜单' }}
      </template>
      <Icon v-if="collapsed" :height="18" icon="ant-design:menu-unfold-outlined" class="cursor-pointer hover:text-blue-500" @click="handleCollapse" />
      <Icon v-else :height="18" icon="ant-design:menu-fold-outlined" class="cursor-pointer hover:text-blue-500" @click="handleCollapse" />
    </a-tooltip>
  </div>
</template>

<style lang="scss" scoped></style>
