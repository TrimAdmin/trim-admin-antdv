/// <reference types="vite/client" />
interface ImportMetaEnv {
  // 项目名称
  VITE_DOCUMENT_NAME: string
  // 基础请求地址
  VITE_REQUEST_BASE_URL: string
  // tinyMCE apikey
  VITE_TINYMCE_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
