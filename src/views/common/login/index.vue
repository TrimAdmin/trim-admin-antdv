<script setup lang="ts">
import TeamUp from '@/assets/svg/undraw_team_up_re_84ok.svg'
import Login from './components/login.vue'
</script>

<template>
  <div class="h-screen w-screen flex justify-center">
    <div class="banner flex-1 flex items-center justify-around flex-col bg-blue-500">
      <div class="text-left w-2/3">
        <img src="" alt="logo" class="mb-6" />
        <ATypographyTitle class="!text-white">欢迎使用DC Admin</ATypographyTitle>
      </div>
      <TeamUp />
    </div>
    <div class="flex-1 my-auto">
      <Login />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
