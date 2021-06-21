/**  
 * 此处用户放置项目中涉及到的常量
 */
const DEFAULT = 'default'
const WARNING = 'warn'
const ERROR = 'error'
const SUCCESS = 'success'
const FATAL = 'fatal'
export const TIMESTAMP_FOR_A_DAY = 24 * 60 * 60 * 1000 // 一天的时间戳量
export const AlertLevels = { // 提示级别，可适用于HXUI的颜色和弹出框
  DEFAULT,
  WARNING,
  ERROR,
  SUCCESS,
  FATAL
}

export const Themes = {
  LIGHT: 'light',
  DARK: 'dark'
} // 主题风格

export const scriptText = `<script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=您申请的key值"></script>`
