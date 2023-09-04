<script lang="ts" setup>
const router = useRouter()

function backHome() {
  router.replace({ name: 'home' })
}
</script>

<template>
  <RegularLayout class="flex-c">
    <a-result status="403" title="403" sub-title="您没有权限查看此页面">
      <template #extra>
        <a-button type="primary" @click="backHome">返回首页</a-button>
      </template>
    </a-result>
  </RegularLayout>
</template>

<style scoped lang="scss"></style>
