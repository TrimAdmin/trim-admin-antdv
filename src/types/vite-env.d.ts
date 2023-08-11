/// <reference types="vite/client" />
interface ImportMetaEnv {
  // 项目名称
  VITE_DOCUMENT_NAME: string
  // 基础请求地址
  VITE_REQUEST_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
