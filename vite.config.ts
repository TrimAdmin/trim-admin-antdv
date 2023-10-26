import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import { plugins } from './vite/plugins'

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    base: '',
    server: {
      // 默认端口
      port: 8000,
      // 代理api
      proxy: {
        '/proxyApi': {
          target: loadEnv(mode, process.cwd()).VITE_DEV_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/proxyApi/, '')
        }
      }
    },
    plugins,
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
      // 文件后缀
      extensions: ['.ts', '.vue', '.json', '.js', '.tsx'],
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
}
