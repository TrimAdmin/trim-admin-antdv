<script lang="ts" setup>
import SubForm from './components/sub-form.vue'
import BasicForm from './components/basic-form.vue'

defineOptions({
  name: 'forms-advanced'
})
</script>

<template>
  <LayoutWithHeader title="高级表单" subtitle="表单的高级用法" fixed-footer no-background>
    <BasicForm />
    <SubForm />
    <template #fixed-footer>
      <a-button type="primary">提交</a-button>
      <a-button>取消</a-button>
    </template>
  </LayoutWithHeader>
</template>

<style scoped lang="scss"></style>
