import { defineConfig, presetAttributify, presetMini, presetWind, SourceCodeTransformer } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  presets: [
    presetWind(),
    presetMini({
      dark: 'class'
    }),
    presetAttributify({
      prefix: 'un-',
      prefixedOnly: true
    })
  ],
  transformers: [
    transformerDirectives({
      applyVariable: ['@apply', '--uno']
    }),
    transformerVariantGroup({}) as unknown as SourceCodeTransformer
  ],
  preflights: [],
  shortcuts: {
    'flex-c': 'flex justify-center items-center',
    'flex-bc': 'flex justify-between items-center',
    'flex-ac': 'flex justify-around items-center',
    'flex-col-c': 'flex flex-col justify-center items-center',
    'flex-col-bc': 'flex flex-col justify-between items-center',
    'flex-col-ac': 'flex flex-col justify-around items-center'
  },
  rules: [['w-ih', { width: 'inherit' }]]
})
