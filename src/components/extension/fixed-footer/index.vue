<script lang="ts" setup>
withDefaults(
  defineProps<{
    align: 'start' | 'center' | 'end' | 'between' | 'evenly' | 'around'
  }>(),
  {
    align: 'center'
  }
)
</script>

<template>
  <div :class="`fixed-footer px-4 fixed bottom-0 z-[900] right-0 h-[64px] flex items-center w-full justify-${align}`">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.fixed-footer {
  color: var(--trim-text-color);
  background-color: var(--trim-bg-color);
  box-shadow: var(--trim-box-shadow-md);
}
</style>
