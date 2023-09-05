<script setup lang="ts">
defineProps<{
  // 是否无背景
  noBackground?: boolean
}>()
</script>

<template>
  <div
    :class="`regular-layout text-black dark:text-white
      ${noBackground ? 'transparent' : 'bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-700'}
    `"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
.regular-layout {
  padding: 12px;
  max-height: calc(100% - 32px);
  max-width: calc(100% - 32px);
  border-radius: 8px;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 16px;
}
</style>
