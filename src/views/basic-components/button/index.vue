<script lang="ts" setup>
import { useIcon, useToast } from '@/hooks'

function handleMenuClick(key: string) {
  useToast().message.info(`您点击了：${key}`)
}
</script>

<template>
  <div>
    <regular-layout>
      <a-row :gutter="32">
        <a-col :span="12">
          <a-divider orientation="left" plain>按钮类型</a-divider>
          <a-space class="px-4 py-2 w-full">
            <a-button type="primary">主要按钮</a-button>
            <a-button>默认按钮</a-button>
            <a-button type="dashed">虚线按钮</a-button>
            <a-button type="text">文本按钮</a-button>
            <a-button type="link">链接按钮</a-button>
          </a-space>
        </a-col>
        <a-col :span="12">
          <a-divider orientation="left" plain>幽灵按钮</a-divider>
          <a-space class="bg-gray-300 w-full px-4 py-2">
            <a-button ghost>默认按钮</a-button>
            <a-button ghost type="primary">主要按钮</a-button>
            <a-button ghost type="dashed">虚线按钮</a-button>
            <a-button danger ghost>危险按钮</a-button>
          </a-space>
        </a-col>
        <a-col :span="12">
          <a-divider orientation="left" plain>危险按钮</a-divider>
          <a-space class="w-full px-4 py-2">
            <a-button danger>默认按钮</a-button>
            <a-button danger type="primary">主要按钮</a-button>
            <a-button danger type="dashed">虚线按钮</a-button>
            <a-button danger type="text">文本按钮</a-button>
            <a-button danger type="link">链接按钮</a-button>
          </a-space>
        </a-col>
        <a-col :span="12">
          <a-divider orientation="left" plain>图标按钮</a-divider>
          <a-space class="px-4 py-2 w-full">
            <a-button :icon="useIcon('ant-design:search-outlined')" shape="circle" type="primary" />
            <a-button :icon="useIcon('ant-design:search-outlined')" shape="circle" type="dashed" />
            <a-button :icon="useIcon('ant-design:link-outlined')" shape="circle" />
            <a-button :icon="useIcon('ant-design:close-outlined')" danger shape="circle" />
            <a-button
              :icon="
                useIcon('ant-design:search-outlined', {
                  style: {
                    marginRight: 4
                  }
                })
              "
              type="primary"
              >搜索
            </a-button>
            <a-button
              :icon="
                useIcon('ant-design:link-outlined', {
                  style: {
                    marginRight: 4
                  }
                })
              "
              shape="circle"
              type="link"
            >
              跳转
            </a-button>
          </a-space>
        </a-col>
        <a-col :span="12">
          <a-divider orientation="left" plain>按钮组合</a-divider>
          <a-space class="px-4 py-2 w-full">
            <a-button type="primary">新增</a-button>
            <a-button danger type="primary">删除</a-button>
            <a-dropdown>
              <template #overlay>
                <a-menu @click="({ key }) => handleMenuClick(key as string)">
                  <a-menu-item key="1">操作1</a-menu-item>
                  <a-menu-item key="2">操作2</a-menu-item>
                  <a-menu-item key="3">操作3</a-menu-item>
                </a-menu>
              </template>
              <a-button class="flex-c">
                更多操作
                <Icon icon="ant-design:down-outlined" inline style="margin-left: 4px" />
              </a-button>
            </a-dropdown>
          </a-space>
        </a-col>
      </a-row>
    </regular-layout>
  </div>
</template>

<style lang="scss" scoped></style>
