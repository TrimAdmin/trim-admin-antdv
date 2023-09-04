<script lang="ts" setup>
const currentRoute = computed<string>(() => useRouter().currentRoute.value.name as string)
</script>

<template>
  <Motion
    :key="currentRoute"
    :initial="{
      opacity: 0
    }"
    :animate="{
      opacity: 1,
      transition: { delay: 0.1 }
    }"
    :exit="{ opacity: 0 }"
  >
    <slot />
  </Motion>
</template>

<style scoped lang="scss"></style>
