<script lang="ts" setup></script>

<template>
  <div class="grid grid-cols-4 gap-2">
    <a-card
      :bordered="false"
      :head-style="{
        padding: 20
      }"
    >
      <div class="text-[16px] mb-4">销售额</div>
      <DigitScroll
        prefix="￥"
        :value="8600"
        suffix="万元"
        :value-style="{
          fontSize: '28px',
          fontWeight: 'bold'
        }"
        value-class="mx-1"
      />
    </a-card>
    <a-card
      :bordered="false"
      :head-style="{
        padding: 20
      }"
    >
      <div class="text-[16px] mb-4">访问量</div>
      <DigitScroll
        :value="12074"
        suffix="人/次"
        :value-style="{
          fontSize: '28px',
          fontWeight: 'bold'
        }"
        value-class="mx-1"
      />
    </a-card>
    <a-card
      :bordered="false"
      :head-style="{
        padding: 20
      }"
    >
      <div class="text-[16px] mb-4">转化率</div>
      <DigitScroll
        :value="34.21"
        suffix="%"
        :value-style="{
          fontSize: '28px',
          fontWeight: 'bold'
        }"
        value-class="mx-1"
      />
    </a-card>
    <a-card
      :bordered="false"
      :head-style="{
        padding: 20
      }"
    >
      <div class="text-[16px] mb-4">工单率</div>
      <DigitScroll
        :value="71.49"
        suffix="%"
        :value-style="{
          fontSize: '28px',
          fontWeight: 'bold'
        }"
        value-class="mx-1"
      />
    </a-card>
  </div>
</template>

<style scoped lang="scss"></style>
