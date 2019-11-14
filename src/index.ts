import xhr from './xhr'
import { ApiConfigs } from './types'
import { buildURL } from './helpers/url'

function axios(configs: ApiConfigs) {
  // TODO:
  processConfigs(configs)
  xhr(configs)
}

function processConfigs(configs: ApiConfigs): void {
  configs.url = transformURL(configs)
}

function transformURL(configs: ApiConfigs): string {
  const { url, params } = configs
  return buildURL(url, params)
}

export default axios
