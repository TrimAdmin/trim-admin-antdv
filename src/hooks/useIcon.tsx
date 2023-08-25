import { Icon } from '@iconify/vue'

export function useIcon(icon: string) {
  return <Icon icon={icon} inline={true} />
}
