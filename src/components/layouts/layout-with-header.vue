<script setup lang="ts">
import { headerHeightWithTabs, siderWidth } from '@/hooks'

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

function getBackTopEl() {
  return document.getElementById('layout-with-header-back-top')
}
</script>

<template>
  <div :class="`layout-with-header ${fixedFooter ? 'pb-[64px]' : ''}`">
    <!-- 主内容区 -->
    <div
      id="layout-with-header-back-top"
      :class="`content text-black dark:text-white
      ${noBackground ? 'transparent' : 'rounded-[8px] p-3 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-700'}
    `"
    >
      <slot />
      <a-back-top :target="getBackTopEl" :visibility-height="300" />
    </div>
    <div
      v-if="fixedFooter"
      :class="`fixed-footer fixed bottom-0 left-auto w-full bg-white dark:bg-dark flex-c h-16 px-4 justify-${
        typeof fixedFooter === 'boolean' ? 'center' : fixedFooter
      }`"
    >
      <slot name="fixed-footer"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-with-header {
  --header-height: v-bind(headerHeightWithTabs);
  --sider-width: v-bind(siderWidth);
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;

  .content {
    flex: 1;
    margin: 16px;
  }

  .fixed-footer {
    width: calc(100% - var(--sider-width));
  }
}
</style>
