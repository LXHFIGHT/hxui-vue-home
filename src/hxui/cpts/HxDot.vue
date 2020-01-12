<template>
  <div :class="['hx-dot', position, type, (level || color)]">
    <span class="text" v-if="type !== DotTypes.DOT">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { dotTypeArray, DotTypes, Positions, levelKeys } from './../const' 
export default {
  props: {
    type: { // 点组件类型，dot 不带文案的色点  block 带文案的色点  blank 带文案的色点
      type: String,
      default: DotTypes.DOT,
      validator (val) {
        return dotTypeArray.includes(val)
      }
    },
    position: { // 点组件所在位置
      type: String,
      default: Positions.TOP_RIGHT,
      validator (val) {
        return [Positions.TOP_RIGHT, Positions.TOP_RIGHT, Positions.BOTTOM_LEFT, Positions.BOTTOM_RIGHT].includes(val)
      }
    },
    level: {
      type: String,
      validator (val) {
        return levelKeys.includes(val)
      } 
    },
    color: {
      type: String
    }
  },
  data () {
    return {
      DotTypes
    }
  }
}
</script>
