<template>
  <article class="pad-article">
    <header class="title">联想组件 AutoComplete</header>
    <span class="desc">
      带有根据输入内容自动联想功能的输入框组件，一定程度上类似于 <em>HxInput</em> 和 <em>HxSelector</em> 的结合。
    </span>
    <div class="section">
      <span class="title">双向绑定 & 联想</span>
      <span class="desc">
        类似于文本输入框组件，该组件也通过 <em>v-model</em> 将 <strong>hx-auto-complete</strong> 同父组件中数据进行绑定；
        <br >
        <em>content</em> 属性供传入一个可供联想文本的数组，组件将会自动判断是否输入联想选项。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="编辑内容">
            <hx-auto-complete :content="arr" v-model="str" placeholder="请输入文本..."/>
          </hx-row>
          <hx-row label="输入文本为:">
            <span class="text bg-gray">{{ str }}</span>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="text1" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div class="section">
      <span class="title">联想规则</span>
      <span class="desc">
        该组件会根据属性 <em>isPrefix</em> 匹配可选项，
        顾名思义，当 <em>isPrefix</em> 为 <strong>true</strong>（默认项） 则只筛选出前缀匹配选项，当值为 <strong>false</strong>时，
        则只要选项中出现输入的文本，就会被选入。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="前缀匹配联想">
            <hx-auto-complete :isPrefix="true" :content="arr" v-model="str2" placeholder="请输入文本..."/>
          </hx-row>
          <hx-row label="输入文本为:">
            <span class="text bg-gray">{{ str2 }}</span>
          </hx-row>
          <hx-row label="全局匹配联想">
            <hx-auto-complete :isPrefix="false" :content="arr" v-model="str3" placeholder="请输入文本..."/>
          </hx-row>
          <hx-row label="输入文本为:">
            <span class="text bg-gray">{{ str3 }}</span>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="text2" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div class="section">
      <span class="title">异步加载</span>
      <span class="desc">
        如果联想的数据是由与服务端数据交互等方式异步获取得到，该组件提供了 <em>loading</em> 属性可以友好地展示加载动画。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="编辑内容(加载)">
            <hx-auto-complete :content="arr" v-model="str" :loading="true" placeholder="请输入文本..."/>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="text3" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
      <span class="title">不可编辑</span>
      <span class="desc">
        通过 <em>disabled</em> 可将该组件设置为不可编辑状态，当然自然不会出现选项。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="不可编辑">
            <hx-auto-complete :content="arr" v-model="str" :disabled="true" placeholder="请输入文本..."/>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="text4" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <!-- 属性表格 -->
    <props-table :content="props"></props-table>
    <!-- 事件 -->
    <events-table :content="events"></events-table>
  </article>
</template>
<script>
import EventsTable from './../cpts/EventsTable'
import PropsTable from './../cpts/PropsTable'
import { HxAutoComplete } from './../../hxui'
export default {
  components: {
    EventsTable,
    PropsTable,
    HxAutoComplete
  },
  data () {
    return {
      str: '',
      str2: '',
      str3: '',
      arr: ['棉花糖', '白兔糖', '太妃糖', '跳跳糖'],
      text1: `<hx-auto-complete :content="arr" v-model="str" placeholder="请输入文本..."/>

// const arr = ['棉花糖', '白兔糖', '太妃糖', '跳跳糖']
// [下文中的 arr 变量也是这个]`,
      text2: `<hx-row label="前缀匹配联想">
  <hx-auto-complete :isPrefix="true" :content="arr" v-model="str2" placeholder="请输入文本..."/>
</hx-row>
<hx-row label="全局匹配联想">
  <hx-auto-complete :isPrefix="false" :content="arr" v-model="str3" placeholder="请输入文本..."/>
</hx-row>`,
      text3: `<hx-auto-complete :content="arr" v-model="str" :loading="true" placeholder="请输入文本..."/>`,
      text4: `<hx-auto-complete :content="arr" v-model="str" :disabled="true" placeholder="请输入文本..."/>`,
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
