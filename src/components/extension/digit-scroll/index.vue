<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Odometer from 'odometer'
import { CSSProperties } from 'vue'

const props = defineProps<{
  // 数值
  value: number
  // 开始时的数值
  startValue?: number
  // 动画持续时间
  duration?: number
  // 数值格式，详见：https://github.hubspot.com/odometer/
  format?: string
  // 是否每次进入视图都触发动画
  repeat?: boolean
  // 前缀
  prefix?: string
  // 后缀
  suffix?: string
  // 数值样式
  valueStyle?: CSSProperties
  // 数值类名
  valueClass?: string
}>()

const digitRef = shallowRef()
const odometer = ref()

onMounted(() => {
  // 初始化odometer实例
  odometer.value = new Odometer({
    el: digitRef.value,
    value: props.startValue,
    format: props.format,
    duration: props.duration
  })
  nextTick(() => {
    // 创建交叉监听实例
    // digitRef.value.style.opacity = 0
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      if (!odometer.value) {
        return
      }
      const entry = entries[0]
      if (!odometer.value) {
        return
      }
      if (entry.isIntersecting) {
        odometer.value.update(props.value)
      }
      if (!entry.isIntersecting && props.repeat) {
        odometer.value.update(0)
      }
    })
    // 监听odometer是否进入视图
    if (digitRef.value) {
      observer.observe(digitRef.value)
    }
  })
})
</script>

<template>
  <div class="flex items-center">
    {{ prefix }}
    <slot name="prefix" />
    <span ref="digitRef" :class="valueClass" :style="valueStyle" />
    {{ suffix }}
    <slot name="suffix" />
  </div>
</template>

<style lang="scss" scoped></style>
