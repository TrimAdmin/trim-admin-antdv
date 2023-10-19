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
    <page-header title="滚动数字" subtitle="使用odometer二次封装，进入视图时触发">
      <template #right>
        <a-button type="primary" @click="generateRandom">随机数字</a-button>
      </template>
    </page-header>
    <regular-layout no-background>
      <a-alert banner type="info" class="mb-4">
        <template #message>
          组件位置：/src/components/digit-scroll/index.vue，官方文档：<a href="https://github.hubspot.com/odometer/" target="_blank"
            >https://github.hubspot.com/odometer/</a
          >
        </template>
      </a-alert>
      <a-card>
        <a-card-grid>
          <div>基础用法</div>
          <digit-scroll v-if="value" :value="value" class="font-bold text-2xl" />
        </a-card-grid>
        <a-card-grid>
          <div>设定初始值为1000</div>
          <digit-scroll v-if="value" :value="value" :start-value="1000" class="font-bold text-2xl" />
        </a-card-grid>
        <a-card-grid>
          <div>可能需要自定义一些奇怪的格式</div>
          <digit-scroll v-if="value" format="(.ddd)" :value="value" class="font-bold text-2xl" />
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
            value-class="text-red-500 font-bold text-2xl leading-[32px]"
            prefix="参考价："
            suffix="元"
          />
        </a-card-grid>
      </a-card>
    </regular-layout>
  </div>
</template>

<style scoped lang="scss"></style>
