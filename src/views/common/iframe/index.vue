<script lang="ts" setup>
const route = useRoute()
const loading = ref<boolean>(true)

function handleLoad() {
  console.log('loaded')
  loading.value = false
}
</script>

<template>
  <iframe :src="route.meta.iframeHref" class="h-full w-full" @load="handleLoad"></iframe>
  <ASpin v-if="loading" class="h-full w-full absolute z-999 left-0 top-0 flex-c flex-col bg-white bg-opacity-30" size="large" tip="加载中..." />
</template>

<style scoped lang="scss">
iframe {
  border: none;
}
</style>
