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
    <a-layout class="h-full overflow-y-auto overflow-x-hidden">
      <a-layout-header>
        <NormalHeader />
      </a-layout-header>
      <SimpleTab v-if="!hideTabs" />
      <a-layout-content>
        <component :is="routeAnimate || 'div'" v-if="!refreshing">
          <router-view />
        </component>
      </a-layout-content>
      <a-layout-footer class="!px-0 !py-4">
        <NormalFooter />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="scss">
.ant-layout-header {
  height: v-bind(headerHeight);
  line-height: v-bind(headerHeight);
  padding-inline: 16px;
  z-index: 999;
  border-bottom: 1px solid;
  @apply bg-white;
  @apply dark:bg-[#001529];
  @apply border-gray-100;
  @apply dark:border-gray-700;
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
</style>
