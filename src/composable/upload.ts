import type { UploadProps } from 'ant-design-vue'
import type { FileType } from 'ant-design-vue/es/upload/interface'

export const uploadComposable: UploadProps = {
  action: 'http://img.dcwedu.top/api/v1/upload',
  method: 'post',
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
    Authorization: 'Bearer 1|1bJbwlqBfnggmOMEZqXT5XusaIwqiZjCDs7r1Ob5',
    'Access-Control-Allow-Origin': '*'
  },
  beforeUpload: (file: FileType, fileList: FileType[]) => {
    // 在这里写阻断逻辑
    console.log(file, fileList)
    return true
  }
}
