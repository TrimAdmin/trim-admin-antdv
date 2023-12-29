<script setup lang="ts">
import { useIcon } from '@/hooks'

const value1 = ref<string>()
const value2 = ref<string>()
const value3 = ref<string>()
const value4 = ref<string>()
const value5 = ref<string>()
const value6 = ref<string>()
</script>

<template>
  <div>
    <regular-layout>
      <a-divider orientation="left" plain>基本用法</a-divider>
      <a-input v-model:value="value1" placeholder="请输入" />
      <a-divider orientation="left" plain>带图标</a-divider>
      <a-input
        v-model:value="value2"
        placeholder="请输入"
        :prefix="useIcon('ant-design:user-outlined')"
        :suffix="useIcon('ant-design:property-safety-outlined')"
      />
      <a-divider orientation="left" plain>搜索框</a-divider>
      <a-input-search v-model:value="value3" placeholder="请输入" enter-button />
      <a-divider orientation="left" plain>密码输入框</a-divider>
      <a-input-password v-model:value="value4" placeholder="请输入" enter-button />
      <a-divider orientation="left" plain>前置/后置标签</a-divider>
      <a-input v-model:value="value5" placeholder="baidu" addon-before="https://" addon-after=".com" />
      <a-divider orientation="left" plain>文本域</a-divider>
      <a-textarea
        v-model:value="value6"
        show-count
        :maxlength="300"
        :auto-size="{ minRows: 2, maxRows: 5 }"
        placeholder="请输入"
      />
    </regular-layout>
  </div>
</template>

<style scoped></style>
