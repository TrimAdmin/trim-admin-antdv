<script setup lang="ts">
import Layout from '@/layout/index.vue'
import zhCN from 'ant-design-vue/locale/zh_CN'
import { RouterView } from 'vue-router'
import { useAutoAnimate } from '@formkit/auto-animate/vue'
import themeToken from '@/plugins/theme-token.ts'

const route = useRoute()
const router = useRouter()
const show = ref<boolean>(false)

const [animated] = useAutoAnimate()

onMounted(() => {
  router.isReady().then(() => {
    show.value = true
  })
})
</script>

<template>
  <div ref="animated">
    <div v-if="show" class="relative">
      <AConfigProvider :locale="zhCN" :theme="themeToken">
        <KeepAlive v-if="route.meta.keepAlive">
          <component :is="route.meta.noLayout ? RouterView : Layout" />
        </KeepAlive>
        <component :is="route.meta.noLayout ? RouterView : Layout" v-else />
      </AConfigProvider>
    </div>
    <Loading v-else />
  </div>
</template>

<style scoped></style>
