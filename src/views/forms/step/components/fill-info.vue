<script lang="ts" setup>
import { FormInstance } from 'ant-design-vue'
import { infoType } from '@/views/forms/step/types'
import { payAccountList, receiveAccountTypeList } from '@/views/forms/step/data.ts'

const props = defineProps<{
  formData: infoType
}>()

const formRef = shallowRef<FormInstance>()
const formData = reactive<infoType>(props.formData)
const formRules = {
  payAccountId: {
    required: true
  },
  receiver: {
    required: true
  },
  receiveAccount: {
    required: true
  },
  receiveAccountType: {
    required: true
  },
  amount: {
    required: true
  }
}

async function validate() {
  try {
    await formRef.value?.validateFields()
    return true
  } catch (errorInfo) {
    return false
  }
}

defineExpose({
  validate
})
</script>

<template>
  <a-form ref="formRef" :label-col="{ span: 6 }" :model="formData" :rules="formRules" :wrapper-col="{ span: 12 }">
    <a-form-item label="付款账户" name="payAccountId">
      <a-select v-model:value="formData.payAccountId">
        <a-select-option v-for="item in payAccountList" :key="item.value" :value="item.value"
          >{{ item.label }}
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="收款账户" name="receiveAccount">
      <a-input v-model:value="formData.receiveAccount">
        <template #addonBefore>
          <a-select v-model:value="formData.receiveAccountType" class="w-[90px]">
            <a-select-option v-for="item in receiveAccountTypeList" :key="item.value" :value="item.value"
              >{{ item.label }}
            </a-select-option>
          </a-select>
        </template>
      </a-input>
    </a-form-item>
    <a-form-item label="收款人姓名" name="receiver">
      <a-input v-model:value="formData.receiver" />
    </a-form-item>
    <a-form-item label="付款金额" name="amount">
      <a-input-number
        v-model:value="formData.amount"
        :formatter="(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
        :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
        class="w-full"
        prefix="￥"
      />
    </a-form-item>
  </a-form>
</template>

<style lang="scss" scoped></style>
