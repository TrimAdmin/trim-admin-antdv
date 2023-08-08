<script setup lang="ts">
import TeamUp from '@/assets/svg/undraw_team_up_re_84ok.svg'
import Login from './components/login.vue'
</script>

<template>
  <div class="h-screen w-screen flex justify-center">
    <div class="banner flex-1 flex items-center justify-around flex-col bg-blue-900">
      <div class="text-left w-2/3">
        <img src="@/assets/images/text_logo.png" alt="logo" class="mb-6 h-[80px]" />
        <h1 class="text-white text-[36px] font-bold">欢迎使用DC Admin</h1>
      </div>
      <TeamUp />
    </div>
    <div class="flex-1 my-auto">
      <Login />
    </div>
  </div>
  <SwitchLanguage class="absolute right-[16px] top-[16px]" />
</template>

<style scoped lang="scss"></style>
