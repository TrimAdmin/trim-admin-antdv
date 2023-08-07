/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_DOCUMENT_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
