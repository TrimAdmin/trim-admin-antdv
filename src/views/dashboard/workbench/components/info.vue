<script lang="ts" setup>
import { useUserStoreHook } from '@/store'
import { getTimeSlotString } from '@/utils'

const userInfo = computed<IUserInfo>(() => useUserStoreHook().userInfo)
const timeSlot = computed<string>(() => getTimeSlotString())
</script>

<template>
  <Card no-header>
    <div class="flex items-center mb-2">
      <a-avatar :size="48" :src="userInfo.avatar" class="mr-2">
        <template #icon>
          <Icon class="cursor-pointer mt-[4px]" icon="ant-design:user-outlined" inline />
        </template>
      </a-avatar>
      <div class="flex-1">
        <div class="text-[16px] font-bold whitespace-nowrap overflow-hidden text-ellipsis max-w-[99%]">
          {{ userInfo.username }}，{{ timeSlot }}好！
        </div>
        <div class="text-[#186DF5] text-[12px]">{{ userInfo.roleName }}</div>
      </div>
    </div>
    <div class="flex-bc">
      <div class="flex-1">
        <div class="text-gray-500 dark:text-gray-300 text-[12px] mb-1">主管理员</div>
        <a-avatar-group :max-count="2" :size="36">
          <a-avatar
            v-for="item of 3"
            :key="item"
            :src="`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${item}`"
          >
            <template #icon>
              <Icon icon="ant-design:user-outlined" />
            </template>
          </a-avatar>
        </a-avatar-group>
      </div>
      <div class="flex-1">
        <div class="text-gray-500 dark:text-gray-300 text-[12px] mb-1">管理员</div>
        <a-avatar-group :max-count="2" :size="36">
          <a-avatar
            v-for="item of 5"
            :key="item"
            :src="`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${item}`"
          >
            <template #icon>
              <Icon icon="ant-design:user-outlined" />
            </template>
          </a-avatar>
        </a-avatar-group>
      </div>
    </div>
  </Card>
</template>

<style lang="scss" scoped></style>
