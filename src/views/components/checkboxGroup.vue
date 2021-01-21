<template>
  <article class="pad-article">
    <header class="title">复选框 HxCheckboxGroup</header>
    <span class="desc">
      HxSelector 是一个用于替代HTML5中的 <em>input:checkbox</em> 元素的复选框组件，
      除了样式更加简约大方，支持多个参数使得复选的场景更加容易实现，同时更符合MVVM数据视图分离的思路。
    </span>
    <div class="section">
      <span class="title">双向绑定</span>
      <span class="desc">通过 <em>v-model</em> 将 <strong>hx-checkbox-group</strong> 同父组件中数据进行绑定</span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label-size="bg" label="请选择糖果类型">
            <hx-checkbox-group :content="types" v-model="targets"></hx-checkbox-group>
          </hx-row>
          <hx-row label-size="bg" label="选中的糖果类型有：">
            <span class="text bg-gray">{{ targets.length ? targets.join(', ') : '暂未选择' }}</span>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="text" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
      <!-- 基本数据类型的下拉菜单 -->
      <span class="title">定义可选内容</span>
      <span class="desc">
        复选框组件需要提供一个<strong>数组类型</strong>参数—— <em>content</em> 用于定义其选项内容，
        数组元素可以为基本数据类型，则选项的文本以及对应的值均为该值；
      </span>
      <br />
      <br />
      <span class="desc">
        但比起基本数据类型元素，对象元素更加灵活，这里作者也比较推荐以对象数组作为 <em>content</em> 参数，
        对象元素中通过 <em>key</em> 字段定义选项上的文本<span class="color-gray">（这里可以通过 <em>keyName</em>参数改变对象中对应选项文本内容的字段名，比方说 <strong>"text"</strong> ）</span>，
        <em>value</em> 则定义选项的值，<em>disabled</em> 为<strong>true</strong>时，表示该选项为不可选状态：
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="请选择糖果类型">
            <hx-checkbox-group :content="candyTypes" v-model="targetValues"></hx-checkbox-group>
          </hx-row>
          <hx-row label="不可选糖果类型">
            <hx-checkbox-group :disabled="true" :content="candyTypes" v-model="targetValues"></hx-checkbox-group>
          </hx-row>
          <hx-row label-size="bg" label="选中的糖果对应的值：">
            <span class="text bg-gray">{{ targetValues.length ? targetValues.join(', ') : '暂未选择' }}</span>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="text2" >
            <code class="xml">
            </code>
          </pre>
          <pre class="detail" v-highlightjs="text3" >
            <code class="javascript">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div class="section">
      <span class="title">content</span>
      <span class="desc">[<strong>重点</strong>]</span>
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
              <td class="sm">事件名称</td>
              <td class="lg">说明</td>
              <td class="sm">回调参数</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in props" :key="idx">
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
import { HxCheckboxGroup } from '@/hxui'
export default {
  components: {
    HxCheckboxGroup
  },
  data () {
    return {
      textNext: `代码演示区`,
      types: ['棉花糖', '棒棒糖', '太妃糖', '奶糖', '跳跳糖'],
      targets: ['棉花糖', '太妃糖'],
      candyTypes: [ 
        { key: '棉花糖', value: 1 }, 
        { key: '棒棒糖', value: 2 },  
        { key: '太妃糖', value: 3 },  
        { key: '奶糖', value: 4 },
        { key: '跳跳糖', value: 5 }
      ],
      targetValues: [1, 3],
      props: [
        { name: 'content', desc: '多选框菜单选项内容', type: 'Array', option: '由数值、字符串或对象组成', default: '[]' },
        { name: 'value', desc: '对应选择的值', type: 'Boolean/String/Number', option: 'true/false/"disabled"', default: '' },
        { name: 'disabled', desc: '只读且禁用事件', type: 'Boolean/String', option: 'true/false/"disabled"', default: 'false' },
        { name: 'keyName', desc: 'content数组中对象元素中对应选项文本内容的字段名', type: 'String', option: '文本', default: 'key' },
        { name: 'required', desc: '是否为必选项', type: 'Boolean/String', option: 'true/false/"required"', default: 'false' },
        { name: 'onSelect', desc: '选择参数调用的方法', type: 'Function', option: '', default: '' },
        { name: 'onCancel', desc: '取消选项调用的方法', type: 'Function', option: '', default: '' }
      ],
      text: `<hx-checkbox-group :content="types" v-model="targets"></hx-checkbox-group>`,
      text2: `<hx-row label="请选择糖果类型">
  <hx-checkbox-group :content="candyTypes" v-model="targetValues"></hx-checkbox-group>
</hx-row>
<!-- 不可选状态 -->
<hx-row label="不可选糖果类型">
  <hx-checkbox-group :disabled="true" :content="candyTypes" v-model="targetValues"></hx-checkbox-group>
</hx-row>`,
      text3: `
// 声明对象数组 
{
  candyTypes: [ 
    { key: '棉花糖', value: 1 }, 
    { key: '棒棒糖', value: 2 },  
    { key: '太妃糖', value: 3 },  
    { key: '奶糖', value: 4 },
    { key: '跳跳糖', value: 5 }
  ],
  targetValues: [1, 3]
}`
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../global.scss";
</style>
