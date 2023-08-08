import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// 自动引入图标
import Icons from 'unplugin-icons/vite'
import IconResolver from 'unplugin-icons/resolver'
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
// mock
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'
// jsx
import vueJsxPlugin from '@vitejs/plugin-vue-jsx'
// svg loader
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    base: '',
    server: {
      // 默认端口
      port: 8000,
      // 编译后打开
      open: true,
      // 代理api
      proxy: {
        '/proxyApi': {
          target: loadEnv(mode, process.cwd()).VITE_DEV_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/proxyApi/, '')
        }
      }
    },
    plugins: [
      vue(),
      svgLoader(),
      mockDevServerPlugin(),
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
          // 自动引入icon
          IconResolver({
            prefix: 'icon',
            enabledCollections: ['ant-design']
          })
        ],
        include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
        dts: './src/types/components.d.ts'
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {}
      }
    },
    build: {
      sourcemap: false,
      chunkSizeWarningLimit: 4000,
      rollupOptions: {
        input: {
          index: resolve('index.html')
        },
        // 静态资源分类打包
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
      }
    },
    resolve: {
      // 配置别名
      alias: [
        // @表示src目录下
        {
          find: '@',
          replacement: resolve(__dirname, 'src')
        }
      ]
    }
  })
