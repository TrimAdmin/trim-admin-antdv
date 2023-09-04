import { Icon, IconProps } from '@iconify/vue'

export function useIcon(icon: string, args?: Omit<IconProps, 'icon'>) {
  return <Icon icon={icon} inline={true} {...args} />
}
