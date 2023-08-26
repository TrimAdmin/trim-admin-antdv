<script setup lang="ts"></script>

<template>
  <a-card :bordered="false" class="h-full">
    <slot />
  </a-card>
</template>

<style scoped lang="scss">
:deep(.ant-card-body) {
  padding: 12px;
}
</style>
