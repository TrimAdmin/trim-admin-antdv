<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { CI18n } from '@/constants'
import { useConfigStoreHook } from '@/store'

const selectedKeys = computed(() => [useConfigStoreHook().i18n])

function handleChangeI18n({ key }: { key: string }) {
  useConfigStoreHook().setI18n(key)
}
</script>

<template>
  <a-dropdown>
    <a-button>
      <template #icon>
        <Icon icon="ooui:language" inline :height="20" />
      </template>
    </a-button>
    <template #overlay>
      <a-menu v-model:selected-keys="selectedKeys" @click="handleChangeI18n">
        <a-menu-item v-for="item in Object.entries(CI18n)" :key="item[0]">
          {{ item[1] }}
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<style scoped lang="scss"></style>
