<script lang="ts" setup>
import Feature from '@/views/common/home/components/feature.vue'
import Dependencies from '@/views/common/home/components/dependencies.vue'
</script>

<template>
  <div>
    <page-header subtitle="一款开箱即用的中后台框架" title="欢迎使用Trim Admin Antdv">
      <template #right>
        <a-button-group size="large">
          <a-button class="flex-c" type="primary">
            <template #icon>
              <Icon class="mr-1" icon="ant-design:file-text-outlined" inline />
            </template>
            <a href="http://trim-admin.gitee.io/trim-admin-antdv-doc/" target="_blank">框架文档</a>
          </a-button>
          <a-dropdown>
            <a-button class="flex-c">
              <template #icon>
                <Icon class="mr-1" icon="ant-design:code-outlined" inline />
              </template>
              代码仓库
            </a-button>
            <template #overlay>
              <a-menu>
                <a-menu-item key="github" class="flex-c">
                  <template #icon>
                    <Icon :height="16" icon="ant-design:github-outlined" />
                  </template>
                  <a href="" target="_blank">Github</a>
                </a-menu-item>
                <a-menu-item key="gitee">
                  <template #icon>
                    <Icon :height="16" icon="ant-design:github-outlined" />
                  </template>
                  <a href="https://gitee.com/trim-admin/trim-admin-antdv" target="_blank">Gitee</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </a-button-group>
      </template>
    </page-header>
    <regular-layout no-background>
      <Feature class="mb-4" />
      <Dependencies />
    </regular-layout>
  </div>
</template>

<style lang="scss" scoped></style>
