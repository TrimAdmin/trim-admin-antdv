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
</script>

<template>
  <div class="nav-tab bg-white dark:bg-[#001529] w-full block p-1">
    <a-tabs hide-add :active-key="currentTab" size="small" @change="handleChange">
      <a-tab-pane v-for="item in tabsList" :key="item.key" :closable="false">
        <template #tab>
          <a-dropdown arrow :trigger="['contextmenu']" placement="bottom">
            <div class="flex items-center">
              {{ item.title }}
              <div v-if="!item.tabAffix" class="h-full flex items-center ml-1 cursor-pointer">
                <Icon icon="ant-design:close-outlined" :height="14" inline @click.stop="handleClose(item.key)" />
              </div>
            </div>
            <template #overlay>
              <a-menu>
                <a-menu-item key="refresh" />
              </a-menu>
            </template>
          </a-dropdown>
        </template>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style lang="scss" scoped>
.nav-tab {
  height: 36px;
}

:deep(.ant-tabs-nav) {
  margin: 0;
  &::before {
    border: none;
  }
}

:deep(.ant-tabs-tab) {
  background: none !important;
  padding: 2px 8px !important;
  font-size: 12px !important;
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
  border: 1px solid !important;
  font-weight: bold;
}

:deep(.ant-tabs-tab-remove) {
  margin-left: 0;
  transform: scale(0.8);
  color: #1677ff;
}
</style>
