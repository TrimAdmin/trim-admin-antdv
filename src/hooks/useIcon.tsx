import { Icon, IconProps } from '@iconify/vue'
import { VNode } from 'vue'

export function useIcon(icon: string, args?: Omit<IconProps, 'icon'>): VNode {
  return <Icon icon={icon} inline={true} {...args} />
}
