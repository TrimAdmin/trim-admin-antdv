<script setup lang="ts">
import { headerHeightWithTabs } from '@/hooks'

defineProps<{
  // 是否无背景
  noBackground?: boolean
  // 是否带有footer，为true时会带64px的下内边距
  withFooter?: boolean
  // 是否带有fixed-footer
  fixedFooter?: boolean
}>()
</script>

<template>
  <div
    :class="`regular-layout text-black dark:text-white rounded-md ${withFooter ? '!mb-[64px]' : ''}
      ${noBackground ? 'transparent pb-4' : 'p-3 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-700'}
    `"
  >
    <slot />
    <div v-if="fixedFooter" class="fixed bottom-0 bg-white w-full flex-c h-16 shadow-md">
      <slot name="fixed-footer"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.regular-layout {
  --header-height: v-bind(headerHeightWithTabs);
  height: calc(100vh - var(--header-height) - 32px);
  max-width: calc(100% - 32px);
  //border-radius: 8px;
  //overflow-x: hidden;
  //overflow-y: auto;
  margin: 16px;
}
</style>
