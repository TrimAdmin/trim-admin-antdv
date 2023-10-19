<script lang="ts" setup>
import { useI18nHook } from '@/hooks'
import { handleCloseTag } from '@/router/utils.ts'

const { t } = useI18nHook()
const route = useRoute()
</script>

<template>
  <regular-layout class="flex-c">
    <a-result status="403" title="403" :sub-title="t('message.403')">
      <template #extra>
        <a-button type="primary" @click="handleCloseTag(route.name!.toString())">{{ t('message.back-home') }}</a-button>
      </template>
    </a-result>
  </regular-layout>
</template>

<style scoped lang="scss"></style>
