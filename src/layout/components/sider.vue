<script setup lang="ts">
import config from '@/trim-config.json'
import { Icon } from '@iconify/vue'

const title = computed<string>(() => import.meta.env.VITE_DOCUMENT_NAME)
const headerHeight = computed<string | number>(() =>
  typeof config.theme.headerHeight === 'string' ? config.theme.headerHeight : config.theme.headerHeight + 'px'
)
</script>

<template>
  <div class="sider-title">{{ title }}</div>
  <a-menu>
    <a-menu-item>首页</a-menu-item>
  </a-menu>
</template>

<style scoped lang="scss">
.sider-title {
  height: v-bind(headerHeight);
  line-height: v-bind(headerHeight);
  width: 100%;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.ant-menu {
  height: calc(100% - var(--t-header-height));
}
</style>
