export const richEditorComposable = {
  // 插件
  plugins:
    'quickbars insertdatetime pagebreak autolink link image media lists advlist charmap preview fullscreen wordcount',
  // 工具栏
  toolbar:
    'undo redo | styles | bold italic underline | blocks | alignleft aligncenter alignright | insertdatetime pagebreak quicktable | link image media | charmap | preview',
  // 选中后的工具栏
  quickbars_selection_toolbar: 'bold italic underline | blocks | quicklink blockquote',
  // 图片上传路径
  images_upload_url: 'https://www.test.com/upload',
  // 图片上传使用cookie
  images_upload_credentials: true,
  // 图片上传手动处理
  images_upload_handler: (blobInfo: any, progress: (value: number) => void) =>
    new Promise((_, reject) => {
      console.log(blobInfo, progress)
      reject('演示环境禁止操作')
    })
}
