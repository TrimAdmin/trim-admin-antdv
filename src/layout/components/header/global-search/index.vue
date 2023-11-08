<script lang="ts" setup></script>

<template>
  <div class="h-full flex items-center px-2 hover:ant-bg-primary">
    <a-tooltip destroy-tooltip-on-hide>
      <template #title>全局搜索</template>
      <Icon :height="18" class="cursor-pointer hover:ant-text-color-primary" icon="ant-design:search-outlined" />
    </a-tooltip>
  </div>
</template>

<style lang="scss" scoped></style>
