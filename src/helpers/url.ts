import { isDate, isObject, encode } from './utils'

export function buildURL(url: string, param?: string) {
  if (!param) {
    return url
  }
  const tempUrl = []
  Object.keys(param).forEach(key => {
    let current = param[key]
    if (current === null || current === undefined) {
      return
    }
    let tempArr = []
    if (Array.isArray(current)) {
      tempArr = current
    } else {
      tempArr = [current]
    }
    tempArr.forEach(temp => {
      if (isObject(temp)) {
        current = JSON.stringify(temp)
      } else if (isDate(temp)) {
        current = (temp as Date).toISOString()
      }
      tempUrl.push(`${encode(key)}=${encode(current)}`)
    })
    let serializedParams = tempUrl.join('&')
    if (serializedParams) {
      const idx = url.indexOf('#')
      if (idx > -1) {
        url = url.slice(0, idx)
      }
      url += (url.indexOf('?') > -1 ? '&' : '?') + serializedParams
    }
  })
  return url
}
