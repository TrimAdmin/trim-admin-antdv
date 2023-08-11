// 加密方法
// https://cryptojs.gitbook.io/docs/
import md5 from 'crypto-js/md5'
import SHA256 from 'crypto-js/SHA256'

/**
 * md5加密
 * @param origin {string}
 * @return {string}
 */
export function cryptoMD5(origin: string): string {
  return md5(origin).toString()
}

/**
 * SHA256加密
 * @param origin {string}
 * @return {string}
 */
export function cryptoSHA256(origin: string): string {
  return SHA256(origin).toString()
}

export function encodeHEX()
