<script lang="ts" setup>
withDefaults(
  defineProps<{
    // 是否无背景
    transparent?: boolean
    // 阴影配置
    shadow?: boolean
  }>(),
  {
    shadow: true
  }
)

const slots = useSlots()
</script>

<template>
  <div
    :class="`regular-layout rounded-md flex flex-col
      ${transparent ? '' : 'bg'}
      ${shadow && !transparent ? 'shadow' : ''}
    `"
  >
    <div v-if="slots.header" class="header">
      <slot name="header" />
    </div>
    <div :class="transparent || 'p-3'">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.regular-layout {
  max-width: calc(100% - 32px);
  margin: 16px;
  color: var(--trim-text-color);

  .header {
    padding: 12px;
    border-bottom: 1px solid var(--trim-border-color-light);
  }
}

.shadow {
  box-shadow: var(--trim-box-shadow-md);
}

.bg {
  background-color: var(--trim-bg-color);
}
</style>
