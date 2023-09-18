<script setup lang="ts">
import Feature from '@/views/common/home/components/feature.vue'
import Dependencies from '@/views/common/home/components/dependencies.vue'
</script>

<template>
  <LayoutWithHeader no-background title="欢迎使用Trim Admin Antdv" subtitle="一款开箱即用的中后台框架">
    <template #right>
      <a-button-group size="large">
        <a-button type="primary" class="flex-c">
          <template #icon>
            <Icon icon="ant-design:file-text-outlined" inline class="mr-1" />
          </template>
          <a href="http://trim-admin.gitee.io/trim-admin-antdv-doc/" target="_blank">框架文档</a>
        </a-button>
        <a-dropdown>
          <a-button class="flex-c">
            <template #icon>
              <Icon icon="ant-design:code-outlined" inline class="mr-1" />
            </template>
            代码仓库
          </a-button>
          <template #overlay>
            <a-menu>
              <a-menu-item key="github" class="flex-c">
                <template #icon>
                  <Icon icon="ant-design:github-outlined" :height="16" />
                </template>
                <a href="" target="_blank">Github</a>
              </a-menu-item>
              <a-menu-item key="gitee">
                <template #icon>
                  <Icon icon="ant-design:github-outlined" :height="16" />
                </template>
                <a href="https://gitee.com/trim-admin/trim-admin-antdv" target="_blank">Gitee</a>
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
