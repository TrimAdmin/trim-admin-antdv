<script lang="ts" setup>
import { StepProps } from 'ant-design-vue'
import FillInfo from './components/fill-info.vue'
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

const stepList: Array<StepProps> = [
  {
    title: '填写付款信息'
  },
  {
    title: '确认付款信息'
  },
  {
    title: '付款完成'
  }
]

// 下一步
async function handleNext() {
  if ((current.value === 0 && (await fillInfoRef.value.validate())) || current.value !== 0) {
    current.value++
  }
}
</script>

<template>
  <div>
    <page-header subtitle="用于较为复杂的表单场景" title="分步表单" />
    <regular-layout>
      <a-row>
        <a-col :offset="4" :span="16">
          <a-steps :current="current" :items="stepList" class="mx-auto mt-4 mb-8" />
          <FillInfo v-if="current === 0" ref="fillInfoRef" :form-data="formData" />
          <ConfirmInfo v-if="current === 1" :form-data="formData" />
          <Finish v-if="current === 2" />
          <div class="mt-4 text-center">
            <a-button v-if="current < 2" type="primary" @click="handleNext">下一步</a-button>
            <a-button
              v-if="current === 2"
              type="primary"
              @click="
                () => {
                  current = 0
                }
              "
              >再付一笔
            </a-button>
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

<style lang="scss" scoped></style>
