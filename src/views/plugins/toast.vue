<template>
  <article class="pad-article">
    <header class="title">$hxui.toast 轻量级弹框</header>
    <span class="desc">
      在需要弹出轻量级（不需要用户进行交互，提醒完后自动淡出）的提示的场景下，可以使用 <em>this.$hxui.toast(options)</em>，
      需要传入一个JavaScript对象作为唯一参数，通过对象中的属性定义toast的内容。
    </span>
    <!-- 确认框的文案 -->
    <div class="section">
      <span class="title">
        基本属性
      </span>
      <span class="desc">
        通过 <em>options.text</em> 定义Toast中纯文本的内容，如果需要使用富文本则使用 <em>options.html</em> 配置
        （引入富文本目的是可以强调部分信息，不建议在如此轻量级的弹框中使用过于花里胡哨的样式）
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button @click="doToastText">
            弹出纯文本 Toast
          </hx-button>
          <hx-button @click="doToastHTML">
            弹出富文本 Toast
          </hx-button>
        </div>
        <div class="code">
          <span class="tips">
            插件方法已默认在 <strong>main.js</strong> 中全局引入，所以在业务页面组件中无需重复引入。
          </span>
          <pre class="detail" v-highlightjs="firstText">
            <code class="javascript">
            </code>
          </pre>
        </div>
      </div>
      <span class="desc">
        和HXUI很多组件一样，Toast 也可以通过 <em>level</em> 配置不同级别颜色，默认为消息级别的蓝色。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button type="info" @click="doToastText('info')">
            消息级别的toast
          </hx-button>
          <hx-button type="success" @click="doToastText('success')">
            成功级别的toast
          </hx-button>
          <hx-button type="warn" @click="doToastText('warn')">
            警告级别的toast
          </hx-button>
          <hx-button type="error" @click="doToastText('error')">
            错误级别的toast
          </hx-button>
          <hx-button type="fatal" @click="doToastText('fatal')">
            崩溃级别的toast
          </hx-button>
        </div>
      </div>
    </div>
    <!-- 颜色等级 -->
    <div class="section">
      <span class="title">
        延时
      </span>
      <span class="desc">
        如果希望弹出消息停留更久，使用 <em>options.during</em> 设置停留的毫秒数，默认为 1500毫秒。<br />
        (建议时长在1500毫秒~4500毫秒之间，视内容长短以及重要程度而定)
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button @click="doToastDuring(1500)">
            1500毫秒的Toast
          </hx-button>
          <hx-button type="info" @click="doToastDuring(3000)">
            3000毫秒的Toast
          </hx-button>
          <hx-button type="fatal" @click="doToastDuring(4500)">
            4500毫秒的Toast
          </hx-button>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="secondText">
            <code class="javascript">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <!-- 文本框类型 -->
    <div class="section">
      <span class="title">
        弹框位置
      </span>
      <span class="desc">
        Toast弹框默认从顶部水平居中位置弹出，使用 <em>options.position</em> 可以定义不同位置弹出Toast，<br/>
        <span class="hide-sm">
          <strong style="width: 100px; margin-right: 16px; display: inline-block;">top:</strong> 顶部居中位置（默认）<br/>
          <strong style="width: 100px; margin-right: 16px; display: inline-block;">topLeft:</strong> 顶部居左位置<br/>
          <strong style="width: 100px; margin-right: 16px; display: inline-block;">topRight:</strong> 顶部居左位置<br/>
          <strong style="width: 100px; margin-right: 16px; display: inline-block;">center:</strong> 页面正中央位置<br/>
          <strong style="width: 100px; margin-right: 16px; display: inline-block;">bottom:</strong> 顶部居左位置<br/>
          <strong style="width: 100px; margin-right: 16px; display: inline-block;">bottomLeft:</strong> 底部居左位置<br/>
          <strong style="width: 100px; margin-right: 16px; display: inline-block;">bottomRight:</strong> 底部居右位置<br/>
        </span>
        <span class="hide-md hide-bg">
          <strong style="width: 100px; margin-right: 16px; display: inline-block;">top:</strong> 顶部居中位置<br/>
          <strong style="width: 100px; margin-right: 16px; display: inline-block;">center:</strong> 页面正中央位置<br/>
          <strong style="width: 100px; margin-right: 16px; display: inline-block;">bottom:</strong> 底部居中位置（默认）<br/>
        </span>
      </span>
      <div class="pad-preview">
        <div class="demo">
          <div class="pad-button-position hide-sm">
            <button class="btn-position topLeft" @click="doToastPosition('topLeft')">
              顶部居左<br />Toast
            </button>
            <button class="btn-position top" @click="doToastPosition('top')">
              顶部居中<br />Toast
            </button>
            <button class="btn-position topRight" @click="doToastPosition('topRight')">
              顶部居右<br />Toast
            </button>
            <button class="btn-position center" @click="doToastPosition('center')">
              正中央<br />Toast
            </button>
            <button class="btn-position bottomLeft" @click="doToastPosition('bottomLeft')">
              底部居左<br />Toast
            </button>
            <button class="btn-position bottom" @click="doToastPosition('bottom')">
              底部居中<br />Toast
            </button>
            <button class="btn-position bottomRight" @click="doToastPosition('bottomRight')">
              底部居右<br />Toast
            </button>
          </div>
          <div class="pad-button-position hide-bg hide-md">
            <button class="btn-position center" @click="doToastPosition('top')">
              顶部 Toast
            </button>
            <button class="btn-position center" @click="doToastPosition('center')">
              正中央 Toast
            </button>
            <button class="btn-position center" @click="doToastPosition('bottom')">
              底部 Toast
            </button>
          </div>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="thirdText">
            <code class="javascript">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <!-- 回调事件 -->
    <div class="section">
      <span class="title">
        便捷方法
      </span>
      <span class="desc">
        <strong>$hxui.toast</strong> 除了传入一个对象作为参数，也可以用一个字符串（消息内容）为参数，会弹出一个消息级别，停留时间1500毫秒的 toast 消息，
        同时，$hxui.toast对象中也包含多个方法，均以<strong>一个字符串（消息内容）为参数</strong>，如下：<br/><br/>
        <em>$hxui.toast[{level}]</em>： 弹出一个{level}级别，时长1500毫秒的 Toast 消息, 如：<em>this.$hxui.toast.success('Yoho~')</em><br/>
      </span>
       <div class="pad-preview">
        <div class="code">
          <pre class="detail" v-highlightjs="forthText">
            <code class="javascript">
            </code>
          </pre>
        </div>
       </div>
    </div>
    <div class="section">
      <span class="title">属性表格</span>
      <div class="hx-table">
        <table>
          <thead>
            <tr>
              <td class="sm">参数</td>
              <td class="bg">说明</td>
              <td class="sm">类型</td>
              <td class="bg">可选值</td>
              <td class="md">默认值</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in props" :key="idx">
              <td v-text="item.name"></td>
              <td v-text="item.desc"></td>
              <td v-text="item.type"></td>
              <td v-text="item.option"></td>
              <td v-text="item.default"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      firstText: `// 弹出纯文本 Toast
this.$hxui.toast({
  text: '我是一个纯文本的Toast',
  level: 'info'
})

// 弹出富文本 Toast
this.$hxui.toast({
  html: '我是一个<strong style="color: orange;">富文本</strong>的Toast弹框',
  level: 'info'
})`,  
      secondText: `const doToastDuring = (during) => {
  this.$hxui.toast({
    text: '我是一个停留时间不一的toast弹框',
    level: 'info',
    during: during
  })
}`,    
      thirdText: `const doToastPosition = (position) => {
  this.$hxui.toast({
    text: '我是一个弹出方位不一的toast弹框',
    level: 'warn',
    position
  })
}`, 
      forthText: `this.$hxui.toast.info('我是一个消息级别的toast弹框');
this.$hxui.toast.success('我是一个成功级别的toast弹框');
this.$hxui.toast.warn('我是一个警告级别的toast弹框');
this.$hxui.toast.error('我是一个错误级别的toast弹框');
this.$hxui.toast.fatal('我是一个崩溃级别的toast弹框');`,
      props: [
        { name: 'text', desc: '纯文本消息内容', type: 'String', option: '字符串', default: '空字符串' },
        { name: 'html', desc: '富文本消息内容', type: 'String', option: '字符串', default: '空字符串' },
        { name: 'during', desc: '消息停留时长', type: 'Number', option: '毫秒数', default: '1500' },
        { name: 'level', desc: '主题等级颜色', type: 'String', option: '颜色值', default: 'main' },
        { name: 'position', desc: '弹出消息的方位', type: 'String', option: 'topLeft/top/topRight/center/bottomLeft/bottom/bottomRight', default: 'top' }
      ]
    }
  },
  props: [
    { name: 'content', desc: '下拉菜单选项内容', type: 'Array', option: '由数值、字符串或对象组成', default: '[]' },
    { name: 'placeholder', desc: '文本为空时的提示信息', type: 'String', option: '文本', default: '空字符串' }
  ],
  methods: {
    doToastText (type) {
      this.$hxui.toast({
        text: `我是一个纯文本的Toast弹框: ${type}`,
        level: type || 'info'
      })
    },
    doToastHTML () {
      this.$hxui.toast({
        html: '我是一个<strong style="color: orange;">富文本</strong>的Toast弹框',
        level: 'info'
      })
    },
    doToastDuring (during) {
      this.$hxui.toast({
        text: '我是一个停留时间不一的toast弹框',
        level: 'info',
        during: during
      })
    },
    doToastPosition (position) {
      this.$hxui.toast({
        text: '我是一个弹出方位不一的toast弹框',
        level: 'warn',
        position
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../global.scss";
.pad-button-position {
  height: 180px;
  width: 300px;
  font-size: 0;
  margin: 0 auto;
  .btn-position {
    width: 100px;
    height: 60px;
    margin: 0;
    border: 1px solid $color-gray;
    box-shadow: inset 0 0 $pm-md rgba(0,0,0,.1);
    vertical-align: top;
    font-size: 12px;
    background-color: white;
    &.center {
      display: block;
      width: 100%;
    }
  }
}
</style>
