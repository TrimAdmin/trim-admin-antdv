<script lang="ts" setup>
import Editor from '@tinymce/tinymce-vue'

const apiKey = import.meta.env.VITE_TINYMCE_API_KEY
</script>

<template>
  <Editor :api-key="apiKey" />
</template>

<style scoped lang="scss"></style>
