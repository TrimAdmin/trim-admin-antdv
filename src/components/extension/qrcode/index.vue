<script lang="ts" setup>
import QRCode, { QRCodeToDataURLOptions } from 'qrcode'

const props = withDefaults(
  defineProps<{
    mode?: 'canvas' | 'image'
    content: string
    width?: number
    options?: QRCodeToDataURLOptions
  }>(),
  {
    mode: 'canvas',
    width: 128
  }
)

const fileSrc = ref<string>()
const qrcodeRef = shallowRef<string>()

onMounted(() => {
  if (props.mode === 'canvas') {
    QRCode.toCanvas(qrcodeRef.value, props.content, (err) => {
      if (err) console.error(err)
    })
  } else if (props.mode === 'image') {
    QRCode.toDataURL(
      props.content,
      {
        ...props.options,
        errorCorrectionLevel: 'H'
      },
      (err, url) => {
        if (err) console.error(err)
        console.log(url)
        fileSrc.value = url
      }
    )
  }
})
</script>

<template>
  <canvas v-if="mode === 'canvas'" ref="qrcodeRef" :class="`!h-[${width}px] !w-[${width}px]`" />
  <img v-if="mode === 'image'" :src="fileSrc" alt="qrcode" :class="`h-[${width}px]`" />
</template>

<style scoped lang="scss"></style>
