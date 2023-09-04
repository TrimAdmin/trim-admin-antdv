<script lang="ts" setup>
const router = useRouter()

function backHome() {
  router.replace({ name: 'home' })
}
</script>

<template>
  <RegularLayout class="flex-c">
    <a-result status="500" title="500" sub-title="服务器出错啦！">
      <template #extra>
        <a-button type="primary" @click="backHome">返回首页</a-button>
      </template>
    </a-result>
  </RegularLayout>
</template>

<style scoped lang="scss"></style>
