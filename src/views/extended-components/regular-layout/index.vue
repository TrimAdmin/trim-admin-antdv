<script lang="ts" setup></script>

<template>
  <div>
    <page-header title="基础内容块" subtitle="最基础的布局方式" />
    <regular-layout transparent>
      <regular-layout>基础内容块</regular-layout>
      <regular-layout borderless>没有边框的基础内容块</regular-layout>
      <regular-layout :shadow="false">没有阴影的基础内容块</regular-layout>
      <regular-layout transparent>没有背景的内容块</regular-layout>
      <regular-layout>
        <template #header>
          <div class="flex-bc">
            内容块头部
            <a-button>自定义头部</a-button>
          </div>
        </template>
        有头部的内容块
      </regular-layout>
      <regular-layout title="这是标题">来个标题</regular-layout>
      <regular-layout max-height="200px">
        <template #header>
          <div class="flex-bc">带展开并且可以多次操作</div>
        </template>
        <p>最大高度 超出折叠</p>
        <p>最大高度 超出折叠</p>
        <p>最大高度 超出折叠</p>
        <p>最大高度 超出折叠</p>
        <p>最大高度 超出折叠</p>
        <p>最大高度 超出折叠</p>
        <p>最大高度 超出折叠</p>
        <p>最大高度 超出折叠</p>
        <p>最大高度 超出折叠</p>
        <p>最大高度 超出折叠</p>
        <p>最大高度 超出折叠</p>
        <p>最大高度 超出折叠</p>
      </regular-layout>
      <regular-layout max-height="200px" once>
        <template #header>
          <div class="flex-bc">带展开但无法折叠</div>
        </template>
        <p>最大高度 超出折叠</p>
        <p>最大高度 超出折叠</p>
        <p>最大高度 超出折叠</p>
        <p>最大高度 超出折叠</p>
        <p>最大高度 超出折叠</p>
        <p>最大高度 超出折叠</p>
        <p>最大高度 超出折叠</p>
        <p>最大高度 超出折叠</p>
        <p>最大高度 超出折叠</p>
        <p>最大高度 超出折叠</p>
        <p>最大高度 超出折叠</p>
        <p>最大高度 超出折叠</p>
      </regular-layout>
    </regular-layout>
  </div>
</template>

<style scoped lang="scss"></style>
