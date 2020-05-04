<template>
  <article class="pad-article">
    <header class="title">开关 Switch</header>
    <span class="desc">
      HxSelector 是一个灵活的开关组件，通常适用于关联只用 “是” 或 “非” 两种状态的数据， 可以根据其内容自动判断对应的内容。
      当然，也可以根据提供的两个值进行切换，已应对较少出现的场景。
    </span>
    <!-- 双向绑定 -->
    <div class="section">
      <span class="title">双向绑定</span>
      <span class="desc">通过 <em>v-model</em> 将 <strong>hx-switch</strong> 同父组件中数据进行绑定</span>
      <div class="pad-preview">
        <div class="demo" >
          <hx-row label="糖果铺是否休息" label-size="bg">
            <hx-switch v-model="isOpen" ></hx-switch>
            <span class="right" slot="right">
              当前选中的值为： {{ isOpen }}
            </span>
          </hx-row>
          <hx-row label="糖果铺状态（只读）" label-size="bg">
            <hx-switch v-model="isOpen" :disabled="true"></hx-switch>
          </hx-row>
        </div>
        <div class="code">
          <span class="tips">
            默认支持 “0” 和 “1”， true 和 false， 0 和 1 来回切换。
          </span>
          <pre class="detail" v-highlightjs="firstText" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <!-- 自定义 -->
    <div class="section">
      <span class="title">自定义</span>
      <span class="desc"> <em>content</em>： 将开关两个状态对应的值组成<strong>数组</strong>，设置在<em>content</em>中，
      以此能更加灵活地应对更多业务场景。</span>
      <div class="pad-preview">
        <div class="demo" >
          <hx-row label="是否加糖" label-size="bg">
            <hx-switch v-model="newVal" :content="content"></hx-switch>
            <span class="right" slot="right">
              当前选中的值为： {{ newVal }}
            </span>
          </hx-row>
        </div>
        <div class="code">
          <span class="tips">
            由基本数据类型组成的数组，第一个为“开”状态对应的值，第二个为“关”状态对应的值
          </span>
          <pre class="detail" v-highlightjs="secondText" >
            <code class="xml">
            </code>
          </pre>
          <pre class="detail" v-highlightjs="thirdText" >
            <code class="javascript">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <!-- 切换事件 -->
    <div class="section">
      <span class="title">切换事件 change</span>
      <span class="desc"> 通过 <em>@change</em> 绑定切换状态触发事件</span>
      <div class="pad-preview">
        <div class="demo" >
          <hx-row label="是否加糖" label-size="bg">
            <hx-switch id="1001" @change="doChange" v-model="newVal" :content="content"></hx-switch>
            <span class="right" slot="right">
              当前选中的值为： {{ newVal }}
            </span>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="forthText" >
            <code class="xml">
            </code>
          </pre>
          <pre class="detail" v-highlightjs="fifthText" >
            <code class="javascript">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <span class="annotation">
      // 当场景为超过两个选项中选择一项时，建议使用 <em>HxOptions</em> 或 <em>HxSelector</em>
    </span>
    <!-- 属性表格 -->
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
    <!-- 事件 -->
    <div class="section">
      <span class="title">事件</span>
      <div class="hx-table">
        <table>
          <thead>
            <tr>
              <td class="xs">事件名称</td>
              <td class="bg">说明</td>
              <td class="lg">回调参数</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in events" :key="idx">
              <td v-text="item.name"></td>
              <td v-text="item.desc"></td>
              <td v-text="item.params"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </article>
</template>
<script> 
import { HxSwitch } from '@/hxui'
export default {
  components: {
    HxSwitch
  },
  data () {
    return {
      isOpen: '1',
      firstText: `<hx-row label="糖果铺是否休息" label-size="bg">
  <hx-switch v-model="isOpen" ></hx-switch>
  <span class="right" slot="right">
    当前选中的值为： {{ isOpen }}
  </span>
</hx-row>
<hx-row label="糖果铺状态（只读）" label-size="bg">
  <hx-switch v-model="isOpen" :disabled="true"></hx-switch>
</hx-row>`,
      secondText: `<!-- template -->
<hx-row label="是否加糖" label-size="bg">
  <hx-switch v-model="newVal" :content="content"></hx-switch>
  <span class="right" slot="right">
    当前选中的值为： {{ newVal }}
  </span>
</hx-row>`,
      thirdText: `
// 定义数组
const content = ['加糖', '不加糖']
`,  
      forthText: `<!-- 增加 @change事件, 并定义了 id -->
<hx-switch id="1001" @change="doChange" v-model="newVal" :content="content"></hx-switch>
`,
      fifthText: `
// 定时事件方法  doChange
const doChange = (opt) => {
  this.$hxui.alert(opt) // 打印了  { value: "不加糖", id: "1001" }
} 
`,
      newVal: '加糖',
      content: ['加糖', '不加糖'], // 第一个值对应“开”状态，第二个值对应“关”状态
      props: [
        { name: 'content', desc: '开关状态所对应值组成的数组', type: 'Array', option: '第一个是开状态的值，第二个是关状态的值', default: '[]' },
        { name: 'disabled', desc: '是否不可编辑', type: 'Boolean/String', option: 'true/false/"disabled"', default: 'false' }
      ],
      events: [
        { name: 'change', desc: '切换开关触发事件', params: '参数为一个对象，其中包含切换之后对应的值 value 参数，以及该开关绑定的 id，如 { value: 1, id: 1001 }' }
      ]
    }
  },
  methods: {
    doChange (opt) {
      this.$hxui.alert(opt)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../global.scss";
</style>
