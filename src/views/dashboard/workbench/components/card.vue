<script lang="ts" setup>
defineProps<{
  title?: string
  noHeader?: boolean
}>()
</script>

<template>
  <a-card
    :body-style="{
      padding: '20px'
    }"
  >
    <div v-if="!noHeader" class="flex-bc mb-[16px]">
      <div class="text-[16px] font-bold">{{ title }}</div>
      <div>
        <slot name="right" />
      </div>
    </div>
    <div>
      <slot />
    </div>
  </a-card>
</template>

<style scoped lang="scss"></style>
