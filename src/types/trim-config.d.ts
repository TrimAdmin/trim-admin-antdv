interface ITrimConfig {
  theme: ITrimConfigTheme
}

interface ITrimConfigTheme {
  headerHeight: string | number
  siderWidth: string | number
  layout: 'normal' | 'mix' | 'top'
}
