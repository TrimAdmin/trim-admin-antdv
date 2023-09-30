import { ModalOptionsEx, ModalOptionsPartial, useMessage } from '@/hooks'
import { NotificationArgsProps } from 'ant-design-vue/es/notification'

// 全局提示
export const message = Object.assign({
  success: (msg: string) => {
    return useMessage().message.success(msg)
  },
  error: (msg: string) => {
    return useMessage().message.error(msg)
  },
  warning: (msg: string) => {
    return useMessage().message.warning(msg)
  },
  info: (msg: string) => {
    return useMessage().message.info(msg)
  }
})

export const modal = Object.assign({
  confirm: (options: ModalOptionsEx) => {
    useMessage().createConfirm(options)
  },
  success: (options: ModalOptionsPartial) => {
    useMessage().createSuccessModal(options)
  },
  error: (options: ModalOptionsPartial) => {
    useMessage().createErrorModal(options)
  },
  info: (options: ModalOptionsPartial) => {
    useMessage().createInfoModal(options)
  },
  warn: (options: ModalOptionsPartial) => {
    useMessage().createWarningModal(options)
  }
})

export const notification = Object.assign({
  success: (options: NotificationArgsProps) => {
    useMessage().notification.createSuccessNotification(options)
  },
  error: (options: NotificationArgsProps) => {
    useMessage().notification.createErrorNotification(options)
  },
  info: (options: NotificationArgsProps) => {
    useMessage().notification.createInfoNotification(options)
  },
  warn: (options: NotificationArgsProps) => {
    useMessage().notification.createWarningNotification(options)
  },
  close: (key: string) => {
    useMessage().notification.closeNotification(key)
  }
})
