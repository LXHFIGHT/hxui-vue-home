<template>
  <article class="pad-article">
    <header class="title">下拉菜单 HxSelector</header>
    <span class="desc">
      HxSelector是一个用于替代HTML中的 <em>select</em> 元素的下拉菜单组件，样式更加丰富，同时更符合MVVM数据视图分离的思路。
    </span>
    <div class="section">
      <span class="title">双向绑定</span>
      <span class="desc">通过 <em>v-model</em> 将 <strong>hx-selector</strong> 同父组件中数据进行绑定</span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label-size="bg" label="请选择糖果类型">
            <hx-selector :content="types" v-model="candy_type"></hx-selector>
          </hx-row>
          <hx-row label-size="bg" label="选中的糖果类型：">
            <span class="text bg-gray">{{ candy_type }}</span>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="textNext" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
      <!-- 基本数据类型的下拉菜单 -->
      <span class="title">定义下拉菜单内容</span>
      <span class="desc">
        下拉菜单组件需要提供一个<strong>数组类型</strong>参数—— <em>content</em> 用于定义其选项内容，
        数组元素可以为基本数据类型，键和值会一致设为该值；同时数组中可以通过添加一个基本数据类型元素 <strong>"|"</strong> 元素来增加一条区分线~
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="请选择糖果类型">
            <hx-selector :content="types" v-model="type"></hx-selector>
          </hx-row>
          <hx-row label="请选择糖果数量">
            <hx-selector :content="amounts" v-model="amount"></hx-selector>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="text" >
            <code class="xml">
            </code>
          </pre>
          <pre class="detail" v-highlightjs="text2" >
            <code class="javascript">
            </code>
          </pre>
        </div>
      </div>
      <!-- 对象类型的菜单 -->
      <span class="desc">
        比起基本数据类型元素，对象元素更加灵活，这里作者也比较推荐以对象数组作为 <em>content</em> 参数，
        对象元素中通过 <em>key</em> 字段定义选项上的文本<span class="color-gray">（这里可以通过 <em>keyName</em>参数改变对象中对应选项文本内容的字段名，比方说 <strong>"text"</strong> ）</span>，
        <em>value</em> 则定义选项的值，<em>disabled</em> 为<strong>true</strong>时，表示该选项为不可选状态：
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="请选择糖果类型">
            <hx-selector 
              :content="objects" 
              keyName="text" 
              v-model="objectType">
            </hx-selector>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="text3" >
            <code class="xml">
            </code>
          </pre>
          <pre class="detail" v-highlightjs="text4" >
            <code class="javascript">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div class="section">
      <span class="title">HxSelector Props</span>
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
import { HxSelector } from '@/hxui'
export default {
  components: {
    HxSelector
  },
  data () {
    return {
      candy_type: '',
      type: '',
      objectType: '',
      amount: 0,
      types: ['棉花糖', '棒棒糖', '太妃糖', '奶糖', '|', '跳跳糖'],
      amounts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      objects: [
        { text: '棉花糖', value: 1 },
        { text: '棒棒糖', value: 2 },
        { text: '白兔糖（售罄）', value: 3, disabled: true },
        { text: '太妃糖', value: 4 }
      ],
      text: `<hx-row label="请选择糖果类型">
  <hx-selector :content="types" v-model="type"></hx-selector>
</hx-row>
<hx-row label="请选择糖果数量">
  <hx-selector :content="amounts" v-model="amount"></hx-selector>
</hx-row>`,
      text2: `
// 下拉选项内容定义如下
data () {
  return { 
    // 其他变量
    types: ['棉花糖', '棒棒糖', '太妃糖', '奶糖', '|', '跳跳糖']
    amounts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }
}`,
      text3: `<hx-row label="请选择糖果类型">
  <hx-selector 
    :content="objects" 
    keyName="text" 
    v-model="objectType">
  </hx-selector>
</hx-row>`,
      text4: `// 下拉选项内容定义如下
data () {
  return { 
    // 其他变量
    objects: [
      { text: '棉花糖', value: 1 },
      { text: '棒棒糖', value: 2 },
      { text: '太妃糖', value: 3 }
    ]
  }
}`,   
      textNext: `<hx-selector :content="types" v-model="candy_type"></hx-selector>`,
      props: [
        { name: 'content', desc: '下拉菜单选项内容', type: 'Array', option: '由数值、字符串或对象组成', default: '[]' },
        { name: 'placeholder', desc: '文本为空时的提示信息', type: 'String', option: '文本', default: '空字符串' },
        { name: 'disabled', desc: '只读且禁用事件', type: 'Boolean/String', option: 'true/false/"disabled"', default: 'false' },
        { name: 'keyName', desc: 'content数组中对象元素中对应选项文本内容的字段名', type: 'String', option: '文本', default: 'key' },
        { name: 'required', desc: '是否为必填项', type: 'Boolean/String', option: 'true/false/"required"', default: 'false' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../global.scss";
</style>
