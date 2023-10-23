<script lang="ts" setup>
const route = useRoute()
const loading = ref<boolean>(true)

function handleLoad() {
  console.log('loaded')
  loading.value = false
}
</script>

<template>
  <div v-loading="loading" class="h-full">
    <iframe :src="route.meta.iframeHref" class="h-full w-full" @load="handleLoad"></iframe>
  </div>
</template>

<style lang="scss" scoped>
iframe {
  border: none;
}
</style>
