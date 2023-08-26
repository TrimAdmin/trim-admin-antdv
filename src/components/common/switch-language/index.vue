<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { CI18n } from '@/constants'
import { useConfigStoreHook } from '@/store'
import { Key } from 'ant-design-vue/es/_util/type'

const selectedKeys = computed<Array<string>>(() => [useConfigStoreHook().i18n])

function handleChangeI18n(key: Key) {
  useConfigStoreHook().setI18n(key as string)
}
</script>

<template>
  <a-dropdown arrow>
    <Icon :height="18" icon="ooui:language" class="cursor-pointer" />
    <template #overlay>
      <a-menu v-model:selected-keys="selectedKeys" @click="({ key }) => handleChangeI18n(key)">
        <a-menu-item v-for="item in Object.entries(CI18n)" :key="item[0]">
          {{ item[1] }}
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<style scoped lang="scss"></style>
