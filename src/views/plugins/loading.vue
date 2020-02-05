<template>
  <article class="pad-article">
    <header class="title">加载弹框</header>
    <span class="desc">
      通过使用 <em>$hxui.showLoading</em> 可以弹出一个带文本的加载弹框，
      使用 <em>$hxui.hideLoading</em> 则可以隐藏加载弹框。
    </span>
    <div class="section">
      <span class="title">使用方法</span>
      <span class="desc">
        调用 <em>$hxui.showLoading</em> 传入一个字符串为参数（字数不宜过长，控制在8字内最好），则可以弹出一个加载框，
        如果不传参数则显示 “加载中” 文本。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button type="success" @click="$hxui.showLoading('加载内容中')">
            弹出加载框
          </hx-button>
        </div>
        <div class="code">
          <span class="tips">
            插件方法已默认在 <strong>main.js</strong> 中全局引入，所以在业务页面组件中无需重复引入。
          </span>
          <pre class="detail" v-highlightjs="firstText" >
            <code class="javascript">
            </code>
          </pre>
        </div>
      </div>
      <span class="desc">
        调用 <em>$hxui.hideLoading</em> 则不需要传入参数，会隐藏当前展示的加载框。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button @click="$hxui.hideLoading()">
            隐藏加载框
          </hx-button>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="secondText" >
            <code class="javascript">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div class="annotation">
      // 默认30秒后会自动隐藏
    </div>
    <div class="section">
      <span class="title">参数表格</span>
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
      firstText: `this.$hxui.showLoading('加载内容中')`,
      secondText: `this.$hxui.hideLoading()`,
      props: [
        { name: 'text', desc: '加载框中内容', type: 'String', option: '字符串', default: '“加载中”' }
      ],
      obj: { foo: 'bar' }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../global.scss";
</style>
