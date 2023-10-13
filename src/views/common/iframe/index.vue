<script lang="ts" setup>
const route = useRoute()
const loading = ref<boolean>(true)

function handleLoad() {
  console.log('loaded')
  loading.value = false
}
</script>

<template>
  <RegularLayout v-loading="loading" no-background>
    <iframe :src="route.meta.iframeHref" class="h-full w-full" @load="handleLoad"></iframe>
  </RegularLayout>
</template>

<style scoped lang="scss">
iframe {
  border: none;
}
</style>
