<script lang="ts" setup>
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
    <a-spin :size="size" :spinning="loading" :tip="tip" v-bind="$attrs" />
  </div>
</template>

<style lang="scss" scoped>
.full-loading {
  background-color: v-bind('props.lightBackgroundColor');
}

.dark .full-loading {
  background-color: v-bind('props.darkBackgroundColor');
}
</style>
