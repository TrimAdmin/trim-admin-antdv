<script setup lang="ts"></script>

<template>
  <RegularLayout>
    <a-row :gutter="32">
      <a-col :span="12">
        <a-divider orientation="left" plain>按钮类型</a-divider>
        <a-space>
          <a-button type="primary">主要按钮</a-button>
          <a-button>默认按钮</a-button>
          <a-button type="dashed">虚线按钮</a-button>
          <a-button type="text">文本按钮</a-button>
          <a-button type="link">链接按钮</a-button>
        </a-space>
      </a-col>
      <a-col :span="12">
        <a-divider orientation="left" plain>危险按钮</a-divider>
        <a-space>
          <a-button danger>默认按钮</a-button>
          <a-button type="primary" danger>主要按钮</a-button>
          <a-button type="dashed" danger>虚线按钮</a-button>
          <a-button type="text" danger>文本按钮</a-button>
          <a-button type="link" danger>链接按钮</a-button>
        </a-space>
      </a-col>
    </a-row>
  </RegularLayout>
</template>

<style scoped lang="scss"></style>
