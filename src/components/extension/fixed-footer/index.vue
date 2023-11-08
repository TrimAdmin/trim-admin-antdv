<script lang="ts" setup></script>

<template>
  <div class="fixed-footer fixed bottom-0 z-[900] right-0 h-[64px] flex-c w-full">
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
