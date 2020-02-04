<template>
  <article class="pad-article">
    <header class="title">$hxui.prompt 文本确认框</header>
    <span class="desc">
      使用者在需要用户进行简单输入并作确认的场景下，可以使用 <em>this.$hxui.prompt(options)</em> 弹出文本确认框，
      需要传入一个JavaScript对象作为唯一参数，通过对象中的属性定义文本确认对话框的内容。
    </span>
    <!-- 确认框的文案 -->
    <div class="section">
      <span class="title">
        文案
      </span>
      <span class="desc">
        <em>options.title</em>： 确认框的标题<br/> 
        <em>options.placeholder</em>： 文本框为空时的提示文本，默认为“请输入内容”<br/> 
        <em>options.tips</em>： 附加提示内容<br/> 
        <em>options.confirmText</em>： 确认按钮上的文案，默认为<strong>“确定”</strong><br/> 
        <em>options.cancelText</em>： 取消按钮上的文案，默认为<strong>“取消”</strong><br/> 
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button text="text" @click="doPromptTitle">
            点此弹出文案定义好的文本确认框
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
        <em>options.text</em>： 如果需要默认填充的文本。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button type="info" text="text" @click="doTextPrompt">
            点此弹出带有默认值的文本确认框
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
          <hx-button type="info" text="text" @click="doPromptLevel">
            弹出提示级别的文本确认框
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
    <!-- 文本框类型 -->
    <div class="section">
      <span class="title">
        文本框类型
      </span>
      <span class="desc">
        <em>options.type</em>： 中间文本框的类型，
        默认是文本域类型 <strong>textarea</strong>，
        如果是行文本框，则是 <strong>text</strong>， 
        如果是面向数字类型内容，可以使用 <strong>number</strong><br/>
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button type="success" @click="doPromptType('text', 'success')">
            行文本类型文本确认框
          </hx-button>
          <hx-button type="warn" @click="doPromptType('textarea', 'warn')">
            文本域类型确认框
          </hx-button>
          <hx-button type="error" @click="doPromptType('number', 'error')">
            数字类型文本确认框
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
    <!-- 回调事件 -->
    <div class="section">
      <span class="title">
        回调事件
      </span>
      <span class="desc">
        <em>options.onConfirm</em>： 点击 “确认” 按钮调起的事件，文本框中的内容会作为回调方法的唯一参数<br/>
        <em>options.onCancel</em>： 点击 “取消” 按钮调起的事件<br/> 
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button text="text" @click="doCallback">
            点此弹出按钮均有回调的文本确认框 😆😆
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
      firstText: `this.$hxui.prompt({
  title: '🍬本次糖果屋订单意见',
  placeholder: '请填写亲的宝贵意见',
  tips: '最好填写在140字内~',
  confirmText: '提交',
  cancelText: '我再想想'
})`,  
      secondText: `this.$hxui.prompt({
  title: '🍬输入用户昵称',
  text: 'Happy Candy'
})`,    
      thirdText: `this.$hxui.prompt({
  title: '退款提示',
  level: 'info',
  text: '确认将所有款项退还给顾客吗?'
})`, 
      forthText: `const doPromptType = (type, level) => {
  this.$hxui.prompt({
    title: '🍬反馈意见',
    placeholder: '请输入意见建议',
    type,
    level
  })
}`,
      fifthText: `this.$hxui.prompt({
  title: '反馈意见',
  placeholder: '请输入您的反馈意见后点确认',
  onConfirm: (value) => {
    alert(('您的反馈意见为：' + value))
  },
  onCancel: () => {
    alert('已取消')
  }
})`,
      props: [
        { name: 'title', desc: '标题', type: 'String', option: '建议少于10字的字符串', default: '空字符串' },
        { name: 'text', desc: '文本框中默认的值', type: 'String', option: '字符串', default: '空字符串' },
        { name: 'placeholder', desc: '文本框为空时显示的提示文本', type: 'String', option: '字符串', default: '空字符串' },
        { name: 'tips', desc: '文本框下方的提示文本', type: 'String', option: '字符串', default: '空字符串' },
        { name: 'confirmText', desc: '“确认”按钮上的文案', type: 'String', option: '字符串', default: '确认' },
        { name: 'cancelText', desc: '“取消”按钮上的文案', type: 'String', option: '字符串', default: '取消' },
        { name: 'level', desc: '主题等级颜色', type: 'String', option: '颜色值', default: 'main' },
        { name: 'type', desc: '文本框类型，包括文本域，行文本框和数字类型文本框', type: 'String', option: 'textarea/text/number', default: 'textarea' },
        { name: 'onConfirm', desc: '点击“确认”按钮回调方法', type: 'Function', option: 'JS方法，文本框输入内容为唯一参数', default: '空' },
        { name: 'onCancel', desc: '点击“取消”按钮回调方法', type: 'Function', option: 'JS方法', default: '空' }
      ]
    }
  },
  props: [
    { name: 'content', desc: '下拉菜单选项内容', type: 'Array', option: '由数值、字符串或对象组成', default: '[]' },
    { name: 'placeholder', desc: '文本为空时的提示信息', type: 'String', option: '文本', default: '空字符串' }
  ],
  methods: {
    doPromptTitle () {
      this.$hxui.prompt({
        title: '🍬本次糖果屋订单意见',
        placeholder: '请填写亲的宝贵意见',
        tips: '最好填写在140字内~',
        confirmText: '提交',
        cancelText: '我再想想'
      })
    },
    doTextPrompt () {
      this.$hxui.prompt({
        title: '🍬输入用户昵称',
        text: 'Happy Candy'
      })
    },
    doPromptLevel () {
      this.$hxui.prompt({
        title: '🍬反馈意见',
        level: 'info',
        placeholder: '请输入意见建议'
      })
    },
    doPromptType (type, level) {
      this.$hxui.prompt({
        title: '🍬反馈意见',
        placeholder: '请输入意见建议',
        type,
        level
      })
    },
    doCallback () {
      this.$hxui.prompt({
        title: '反馈意见',
        placeholder: '请输入您的反馈意见后点确认',
        onConfirm: (value) => {
          alert(('您的反馈意见为：' + value))
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
