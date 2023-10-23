import dayjs from 'dayjs'

// 获取当前时间段
export function getTimeSlotString(): string {
  // 0-6点为凌晨
  const midnight = dayjs().isAfter(dayjs().startOf('day')) && dayjs().isBefore(dayjs().set('hour', 6).startOf('hour'))
  // 6-10点为上午
  const morning =
    dayjs().isAfter(dayjs().set('hour', 6).startOf('hour')) && dayjs().isBefore(dayjs().set('hour', 11).startOf('hour'))
  // 10-13点为中午
  const noon =
    dayjs().isAfter(dayjs().set('hour', 11).startOf('hour')) &&
    dayjs().isBefore(dayjs().set('hour', 13).startOf('hour'))
  // 13-18点为下午
  const afternoon =
    dayjs().isAfter(dayjs().set('hour', 13).startOf('hour')) &&
    dayjs().isBefore(dayjs().set('hour', 18).startOf('hour'))
  // 18-24点为晚上
  const night = dayjs().isAfter(dayjs().set('hour', 18).startOf('hour')) && dayjs().isBefore(dayjs().endOf('day'))
  if (midnight) return '凌晨'
  if (morning) return '上午'
  if (noon) return '中午'
  if (afternoon) return '下午'
  if (night) return '晚上'
  return ''
}
