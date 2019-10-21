export const $ = (query) => {
  return document.querySelectorAll(query)
}

export const getChildByClassName = ($view, className) => {
  const children = $view.childNodes
  for (let i = 0; i < children.length; i++) {
    if (children[i].classList && children[i].classList.contains(className)) {
      return children[i]
    }
  }
  return null
}

// 获取距离屏幕顶部的距离
export const getElementToPageTop = (el) => {
  if (el.offsetParent) {
    return getElementToPageTop(el.offsetParent) + el.offsetTop
  }
  return el.offsetTop
}

// 获取距离屏幕左边的距离
export const getElementToPageLeft = (el) => {
  if (el.offsetParent) {
    return getElementToPageLeft(el.offsetParent) + el.offsetLeft
  }
  return el.offsetLeft
}

export const getElementScrollTop = (el) => {
  if (el.offsetParent) {
    return getElementScrollTop(el.offsetParent) + el.scrollTop
  }
  return el.scrollTop
}
