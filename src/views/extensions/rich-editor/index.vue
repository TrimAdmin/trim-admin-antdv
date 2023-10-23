<script lang="ts" setup>
const value = ref<string>('<p>这是一段测试文字</p><p><b>这是一段测试文字</b></p>')
</script>

<template>
  <div>
    <page-header subtitle="基于TinyMCE6封装的富文本编辑器组件" title="富文本编辑器" />
    <regular-layout>
      <rich-editor v-model="value" placeholder="请输入详情" />
      <div class="mt-4">
        <div class="text-[16px] mb-4">预览：</div>
        <div v-html="value"></div>
      </div>
    </regular-layout>
  </div>
</template>

<style lang="scss" scoped></style>
