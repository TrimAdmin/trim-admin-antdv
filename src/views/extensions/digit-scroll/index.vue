<script lang="ts" setup>
const value = ref<number>(2023)

function generateRandom() {
  value.value = 0
  nextTick(() => {
    value.value = Math.round(Math.floor(Math.random() * 10000))
  })
}
</script>

<template>
  <div>
    <page-header subtitle="使用odometer二次封装，进入视图时触发" title="滚动数字">
      <template #right>
        <a-button type="primary" @click="generateRandom">随机数字</a-button>
      </template>
    </page-header>
    <a-alert banner class="mb-4" type="info">
      <template #message>
        组件位置：/src/components/extension/digit-scroll/index.vue，官方文档：
        <a href="https://github.hubspot.com/odometer/" target="_blank">https://github.hubspot.com/odometer/</a>
      </template>
    </a-alert>
    <regular-layout transparent>
      <a-card>
        <a-card-grid>
          <div>基础用法</div>
          <digit-scroll v-if="value" :value="value" class="font-bold text-2xl" />
        </a-card-grid>
        <a-card-grid>
          <div>设定初始值为1000</div>
          <digit-scroll v-if="value" :start-value="1000" :value="value" class="font-bold text-2xl" />
        </a-card-grid>
        <a-card-grid>
          <div>可能需要自定义一些奇怪的格式</div>
          <digit-scroll v-if="value" :value="value" class="font-bold text-2xl" format="(.ddd)" />
        </a-card-grid>
        <a-card-grid>
          <div>前缀插槽</div>
          <digit-scroll v-if="value" :value="value" class="font-bold text-2xl" prefix="$" />
        </a-card-grid>
        <a-card-grid>
          <div>后缀插槽</div>
          <digit-scroll v-if="value" :value="value" class="font-bold text-2xl" suffix="元" />
        </a-card-grid>
        <a-card-grid>
          <div>自定义值的样式</div>
          <digit-scroll
            v-if="value"
            :value="value"
            class="items-baseline h-[32px]"
            prefix="参考价："
            suffix="元"
            value-class="text-red-500 font-bold text-2xl leading-[32px]"
          />
        </a-card-grid>
      </a-card>
    </regular-layout>
  </div>
</template>

<style lang="scss" scoped></style>
