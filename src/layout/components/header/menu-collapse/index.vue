<script lang="ts" setup>
import { useConfigStoreHook } from '@/store'

const collapsed = computed<boolean>(() => useConfigStoreHook().menuCollapsed)

function handleCollapse() {
  useConfigStoreHook().setMenuCollapsed(!collapsed.value)
}
</script>

<template>
  <div class="h-full flex items-center px-2 hover:ant-bg-primary">
    <a-tooltip destroy-tooltip-on-hide>
      <template #title>
        {{ collapsed ? '展开菜单' : '折叠菜单' }}
      </template>
      <Icon
        v-if="collapsed"
        :height="18"
        class="cursor-pointer hover:ant-text-color-primary"
        icon="ant-design:menu-unfold-outlined"
        @click="handleCollapse"
      />
      <Icon
        v-else
        :height="18"
        class="cursor-pointer hover:ant-text-color-primary"
        icon="ant-design:menu-fold-outlined"
        @click="handleCollapse"
      />
    </a-tooltip>
  </div>
</template>

<style lang="scss" scoped></style>
