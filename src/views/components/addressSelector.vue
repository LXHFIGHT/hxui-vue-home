<!--
 * @Author       : liuxuhao
 * @LastEditors  : liuxuhao
-->
<template>
  <article class="pad-article">
    <header class="title">日历 Calendar</header>
    <span class="desc">
      <em>HxCalendar</em> 是HXUI提供的一个轻量级且高可拓展的日历控件，可以填写用户新（<em>关键词</em>） 
    </span>
    <div class="section">
      <span class="title">常规</span>
      <span class="desc">属性描述[<strong>重点</strong>]</span>
      <div class="pad-preview">
        <div class="demo">
          展示区
        </div>
        <div class="code">
          <span class="tips">
            代码中附带的一些小提示
          </span>
          <pre class="detail" v-highlightjs="texts[0]" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <span class="annotation">
      // 此处可以写注释, 可复制上述属性 .section
    </span>
    <!-- 属性表格 -->
    <props-table :content="props"></props-table>
    <!-- 事件 -->
    <events-table :content="events"></events-table>
  </article>
</template>
<script>
import EventsTable from './../cpts/EventsTable'
import PropsTable from './../cpts/PropsTable'
export default {
  components: {
    EventsTable,
    PropsTable
  },
  data () {
    return {
      texts: [
        `代码演示区1`
      ],
      props: [
        { name: 'content', desc: '下拉菜单选项内容', type: 'Array', option: '由数值、字符串或对象组成', default: '[]' },
        { name: 'placeholder', desc: '文本为空时的提示信息', type: 'String', option: '文本', default: '空字符串' }
      ],
      events: [
        { name: 'change', desc: '修改内容触发事件', option: '选中的值' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../global.scss";
</style>
