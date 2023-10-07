export function hexToRgba(color: string, alpha: number = 1): string {
  const rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  const hex = color.replace(rgx, function (_, r, g, b) {
    return r + r + g + g + b + b
  })
  const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!rgb) {
    return color
  }
  const r = parseInt(rgb[1], 16)
  const g = parseInt(rgb[2], 16)
  const b = parseInt(rgb[3], 16)
  return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')'
}

export function rgbToHex(color: any): string {
  const r = (color & 0xff0000) >> 16
  const g = (color & 0x00ff00) >> 8
  const b = color & 0x0000ff
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}
