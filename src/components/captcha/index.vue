<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    // 验证码宽度
    width?: number
    // 验证码高度
    height?: number
    // 验证码字符数
    codeLength?: number
    // 线条数
    lineNumber?: number
    // v-model
    modelValue: string
  }>(),
  {
    width: 140,
    height: 40,
    codeLength: 4,
    lineNumber: 4,
    modelValue: ''
  }
)
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const chars: string = 'abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789'
const colors: Array<string> = ['red', 'yellow', 'blue', 'green', 'pink', 'black']
const canvasRef = shallowRef<HTMLCanvasElement>()
const codeArr = ref<Array<string>>([])

// 生成随机字符
function generateRandomCode() {
  codeArr.value = []
  for (let i = 0; i < props.codeLength; i++) {
    const num = Math.floor(Math.random() * chars.length)
    codeArr.value.push(chars.slice(num, num + 1))
  }
}

// 画验证码
function drawCaptcha() {
  const ctx: CanvasRenderingContext2D = canvasRef.value?.getContext('2d') as CanvasRenderingContext2D
  ctx.fillStyle = '#bfefff'
  ctx.fillRect(0, 0, 140, 40)
  ctx.font = '20px Verdana'

  let x = 15

  for (let i = 0; i < props.codeLength; i++) {
    ctx.fillStyle = colors[Math.floor(Math.random() * 5)]
    ctx.fillText(codeArr.value[i], x, 25)
    x = x + 30
  }
  for (let i = 0; i < props.lineNumber; i++) {
    ctx.strokeStyle = colors[Math.floor(Math.random() * 5)]
    ctx.beginPath()
    ctx.moveTo(Math.floor(Math.random() * props.width), Math.floor(Math.random() * props.height - 10))
    ctx.lineTo(Math.floor(Math.random() * props.width), Math.floor(Math.random() * props.height - 10))
    ctx.stroke()
  }
}

function draw() {
  generateRandomCode()
  drawCaptcha()
}

watch(
  () => codeArr.value,
  () => {
    emit('update:modelValue', codeArr.value.join(''))
  }
)

defineExpose({
  draw
})
</script>

<template>
  <canvas ref="canvasRef" :height="height" :width="width" class="cursor-pointer" @click="draw" />
</template>

<style lang="scss" scoped></style>
