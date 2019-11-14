const toString = Object.prototype.toString

export function isDate(param: any): boolean {
  return toString.call(param) === '[object Date]'
}

export function isObject(param: any): boolean {
  return param !== null && typeof param === 'object'
}

export function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
