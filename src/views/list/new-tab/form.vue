<script lang="ts" setup>
import { handleCloseTag } from '@/router/utils.ts'

const route = useRoute()

console.log(route.query)
</script>

<template>
  <div>
    <regular-layout> 这是表单页 </regular-layout>
    <fixed-footer>
      <a-button
        @click="
          () => {
            handleCloseTag('list-new-tab-create', '确认关闭吗？')
          }
        "
      >
        取消
      </a-button>
      <a-button type="primary">提交</a-button>
    </fixed-footer>
  </div>
</template>

<style scoped lang="scss"></style>
