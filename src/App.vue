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
      <a-config-provider :locale="zhCN" :theme="themeToken">
        <keep-alive v-if="route.meta.keepAlive">
          <component :is="route.meta.noLayout ? RouterView : Layout" />
        </keep-alive>
        <component :is="route.meta.noLayout ? RouterView : Layout" v-else />
      </a-config-provider>
    </div>
    <Loading v-else />
  </div>
</template>

<style scoped></style>
