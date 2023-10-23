<script lang="ts" setup>
import { useI18nHook } from '@/hooks'
import { handleCloseTag, handleJumpTo } from '@/router/utils.ts'

const { t } = useI18nHook()
const route = useRoute()
</script>

<template>
  <RegularLayout class="flex-c">
    <a-result :sub-title="t('message.500')" status="500" title="500">
      <template #extra>
        <a-button
          type="primary"
          @click="
            () => {
              handleCloseTag(route.name!.toString())
              handleJumpTo('home')
            }
          "
          >{{ t('message.back-home') }}
        </a-button>
      </template>
    </a-result>
  </RegularLayout>
</template>

<style lang="scss" scoped></style>
