<script lang="ts" setup>
import Editor from '@tinymce/tinymce-vue'
import { useConfigStoreHook } from '@/store'
import { richEditorComposable } from '@/composable'

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
  ...richEditorComposable
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

<style lang="scss" scoped></style>
