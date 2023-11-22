import type { AttributifyNames } from '@unocss/preset-attributify'

declare module '@vue/runtime-dom' {
  type Prefix = 'un-' // change it to your prefix

  interface HTMLAttributes extends Partial<Record<AttributifyNames<Prefix>, string>> {}
}
