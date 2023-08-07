import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const pluginNProgress = nprogress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false,
  trickleSpeed: 200,
  parent: 'body'
})

export default pluginNProgress
