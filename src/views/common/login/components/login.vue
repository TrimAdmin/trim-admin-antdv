<script setup lang="ts">
import { useUserStoreHook } from '@/store'

const { t } = useI18n()
const loginFormRef = shallowRef()
const loginFormModel = reactive<IUsernameLoginParams>({
  username: '',
  password: '',
  remember: false
})
const loginFormRules = reactive({
  username: [{ required: true, message: t('message.username-placeholder') }],
  password: [{ required: true, message: t('message.password-placeholder') }]
})

async function handleLogin() {
  const values = await loginFormRef.value.validateFields()
  console.log(loginFormModel)
  if (values) {
    useUserStoreHook().login(loginFormModel)
  }
}
</script>

<template>
  <div class="w-[500px] min-w-[500px] mx-auto relative">
    <a-typography-title :level="2">{{ t('message.login') }}</a-typography-title>
    <a-form ref="loginFormRef" :model="loginFormModel">
      <a-form-item name="username" :rules="loginFormRules.username">
        <a-input v-model:value="loginFormModel.username" :placeholder="t('message.username-placeholder')" size="large" />
      </a-form-item>
      <a-form-item name="password" :rules="loginFormRules.password">
        <a-input-password v-model:value="loginFormModel.password" :placeholder="t('message.password-placeholder')" size="large" />
      </a-form-item>
      <a-form-item>
        <div class="flex justify-between items-center">
          <a-checkbox v-model:checked="loginFormModel.remember">{{ t('message.remember-me') }}</a-checkbox>
          <a-button type="link">{{ t('message.forget-password') }}</a-button>
        </div>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" block size="large" @click="handleLogin">{{ t('message.login') }}</a-button>
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
