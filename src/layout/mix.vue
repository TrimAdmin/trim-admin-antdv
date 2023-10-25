<script lang="ts" setup>
import MixSider from './components/mix-sider.vue'
import NormalFooter from '@/layout/components/footer.vue'
import { useCommonStoreHook, useConfigStoreHook } from '@/store'
import AnimatedRouterView from '@/layout/components/animated-router-view.vue'
import { headerHeight, siderWidth } from '@/hooks'
import TopMixHeader from '@/layout/components/top-mix-header.vue'

// 是否刷新路由
const refreshing = computed<boolean>(() => useCommonStoreHook().refreshing)
// 侧边栏暗色模式
const menuDarkMode = computed<boolean>(() => useConfigStoreHook().config.theme.menuDarkMode)

// 隐藏标签页
const tabStyle = computed<string>(() => useConfigStoreHook().config.theme.tabStyle)
// 当前菜单
const currentMenu = ref<string>('')

function handleCurrentChange(name: string) {
  currentMenu.value = name
}
</script>

<template>
  <a-layout class="h-full overflow-x-hidden h-full">
    <div class="z-[1000] fixed inset-0 w-full h-full invisible" />
    <div class="trim-main-page">
      <a-layout-header>
        <top-mix-header @change="handleCurrentChange" />
      </a-layout-header>
      <div class="trim-header-placeholder" />
      <a-layout class="flex">
        <a-layout-sider
          v-model:collapsed="useConfigStoreHook().menuCollapsed"
          collapsible
          :theme="menuDarkMode ? 'dark' : 'light'"
        >
          <mix-sider :parent-menu="currentMenu" />
        </a-layout-sider>
        <scroll-container v-if="!refreshing" class="trim-main-content">
          <div class="fixed w-full z-[999]">
            <card-tab v-if="tabStyle === 'card'" />
            <normal-tab v-if="tabStyle === 'normal'" />
          </div>
          <div class="trim-tabs-placeholder" />
          <animated-router-view />
          <a-layout-footer>
            <normal-footer />
          </a-layout-footer>
        </scroll-container>
      </a-layout>
    </div>
  </a-layout>
</template>

<style lang="scss" scoped>
.ant-layout-sider {
  z-index: 998;
  width: v-bind(siderWidth) !important;
  min-width: v-bind(siderWidth) !important;
  max-width: v-bind(siderWidth) !important;
  overflow-x: hidden;
  overflow-y: auto;
  inset: 0;

  @apply shadow-md shadow-gray-300 dark:shadow-gray-700;
}

:deep(.ant-layout-sider-trigger) {
  width: v-bind(siderWidth) !important;
  min-width: v-bind(siderWidth) !important;
  max-width: v-bind(siderWidth) !important;
}

.trim-main-page {
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
}

.ant-layout-header {
  --header-height: v-bind(headerHeight);
  --sider-width: v-bind(siderWidth);

  position: fixed;
  z-index: 999;
  width: 100%;
  height: var(--header-height);
  line-height: var(--header-height);
  padding-inline: 0;

  // width: calc(100% - var(--sider-width));
  @apply bg-white dark:bg-[#001529] border-gray-100 dark:border-gray-700;
}

.trim-header-placeholder {
  --header-height: v-bind(headerHeight);

  width: 100%;
  min-height: var(--header-height);
}

.trim-tabs-placeholder {
  display: block;
  width: 100%;
  min-height: 42px;
}

.trim-main-content {
  --header-height: v-bind(headerHeight);
  --sider-width: v-bind(siderWidth);

  flex: auto;
  overflow-y: auto;

  // 解决fixed宽度溢出问题
  transform: translate(0, 0);
}
</style>
