<script setup lang="ts">
import { LoadingType } from '@/directives/loading.ts'

const props = withDefaults(defineProps<LoadingType>(), {
  tip: '加载中...',
  size: 'large',
  loading: false,
  lightBackgroundColor: 'white',
  darkBackgroundColor: '#141414'
})
</script>

<template>
  <div v-if="loading" class="full-loading absolute top-0 left-0 z-[996] w-full h-full flex items-center justify-center">
    <a-spin v-bind="$attrs" :size="size" :tip="tip" :spinning="loading" />
  </div>
</template>

<style scoped lang="scss">
.dark .full-loading {
  background-color: v-bind('props.darkBackgroundColor');
}

.full-loading {
  background-color: v-bind('props.lightBackgroundColor');
}
</style>
