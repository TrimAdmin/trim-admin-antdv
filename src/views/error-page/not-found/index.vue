<script lang="ts" setup>
const router = useRouter()

function backHome() {
  router.replace({ name: 'home' })
}
</script>

<template>
  <RegularLayout class="flex-c">
    <a-result status="404" title="404" sub-title="您所访问的页面走丢了">
      <template #extra>
        <a-button type="primary" @click="backHome">返回首页</a-button>
      </template>
    </a-result>
  </RegularLayout>
</template>

<style scoped lang="scss"></style>
