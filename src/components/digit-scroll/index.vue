<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Odometer from 'odometer'

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
}>()

const digitRef = shallowRef()

onMounted(() => {
  // digitRef.value.style.opacity = 0
  const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    const odometer = new Odometer({
      el: digitRef.value,
      value: props.startValue,
      format: props.format,
      duration: props.duration
    })
    const entry = entries[0]
    if (entry.isIntersecting) {
      // digitRef.value.style.opacity = 100
      odometer.update(props.value)
    }
    if (!entry.isIntersecting && props.repeat) {
      odometer.update(0)
    }
  })
  observer.observe(digitRef.value)
})
</script>

<template>
  <div class="flex items-center">
    {{ prefix }}
    <span ref="digitRef" />
    {{ suffix }}
  </div>
</template>

<style scoped lang="scss"></style>
