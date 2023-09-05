<script setup lang="ts"></script>

<template>
  <div class="h-full flex items-center hover:bg-gray-50 px-2 dark:hover:bg-slate-700">
    <a-tooltip>
      <template #title>全局搜索</template>
      <Icon :height="18" icon="ant-design:search-outlined" class="cursor-pointer hover:text-blue-500" />
    </a-tooltip>
  </div>
</template>

<style lang="scss" scoped></style>
