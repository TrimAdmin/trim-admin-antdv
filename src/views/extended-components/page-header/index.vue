<script lang="ts" setup></script>

<template>
  <div>
    <page-header title="页头" subtitle="一个用于在页头展示主要信息的组件" fixed />
    <page-header title="标题" subtitle="副标题" class="mt-4">
      <template #extra>额外内容插槽</template>
      <template #left>左侧内容插槽</template>
      <template #right>右侧内容插槽</template>
    </page-header>
  </div>
</template>

<style scoped lang="scss"></style>
