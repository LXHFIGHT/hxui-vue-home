<template>
  <article class="pad-article">
    <header class="title">点 HxDot</header>
    <span class="desc">
      点组件是一个用于点缀在其他组件上的旨在用于引起用户注意的 <em>轻量</em> 组件，不具备交互作用，可以通过 <em>v-if</em> 进行展示与否。
      本文将在 <a>HxButton 组件</a> 演示如何使用。
    </span>
    <div class="section">
      <span class="title">普通点状</span>
      <span class="desc">可以使用 <strong>color</strong> 或 <strong>level</strong> 定义点的颜色值</span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button >有新的消息<hx-dot level="info"></hx-dot></hx-button>
          <hx-button style="margin-left: 8px;">有新的消息<hx-dot level="success"></hx-dot></hx-button>
          <hx-button style="margin-left: 8px;">有新的消息<hx-dot level="warn"></hx-dot></hx-button>
          <hx-button style="margin-left: 8px;">有新的消息<hx-dot color="golden"></hx-dot></hx-button>
          <hx-button style="margin-left: 8px;">有新的消息<hx-dot level="error"></hx-dot></hx-button>
          <hx-button style="margin-left: 8px;">有新的消息 <hx-dot level="fatal"></hx-dot></hx-button>
        </div>
        <div class="code">
          <span class="tips">
            代码中附带的一些小提示
          </span>
          <pre class="detail" v-highlightjs="textNext" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <span class="annotation">
      // 此处可以写注释, 可复制上述属性 .section
    </span>
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
import { HxDot } from '@/hxui'
export default {
  components: { HxDot },
  data () {
    return {
      textNext: `代码演示区`,
      props: [
        { name: 'content', desc: '下拉菜单选项内容', type: 'Array', option: '由数值、字符串或对象组成', default: '[]' },
        { name: 'placeholder', desc: '文本为空时的提示信息', type: 'String', option: '文本', default: '空字符串' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../global.scss";
</style>
