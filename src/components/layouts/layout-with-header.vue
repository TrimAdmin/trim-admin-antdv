<script setup lang="ts">
import { headerHeight } from '@/hooks'

withDefaults(
  defineProps<{
    // 是否无背景
    noBackground?: boolean
    // 标题
    title: string
    // 副标题
    subtitle?: string
    // 是否带有fixed-footer
    fixedFooter?: boolean | 'start' | 'center' | 'end'
  }>(),
  {
    fixedFooter: false
  }
)
</script>

<template>
  <div :class="`layout-with-header ${fixedFooter ? 'pb-[64px]' : ''}`">
    <div class="w-full bg-white dark:bg-gray-900 dark:text-white p-4 flex-bc gap-[16px]">
      <div>
        <slot name="left" />
      </div>
      <div class="flex-1">
        <div>
          <slot name="extra" />
        </div>
        <div class="text-2xl leading-[1] pb-2 font-bold">{{ title }}</div>
        <div class="text-gray-500">
          {{ subtitle }}
          <slot v-if="!subtitle" name="subtitle" />
        </div>
      </div>
      <div>
        <slot name="right" />
      </div>
    </div>
    <div
      :class="`content text-black dark:text-white
      ${noBackground ? 'transparent' : 'p-3 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-700'}
    `"
    >
      <slot />
    </div>
    <div
      v-if="fixedFooter"
      :class="`fixed bottom-0 bg-white dark:bg-dark w-full flex-c h-16 px-4 justify-${typeof fixedFooter === 'boolean' ? 'center' : fixedFooter}`"
    >
      <slot name="fixed-footer"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-with-header {
  --header-height: v-bind(headerHeight);
  position: relative;
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--header-height) - 42px);
  overflow-y: auto;
  overflow-x: hidden;

  .content {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 16px;
    border-radius: 8px;
    max-width: calc(100% - 32px);
  }
}
</style>
