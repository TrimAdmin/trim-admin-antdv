import type { ModalFunc, ModalFuncProps } from 'ant-design-vue/lib/modal/Modal'
import { message as Message, Modal, notification } from 'ant-design-vue'
import { ConfigProps, NotificationArgsProps } from 'ant-design-vue/lib/notification'
import { isString } from 'ant-design-vue/es/_util/util'
import { Icon } from '@iconify/vue'

export interface NotifyApi {
  info(config: NotificationArgsProps): void

  success(config: NotificationArgsProps): void

  error(config: NotificationArgsProps): void

  warn(config: NotificationArgsProps): void

  open(args: NotificationArgsProps): void

  close(key: string): void

  config(options: ConfigProps): void

  destroy(): void
}

export declare type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
export declare type IconType = 'success' | 'info' | 'error' | 'warning'

export interface ModalOptionsEx extends Omit<ModalFuncProps, 'iconType'> {
  iconType: 'warning' | 'success' | 'error' | 'info'
}

export type ModalOptionsPartial = Partial<ModalOptionsEx> & Pick<ModalOptionsEx, 'content'>

interface ConfirmOptions {
  info: ModalFunc
  success: ModalFunc
  error: ModalFunc
  warn: ModalFunc
  warning: ModalFunc
}

function getIcon(iconType: string) {
  if (iconType === 'warning') {
    return <Icon icon='ant-design:info-circle-filled' class='modal-icon-warning' />
  } else if (iconType === 'success') {
    return <Icon icon='ant-design:check-circle-filled' class='modal-icon-success' />
  } else if (iconType === 'info') {
    return <Icon icon='ant-design:info-circle-filled' class='modal-icon-info' />
  } else {
    return <Icon icon='ant-design:close-circle-filled' class='modal-icon-error' />
  }
}

function renderContent({ content }: Pick<ModalOptionsEx, 'content'>) {
  if (isString(content)) {
    return <div>{content}</div>
  } else {
    return content
  }
}

function createConfirm(options: ModalOptionsEx): ConfirmOptions {
  const iconType = options.iconType || 'warning'
  Reflect.deleteProperty(options, 'iconType')
  const opt: ModalFuncProps = {
    centered: true,
    icon: getIcon(iconType),
    ...options,
    content: renderContent(options)
  }
  return Modal.confirm(opt) as unknown as ConfirmOptions
}

const getBaseOptions = () => {
  const { t } = useI18n()
  return {
    okText: t('constant.ok'),
    centered: true
  }
}

function createModalOptions(options: ModalOptionsPartial, icon: string): ModalOptionsPartial {
  return {
    ...getBaseOptions(),
    ...options,
    content: renderContent(options),
    icon: getIcon(icon)
  }
}

function createSuccessModal(options: ModalOptionsPartial) {
  return Modal.success(createModalOptions(options, 'success'))
}

function createErrorModal(options: ModalOptionsPartial) {
  return Modal.error(createModalOptions(options, 'error'))
}

function createInfoModal(options: ModalOptionsPartial) {
  return Modal.info(createModalOptions(options, 'info'))
}

function createWarningModal(options: ModalOptionsPartial) {
  return Modal.warning(createModalOptions(options, 'warning'))
}

notification.config({
  placement: 'topRight',
  duration: 3
})

function createSuccessNotification(options: NotificationArgsProps) {
  return notification.success(options)
}

function createErrorNotification(options: NotificationArgsProps) {
  return notification.error(options)
}

function createWarningNotification(options: NotificationArgsProps) {
  return notification.warn(options)
}

function createInfoNotification(options: NotificationArgsProps) {
  return notification.info(options)
}

function closeNotification(key: string) {
  return notification.close(key)
}

export function useMessage() {
  return {
    message: Message,
    notification: {
      createSuccessNotification,
      createErrorNotification,
      createWarningNotification,
      createInfoNotification,
      closeNotification
    },
    createConfirm: createConfirm,
    createSuccessModal,
    createErrorModal,
    createInfoModal,
    createWarningModal
  }
}
