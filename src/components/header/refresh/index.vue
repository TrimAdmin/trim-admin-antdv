<script setup lang="ts">
import { useCommonStoreHook } from '@/store'

function handleRefresh() {
  useCommonStoreHook().refreshRoute()
}
</script>

<template>
  <div class="h-full flex items-center hover:bg-gray-50 px-2 dark:hover:bg-slate-700">
    <a-tooltip>
      <template #title>刷新</template>
      <Icon :height="18" icon="ant-design:sync-outlined" class="cursor-pointer hover:text-blue-500" @click="handleRefresh" />
    </a-tooltip>
  </div>
</template>

<style lang="scss" scoped></style>
