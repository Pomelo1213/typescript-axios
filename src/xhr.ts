import { ApiConfigs } from './types'

export default function xhr(configs: ApiConfigs) {
  const xhr = new XMLHttpRequest()
  const { data, method, url } = configs
  xhr.open(method, url)
  xhr.send(data)
}
