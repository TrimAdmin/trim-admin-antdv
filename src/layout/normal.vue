<script setup lang="ts">
import NormalHeader from './components/normal-header.vue'
import NormalSider from './components/normal-sider.vue'
import { headerHeightWithTabs, siderWidth } from '@/hooks'
import { useCommonStoreHook, useConfigStoreHook } from '@/store'
import AnimatedRouterView from '@/layout/components/animated-router-view.vue'

// 是否刷新路由
const refreshing = computed<boolean>(() => useCommonStoreHook().refreshing)
const collapsed = computed<boolean>(() => useConfigStoreHook().menuCollapsed)
// 侧边栏暗色模式
const siderDarkMode = computed<boolean>(() => useConfigStoreHook().config.theme.siderDarkMode)

// 隐藏标签页
const hideTabs = computed<boolean>(() => useConfigStoreHook().config.theme.hideTabs)

function getBackTopEl() {
  return document.getElementById('back-top-element')!
}
</script>

<template>
  <a-layout class="h-full overflow-x-hidden">
    <a-layout-sider :theme="siderDarkMode ? 'dark' : 'light'" :collapsed="collapsed">
      <NormalSider />
    </a-layout-sider>
    <div class="z-[1000] fixed inset-0 w-full h-full invisible" />
    <div class="main-page">
      <a-layout-header data-fixed-width>
        <NormalHeader />
        <SimpleTab v-if="!hideTabs" />
      </a-layout-header>
      <!--      <div class="header-placeholder" />-->
      <a-layout-content id="back-top-element">
        <animated-router-view v-if="!refreshing" />
        <a-back-top :target="getBackTopEl" />
      </a-layout-content>
      <a-layout-footer> footer</a-layout-footer>
    </div>
  </a-layout>
</template>

<style scoped lang="scss">
.ant-layout {
  height: 100%;
}

.ant-layout-sider {
  width: v-bind(siderWidth) !important;
  min-width: v-bind(siderWidth) !important;
  max-width: v-bind(siderWidth) !important;
  height: 100%;
  z-index: 998;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
  @apply shadow-md shadow-gray-300 dark:shadow-gray-700;
}

.main-page {
  --sider-width: v-bind(siderWidth);
  margin-left: var(--sider-width);
  transition: all 0.3s;
  flex: 1;
  position: relative;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.ant-layout-header {
  --header-height: v-bind(headerHeightWithTabs);
  --sider-width: v-bind(siderWidth);
  height: var(--header-height);
  line-height: var(--header-height);
  padding-inline: 0;
  z-index: 999;
  position: fixed;
  //width: inherit;
  right: 4px;
  width: calc(100% - var(--sider-width) - 4px);
  @apply bg-white dark:bg-[#001529] border-gray-100 dark:border-gray-700;
}

.header-placeholder {
  --header-height: v-bind(headerHeightWithTabs);
  height: var(--header-height);
}

.ant-layout-content {
  --header-height: v-bind(headerHeightWithTabs);
  margin-top: var(--header-height);
  //overflow-x: hidden;
  //flex: 1;
  //display: flex;
  //flex-direction: column;
  //width: inherit;
}
</style>
