<script setup lang="ts">
import { useUserStoreHook } from '@/store'

const { t } = useI18n()
</script>

<template>
  <div class="w-[500px] min-w-[500px] mx-auto relative">
    <a-typography-title :level="2">{{ t('message.login') }}</a-typography-title>
    <a-form>
      <a-form-item>
        <a-input :placeholder="t('message.username-placeholder')" size="large" />
      </a-form-item>
      <a-form-item>
        <a-input-password :placeholder="t('message.password-placeholder')" size="large" />
      </a-form-item>
      <a-form-item>
        <div class="flex justify-between items-center">
          <a-checkbox>{{ t('message.remember-me') }}</a-checkbox>
          <a-button type="link">{{ t('message.forget-password') }}</a-button>
        </div>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" block size="large" @click="useUserStoreHook().login()">{{ t('message.login') }}</a-button>
      </a-form-item>
      <a-form-item>
        <a-space>
          <a-button>{{ t('message.register') }}</a-button>
        </a-space>
      </a-form-item>
    </a-form>
  </div>
</template>

<style scoped lang="scss"></style>
