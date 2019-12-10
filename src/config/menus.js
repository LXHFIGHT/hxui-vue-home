/**
 * Created by lxhfight on 2018/8/1.
 * Email lxhfight1@gmail.com
 * Description:
 *  用于存储侧边栏菜单栏的对象
 */

let menus = [
  {
    name: 'home',
    state: '/home',
    icon: 'home'
  },
  {
    name: 'Components',
    state: '/components/hx-button',
    icon: 'puzzle-piece'
  },
  {
    name: 'Plugins',
    state: '/plugins',
    icon: 'plug'
  }
]

// 各个页面的目录结构
export const componentsCatalog = [
  {
    key: '组件介绍',
    disabled: true,
    children: [
      '基本',
      { key: 'Button 按钮', value: 'hx-button' },
      // { key: 'Image 图片', value: 'hx-image' },
      '表单',
      { key: '行组件', value: 'hx-row' },
      { key: '输入框', value: 'hx-input' },
      { key: '下拉菜单', value: 'hx-selector' },
      { key: '标签框', value: 'hx-tag-editor' },
      { key: '上传文件组件', value: 'hx-smart-uploader' }
    ]
  }
]

export default menus
export const initMenus = (path) => {
  for (let menu of menus) {
    if (menu.state === path) {
      menu.selected = true
      break
    }
    if (menu.children) {
      for (let child of menu.children) {
        if (child.state === path) {
          menu.selected = true
          child.selected = true
          break
        }
      }
    }
  }
}
// 恢复侧边栏中所有按钮为未选中/未展开状态
export const restoreMenu = () => {
  for (let menu of menus) {
    if (menu.state) {
      menu.selected = false
      continue
    }
    if (menu.children) {
      menu.selected = false
      for (let child of menu.children) {
        child.selected = false
      }
    }
  }
}
// 选中或展开某侧边栏的功能
export const autoSelectMenu = (state) => {
  restoreMenu()
  for (let menu of menus) {
    if (!menu.children && menu.state === state) {
      menu.selected = true
      break
    }
    if (menu.children) {
      for (let child of menu.children) {
        if (child.state === state) {
          menu.selected = true
          child.selected = true
          return
        }
      }
    }
  }
}
