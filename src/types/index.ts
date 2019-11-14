export type ApiMethod = 'get' | 'GET' | 'post' | 'POST' | 'patch' | 'PATCH'

export interface ApiConfigs {
  url: string
  method: ApiMethod
  data?: any
  params?: any
}
