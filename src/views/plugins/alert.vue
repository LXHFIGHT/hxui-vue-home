<template>
  <article class="pad-article">
    <header class="title">$hxui.alert 警示弹框</header>
    <span class="desc">
      通过使用 <em>$hxui.alert</em> 可以弹出一个响应式的警示弹框，用户需要点击确认按钮方能继续页面中的其他操作。
    </span>
    <div class="section">
      <span class="title">使用方法</span>
      <span class="desc">
        十分简单，和 <em>window.alert</em> 相似，在Vue文件中通过 <em>$hxui.alert</em> 方法调起弹框，传入唯一一个参数表示显示文本。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button text="text" type="error" @click="$hxui.alert('弹出了一个 $hxui.alert')">
            弹出一个 Alert 弹框
          </hx-button>
        </div>
        <div class="code">
          <span class="tips">
            记得在 main.js 文件中全局引入 HXUI组件库哦~ 
          </span>
          <pre class="detail" v-highlightjs="firstText" >
            <code class="javascript">
            </code>
          </pre>
        </div>
      </div>
      <span class="desc">
        也可以和 <em>console.log</em> 一样，支持传入多参数，连接起来展示。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button text="text" type="info" @click="$hxui.alert('弹出了另一个 $hxui.alert:', obj)">
            弹出一个多参数的 Alert 弹框
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
      firstText: `this.$hxui.alert('弹出了一个 $hxui.alert')`,
      secondText: `const obj = { foo: 'bar' }
this.$hxui.alert('弹出了另一个 $hxui.alert', obj)`,
      props: [
        { name: 'text', desc: '警示框中暂时内容', type: 'String', option: '字符串（数字类型也可以）', default: '空字符串' }
      ],
      obj: { foo: 'bar' }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../global.scss";
</style>
