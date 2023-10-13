<script lang="ts" setup>
import { useI18nHook } from '@/hooks'
import { handleJumpTo } from '@/router/utils.ts'

const { t } = useI18nHook()
</script>

<template>
  <RegularLayout class="flex-c">
    <a-result status="403" title="403" :sub-title="t('message.403')">
      <template #extra>
        <a-button type="primary" @click="handleJumpTo('home')">{{ t('message.back-home') }}</a-button>
      </template>
    </a-result>
  </RegularLayout>
</template>

<style scoped lang="scss"></style>
