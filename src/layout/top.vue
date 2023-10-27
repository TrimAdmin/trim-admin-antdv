<script lang="ts" setup>
import { useCommonStoreHook, useConfigStoreHook } from '@/store'
import AnimatedRouterView from '@/layout/components/animated-router-view.vue'
import NormalFooter from '@/layout/components/footer.vue'
import { headerHeightWithTabs, siderWidth } from '@/hooks'
import TopMixHeader from './components/top-mix-header.vue'
import NormalTab from './components/header/nav-tabs/normal-tab/index.vue'
import CardTab from './components/header/nav-tabs/card-tab/index.vue'

// 是否刷新路由
const refreshing = computed<boolean>(() => useCommonStoreHook().refreshing)

// 隐藏标签页
const tabStyle = computed<string>(() => useConfigStoreHook().config.theme.tabStyle)
</script>

<template>
  <a-layout class="h-full overflow-x-hidden h-full">
    <a-layout-header>
      <top-mix-header />
      <card-tab v-if="tabStyle === 'card'" />
      <normal-tab v-if="tabStyle === 'normal'" />
    </a-layout-header>
    <div class="trim-header-placeholder" />
    <scroll-container v-if="!refreshing" class="trim-main-content">
      <animated-router-view />
      <a-layout-footer>
        <normal-footer />
      </a-layout-footer>
    </scroll-container>
  </a-layout>
</template>

<style lang="scss" scoped>
.trim-main-page {
  --sider-width: v-bind(siderWidth);

  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: var(--sider-width);
  overflow: hidden;

  // 解决fixed宽度溢出问题
  transform: translate(0, 0);
}

.ant-layout-header {
  --header-height: v-bind(headerHeightWithTabs);
  --sider-width: v-bind(siderWidth);

  position: fixed;
  z-index: 999;
  width: 100%;

  // height: var(--header-height);
  // line-height: var(--header-height);
  padding-inline: 0;

  // width: calc(100% - var(--sider-width));
  @apply bg-white dark:bg-[#001529] border-gray-100 dark:border-gray-700;
}

.trim-header-placeholder {
  --header-height: v-bind(headerHeightWithTabs);

  width: 100%;
  height: var(--header-height);
}

.trim-main-content {
  --header-height: v-bind(headerHeightWithTabs);

  flex: auto;
  max-height: calc(100% - var(--header-height));
  overflow-y: auto;
}
</style>
