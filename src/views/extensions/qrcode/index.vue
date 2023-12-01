<script lang="ts" setup></script>

<template>
  <div>
    <page-header title="二维码组件" subtitle="当然也可以用antdv的qrcode组件" />
    <a-alert banner class="mb-4" type="info">
      <template #message>
        组件位置：/src/components/extension/qrcode/index.vue，官方文档：
        <a href="https://www.npmjs.com/package/qrcode" target="_blank"> https://www.npmjs.com/package/qrcode </a>
      </template>
    </a-alert>
    <regular-layout>
      <qrcode />
    </regular-layout>
  </div>
</template>

<style scoped lang="scss"></style>
