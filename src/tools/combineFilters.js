/*
 * @Author       : liuxuhao
 * @LastEditors  : liuxuhao
 */
// 用于存放并注册全局过滤器
/**
 * 用于匹配寻找数组中符合的对象，并输出该对象对应的参数值
 * @param {Array} array 目前数组
 * @param {Any} value 用于比较的值
 * @param {Object} options 其他参数
 * @param {String} options.valueParam 比较的参数名 默认 ‘value’
 * @param {String} options.keyParam 输出的参数名 默认 ‘key’
 * @param {Boolean} options.isIncludes true 包含比较  false 全等比较（默认）
 * @returns 
 */
export const _getInfo = (array, value, options) => {
  const valueParam = options.valueParam || 'value' // 用于比较值的参数名  valueParam
  const keyParam = options.keyParam || 'key' // 最终匹配输出的参数名  keyParam
  const isIncludes = options.isIncludes || false // 包含还是全等？ 默认是全等
  let data = array.filter(v => {
    // eslint-disable-next-line
    return isIncludes ? value.includes(v[valueParam]) : (v[valueParam] === value)
  })
  if (!(data && data[0])) {
    return '-'
  }
  return data[0][keyParam] || '-'
}

const combineFilters = (Vue) => {
  // Vue.filter('sex', (value) => _getInfo(sexArray, value))
  // Vue.filter('sexClass', (value) => _getInfo(sexArray, value, 'className'))
}

export default combineFilters
