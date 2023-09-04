<script lang="ts" setup></script>

<template>
  <LayoutWithHeader no-background title="分析页">
    <div class="cards">
      <a-card :bordered="false" class="!shadow-none">aaa</a-card>
      <a-card :bordered="false" class="!shadow-none">bbb</a-card>
      <a-card :bordered="false" class="!shadow-none">ccc</a-card>
      <a-card :bordered="false" class="!shadow-none">ddd</a-card>
    </div>
  </LayoutWithHeader>
</template>

<style scoped lang="scss">
.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}
</style>
