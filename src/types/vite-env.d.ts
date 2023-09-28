/// <reference types="vite/client" />
interface ImportMetaEnv {
  // 项目名称
  VITE_DOCUMENT_NAME: string
  // 基础请求地址
  VITE_REQUEST_BASE_URL: string
  // 开发环境端口
  VITE_DEV_SERVER_PORT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
