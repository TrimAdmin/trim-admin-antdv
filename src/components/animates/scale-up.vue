<script lang="ts" setup>
import { Motion } from 'motion/vue'

const currentRoute = computed<string>(() => useRouter().currentRoute.value.name as string)
</script>

<template>
  <Motion
    :key="currentRoute"
    :initial="{
      opacity: 0,
      scale: 0.9
    }"
    :animate="{
      opacity: 1,
      scale: 1,
      transition: { delay: 0.1 }
    }"
    :exit="{ opacity: 0, scale: 1.1 }"
  >
    <slot />
  </Motion>
</template>

<style scoped lang="scss"></style>
