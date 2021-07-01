<template>
  <article class="pad-article">
    <header class="title">按钮组件 HxButton</header>
    <span class="desc">HXUI提供一套供快捷使用的按钮组件</span>
    <!-- 配置按钮样式 -->
    <div class="section">
      <span class="title">配置按钮样式</span>
      <span class="desc">通过设置不同的 <em>type</em> 显示不同的颜色，代表不同的警告级别</span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button type="main">主题色</hx-button>
          <hx-button type="info">提示</hx-button>
          <hx-button type="success">正常</hx-button>
          <hx-button >默认</hx-button>
          <hx-button type="warn">警告</hx-button>
          <hx-button type="error">错误</hx-button>
          <hx-button type="fatal">崩溃</hx-button>
        </div>
        <div class="code">
          <span class="tips">
            按钮 type 属性会对应到 HxButton 的类中
          </span>
          <pre class="detail" v-highlightjs="text" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <!-- 配置按钮大小 -->
    <div class="section">
      <span class="title">配置按钮大小</span>
      <span class="desc">通过设置不同的 <em>size</em> 显示不同大小</span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button size="sm">小按钮</hx-button>
          <hx-button size="md">按钮</hx-button>
          <hx-button size="bg">大按钮</hx-button>
        </div>
        <div class="code">
          <span class="tips">
            按钮 size 属性会对应到 HxButton 的类中
          </span>
          <pre class="detail" v-highlightjs="sizeText" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div class="section">
      <!-- 配置按钮类型 -->
      <span class="title">配置按钮类型</span>
      <span class="desc">空心类型按钮添加 <em>blank</em> 属性，文本类型按钮添加 <em>text</em> 属性</span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button type="main" blank>主题色</hx-button>
          <hx-button type="info" blank>提示</hx-button>
          <hx-button type="success" blank>正常</hx-button>
          <hx-button type="error" blank>错误</hx-button>
          <hx-button type="main" text>主题色</hx-button>
          <hx-button type="success" text>正常</hx-button>
          <hx-button type="warn" text>警告</hx-button>
        </div>
        <div class="code">
          <span class="tips">
            按钮 <em>type</em>  属性会对应到 HxButton 的类中
          </span>
          <pre class="detail" v-highlightjs="typeText" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
      <!-- 圆角和直角 -->
      <span class="title">配置按钮是否圆角</span>
      <span class="desc">如果需要圆角则添加 <em>round</em> 属性，完全不需要默认圆角，则添加 <em>sharp</em> 属性</span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button type="info" round>圆角</hx-button>
          <hx-button type="info" round blank>警告</hx-button>
          <hx-button type="info" round text>正常</hx-button>
          <hx-button type="info" sharp>直角</hx-button>
          <hx-button type="info" sharp blank>直角</hx-button>
          <hx-button type="info" sharp text>直角</hx-button>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="roundText" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div class="section">
      <span class="title">自定义</span>
      <span class="desc">
        如果需要定义除了事件等级中定义的<strong>自定义颜色</strong>， 还可以通过 <em>color</em> 设置对应色值。
        当然，也和其他基本组件类似，按钮也可以通过 <em>text-color</em> 设置文本的颜色值。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button color="#ff5a50">普通</hx-button>
          <hx-button color="#ff5a50" round blank>圆边</hx-button>
          <hx-button color="#ff5a50" sharp>直边</hx-button>
          <hx-button color="#ff5a50" blank>线框</hx-button>
          <hx-button color="#ff5a50" text>文字</hx-button>
          <hx-button color="orange" text-color="red">文字</hx-button>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="colorText" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <props-table :content="props"></props-table> 
    <events-table :content="events"></events-table>
  </article>
</template>

<script>
import { HxButton } from 'hxui'
import EventsTable from './../../cpts/EventsTable.vue'
import PropsTable from './../../cpts/PropsTable.vue'
export default {
  components: {
    HxButton,
    EventsTable,
    PropsTable
  },
  data () {
    return { 
      show: false,
      follower: null,
      text: `<hx-button type="main"> 主题色 </hx-button>
<hx-button type="info">提示</hx-button>
<hx-button type="success"> 正常 </hx-button>
<hx-button > 默认 </hx-button>
<hx-button type="warn"> 警告 </hx-button>
<hx-button type="error"> 错误 </hx-button>
<hx-button type="fatal"> 崩溃 </hx-button>`,
      sizeText: `<hx-button size="sm"> 小按钮 </hx-button>
<hx-button size="md"> 按钮 </hx-button>
<hx-button size="bg"> 大按钮 </hx-button>`,
      typeText: `<hx-button type="main" blank>主题色</hx-button>
<hx-button type="info" blank>提示</hx-button>
<hx-button type="success" blank>正常</hx-button>
<hx-button type="error" blank>错误</hx-button>
<hx-button type="main" text>主题色</hx-button>
<hx-button type="success" text>正常</hx-button>
<hx-button type="warn" text>警告</hx-button>`,
      roundText: `<hx-button type="info" round>圆角</hx-button>
<hx-button type="info" round blank>警告</hx-button>
<hx-button type="info" round text>正常</hx-button>
<hx-button type="info" sharp>直角</hx-button>
<hx-button type="info" sharp blank>直角</hx-button>
<hx-button type="info" sharp text>直角</hx-button>`,
      colorText: `<hx-button color="#ff5a50">普通</hx-button>
<hx-button color="#ff5a50" round blank>圆边</hx-button>
<hx-button color="#ff5a50" sharp>直边</hx-button>
<hx-button color="#ff5a50" blank>线框</hx-button>
<hx-button color="#ff5a50" text>文字</hx-button>
<hx-button color="orange" text-color="red">文字</hx-button>`,
      events: [
        { name: 'click', desc: '点击触发事件', option: '组件实例' }
      ],
      props: [
        { name: 'type', desc: '按钮样式类型', type: 'String', option: 'main/default/success/warn/error/fatal', default: 'default' },
        { name: 'color', desc: '按钮自定义颜色', type: 'String', option: 'css颜色值', default: '空字符串' },
        { name: 'textColor', desc: '按钮文本颜色（高优先级）', type: 'String', option: 'css颜色值', default: '空字符串' },
        { name: 'icon', desc: '按钮前图标链接', type: 'String', option: '图片相对路径/URL', default: '空字符串' },
        { name: 'size', desc: '按钮大小', type: 'String', option: 'sm 小/md 默认/bg 大', default: 'md' },
        { name: 'text', desc: '文字按钮', type: 'Boolean', option: 'true/false', default: 'false' },
        { name: 'blank', desc: '空心按钮', type: 'Boolean', option: 'true/false', default: 'false' },
        { name: 'round', desc: '定义圆角', type: 'Boolean', option: 'true/false', default: 'false' },
        { name: 'sharp', desc: '定义直角', type: 'Boolean', option: 'true/false', default: 'false' }
      ]
    }
  },
  mounted () {
    this.$_init()
  },
  methods: {
    doHide () {
      this.show = false
    },
    $_init () {
      this.follower = this.$refs.follower
    },
    popTips (position) {
      this.$hxui.popTip({
        text: 'Yahoo',
        position,
        level: 'error'
      })
    },
    popConfirm () {
      const that = this
      this.$hxui.confirm({
        text: 'You are sure to access the file',
        level: 'error',
        onConfirm () {
          that.$hxui.popTip('Yahoo China')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../../global.scss";
.demo .hx-button {
  margin-right: $pm-sm;
}
</style>
