<script setup lang="ts">
import config from '@/trim-config.json'
import { useAutoAnimate } from '@formkit/auto-animate/vue'
import Header from './components/header.vue'
import Sider from './components/sider.vue'

const [animated] = useAutoAnimate()
const headerHeight = computed<string | number>(() =>
  typeof config.theme.headerHeight === 'string' ? config.theme.headerHeight : config.theme.headerHeight + 'px'
)
const siderWidth = computed<string | number>(() =>
  typeof config.theme.siderWidth === 'string' ? config.theme.siderWidth : config.theme.siderWidth + 'px'
)
</script>

<template>
  <a-layout class="h-full">
    <a-layout-sider class="h-full !bg-white">
      <Sider />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="!bg-white">
        <Header />
      </a-layout-header>
      <a-layout-content ref="animated">
        <router-view />
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="scss">
.ant-layout-header {
  height: v-bind(headerHeight);
  line-height: v-bind(headerHeight);
}

.ant-layout-sider {
  width: v-bind(siderWidth) !important;
  min-width: v-bind(siderWidth) !important;
  max-width: v-bind(siderWidth) !important;
}
</style>
