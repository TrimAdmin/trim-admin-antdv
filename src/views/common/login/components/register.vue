<script lang="ts" setup>
const { t } = useI18n()

const registerFormRef = shallowRef()
const registerFormModel = reactive<IRegisterParams>({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})
const registerFormRules = reactive({
  username: [{ required: true, message: t('message.username-placeholder') }],
  email: [{ required: true, message: t('message.email-placeholder') }],
  password: [{ required: true, message: t('message.password-placeholder') }],
  confirmPassword: [{ required: true, message: t('message.password-placeholder') }]
})
const emit = defineEmits<{
  (e: 'login'): void
}>()
</script>

<template>
  <div class="w-[500px] min-w-[500px] mx-auto relative">
    <a-typography-title :level="2">{{ t('message.register') }}</a-typography-title>
    <a-form ref="registerFormRef" :model="registerFormModel">
      <a-form-item :rules="registerFormRules.username" name="username">
        <a-input
          v-model:value="registerFormModel.username"
          :placeholder="t('message.username-placeholder')"
          size="large"
        />
      </a-form-item>
      <a-form-item :rules="registerFormRules.email" name="email">
        <a-input v-model:value="registerFormModel.email" :placeholder="t('message.email-placeholder')" size="large" />
      </a-form-item>
      <a-form-item :rules="registerFormRules.password" name="password">
        <a-input-password
          v-model:value="registerFormModel.password"
          :placeholder="t('message.password-placeholder')"
          size="large"
        />
      </a-form-item>
      <a-form-item :rules="registerFormRules.confirmPassword" name="confirmPassword">
        <a-input-password
          v-model:value="registerFormModel.confirmPassword"
          :placeholder="t('message.confirm-password-placeholder')"
          size="large"
        />
      </a-form-item>
      <a-form-item>
        <a-button block size="large" type="primary">
          {{ t('message.register') }}
        </a-button>
      </a-form-item>
      <a-form-item>
        <div class="text-center">
          <a-button class="text-center" type="link" @click="() => emit('login')">已有账号？去登录</a-button>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<style scoped lang="scss"></style>
