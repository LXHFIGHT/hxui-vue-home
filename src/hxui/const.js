// HXUI中使用到的常量汇总于此

const INFO = 'info'
const DEFAULT = 'default'
const WARN = 'warn'
const ERROR = 'error'
const SUCCESS = 'success'
const FATAL = 'fatal'

export const Levels = {
  INFO,
  DEFAULT,
  WARN,
  ERROR,
  SUCCESS,
  FATAL
}
export const levelKeys = [INFO, DEFAULT, WARN, ERROR, SUCCESS, FATAL]
export const levelArray = [
  { key: INFO, color: 'cornflowerblue', text: '提示' },
  { key: DEFAULT, color: 'cornflowerblue', text: '提示' },
  { key: SUCCESS, color: 'rgb(135, 208, 104)', text: '成功' },
  { key: WARN, color: '#ff8f02', text: '警告' },
  { key: ERROR, color: '#ff5a50', text: '错误' },
  { key: FATAL, color: '#000000', text: '崩溃' }
]
// 等级筛选器
export const levelFilter = (text, target = 'text') => {
  let result = levelArray.filter(v => v.key === text)
  if (result.length) {
    return result[0][target]
  }
  return levelArray[0][target] // 使用 default 作为默认
}

// 位置
export const Positions = {
  TOP: 'top',
  CENTER: 'center',
  BOTTOM: 'bottom',
  TOP_LEFT: 'topLeft',
  TOP_RIGHT: 'topRight',
  BOTTOM_LEFT: 'bottomLeft',
  BOTTOM_RIGHT: 'bottomRight'
}

// 大小
const SIZE_XS = 'xs'
const SIZE_SM = 'sm'
const SIZE_MD = 'md'
const SIZE_BG = 'bg'
const SIZE_LG = 'lg'
export const Sizes = {
  XS: SIZE_XS,
  SM: SIZE_SM,
  MD: SIZE_MD,
  BG: SIZE_BG,
  LG: SIZE_LG
}
export const sizeKeys = [ SIZE_XS, SIZE_SM, SIZE_MD, SIZE_BG, SIZE_LG ]