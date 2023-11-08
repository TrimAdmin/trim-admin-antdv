<script lang="ts" setup>
import { useCommonStoreHook } from '@/store'

function handleRefresh() {
  useCommonStoreHook().refreshRoute()
}
</script>

<template>
  <div class="h-full flex items-center hover:ant-bg-primary px-2">
    <a-tooltip destroy-tooltip-on-hide>
      <template #title>刷新</template>
      <Icon
        :height="18"
        class="cursor-pointer hover:ant-text-color-primary"
        icon="ant-design:sync-outlined"
        @click="handleRefresh"
      />
    </a-tooltip>
  </div>
</template>

<style lang="scss" scoped></style>
