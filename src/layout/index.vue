<script setup lang="ts">
import { useAutoAnimate } from '@formkit/auto-animate/vue'
import Header from './components/header.vue'
import Sider from './components/sider.vue'
import Footer from './components/footer.vue'
import { useTrimConfig } from '@/hooks'

// auto-animate的ref
const [animated] = useAutoAnimate()
// 头部高度
const headerHeight = computed<string | number>(() =>
  typeof useTrimConfig().theme.headerHeight === 'string' ? useTrimConfig().theme.headerHeight : useTrimConfig().theme.headerHeight + 'px'
)
// 侧边栏宽度
const siderWidth = computed<string | number>(() =>
  typeof useTrimConfig().theme.siderWidth === 'string' ? useTrimConfig().theme.siderWidth : useTrimConfig().theme.siderWidth + 'px'
)
</script>

<template>
  <a-layout class="h-full">
    <a-layout-sider theme="light">
      <Sider />
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <Header />
      </a-layout-header>
      <a-layout-content>
        <div ref="animated" class="h-full">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer class="!p-0 mb-4">
        <Footer />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="scss">
.ant-layout-header {
  height: v-bind(headerHeight);
  line-height: v-bind(headerHeight);
  padding-inline: 16px;
  @apply bg-white;
  @apply dark:bg-[#001529];
}

.ant-layout-sider {
  width: v-bind(siderWidth) !important;
  min-width: v-bind(siderWidth) !important;
  max-width: v-bind(siderWidth) !important;
  height: 100%;
  @apply shadow-lg;
  @apply shadow-gray-300;
  @apply dark:shadow-gray-600;
}

.ant-layout-content {
  height: calc(100% - v-bind(headerHeight));
  margin: 16px;
}
</style>
