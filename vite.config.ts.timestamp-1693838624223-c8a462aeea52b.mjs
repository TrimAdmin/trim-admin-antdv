// vite.config.ts
import { defineConfig, loadEnv } from "file:///H:/admin-templates/trim-admin-antdv/node_modules/.pnpm/vite@4.4.9_@types+node@18.17.14_sass@1.66.1/node_modules/vite/dist/node/index.js";
import vue from "file:///H:/admin-templates/trim-admin-antdv/node_modules/.pnpm/@vitejs+plugin-vue@4.3.4_vite@4.4.9_vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import Icons from "file:///H:/admin-templates/trim-admin-antdv/node_modules/.pnpm/unplugin-icons@0.16.6/node_modules/unplugin-icons/dist/vite.mjs";
import AutoImport from "file:///H:/admin-templates/trim-admin-antdv/node_modules/.pnpm/unplugin-auto-import@0.16.6_@vueuse+core@10.4.1/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///H:/admin-templates/trim-admin-antdv/node_modules/.pnpm/unplugin-vue-components@0.25.2_vue@3.3.4/node_modules/unplugin-vue-components/dist/vite.mjs";
import { AntDesignVueResolver } from "file:///H:/admin-templates/trim-admin-antdv/node_modules/.pnpm/unplugin-vue-components@0.25.2_vue@3.3.4/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import removeConsole from "file:///H:/admin-templates/trim-admin-antdv/node_modules/.pnpm/vite-plugin-remove-console@2.1.1/node_modules/vite-plugin-remove-console/dist/index.mjs";
import VueDevtools from "file:///H:/admin-templates/trim-admin-antdv/node_modules/.pnpm/vite-plugin-vue-devtools@1.0.0-beta.6_@types+node@18.17.14_pug@3.0.2_vite@4.4.9/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import TurboConsole from "file:///H:/admin-templates/trim-admin-antdv/node_modules/.pnpm/vite-plugin-turbo-console@0.0.9_vite@4.4.9/node_modules/vite-plugin-turbo-console/dist/index.mjs";
import mockDevServerPlugin from "file:///H:/admin-templates/trim-admin-antdv/node_modules/.pnpm/vite-plugin-mock-dev-server@1.3.1_vite@4.4.9/node_modules/vite-plugin-mock-dev-server/dist/index.js";
import vueJsxPlugin from "file:///H:/admin-templates/trim-admin-antdv/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.0.2_vite@4.4.9_vue@3.3.4/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import svgLoader from "file:///H:/admin-templates/trim-admin-antdv/node_modules/.pnpm/vite-svg-loader@4.0.0/node_modules/vite-svg-loader/index.js";
var __vite_injected_original_dirname = "H:\\admin-templates\\trim-admin-antdv";
var vite_config_default = ({ mode }) => defineConfig({
  base: "",
  server: {
    // 默认端口
    port: 8e3,
    // 代理api
    proxy: {
      "/proxyApi": {
        target: loadEnv(mode, process.cwd()).VITE_DEV_BASE_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxyApi/, "")
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
      compiler: "vue3",
      jsx: "react",
      webComponents: {
        iconPrefix: "icon"
      }
    }),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "pinia",
        "@vueuse/core",
        // 自定义自动导入
        {
          "vue-i18n": ["useI18n"]
        }
      ],
      eslintrc: {
        enabled: true
      },
      dts: "./src/types/auto-imports.d.ts"
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false
        }),
        (name) => {
          if (name === "Motion") {
            return {
              from: "motion/vue",
              name: "Motion"
            };
          }
          if (name === "Icon") {
            return {
              from: "@iconify/vue",
              name: "Icon"
            };
          }
        }
      ],
      types: [
        {
          from: "motion/vue",
          names: ["Motion"]
        },
        {
          from: "@iconify/vue",
          names: ["Icon"]
        }
      ],
      include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
      dts: "./src/types/components.d.ts"
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {}
    }
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 4e3,
    rollupOptions: {
      input: {
        index: resolve("index.html")
      },
      // 静态资源分类打包
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]"
      }
    }
  },
  resolve: {
    // 配置别名
    alias: [
      // @表示src目录下
      {
        find: "@",
        replacement: resolve(__vite_injected_original_dirname, "src")
      }
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJIOlxcXFxhZG1pbi10ZW1wbGF0ZXNcXFxcdHJpbS1hZG1pbi1hbnRkdlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiSDpcXFxcYWRtaW4tdGVtcGxhdGVzXFxcXHRyaW0tYWRtaW4tYW50ZHZcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0g6L2FkbWluLXRlbXBsYXRlcy90cmltLWFkbWluLWFudGR2L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG4vLyBcdTgxRUFcdTUyQThcdTVGMTVcdTUxNjVcdTU2RkVcdTY4MDdcbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJ1xuLy8gXHU4MUVBXHU1MkE4XHU1RjE1XHU1MTY1XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuLy8gXHU4MUVBXHU1MkE4XHU1RjE1XHU1MTY1dnVlXHU3RUM0XHU0RUY2XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IHsgQW50RGVzaWduVnVlUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG4vLyBcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTc5RkJcdTk2NjRjb25zb2xlXG5pbXBvcnQgcmVtb3ZlQ29uc29sZSBmcm9tICd2aXRlLXBsdWdpbi1yZW1vdmUtY29uc29sZSdcbi8vIHZ1ZS1kZXZ0b29sXG5pbXBvcnQgVnVlRGV2dG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xuLy8gdHVyYm8tY29uc29sZVxuaW1wb3J0IFR1cmJvQ29uc29sZSBmcm9tICd2aXRlLXBsdWdpbi10dXJiby1jb25zb2xlJ1xuLy8gbW9ja1xuaW1wb3J0IG1vY2tEZXZTZXJ2ZXJQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tbW9jay1kZXYtc2VydmVyJ1xuLy8ganN4XG5pbXBvcnQgdnVlSnN4UGx1Z2luIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXG4vLyBzdmcgbG9hZGVyXG5pbXBvcnQgc3ZnTG9hZGVyIGZyb20gJ3ZpdGUtc3ZnLWxvYWRlcidcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0ICh7IG1vZGUgfSkgPT5cbiAgZGVmaW5lQ29uZmlnKHtcbiAgICBiYXNlOiAnJyxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIC8vIFx1OUVEOFx1OEJBNFx1N0FFRlx1NTNFM1xuICAgICAgcG9ydDogODAwMCxcbiAgICAgIC8vIFx1NEVFM1x1NzQwNmFwaVxuICAgICAgcHJveHk6IHtcbiAgICAgICAgJy9wcm94eUFwaSc6IHtcbiAgICAgICAgICB0YXJnZXQ6IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSkuVklURV9ERVZfQkFTRV9VUkwsXG4gICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9wcm94eUFwaS8sICcnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICB2dWUoKSxcbiAgICAgIHN2Z0xvYWRlcigpLFxuICAgICAgbW9ja0RldlNlcnZlclBsdWdpbigpLFxuICAgICAgdnVlSnN4UGx1Z2luKHtcbiAgICAgICAgdHJhbnNmb3JtT246IHRydWUsXG4gICAgICAgIG9wdGltaXplOiB0cnVlXG4gICAgICB9KSxcbiAgICAgIFZ1ZURldnRvb2xzKCksXG4gICAgICBUdXJib0NvbnNvbGUoKSxcbiAgICAgIHJlbW92ZUNvbnNvbGUoKSxcbiAgICAgIC8vIGh0dHBzOi8vaWNvbmVzLmpzLm9yZy9cbiAgICAgIEljb25zKHtcbiAgICAgICAgYXV0b0luc3RhbGw6IHRydWUsXG4gICAgICAgIGNvbXBpbGVyOiAndnVlMycsXG4gICAgICAgIGpzeDogJ3JlYWN0JyxcbiAgICAgICAgd2ViQ29tcG9uZW50czoge1xuICAgICAgICAgIGljb25QcmVmaXg6ICdpY29uJ1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIEF1dG9JbXBvcnQoe1xuICAgICAgICBpbXBvcnRzOiBbXG4gICAgICAgICAgJ3Z1ZScsXG4gICAgICAgICAgJ3Z1ZS1yb3V0ZXInLFxuICAgICAgICAgICdwaW5pYScsXG4gICAgICAgICAgJ0B2dWV1c2UvY29yZScsXG4gICAgICAgICAgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3Z1ZS1pMThuJzogWyd1c2VJMThuJ11cbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGVzbGludHJjOiB7XG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBkdHM6ICcuL3NyYy90eXBlcy9hdXRvLWltcG9ydHMuZC50cydcbiAgICAgIH0pLFxuICAgICAgQ29tcG9uZW50cyh7XG4gICAgICAgIHJlc29sdmVyczogW1xuICAgICAgICAgIEFudERlc2lnblZ1ZVJlc29sdmVyKHtcbiAgICAgICAgICAgIGltcG9ydFN0eWxlOiBmYWxzZVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJ01vdGlvbicpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmcm9tOiAnbW90aW9uL3Z1ZScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ01vdGlvbidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdJY29uJykge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGZyb206ICdAaWNvbmlmeS92dWUnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdJY29uJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICB0eXBlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZyb206ICdtb3Rpb24vdnVlJyxcbiAgICAgICAgICAgIG5hbWVzOiBbJ01vdGlvbiddXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmcm9tOiAnQGljb25pZnkvdnVlJyxcbiAgICAgICAgICAgIG5hbWVzOiBbJ0ljb24nXVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC9cXC50c3gkL10sXG4gICAgICAgIGR0czogJy4vc3JjL3R5cGVzL2NvbXBvbmVudHMuZC50cydcbiAgICAgIH0pXG4gICAgXSxcbiAgICBjc3M6IHtcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgICAgc2Nzczoge31cbiAgICAgIH1cbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICBzb3VyY2VtYXA6IGZhbHNlLFxuICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiA0MDAwLFxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgIGluZGV4OiByZXNvbHZlKCdpbmRleC5odG1sJylcbiAgICAgICAgfSxcbiAgICAgICAgLy8gXHU5NzU5XHU2MDAxXHU4RDQ0XHU2RTkwXHU1MjA2XHU3QzdCXHU2MjUzXHU1MzA1XG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiAnc3RhdGljL2pzL1tuYW1lXS1baGFzaF0uanMnLFxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnc3RhdGljL2pzL1tuYW1lXS1baGFzaF0uanMnLFxuICAgICAgICAgIGFzc2V0RmlsZU5hbWVzOiAnc3RhdGljL1tleHRdL1tuYW1lXS1baGFzaF0uW2V4dF0nXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHJlc29sdmU6IHtcbiAgICAgIC8vIFx1OTE0RFx1N0Y2RVx1NTIyQlx1NTQwRFxuICAgICAgYWxpYXM6IFtcbiAgICAgICAgLy8gQFx1ODg2OFx1NzkzQXNyY1x1NzZFRVx1NUY1NVx1NEUwQlxuICAgICAgICB7XG4gICAgICAgICAgZmluZDogJ0AnLFxuICAgICAgICAgIHJlcGxhY2VtZW50OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlTLFNBQVMsY0FBYyxlQUFlO0FBQ3ZVLE9BQU8sU0FBUztBQUNoQixTQUFTLGVBQWU7QUFFeEIsT0FBTyxXQUFXO0FBRWxCLE9BQU8sZ0JBQWdCO0FBRXZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsNEJBQTRCO0FBRXJDLE9BQU8sbUJBQW1CO0FBRTFCLE9BQU8saUJBQWlCO0FBRXhCLE9BQU8sa0JBQWtCO0FBRXpCLE9BQU8seUJBQXlCO0FBRWhDLE9BQU8sa0JBQWtCO0FBRXpCLE9BQU8sZUFBZTtBQXJCdEIsSUFBTSxtQ0FBbUM7QUF3QnpDLElBQU8sc0JBQVEsQ0FBQyxFQUFFLEtBQUssTUFDckIsYUFBYTtBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBO0FBQUEsSUFFTixNQUFNO0FBQUE7QUFBQSxJQUVOLE9BQU87QUFBQSxNQUNMLGFBQWE7QUFBQSxRQUNYLFFBQVEsUUFBUSxN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
