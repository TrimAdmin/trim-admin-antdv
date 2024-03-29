import vue from '@vitejs/plugin-vue'
// 自动引入图标
import Icons from 'unplugin-icons/vite'
// 自动引入
import AutoImport from 'unplugin-auto-import/vite'
// 自动引入vue组件
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
// 生产环境移除console
import removeConsole from 'vite-plugin-remove-console'
// vue-devtool
import VueDevtools from 'vite-plugin-vue-devtools'
// turbo-console
import TurboConsole from 'vite-plugin-turbo-console'
// jsx
import vueJsxPlugin from '@vitejs/plugin-vue-jsx'
// svg loader
import svgLoader from 'vite-svg-loader'
// 自动引入vxe样式
import { createStyleImportPlugin, VxeTableResolve } from 'vite-plugin-style-import'
// unocss
import UnoCSS from 'unocss/vite'

export const plugins = [
  vue(),
  svgLoader(),
  UnoCSS(),
  vueJsxPlugin({
    transformOn: true,
    optimize: true
  }),
  VueDevtools(),
  TurboConsole(),
  removeConsole(),
  // https://icones.js.org/
  Icons({
    autoInstall: true,
    compiler: 'vue3',
    jsx: 'react',
    webComponents: {
      iconPrefix: 'icon'
    }
  }),
  AutoImport({
    imports: [
      'vue',
      'vue-router',
      'pinia',
      '@vueuse/core',
      // 自定义自动导入
      {
        'vue-i18n': ['useI18n']
      }
    ],
    eslintrc: {
      enabled: true
    },
    dts: './src/types/auto-imports.d.ts'
  }),
  Components({
    resolvers: [
      AntDesignVueResolver({
        importStyle: false
      }),
      (name) => {
        if (name === 'Motion') {
          return {
            from: 'motion/vue',
            name: 'Motion'
          }
        }
        if (name === 'Icon') {
          return {
            from: '@iconify/vue',
            name: 'Icon'
          }
        }
      }
    ],
    types: [
      {
        from: 'motion/vue',
        names: ['Motion']
      },
      {
        from: '@iconify/vue',
        names: ['Icon']
      }
    ],
    include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
    dts: './src/types/components.d.ts'
  }),
  createStyleImportPlugin({
    resolves: [VxeTableResolve()]
  })
]
