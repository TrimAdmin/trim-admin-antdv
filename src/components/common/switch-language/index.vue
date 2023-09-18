<script setup lang="ts">
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
  <div class="flex items-center hover:bg-gray-50 p-2 dark:hover:bg-slate-700">
    <a-dropdown arrow placement="bottom">
      <Icon :height="18" icon="ooui:language" class="cursor-pointer hover:text-blue-500" />
      <template #overlay>
        <a-menu v-model:selected-keys="selectedKeys" @click="({ key }) => handleChangeI18n(key as ITrimConfig['defaultI18n'])">
          <a-menu-item v-for="item in Object.entries(CI18n)" :key="item[0]">
            {{ item[1] }}
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<style scoped lang="scss"></style>
