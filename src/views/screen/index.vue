<script lang="ts" setup>
import { handleJumpTo } from '@/router/utils.ts'
</script>

<template>
  <screen-container>
    <div class="w-full h-full flex-c flex-col">
      <div>
        <a-typography-title style="color: white"
          >这是数字大屏页，使用内置自适应缩放容器组件，采用scale方案进行自适应
        </a-typography-title>
      </div>
      <a-button type="primary" @click="handleJumpTo('home')">返回首页</a-button>
    </div>
  </screen-container>
</template>

<style lang="scss" scoped></style>
