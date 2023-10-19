<script lang="ts" setup>
import SubForm from './components/sub-form.vue'
import BasicForm from './components/basic-form.vue'
import FixedFooter from '@/components/layouts/fixed-footer.vue'

defineOptions({
  name: 'forms-advanced'
})
</script>

<template>
  <div>
    <PageHeader title="高级表单" subtitle="表单的高级用法" />
    <RegularLayout fixed-footer>
      <BasicForm />
      <SubForm />
    </RegularLayout>
    <FixedFooter>
      <a-button type="primary">提交</a-button>
      <a-button>取消</a-button>
    </FixedFooter>
  </div>
</template>

<style scoped lang="scss"></style>
