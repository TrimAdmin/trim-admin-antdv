<script lang="ts" setup>
import { CI18n } from '@/constants'
import { useConfigStoreHook } from '@/store'
import { ITrimConfig } from '@/types/trim-config'

const selectedKeys = computed<Array<string>>(() => [useConfigStoreHook().i18n])

function handleChangeI18n(key: ITrimConfig['defaultI18n']) {
  console.log(key)
  useConfigStoreHook().setI18n(key)
}
</script>

<template>
  <div class="flex items-center hover:ant-bg-primary p-2">
    <a-dropdown arrow placement="bottom">
      <Icon :height="18" class="cursor-pointer hover:ant-text-color-primary" icon="ooui:language" />
      <template #overlay>
        <a-menu
          v-model:selected-keys="selectedKeys"
          @click="({ key }) => handleChangeI18n(key as ITrimConfig['defaultI18n'])"
        >
          <a-menu-item v-for="item in Object.entries(CI18n)" :key="item[0] as string">
            {{ item[1] }}
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<style lang="scss" scoped></style>
