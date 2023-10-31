/**
 * 驼峰转蛇形
 * @param str
 */
export function camelToSnakeCase(str: string) {
  return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
}

/**
 * 蛇形转小驼峰
 * @param str
 */
export function snakeToCamelCase(str: string) {
  return str
    .replace(/[^a-z0-9]/gi, ' ')
    .toLowerCase()
    .split(' ')
    .map((s, index) => (index === 0 ? s : s[0].toUpperCase() + s.substring(1, s.length)))
    .join('')
}
