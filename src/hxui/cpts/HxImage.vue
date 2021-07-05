<!--
 * @Author       : liuxuhao
 * @LastEditors  : liuxuhao
-->
<template>
  <div :class="['hx-image', 
      (round && 'round'), 
      position, 
      (isBlock && 'block'),
      (height && width) ? 'adjust' : ''
    ]" 
    :style="height && width ? `height: ${height}; width: ${width}` : ''" 
    ref="hxImage">
    <img ref="img" :style="imageStyle" class="img" v-if="!isLoadingImage" :src="src" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
      /** 
       * position 表示 图片在hx-image组件的位置, 由组件计算得到:
       * 分为 'center'(正中央)、'centerHorizontal'（水平居中）以及 'centerVertical'(垂直居中)
       */
      position: 'center',
      isLoadingImage: false,
      isNormal: false,
      isBlock: false
    }
  },
  props: {
    src: {
      type: String,
      required: ''
    },
    round: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    }
  },
  methods: {
    $_initLayout () {
      const $view = this.$refs.hxImage
      if (!$view.style.height && !$view.style.width) {
        this.isBlock = true
      }
      
      this.clientWidth = $view.clientWidth
      this.$_initImage()
    },
    $_getPositionType (height, width) { // 计算图片所需展示类型
      if (!this.height || !this.width) {
        return
      }
      const $view = this.$refs.hxImage
      const cptRate = $view.clientHeight / $view.clientWidth // 组件的高宽比
      this.$nextTick(() => {
        const imgRate = height / width // 图片文件高宽比
        const $image = this.$refs['img']
        if (imgRate > cptRate) {
          this.position = 'centerVertical'
          $image.style.width = this.width
          $image.style.height = 'auto'
        } else {
          this.position = 'centerHorizontal'
          $image.style.height = this.height
          $image.style.width = 'auto'
        }
      })
    },
    $_initImage () {
      this.isLoadingImage = true
      let img = new Image()
      img.src = this.src
      img.onload = () => {
        this.isLoadingImage = false
        this.$_getPositionType(img.height, img.width)
      }
    }
  },
  mounted () {
    this.$_initLayout()
  },
  computed: {
    imageStyle () {
      if (this.height && this.width) {
        return ''
      }
      if (this.height && !this.width) {
        return `width: auto; height: ${this.height};`
      } else if (!this.height && this.width) {
        return `height: auto; width: ${this.width};`
      } else {
        return `height: auto; width: auto;`
      }
    }
  },
  watch: {
    src (newVal, oldVal) {
      if (newVal) {
        this.$_initLayout()
      }
    }
  }
}
</script>
