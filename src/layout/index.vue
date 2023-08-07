<script setup lang="ts"></script>

<template>
  <ALayout>
    <ALayoutSider>Sider</ALayoutSider>
    <ALayout>
      <ALayoutHeader>Header</ALayoutHeader>
      <ALayoutContent>
        <RouterView />
      </ALayoutContent>
      <ALayoutFooter>Footer</ALayoutFooter>
    </ALayout>
  </ALayout>
</template>

<style scoped lang="scss"></style>
