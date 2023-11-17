/**
 * 火车车次号（如G1893、D3217等）
 * @param str
 */
export function isTrainNumber(str: string) {
  return /^[GCDZTSPKXLY1-9]\d{1,4}$/.test(str)
}

/**
 * 子网掩码（如：255.255.255.0）
 * @param str
 */
export function isSubnetMask(str: string) {
  return /^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/.test(str)
}

/**
 * 中文姓名
 * @param str
 */
export function isChineseName(str: string) {
  return /^[\u4e00-\u9fa5·]{2,16}$/.test(str)
}

/**
 * 手机号，根据2019年工信部公布的手机号段
 * @param str
 */
export function isStrictMobile(str: string) {
  return /^(?:(?:\+|00)86)?1(?:3\d|4[5-79]|5[0-35-9]|6[5-7]|7[0-8]|8\d|9[189])\d{8}$/.test(str)
}

/**
 * 手机号宽松版
 * @param str
 */
export function isMobile(str: string) {
  return /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(str)
}

/**
 * 统一社会信用代码（严谨）
 * @param str
 */
export function isStrictUnifiedSocialCreditCode(str: string) {
  return /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/.test(str)
}

/**
 * 统一社会信用代码
 * @param str
 */
export function isUnifiedSocialCreditCode(str: string) {
  return /^(([0-9A-Za-z]{15})|([0-9A-Za-z]{18})|([0-9A-Za-z]{20}))$/.test(str)
}

/**
 * 二代身份证
 * @param str
 */
export function isIDNumber(str: string) {
  return /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(str)
}

/**
 * 邮箱
 * @param str
 */
export function isEmail(str: string) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    str
  )
}
