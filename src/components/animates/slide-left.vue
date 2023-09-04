<script lang="ts" setup>
const currentRoute = computed<string>(() => useRouter().currentRoute.value.name as string)
</script>

<template>
  <Motion
    :key="currentRoute"
    :initial="{
      opacity: 0,
      x: 50
    }"
    :animate="{
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 }
    }"
    :exit="{ opacity: 0, x: -50 }"
  >
    <slot />
  </Motion>
</template>

<style scoped lang="scss"></style>
