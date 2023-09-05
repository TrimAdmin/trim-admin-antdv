import type { ComposeOption } from 'echarts/core'
import * as echarts from 'echarts/core'
import type { BarSeriesOption, LineSeriesOption, PieSeriesOption } from 'echarts/charts'
import { BarChart, LineChart, PieChart } from 'echarts/charts'
import type {
  DatasetComponentOption,
  GridComponentOption,
  TitleComponentOption,
  TooltipComponentOption,
  LegendComponentOption
} from 'echarts/components'
import { DatasetComponent, GridComponent, TitleComponent, TooltipComponent, TransformComponent, LegendComponent } from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | PieSeriesOption
  | LegendComponentOption
>

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LegendComponent,
  PieChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
])

export { echarts }
