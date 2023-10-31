<script lang="ts" setup>
import { useCommonStoreHook } from '@/store'

function handleRefresh() {
  useCommonStoreHook().refreshRoute()
}
</script>

<template>
  <div class="h-full flex items-center hover:bg-gray-50 px-2 dark:hover:bg-slate-700">
    <a-tooltip destroy-tooltip-on-hide>
      <template #title>刷新</template>
      <Icon
        :height="18"
        class="cursor-pointer hover:text-blue-500"
        icon="ant-design:sync-outlined"
        @click="handleRefresh"
      />
    </a-tooltip>
  </div>
</template>

<style lang="scss" scoped></style>
