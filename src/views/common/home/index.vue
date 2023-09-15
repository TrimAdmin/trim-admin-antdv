<script setup lang="ts">
import { Key } from 'ant-design-vue/es/_util/type'
import Feature from '@/views/common/home/components/feature.vue'
import Dependencies from '@/views/common/home/components/dependencies.vue'

function handleCodeClick(key: Key) {
  if (key === 'github') {
    // window.open('')
  } else {
    window.open('https://gitee.com/trim-admin/trim-admin-antdv')
  }
}
</script>

<template>
  <LayoutWithHeader no-background title="欢迎使用Trim Admin Antdv" subtitle="一款开箱即用的中后台框架">
    <template #right>
      <a-button-group size="large">
        <a-button type="primary" class="flex-c">
          <template #icon>
            <Icon icon="ant-design:file-text-outlined" inline class="mr-1" />
          </template>
          框架文档
        </a-button>
        <a-dropdown>
          <a-button class="flex-c">
            <template #icon>
              <Icon icon="ant-design:code-outlined" inline class="mr-1" />
            </template>
            代码仓库
          </a-button>
          <template #overlay>
            <a-menu @click="({ key }) => handleCodeClick(key)">
              <a-menu-item key="github" class="flex-c">
                <template #icon>
                  <Icon icon="ant-design:github-outlined" :height="16" />
                </template>
                Github
              </a-menu-item>
              <a-menu-item key="gitee">
                <template #icon>
                  <Icon icon="ant-design:github-outlined" :height="16" />
                </template>
                Gitee
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-button-group>
    </template>
    <Feature class="mb-4" />
    <Dependencies />
  </LayoutWithHeader>
</template>

<style scoped lang="scss"></style>
