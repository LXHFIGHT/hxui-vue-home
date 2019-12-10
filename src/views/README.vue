<template>
  <article class="pad-article">
    <header class="title">组件名 Demo For Copy</header>
    <span class="desc">
      整体描述写于此 （<em>关键词</em>） 
    </span>
    <div class="section">
      <span class="title">属性名</span>
      <span class="desc">属性描述[<strong>重点</strong>]</span>
      <div class="pad-preview">
        <div class="demo">
          展示区
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
export default {
  components: {},
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
@import "./global.scss";
</style>
