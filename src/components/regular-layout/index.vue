<script lang="ts" setup>
withDefaults(
  defineProps<{
    // 是否无背景
    transparent?: boolean
    // 阴影配置
    shadow?: boolean
    // 无边框
    borderless?: boolean
  }>(),
  {
    shadow: true
  }
)

const slots = useSlots()
</script>

<template>
  <a-card
    :class="`regular-layout flex flex-col
      ${transparent ? '' : 'bg'}
      ${shadow && !transparent ? 'need-shadow' : ''}
    `"
    :bordered="!borderless"
  >
    <div v-if="slots.header" class="header">
      <slot name="header" />
    </div>
    <div>
      <slot />
    </div>
  </a-card>
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

.need-shadow {
  box-shadow: var(--trim-box-shadow-md);
}
</style>
