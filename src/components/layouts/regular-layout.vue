<script lang="ts" setup>
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

<style lang="scss" scoped>
.regular-layout {
  max-width: calc(100% - 32px);
  margin: 16px;
}
</style>
