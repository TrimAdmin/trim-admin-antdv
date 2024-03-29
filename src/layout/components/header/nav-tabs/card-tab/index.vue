<script lang="ts" setup>
import { ITabObject, useCommonStoreHook } from '@/store'
import { Key } from 'ant-design-vue/es/_util/type'
import { useI18nHook } from '@/hooks'

const router = useRouter()
const tabsList = computed<Array<ITabObject>>(() => useCommonStoreHook().tabsList)
const currentTab = computed<string>(() => useCommonStoreHook().currentRouteName)
const { t } = useI18nHook()

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
  <div class="card-tab w-full block p-1">
    <a-tabs
      :active-key="currentTab"
      class="animate__animated animate__fadeInUp animate__faster"
      hide-add
      size="small"
      type="card"
      @change="handleChange"
    >
      <a-tab-pane v-for="(item, index) in tabsList" :key="item.key" :closable="false">
        <template #tab>
          <a-dropdown :trigger="['contextmenu']" placement="bottomLeft">
            <div class="flex items-center">
              <Icon
                v-if="item.icon"
                :height="16"
                :icon="item.icon as string"
                inline
                class="mr-1"
                @click.stop="handleClose(item.key)"
              />
              {{ item.i18n ? t(item.i18n) : item.title }}
              <div
                v-if="!item.tabAffix"
                class="icon-close h-full flex items-center ml-2 cursor-pointer rounded-xl p-[2px]"
              >
                <Icon :height="12" icon="ant-design:close-outlined" inline @click.stop="handleClose(item.key)" />
              </div>
            </div>
            <template #overlay>
              <a-menu @click="({ key }) => handleTabAction(key as string, item.key)">
                <a-menu-item key="refresh">
                  <div class="flex items-center">
                    <Icon class="mr-1" icon="ant-design:sync-outlined" inline />
                    重新加载
                  </div>
                </a-menu-item>
                <a-menu-item v-if="!item.tabAffix" key="close">
                  <div class="flex items-center">
                    <Icon class="mr-1" icon="ant-design:close-outlined" inline />
                    关闭标签页
                  </div>
                </a-menu-item>
                <a-divider class="my-2" />
                <a-menu-item
                  v-if="tabsList.length !== tabsList.filter((item) => item.tabAffix).length + 1"
                  key="close-other"
                >
                  <div class="flex items-center">
                    <Icon class="mr-1" icon="ant-design:aim-outlined" inline />
                    关闭其他标签页
                  </div>
                </a-menu-item>
                <a-menu-item v-if="[0, 1].indexOf(index) === -1" key="close-left">
                  <div class="flex items-center">
                    <Icon class="mr-1" icon="ant-design:vertical-right-outlined" inline />
                    关闭左侧标签页
                  </div>
                </a-menu-item>
                <a-menu-item v-if="index !== tabsList.length - 1" key="close-right">
                  <div class="flex items-center">
                    <Icon class="mr-1" icon="ant-design:vertical-left-outlined" inline />
                    关闭右侧标签页
                  </div>
                </a-menu-item>
                <a-menu-item key="close-all">
                  <div class="flex items-center">
                    <Icon class="mr-1" icon="ant-design:minus-outlined" inline />
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
.card-tab {
  height: 42px;
  overflow-y: hidden;
  background-color: var(--trim-bg-color);
  border-bottom: 1px solid var(--trim-border-color-light);

  .icon-close {
    transition: background-color 0.25s;

    &:hover {
      background-color: var(--antdv-color-primary-bg-hover);
    }
  }
}

:deep(.ant-tabs-nav) {
  height: 38px;
  margin: 0;

  &::before {
    border: none;
  }
}

:deep(.ant-tabs-tab) {
  font-size: 14px !important;
  border: 1px solid var(--trim-border-color-lighter);

  &:first-child {
    margin-left: 0 !important;
  }

  &:hover {
    transition: 0.1s;
  }
}

:deep(.ant-tabs-tab-active) {
  font-weight: bold;
}

:deep(.ant-tabs-tab-remove) {
  margin-left: 0;
  color: var(--antdv-color-primary);
  transform: scale(0.8);
}
</style>
