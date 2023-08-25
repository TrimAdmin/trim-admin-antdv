<script setup lang="ts">
import Layout from '@/layout/index.vue'
import zhCN from 'ant-design-vue/locale/zh_CN'
import { RouterView } from 'vue-router'
import { useAutoAnimate } from '@formkit/auto-animate/vue'
import themeToken from '@/plugins/theme-token.ts'
import { useUserStoreHook } from '@/store'

const route = useRoute()
const router = useRouter()
const show = ref<boolean>(false)

const [animated] = useAutoAnimate()

useUserStoreHook().checkLogged()
router.isReady().then(() => {
  console.log('当前环境：' + import.meta.env.MODE)
  show.value = true
  useUserStoreHook().getMenuList()
})
</script>

<template>
  <div v-if="show" ref="animated" class="relative h-full">
    <a-config-provider :locale="zhCN" :theme="themeToken">
      <keep-alive v-if="route.meta.keepAlive">
        <component :is="route.meta.noLayout ? RouterView : Layout" />
      </keep-alive>
      <component :is="route.meta.noLayout ? RouterView : Layout" v-else />
    </a-config-provider>
  </div>
  <Loading v-else />
</template>

<style scoped lang="scss"></style>
