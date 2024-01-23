<script lang="ts" setup>
import { uploadComposable } from '@/composable'
import { useIcon } from '@/hooks'
import { FileType } from 'ant-design-vue/es/upload/interface'

const props = withDefaults(
  defineProps<{
    accept?: string
    modelValue: any[]
    listType?: 'text' | 'picture' | 'picture-card'
    directory?: boolean
    disabled?: boolean
    maxCount?: number
    multiple?: boolean
    showUploadList?: boolean
    drag?: boolean
    hint?: string
    emitTrigger?: 'change' | 'uploaded'
  }>(),
  {
    accept: 'image/*',
    listType: 'picture-card',
    maxCount: 9,
    showUploadList: true
  }
)

const emits = defineEmits<{
  (e: 'update:modelValue', fileList: any[]): void
}>()

// 文件上传改变
function handleChange({ file, fileList }: { file: FileType; fileList: FileType[] }) {
  console.log(file)
}
</script>

<template>
  <a-upload-dragger
    v-if="drag"
    :file-list="modelValue"
    v-bind="{ ...uploadComposable, ...props }"
    @change="handleChange"
  >
    <component :is="useIcon('ant-design:inbox-outlined')" class="ant-upload-drag-icon" />
    <p class="ant-upload-text">{{ $t('message.click-or-drag-upload') }}</p>
    <p class="ant-upload-hint mb-0">
      {{ hint || $t('message.upload-hint') }}
    </p>
  </a-upload-dragger>
  <a-upload v-else :file-list="modelValue" v-bind="{ ...uploadComposable, ...props }" @change="handleChange">
    <template v-if="listType === 'text'">
      <a-button :icon="useIcon('ant-design:upload-outlined')">{{ $t('button.click-upload') }} </a-button>
    </template>
    <template v-if="listType === 'picture-card'"></template>
  </a-upload>
</template>

<style scoped lang="scss"></style>
