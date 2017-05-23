import 'whatwg-fetch'

const api = 'http://localhost:3001'

export function get(url) {
  var result = fetch(api + url).then(res => res.json())

  return result
}
