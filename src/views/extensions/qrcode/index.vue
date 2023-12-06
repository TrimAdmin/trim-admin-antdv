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
    <regular-layout class="flex">
      <a-card>
        <a-card-grid class="text-center">
          <div class="mb-2">image模式</div>
          <qrcode content="https://dcwedu.top" mode="image" />
        </a-card-grid>
        <a-card-grid class="text-center">
          <div class="mb-2">canvas模式</div>
          <qrcode content="https://dcwedu.top" mode="canvas" />
        </a-card-grid>
        <a-card-grid class="text-center">
          <div class="mb-2">设置宽度</div>
          <qrcode content="https://dcwedu.top" mode="canvas" :width="100" />
        </a-card-grid>
        <a-card-grid class="text-center">
          <div class="mb-2">自定义二维码生成选项（仅对image模式生效）</div>
          <qrcode
            content="https://dcwedu.top"
            mode="image"
            :options="{
              errorCorrectionLevel: 'M',
              color: {
                dark: '#194785',
                light: '#eeeeee'
              }
            }"
          />
        </a-card-grid>
      </a-card>
    </regular-layout>
  </div>
</template>

<style scoped lang="scss"></style>
