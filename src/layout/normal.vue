<script setup lang="ts">
import NormalHeader from './components/normal-header.vue'
import NormalSider from './components/normal-sider.vue'
import { headerHeightWithTabs, siderWidth } from '@/hooks'
import { useCommonStoreHook, useConfigStoreHook } from '@/store'
import AnimatedRouterView from '@/layout/components/animated-router-view.vue'
import NormalFooter from '@/layout/components/normal-footer.vue'
import { scrollbarInstance } from '@/plugins'
import { OverlayScrollbars } from 'overlayscrollbars'

// 是否刷新路由
const refreshing = computed<boolean>(() => useCommonStoreHook().refreshing)
const collapsed = computed<boolean>(() => useConfigStoreHook().menuCollapsed)
// 侧边栏暗色模式
const siderDarkMode = computed<boolean>(() => useConfigStoreHook().config.theme.siderDarkMode)

// 隐藏标签页
const hideTabs = computed<boolean>(() => useConfigStoreHook().config.theme.hideTabs)
const mainContentEl = shallowRef<HTMLDivElement>()
const scrollTop = ref<number>(0)
const scrollbar = ref()

// 回到顶部
function handleBackTop() {
  // 更新元素滚动状态至顶部
  scrollbar.value.elements().scrollOffsetElement.scrollTo({
    behavior: 'smooth',
    top: 0
  })
}

// 创建滚动条实例
onMounted(() => {
  scrollbar.value = scrollbarInstance(mainContentEl.value!)
  console.log(scrollbar.value.elements())
  scrollbar.value.on('scroll', (instance: OverlayScrollbars) => {
    // console.log(instance.elements().scrollbarVertical.handle.offsetTop)
    scrollTop.value = instance.elements().scrollOffsetElement.scrollTop
  })
})
</script>

<template>
  <a-layout class="h-full overflow-x-hidden h-full">
    <a-layout-sider :theme="siderDarkMode ? 'dark' : 'light'" :collapsed="collapsed">
      <normal-sider />
    </a-layout-sider>
    <div class="z-[1000] fixed inset-0 w-full h-full invisible" />
    <div class="trim__main-page">
      <a-layout-header>
        <normal-header />
        <simple-tab v-if="!hideTabs" />
      </a-layout-header>
      <div class="trim__header-placeholder" />
      <div id="back-top-element" ref="mainContentEl" class="trim__main-content">
        <a-layout-content class="flex-auto">
          <animated-router-view v-if="!refreshing" />
        </a-layout-content>
        <a-layout-footer>
          <normal-footer />
        </a-layout-footer>
        <a-back-top v-if="scrollTop > 200" :visibility-height="0" @click="handleBackTop" />
      </div>
    </div>
  </a-layout>
</template>

<style scoped lang="scss">
.ant-layout-sider {
  width: v-bind(siderWidth) !important;
  min-width: v-bind(siderWidth) !important;
  max-width: v-bind(siderWidth) !important;
  z-index: 998;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  inset: 0;
  @apply shadow-md shadow-gray-300 dark:shadow-gray-700;
}

.trim__main-page {
  --sider-width: v-bind(siderWidth);
  margin-left: var(--sider-width);
  flex: 1;
  overflow: hidden;
  // 解决fixed宽度溢出问题
  transform: translate(0, 0);
  display: flex;
  flex-direction: column;
}

.ant-layout-header {
  --header-height: v-bind(headerHeightWithTabs);
  --sider-width: v-bind(siderWidth);
  height: var(--header-height);
  line-height: var(--header-height);
  padding-inline: 0;
  z-index: 999;
  position: fixed;
  width: 100%;
  //width: calc(100% - var(--sider-width));
  @apply bg-white dark:bg-[#001529] border-gray-100 dark:border-gray-700;
}

.trim__header-placeholder {
  --header-height: v-bind(headerHeightWithTabs);
  height: var(--header-height);
  width: 100%;
}

.trim__main-content {
  --header-height: v-bind(headerHeightWithTabs);
  overflow-y: auto;
  max-height: calc(100% - var(--header-height));
  flex: auto;
}

[data-overlayscrollbars-viewport='scrollbarHidden'] {
  display: flex;
}
</style>
