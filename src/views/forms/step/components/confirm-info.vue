<script lang="ts" setup>
import { infoType } from '../types'
import { payAccountList, receiveAccountTypeList } from '../data'

defineProps<{
  formData: infoType
}>()
</script>

<template>
  <a-descriptions bordered layout="vertical">
    <a-descriptions-item label="付款账户">
      {{ payAccountList.filter((item) => item.value === formData.payAccountId)[0].label }}
    </a-descriptions-item>
    <a-descriptions-item label="收款方式"
      >{{ receiveAccountTypeList.filter((item) => item.value === formData.receiveAccountType)[0].label }}
    </a-descriptions-item>
    <a-descriptions-item label="收款账户">{{ formData.receiveAccount }}</a-descriptions-item>
    <a-descriptions-item label="收款人姓名">{{ formData.receiver }}</a-descriptions-item>
    <a-descriptions-item label="付款金额">￥{{ formData.amount }}</a-descriptions-item>
  </a-descriptions>
</template>

<style lang="scss" scoped></style>
