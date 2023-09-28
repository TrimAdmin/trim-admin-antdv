<script setup lang="ts">
import NormalHeader from './components/normal-header.vue'
import NormalSider from './components/normal-sider.vue'
import { headerHeightWithTabs, siderWidth } from '@/hooks'
import { useCommonStoreHook, useConfigStoreHook } from '@/store'
import SlideLeft from '@/components/animates/slide-left.vue'
import SlideRight from '@/components/animates/slide-right.vue'
import Fade from '@/components/animates/fade.vue'
import ScaleUp from '@/components/animates/scale-up.vue'
import ScaleDown from '@/components/animates/scale-down.vue'

const route = useRoute()
// 是否刷新路由
const refreshing = computed<boolean>(() => useCommonStoreHook().refreshing)
const collapsed = computed<boolean>(() => useConfigStoreHook().menuCollapsed)

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
  <a-layout class="h-full overflow-hidden" has-sider>
    <a-layout-sider theme="light" :collapsed="collapsed">
      <NormalSider />
    </a-layout-sider>
    <a-layout class="main-page">
      <a-layout-header>
        <NormalHeader />
        <SimpleTab v-if="!hideTabs" />
      </a-layout-header>
      <a-layout-content>
        <component :is="routeAnimate || 'div'" v-if="!refreshing">
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" v-if="route.meta.keepAlive" />
            </keep-alive>
            <component :is="Component" v-if="!route.meta.keepAlive" />
          </router-view>
        </component>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="scss">
.ant-layout-header {
  --header-height: v-bind(headerHeightWithTabs);
  --sider-width: v-bind(siderWidth);
  height: var(--header-height);
  line-height: v-bind(headerHeightWithTabs);
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
  --header-height: v-bind(headerHeightWithTabs);
  height: calc(100vh - var(--header-height));
  margin-top: var(--header-height);
  overflow-x: hidden;
  overflow-y: auto;
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
  @apply shadow-lg;
  @apply shadow-gray-300;
  @apply dark:shadow-gray-600;
}

.main-page {
  margin-left: v-bind(siderWidth);
  transition: all 0.3s;
}
</style>
