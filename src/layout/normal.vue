<script lang="ts" setup>
import NormalHeader from './components/normal-header.vue'
import NormalSider from './components/normal-sider.vue'
import NormalFooter from '@/layout/components/footer.vue'
import { useConfigStoreHook } from '@/store'
import AnimatedRouterView from '@/layout/components/animated-router-view.vue'
import { headerHeightWithTabs, siderWidth } from '@/hooks'
import NormalTab from './components/header/nav-tabs/normal-tab/index.vue'
import CardTab from './components/header/nav-tabs/card-tab/index.vue'

const collapsed = computed<boolean>(() => useConfigStoreHook().menuCollapsed)
// 侧边栏暗色模式
const menuDarkMode = computed<boolean>(() => useConfigStoreHook().config.theme.menuDarkMode)

// 隐藏标签页
const tabStyle = computed<string>(() => useConfigStoreHook().config.theme.tabStyle)
</script>

<template>
  <a-layout class="h-full overflow-x-hidden h-full">
    <a-layout-sider :collapsed="collapsed" :theme="menuDarkMode ? 'dark' : 'light'">
      <normal-sider />
    </a-layout-sider>
    <div class="z-[1000] fixed inset-0 w-full h-full invisible" />
    <scroll-container class="trim-main-page">
      <a-layout-header>
        <normal-header />
        <card-tab v-if="tabStyle === 'card'" />
        <normal-tab v-if="tabStyle === 'normal'" />
      </a-layout-header>
      <div class="trim-header-placeholder" />
      <animated-router-view />
      <a-layout-footer>
        <normal-footer />
      </a-layout-footer>
    </scroll-container>
  </a-layout>
</template>

<style lang="scss" scoped>
.ant-layout-sider {
  position: fixed;
  z-index: 998;
  width: v-bind(siderWidth) !important;
  min-width: v-bind(siderWidth) !important;
  max-width: v-bind(siderWidth) !important;
  overflow-x: hidden;
  overflow-y: auto;
  inset: 0;
  box-shadow: var(--trim-box-shadow-md);
}

.trim-main-page {
  --sider-width: v-bind(siderWidth);

  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: var(--sider-width);
  overflow-x: hidden;
  transition: margin-left 0.25s ease;

  // 解决fixed宽度溢出问题
  transform: translate(0, 0);
}

.ant-layout-header {
  --header-height: v-bind(headerHeightWithTabs);
  --sider-width: v-bind(siderWidth);

  position: fixed;
  z-index: 999;
  width: 100%;
  height: var(--header-height);
  line-height: var(--header-height);
  padding-inline: 0;
  background-color: var(--trim-bg-color);
  border-bottom: 1px solid var(--trim-border-color-light);

  // width: calc(100% - var(--sider-width));
}

.trim-header-placeholder {
  --header-height: v-bind(headerHeightWithTabs);

  width: 100%;
  min-height: var(--header-height);
}
</style>
