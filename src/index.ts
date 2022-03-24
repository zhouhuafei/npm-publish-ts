import { name, version } from '@/package'
import { sum } from '@/sum'
import sku from 'zhf.sku'

console.log('name：', name)
console.log('version：', version)
console.log('sum：', sum(1, 2))
console.log('sku：', sku([['a', 'b'], ['1', '2']]))

export {
  name,
  version,
  sum
}
