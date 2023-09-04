<script setup lang="ts">
import { useIcon } from '@/hooks'
import { Icon } from '@iconify/vue'
import { message } from '@/utils'

function handleMenuClick(item) {
  message.info(`您点击了：${item.key}`)
}
</script>

<template>
  <RegularLayout>
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
        <a-space class="bg-gray-300 px-4 py-2 w-full">
          <a-button ghost>默认按钮</a-button>
          <a-button type="primary" ghost>主要按钮</a-button>
          <a-button type="dashed" ghost>虚线按钮</a-button>
          <a-button danger ghost>危险按钮</a-button>
        </a-space>
      </a-col>
      <a-col :span="12">
        <a-divider orientation="left" plain>危险按钮</a-divider>
        <a-space class="px-4 py-2 w-full">
          <a-button danger>默认按钮</a-button>
          <a-button type="primary" danger>主要按钮</a-button>
          <a-button type="dashed" danger>虚线按钮</a-button>
          <a-button type="text" danger>文本按钮</a-button>
          <a-button type="link" danger>链接按钮</a-button>
        </a-space>
      </a-col>
      <a-col :span="12">
        <a-divider orientation="left" plain>图标按钮</a-divider>
        <a-space class="px-4 py-2 w-full">
          <a-button :icon="useIcon('ant-design:search-outlined')" type="primary" shape="circle" />
          <a-button :icon="useIcon('ant-design:search-outlined')" type="dashed" shape="circle" />
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
            type="link"
            shape="circle"
          >
            跳转
          </a-button>
        </a-space>
      </a-col>
      <a-col :span="12">
        <a-divider orientation="left" plain>按钮组合</a-divider>
        <a-space class="px-4 py-2 w-full">
          <a-button type="primary">新增</a-button>
          <a-button type="primary" danger>删除</a-button>
          <a-dropdown>
            <template #overlay>
              <a-menu @click="handleMenuClick">
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
  </RegularLayout>
</template>

<style scoped lang="scss"></style>
