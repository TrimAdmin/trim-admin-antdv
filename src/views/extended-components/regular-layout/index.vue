<script lang="ts" setup></script>

<template>
  <div>
    <page-header title="基础内容块" subtitle="最基础的布局方式" />
    <regular-layout>基础内容块</regular-layout>
    <regular-layout :shadow="false">没有阴影的基础内容块</regular-layout>
    <regular-layout transparent>没有背景的内容块</regular-layout>
    <regular-layout>
      <template #header> 内容块头部 </template>
      有头部的内容块
    </regular-layout>
  </div>
</template>

<style scoped lang="scss"></style>
