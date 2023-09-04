<script setup lang="ts">
import router from '@/router'

function handleJump() {
  router.push({ name: 'basic-components-button' })
}
</script>

<template>
  <RegularLayout no-background>
    <a-button type="primary" @click="handleJump">aaa</a-button>
  </RegularLayout>
</template>

<style scoped lang="scss"></style>
