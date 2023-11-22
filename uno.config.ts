import { defineConfig, presetWind, SourceCodeTransformer } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  presets: [
    presetWind({
      dark: 'class'
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
  rules: [
    ['w-ih', { width: 'inherit' }],
    ['trim-text-color', { color: 'var(--trim-text-color)' }],
    ['trim-bg-color', { color: 'var(--trim-bg-color)' }],
    [
      /^ant-text-color-([a-zA-Z]+)$/,
      (match) => ({
        color: `var(--antdv-color-${match[1]})`
      })
    ],
    [
      /^ant-text-color-([a-zA-Z]+)-hover$/,
      (match) => ({
        color: `var(--antdv-color-${match[1]}-text-hover)`
      })
    ],
    [
      /^ant-bg-([a-zA-Z]+)$/,
      (match) => ({
        'background-color': `var(--antdv-color-${match[1]}-bg)`
      })
    ],
    [
      /^ant-bg-([a-zA-Z]+)-hover$/,
      (match) => ({
        'background-color': `var(--antdv-color-${match[1]}-bg-hover)`
      })
    ],
    [
      /^ant-border-([a-zA-Z]+)$/,
      (match) => ({
        'border-color': `var(--antdv-color-${match[1]}-border)`
      })
    ],
    [
      /^trim-border-(\d+)$/,
      (match) => ({
        border: `${match[1]}px solid var(--trim-border-color-light)`
      })
    ]
  ]
})
