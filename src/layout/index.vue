<script lang="ts" setup>
import Normal from './normal.vue'
import Top from './top.vue'
import Mix from './mix.vue'
import { useConfigStoreHook } from '@/store'
import type { Component } from 'vue'

const Layout = computed<Component>(() => {
  switch (useConfigStoreHook().config.theme.layout) {
    case 'normal':
      return Normal
    case 'top':
      return Top
    case 'mix':
      return Mix
    default:
      return Normal
  }
})
</script>

<template>
  <component :is="Layout" />
</template>

<style scoped lang="scss"></style>
