<script lang="ts" setup>
import { StepProps } from 'ant-design-vue'
import FillInfo from './components/fill-info.vue'
import type { Component } from 'vue'
import { infoType } from '@/views/forms/step/types'
import ConfirmInfo from '@/views/forms/step/components/confirm-info.vue'
import Finish from '@/views/forms/step/components/finish.vue'

defineOptions({
  name: 'forms-step'
})

const current = ref<number>(0)
const fillInfoRef = ref()
const formData = reactive<infoType>({
  payAccountId: 1,
  receiver: 'DuCheng',
  receiveAccount: 'receiver@trim-admin.icu',
  receiveAccountType: 1,
  amount: 4000
} as infoType)

const stepList: Array<StepProps & { content?: Component }> = [
  {
    title: '填写付款信息',
    content: h(FillInfo, {
      formData,
      ref: fillInfoRef
    })
  },
  {
    title: '确认付款信息',
    content: h(ConfirmInfo, {
      formData
    })
  },
  {
    title: '付款完成',
    content: Finish
  }
]

function handleValidate() {
  console.log(fillInfoRef.value)
}
</script>

<template>
  <div>
    <page-header title="分步表单" subtitle="用于较为复杂的表单场景" />
    <regular-layout>
      <a-row>
        <a-col :offset="4" :span="16">
          <a-steps :current="current" :items="stepList" class="mx-auto mt-4 mb-8" />
          <component :is="stepList[current].content" />
          <div class="mt-4 text-center">
            <a-button
              v-if="current < 2"
              type="primary"
              @click="
                () => {
                  if (current === 0) {
                    handleValidate()
                  }
                  current++
                }
              "
              >下一步
            </a-button>
            <a-button
              v-if="current === 2"
              type="primary"
              @click="
                () => {
                  current = 0
                }
              "
              >再付一笔</a-button
            >
            <a-button
              v-if="current === 1"
              @click="
                () => {
                  current--
                }
              "
              >上一步
            </a-button>
          </div>
        </a-col>
      </a-row>
    </regular-layout>
  </div>
</template>

<style scoped lang="scss"></style>
