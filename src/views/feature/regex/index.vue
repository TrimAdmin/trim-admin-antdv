<script lang="ts" setup>
import {
  isChineseName,
  isEmail,
  isIDNumber,
  isMobile,
  isStrictMobile,
  isStrictUnifiedSocialCreditCode,
  isSubnetMask,
  isTrainNumber,
  isUnifiedSocialCreditCode
} from '@/utils'

const formList = ref<
  Array<{
    title: string
    content: string
    error: boolean
    regex: (value: string) => boolean
  }>
>([
  {
    title: '火车车次号',
    content: '',
    error: false,
    regex: (value) => isTrainNumber(value)
  },
  {
    title: '子网掩码',
    content: '',
    error: false,
    regex: (value) => isSubnetMask(value)
  },
  {
    title: '邮箱',
    content: '',
    error: false,
    regex: (value) => isEmail(value)
  },
  {
    title: '中文姓名',
    content: '',
    error: false,
    regex: (value) => isChineseName(value)
  },
  {
    title: '手机号（严谨）',
    content: '',
    error: false,
    regex: (value) => isStrictMobile(value)
  },
  {
    title: '手机号（宽松）',
    content: '',
    error: false,
    regex: (value) => isMobile(value)
  },
  {
    title: '统一社会信用代码',
    content: '',
    error: false,
    regex: (value) => isStrictUnifiedSocialCreditCode(value)
  },
  {
    title: '统一社会信用代码（宽松）',
    content: '',
    error: false,
    regex: (value) => isUnifiedSocialCreditCode(value)
  },
  {
    title: '二代身份证',
    content: '',
    error: false,
    regex: (value) => isIDNumber(value)
  }
])
</script>

<template>
  <div>
    <page-header title="常用正则表达式">
      <template #subtitle>
        感谢<a target="_blank" href="https://github.com/any86/any-rule">any-rule</a>
        提供的正则表达式，函数封装于@utils/regex.ts中
      </template>
    </page-header>
    <regular-layout v-for="(item, index) in formList" :key="index" :title="item.title">
      <a-form-item
        :validate-status="item.content ? (item.error && item.content ? 'error' : 'success') : ''"
        has-feedback
        :help="item.content ? (item.error ? '匹配失败' : '匹配成功') : ''"
      >
        <a-input
          v-model:value="item.content"
          allow-clear
          @change="
            () => {
              item.error = !item.regex(item.content)
            }
          "
        />
      </a-form-item>
    </regular-layout>
  </div>
</template>

<style scoped lang="scss"></style>
