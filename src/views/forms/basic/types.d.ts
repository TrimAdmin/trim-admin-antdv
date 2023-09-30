import { Dayjs } from 'dayjs'

export type formObjType = {
  name: string
  sex: number
  type: number
  timeRange: Array<Dayjs>
  turboMode: boolean
  fruit: Array<number>
  introduction: string
}
