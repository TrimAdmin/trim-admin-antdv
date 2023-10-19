<script setup lang="ts">
import { headerHeightWithTabs } from '@/hooks'

defineProps<{
  // 是否无背景
  noBackground?: boolean
}>()
</script>

<template>
  <div
    :class="`regular-layout text-black dark:text-white rounded-md
      ${noBackground ? 'transparent pb-4' : 'p-3 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-700'}
    `"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
.regular-layout {
  --header-height: v-bind(headerHeightWithTabs);
  //height: calc(100vh - var(--header-height) - 32px);
  max-width: calc(100% - 32px);
  margin: 16px;
}
</style>
