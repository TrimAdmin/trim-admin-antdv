<script setup lang="ts">
import NormalHeader from './components/normal-header.vue'
import NormalSider from './components/normal-sider.vue'
import NormalFooter from '@/layout/components/normal-footer.vue'
import { useTrimConfig } from '@/hooks'
import { useCommonStoreHook, useConfigStoreHook } from '@/store'
import SlideLeft from '@/components/animates/slide-left.vue'
import SlideRight from '@/components/animates/slide-right.vue'
import Fade from '@/components/animates/fade.vue'
import ScaleUp from '@/components/animates/scale-up.vue'
import ScaleDown from '@/components/animates/scale-down.vue'

// 是否刷新路由
const refreshing = computed<boolean>(() => useCommonStoreHook().refreshing)
const collapsed = computed<boolean>(() => useConfigStoreHook().menuCollapsed)
// 头部高度
const headerHeight = computed<string | number>(() =>
  typeof useTrimConfig().theme.headerHeight === 'string' ? useTrimConfig().theme.headerHeight : useTrimConfig().theme.headerHeight + 'px'
)
// 侧边栏宽度
const siderWidth = computed<string | number>(() =>
  !collapsed.value
    ? // 侧边栏展开宽度
      typeof useTrimConfig().theme.siderWidth === 'string'
      ? useTrimConfig().theme.siderWidth
      : useTrimConfig().theme.siderWidth + 'px'
    : // 侧边栏收缩宽度
    typeof useTrimConfig().theme.siderWidthCollapse === 'string'
    ? useTrimConfig().theme.siderWidthCollapse
    : useTrimConfig().theme.siderWidthCollapse + 'px'
)
// 隐藏标签页
const hideTabs = computed<boolean>(() => useConfigStoreHook().config.theme.hideTabs)
// 路由动画
const routeAnimate = computed<any>(() => {
  switch (useConfigStoreHook().config.theme.routeAnimate) {
    case 'slide-left':
      return SlideLeft
    case 'slide-right':
      return SlideRight
    case 'fade':
      return Fade
    case 'scale-up':
      return ScaleUp
    case 'scale-down':
      return ScaleDown
    default:
      return
  }
})
</script>

<template>
  <a-layout class="h-full overflow-hidden">
    <a-layout-sider theme="light" :collapsed="collapsed">
      <NormalSider />
    </a-layout-sider>
    <a-layout class="overflow-hidden h-full">
      <a-layout-header>
        <NormalHeader />
        <SimpleTab v-if="!hideTabs" />
      </a-layout-header>
      <a-layout-content :style="hideTabs ? { marginTop: headerHeight } : { marginTop: `calc(${headerHeight} + 42px)` }">
        <component :is="routeAnimate || 'div'" v-if="!refreshing" class="main-page">
          <router-view />
        </component>
        <NormalFooter class="my-4" />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="scss">
.ant-layout-header {
  --header-height: v-bind(headerHeight);
  --sider-width: v-bind(siderWidth);
  height: var(--header-height);
  line-height: v-bind(headerHeight);
  padding-inline: 0;
  z-index: 999;
  position: fixed;
  width: calc(100% - var(--sider-width));
  @apply bg-white;
  @apply dark:bg-[#001529];
  @apply border-gray-100;
  @apply dark:border-gray-700;
}

.ant-layout-content {
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
}

.ant-layout-sider {
  width: v-bind(siderWidth) !important;
  min-width: v-bind(siderWidth) !important;
  max-width: v-bind(siderWidth) !important;
  height: 100%;
  z-index: 998;
  @apply shadow-lg;
  @apply shadow-gray-300;
  @apply dark:shadow-gray-600;
}

.main-page {
  position: relative;
  flex: auto;
}
</style>
