<script setup lang="ts">
import { ITabObject, useCommonStoreHook } from '@/store'
import { Key } from 'ant-design-vue/es/_util/type'

const router = useRouter()
const tabsList = computed<Array<ITabObject>>(() => useCommonStoreHook().tabsList)
const currentTab = computed<string>(() => useCommonStoreHook().currentRouteName)

function handleChange(key: Key) {
  router.push({ name: key as string })
}

function handleClose(key: Key) {
  useCommonStoreHook().removeTab(key as string)
}

function handleTabAction(action: string, key: string) {
  switch (action) {
    // 刷新当前
    case 'refresh':
      useCommonStoreHook().refreshRoute()
      break
    // 关闭当前
    case 'close':
      handleClose(key)
      break
    // 关闭其他
    case 'close-other':
      useCommonStoreHook().removeOtherTabs(key as string)
      break
    // 关闭左侧
    case 'close-left':
      useCommonStoreHook().removeLeftTabs(key as string)
      break
    // 关闭右侧
    case 'close-right':
      useCommonStoreHook().removeRightTabs(key as string)
      break
    // 关闭所有
    case 'close-all':
      useCommonStoreHook().closeAllTabs()
      break
    default:
      break
  }
}
</script>

<template>
  <div class="simple-tab bg-white dark:bg-[#001529] w-full block p-1">
    <a-tabs hide-add :active-key="currentTab" size="small" @change="handleChange">
      <a-tab-pane v-for="(item, index) in tabsList" :key="item.key" :closable="false">
        <template #tab>
          <a-dropdown :trigger="['contextmenu']" placement="bottomLeft">
            <div class="flex items-center">
              {{ item.title }}
              <div v-if="!item.tabAffix" class="h-full flex items-center ml-2 cursor-pointer">
                <Icon icon="ant-design:close-outlined" :height="14" inline @click.stop="handleClose(item.key)" />
              </div>
            </div>
            <template #overlay>
              <a-menu @click="({ key }) => handleTabAction(key as string, item.key)">
                <a-menu-item key="refresh">
                  <div class="flex items-center">
                    <Icon icon="ant-design:sync-outlined" class="mr-1" inline />
                    重新加载
                  </div>
                </a-menu-item>
                <a-menu-item key="close" :disabled="item.tabAffix">
                  <div class="flex items-center">
                    <Icon icon="ant-design:close-outlined" class="mr-1" inline />
                    关闭标签页
                  </div>
                </a-menu-item>
                <a-divider class="my-2" />
                <a-menu-item key="close-other" :disabled="tabsList.length === tabsList.filter((item) => item.tabAffix).length + 1">
                  <div class="flex items-center">
                    <Icon icon="ant-design:aim-outlined" class="mr-1" inline />
                    关闭其他标签页
                  </div>
                </a-menu-item>
                <a-menu-item key="close-left" :disabled="index === 0 || index === 1">
                  <div class="flex items-center">
                    <Icon icon="ant-design:vertical-right-outlined" class="mr-1" inline />
                    关闭左侧标签页
                  </div>
                </a-menu-item>
                <a-menu-item key="close-right" :disabled="index === tabsList.length - 1">
                  <div class="flex items-center">
                    <Icon icon="ant-design:vertical-left-outlined" class="mr-1" inline />
                    关闭右侧标签页
                  </div>
                </a-menu-item>
                <a-menu-item key="close-all">
                  <div class="flex items-center">
                    <Icon icon="ant-design:minus-outlined" class="mr-1" inline />
                    关闭所有标签页
                  </div>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </template>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style lang="scss" scoped>
.simple-tab {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

:deep(.ant-tabs-nav) {
  margin: 0;

  &::before {
    border: none;
  }
}

:deep(.ant-tabs-tab) {
  background: none !important;
  padding: 4px 8px !important;
  font-size: 14px !important;
  border: 1px solid rgba(5, 5, 5, 0.06);
  border-radius: 4px !important;
  margin-left: 4px !important;

  &:first-child {
    margin-left: 0 !important;
  }

  &:hover {
    transition: 0.1s;
  }
}

:deep(.ant-tabs-tab-active) {
  // border: 1px solid !important;
  font-weight: bold;
}

:deep(.ant-tabs-tab-remove) {
  margin-left: 0;
  transform: scale(0.8);
  color: #1677ff;
}
</style>
