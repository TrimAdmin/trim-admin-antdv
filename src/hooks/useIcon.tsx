import { Icon, IconProps } from '@iconify/vue'

export function useIcon(icon: string, args: Exclude<IconProps, IconProps['icon']>) {
  return <Icon icon={icon} inline={true} {...args} />
}
