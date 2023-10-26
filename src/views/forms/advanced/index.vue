<script lang="ts" setup>
import SubForm from './components/sub-form.vue'
import BasicForm from './components/basic-form.vue'

defineOptions({
  name: 'forms-advanced'
})
</script>

<template>
  <div>
    <page-header subtitle="表单的高级用法" title="高级表单" />
    <regular-layout>
      <BasicForm />
      <SubForm />
    </regular-layout>
    <fixed-footer>
      <a-button type="primary">提交</a-button>
      <a-button>取消</a-button>
    </fixed-footer>
  </div>
</template>

<style lang="scss" scoped></style>
