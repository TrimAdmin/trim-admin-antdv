<script lang="ts" setup>
import { useUserStoreHook } from '@/store'
import { cryptoMD5, message } from '@/utils'
import { toUpper } from 'lodash'

const { t } = useI18n()
const loginFormRef = shallowRef()
const captcha = ref<string>()
const captchaRef = shallowRef()
const loginFormModel = reactive<IUsernameLoginParams>({
  username: '',
  password: '',
  captcha: '',
  remember: false
})
const loginFormRules = reactive({
  username: [{ required: true, message: t('message.username-placeholder') }],
  password: [{ required: true, message: t('message.password-placeholder') }],
  captcha: [{ required: true, message: t('message.captcha-placeholder') }]
})
const emit = defineEmits<{
  (e: 'register'): void
}>()

async function handleLogin() {
  const values = await loginFormRef.value.validateFields()
  // console.log(loginFormModel)
  if (toUpper(loginFormModel.captcha) !== toUpper(captcha.value)) {
    message.error('验证码错误')
    captchaRef.value.draw()
    return
  }
  if (values) {
    await useUserStoreHook().login({
      ...loginFormModel,
      password: cryptoMD5(loginFormModel.password)
    })
  }
}

onMounted(() => {
  captchaRef.value.draw()
})
</script>

<template>
  <div class="w-[500px] min-w-[500px] mx-auto relative">
    <a-typography-title :level="2">{{ t('message.login') }}</a-typography-title>
    <a-form ref="loginFormRef" :model="loginFormModel">
      <a-form-item :rules="loginFormRules.username" name="username">
        <a-input
          v-model:value="loginFormModel.username"
          :placeholder="t('message.username-placeholder')"
          size="large"
        />
      </a-form-item>
      <a-form-item :rules="loginFormRules.password" name="password">
        <a-input-password
          v-model:value="loginFormModel.password"
          :placeholder="t('message.password-placeholder')"
          size="large"
        />
      </a-form-item>
      <a-form-item :rules="loginFormRules.captcha" name="password">
        <div class="flex">
          <a-input
            v-model:value="loginFormModel.captcha"
            :placeholder="t('message.captcha-placeholder')"
            size="large"
          />
          <Captcha ref="captchaRef" v-model="captcha" />
        </div>
      </a-form-item>
      <a-form-item>
        <div class="flex justify-between items-center">
          <a-checkbox v-model:checked="loginFormModel.remember">{{ t('message.remember-me') }}</a-checkbox>
          <a-button type="link">{{ t('message.forget-password') }}</a-button>
        </div>
      </a-form-item>
      <a-form-item>
        <a-button block size="large" type="primary" @click="handleLogin" @keyup.enter="handleLogin">
          {{ t('message.login') }}
        </a-button>
      </a-form-item>
      <a-form-item>
        <div class="text-center">
          <a-button type="link" @click="() => emit('register')">{{ t('message.to-register') }}</a-button>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<style lang="scss" scoped>
.a-login {
  background-color: white;
}
</style>
