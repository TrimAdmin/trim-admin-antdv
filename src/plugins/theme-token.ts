import systemConfig from '@/theme/default-theme.json'
import { ThemeConfig } from 'ant-design-vue/es/config-provider/context'

const themeToken: ThemeConfig = {
  token: {
    colorPrimary: systemConfig.colorPrimary,
    colorSuccess: systemConfig.colorSuccess,
    colorWarning: systemConfig.colorWarning,
    colorError: systemConfig.colorError,
    colorInfo: systemConfig.colorInfo,
    colorText: systemConfig.colorText
  }
}

export default themeToken
