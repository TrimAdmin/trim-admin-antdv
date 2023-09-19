<script lang="ts" setup>
import { useI18nHook } from '@/hooks'

const router = useRouter()
const { t } = useI18nHook()

function backHome() {
  router.replace({ name: 'home' })
}
</script>

<template>
  <RegularLayout class="flex-c">
    <a-result status="403" title="403" :sub-title="t('message.403')">
      <template #extra>
        <a-button type="primary" @click="backHome">{{ t('message.back-home') }}</a-button>
      </template>
    </a-result>
  </RegularLayout>
</template>

<style scoped lang="scss"></style>
