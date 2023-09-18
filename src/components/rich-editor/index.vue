<script lang="ts" setup>
import Editor from '@tinymce/tinymce-vue'
import { useConfigStoreHook } from '@/store'

const props = defineProps<{
  modelValue: string | undefined
  placeholder?: string
  selector?: string
  readonly?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string | undefined]
}>()
const value = ref<string>(props.modelValue || '')
const i18n = computed<string>(() => useConfigStoreHook().i18n)

// 官方文档 https://www.tiny.cloud/docs/tinymce/6/
const init = {
  selector: props.selector || 'textarea',
  placeholder: props.placeholder || '请输入',
  language: i18n.value,
  readonly: props.readonly,
  // 插件
  plugins: 'quickbars insertdatetime pagebreak autolink link image media lists advlist charmap preview fullscreen wordcount',
  // 工具栏
  toolbar:
    'undo redo | styles | bold italic underline | blocks | alignleft aligncenter alignright | insertdatetime pagebreak quicktable | link image media | charmap | preview fullscreen',
  // 选中后的工具栏
  quickbars_selection_toolbar: 'bold italic underline | blocks | quicklink blockquote',
  // 图片上传路径
  images_upload_url: 'https://www.test.com/upload',
  // 图片上传使用cookie
  images_upload_credentials: true,
  // 图片上传手动处理
  images_upload_handler: (blobInfo: any, progress: (value: number) => void) =>
    new Promise((_, reject) => {
      console.log(blobInfo, progress)
      reject('演示环境禁止操作')
    })
}

watch(
  () => value.value,
  (newVal) => {
    emit('update:modelValue', newVal)
  }
)
</script>

<template>
  <Editor v-model="value" :init="init" />
</template>

<style scoped lang="scss"></style>
