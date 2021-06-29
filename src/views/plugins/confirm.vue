<template>
  <article class="pad-article">
    <header class="title">$hxui.confirm 确认框</header>
    <span class="desc">
      使用者在需要用户进行二次确认的场景下，可以使用 <em>this.$hxui.confirm(options)</em> 弹出确认框，
      需要传入一个JavaScript对象作为唯一参数，通过对象中的属性定义确认对话框的内容。
    </span>
    <!-- 确认框的文案 -->
    <div class="section">
      <span class="title">
        确认框的文案
      </span>
      <span class="desc">
        <em>options.title</em>： 确认框的标题<br/> 
        <em>options.text</em>： 确认框中间提示的文案<br/> 
        <em>options.confirmText</em>： 确认按钮上的文案，默认为<strong>“确定”</strong><br/> 
        <em>options.cancelText</em>： 取消按钮上的文案，默认为<strong>“取消”</strong><br/> 
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button text="text" @click="doConfirmTitle">
            点此弹出文案定义好的确认框
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
        <em>options.html</em>： 如果中间提示的信息不是纯文案，可以使用 <em>html</em> 替代 <em>text</em>，就可以置入富文本了。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button type="info" text="text" @click="doConfirmHTML">
            点此弹出富文本的确认框
          </hx-button>
        </div>
        <div class="code">
          <span class="tips">
            <em>text</em> 和 <em>html</em> 应二者选其一，如果不小心两者都有填写，则会以 <em>html</em> 为准。
          </span>
          <pre class="detail" v-highlightjs="secondText">
            <code class="javascript">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <!-- 颜色等级 -->
    <div class="section">
      <span class="title">
        颜色等级
      </span>
      <span class="desc">
        <em>options.level</em>： 和HXUI很多组件一样，确认框也可以配置不同级别颜色，默认使用主题色。<br/>
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button type="fatal" @click="doConfirmLevel">
            弹出崩溃级别的确认框
          </hx-button>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="thirdText">
            <code class="javascript">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <!-- 其他配置 -->
    <div class="section">
      <span class="title">
        其他配置
      </span>
      <span class="desc">
        <em>options.hideCancelBtn</em>： 如果需要用户执行确认操作，才能进行下一步，则将此项设置为 <em>true</em><br/>
        <em>options.disableMask</em>： 如果需要禁用点击模态框蒙层关闭模态框的操作，将此项设置为 <em>true</em><br/>
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button type="info" @click="doConfirmHideCancelBtn">
            隐藏取消按钮
          </hx-button>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="fifthText">
            <code class="javascript">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <!-- 回调事件 -->
    <div class="section">
      <span class="title">
        回调事件
      </span>
      <span class="desc">
        <em>options.onConfirm</em>： 点击 “确认” 按钮调起的事件<br/>
        <em>options.onCancel</em>： 点击 “取消” 按钮调起的事件<br/> 
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button text="text" @click="doCallback">
            点此弹出一个确认按钮和取消按钮都有回调的确认框 😆😆
          </hx-button>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="forthText">
            <code class="javascript">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div class="section">
      <props-table :content="props"></props-table>
    </div>
  </article>
</template>
<script>
import PropsTable from './../cpts/PropsTable'
export default {
  components: {
    PropsTable
  },
  data () {
    return {
      firstText: `this.$hxui.confirm({
  title: '🍬糖果提示',
  text: '确认购买这么多的糖果吗？',
  confirmText: '照买',
  cancelText: '我再想想'
})`,  
      secondText: `this.$hxui.confirm({
  title: '🍬糖果提示',
  html: '确认购买<span class="color-main">这么多</span>的糖果吗？
         <strong class="color-red">(小心吃多蛀牙哟)</strong>'
})`,    
      thirdText: `this.$hxui.confirm({
  title: '退款提示',
  level: 'fatal',
  text: '确认将所有款项退还给顾客吗?'
})`,  
      forthText: `this.$hxui.confirm({
  title: '🍬糖果提示',
  text: '确定购买这么多的糖果吗？',
  onConfirm: () => {
    alert('已购买，欢迎下次光临')
  },
  onCancel: () => {
    alert('已取消')
  }
})`, 
      fifthText: `this.$hxui.confirm({
  title: '选择配送地址',
  hideCancelBtn: true,
  disableMask: true,
  level: 'info',
  text: '点击进入下一步：定制糖果配送地点~ '
})`,
      props: [
        { name: 'title', desc: '标题', type: 'String', option: '建议少于10字的字符串', default: '空字符串' },
        { name: 'text', desc: '主体部分的纯文本', type: 'String', option: '字符串', default: '空字符串' },
        { name: 'html', desc: '主体部分的富文本', type: 'String', option: '富文本（支持HTML）', default: '空字符串' },
        { name: 'confirmText', desc: '“确认”按钮上的文案', type: 'String', option: '字符串', default: '确认' },
        { name: 'cancelText', desc: '“取消”按钮上的文案', type: 'String', option: '字符串', default: '取消' },
        { name: 'level', desc: '主题等级颜色', type: 'String', option: '颜色值', default: 'main' },
        { name: 'hideCancelBtn', desc: '是否隐藏取消按钮', type: 'Boolean', option: '布尔值', default: 'false' },
        { name: 'disableMask', desc: '是否禁用点击蒙层关闭', type: 'Boolean', option: '布尔值', default: 'false' },
        { name: 'onConfirm', desc: '点击“确认”按钮回调方法', type: 'Function', option: 'JS方法', default: '空' },
        { name: 'onCancel', desc: '点击“取消”按钮回调方法', type: 'Function', option: 'JS方法', default: '空' }
      ]
    }
  },
  methods: {
    doConfirmTitle () {
      this.$hxui.confirm({
        title: '🍬糖果提示',
        text: '确认购买这么多的糖果吗？',
        confirmText: '照买',
        cancelText: '我再想想'
      })
    },
    doConfirmHTML () {
      this.$hxui.confirm({
        title: '🍬糖果提示',
        html: '确认购买<span class="color-main">这么多</span>的糖果吗？<strong class="color-red">(小心吃多蛀牙哟)</strong>'
      })
    },
    doConfirmLevel () {
      this.$hxui.confirm({
        title: '退款提示',
        level: 'fatal',
        text: '确认将所有款项退还给顾客吗?'
      })
    },
    doConfirmHideCancelBtn () {
      this.$hxui.confirm({
        title: '选择配送地址',
        hideCancelBtn: true,
        disableMask: true,
        level: 'info',
        text: '点击进入下一步：定制糖果配送地点~ '
      })
    },
    doCallback () {
      this.$hxui.confirm({
        title: '🍬糖果提示',
        text: '确定购买这么多的糖果吗？',
        onConfirm: () => {
          alert('已购买，欢迎下次光临')
        },
        onCancel: () => {
          alert('已取消')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../global.scss";
</style>
