<!--
 * @Author       : liuxuhao
 * @LastEditors  : liuxuhao
-->
<template>
  <div class="hx-block pad-center">
    <div class="container">
      <span class="text-main" style="font-size: 40px"></span>
      <br />
      <br />
      <span class="color-gray">We are willing to take any kind of suggestions</span><br />
      <div class="pad-buttons">
        <hx-button @click="toLink('https://github.com/lxhfight/hxui')" size="bg" blank round color="#242A2E">
          <strong>Github</strong>  
        </hx-button>
        <hx-button @click="toLink('https://npmjs.org/hxui')" size="bg" blank round color="#F9640A">
          <strong>npm</strong>  
        </hx-button>
        <hx-button @click="toMail" size="bg" blank round color="#F44335">
          <strong>Email</strong>
        </hx-button>
      </div>
    </div>
    <footer class="footer">
      <a href="mailto: lxhfight1@gmail.com" class="color-gray">lxhfight1@gmail.com</a> |
      <a class="color-gray text-icp" target="_blank" href="http://www.beian.miit.gov.cn/">粤ICP备17018923号</a>
    </footer>
  </div>
</template>
<script>
import { HxButton } from '@/hxui'
import Typed from 'typed.js'
export default {
  components: {
    HxButton
  },
  data () {
    return {
      className: '.text-main',
      options: {
        strings: [
          `<strong>HXUI</strong> is a sweet UI library for Vue^2500`,
          '<strong>HXUI</strong> provides <i><strong>Layouts</strong></i>, ^800 <i><strong>Components</strong></i>^800 and also <i><strong>Plugins</strong></i>^2500',
          'Thanks^800 for experiencing <strong style="color: cornflowerblue;">HXUI</strong>'
        ],
        typeSpeed: 60,
        backSpeed: 30,
        startDelay: 600,
        smartBackspace: true
      }
    }
  },
  methods: {
    $_init () {
      // eslint-disable-next-line
      const typed = new Typed(this.className, this.options)
    },
    toLink (link) {
      window.open(link, '_blank')
    },
    toMail () {
      window.open('mailto:lxhfight51@qq.com', '_blank')
    }
  },
  mounted () {
    this.$_init() 
  }
}
</script>

<style lang="scss" scoped>
  @import "./global.scss";
  .pad-center {
    height: calc(100% - #{$height-navbar});
    @include block;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    position: relative;
    .hx-container {
      padding: $pm-md;
    }
    .footer {
      position: absolute;
      @include centerHorizontal;
      bottom: $pm-bg;
      .text-icp {
        font-size: $font-md;
        &:hover {
          color: $color-blue!important;
        }
      }
    }
    .pad-buttons {
      margin-top: $pm-lg;
      .hx-button {
        min-width: 100px;
      }
      .hx-button + .hx-button {
        margin-left: $pm-bg;
      }
    }
  }
</style>
