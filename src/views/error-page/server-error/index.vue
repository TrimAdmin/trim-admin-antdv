<script lang="ts" setup>
import { useI18nHook } from '@/hooks'
import { handleCloseTag } from '@/router/utils.ts'

const { t } = useI18nHook()
const route = useRoute()
</script>

<template>
  <RegularLayout class="flex-c">
    <a-result status="500" title="500" :sub-title="t('message.500')">
      <template #extra>
        <a-button type="primary" @click="handleCloseTag(route.name!.toString())">{{ t('message.back-home') }}</a-button>
      </template>
    </a-result>
  </RegularLayout>
</template>

<style scoped lang="scss"></style>
