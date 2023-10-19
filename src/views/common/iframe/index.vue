<script lang="ts" setup>
const route = useRoute()
const loading = ref<boolean>(true)

function handleLoad() {
  console.log('loaded')
  loading.value = false
}
</script>

<template>
  <div class="h-full">
    <regular-layout v-loading="loading" no-background>
      <iframe :src="route.meta.iframeHref" class="h-full w-full" @load="handleLoad"></iframe>
    </regular-layout>
  </div>
</template>

<style scoped lang="scss">
iframe {
  border: none;
}
</style>
