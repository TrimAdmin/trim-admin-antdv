<script setup lang="ts">
import TeamUp from '@/assets/svg/home_team_up.svg'
import Login from './components/login.vue'
import Register from '@/views/common/login/components/register.vue'

const { t } = useI18n()
const type = ref<'login' | 'register'>('login')

function handleRegister() {
  type.value = 'register'
}

function handleLogin() {
  type.value = 'login'
}
</script>

<template>
  <div class="h-screen w-screen flex justify-center">
    <div class="banner flex-1 flex items-center justify-around flex-col bg-blue-900">
      <div class="text-left w-2/3">
        <img src="@/assets/images/text_logo.png" alt="logo" class="mb-6 h-[80px]" />
        <h1 class="text-white text-[36px] font-bold">{{ t('message.welcome') }}</h1>
      </div>
      <TeamUp />
    </div>
    <div class="flex-1 my-auto">
      <Login v-if="type === 'login'" @register="handleRegister" />
      <Register v-else @login="handleLogin" />
    </div>
  </div>
  <SwitchLanguage class="absolute right-[16px] top-[16px]" />
</template>

<style scoped lang="scss"></style>
