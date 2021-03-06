<template>
  <article class="pad-article">
    <header class="title">输入框组件 HxInput</header>
    <span class="desc">HXUI提供可以快速使用的表单输入框</span>
    <!-- 文本输入框 -->
    <div class="section">
      <span class="title">双向绑定</span>
      <span class="desc">通过<em>v-model</em>将<strong>hx-input</strong>同父组件中数据进行绑定</span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="编辑内容">
            <hx-input type="text" v-model="str" placeholder="请输入文本..."/>
          </hx-row>
          <hx-row label="输入文本为:">
            <span class="text bg-gray">{{ str }}</span>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="textNext" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
      <span class="title">文本框</span>
      <span class="desc">
        通过不同参数拓展文本输入框的功能
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="正常文本框">
            <hx-input type="text" placeholder="请输入文本..."/>
          </hx-row>
          <hx-row label="带单位文本框">
            <hx-input type="text" placeholder="请输入单价" unit="元/个"/>
          </hx-row>
          <hx-row label="不可编辑">
            <hx-input disabled type="text" placeholder="请输入文本..."/>
          </hx-row>
          <hx-row label="带清空按钮">
            <hx-input type="text" showClearBtn="true" placeholder="请输入文本..."/>
          </hx-row>
          <hx-row label="显示字数">
            <hx-input v-model="hxInput3" type="text" showClearBtn="true" :showLength="true" placeholder="请输入文本..."/>
          </hx-row>
          <hx-row label="限制10个字数">
            <hx-input v-model="hxInput4" :maxLength="10" type="text" showClearBtn="true" :showLength="true" placeholder="请输入文本..."/>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="text" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <!-- 文本域 -->
    <div class="section">
      <span class="title">文本域</span>
      <span class="desc">通过设置不同的type显示不同的颜色，代表不同的警告级别</span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="正常">
            <hx-input :rows="3" type="text" placeholder="请输入文本..."/>
          </hx-row>
          <hx-row label="带清空按钮">
            <hx-input :rows="3" type="text" showClearBtn="true" placeholder="请输入文本..."/>
          </hx-row>
          <hx-row label="显示字长">
            <hx-input v-model="hxInput5" :rows="3" type="text" showClearBtn="true" :showLength="true" placeholder="请输入文本..."/>
          </hx-row>
        </div>
        <div class="code">
          <span class="tips">
            当rows属性大于1时，HxInput显示为文本域形式，参数和文本框一样
          </span>
          <pre class="detail" v-highlightjs="text2" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <props-table :content="props"></props-table>
    <events-table :content="events"></events-table>
  </article>
</template>

<script>
import { HxRow, HxInput } from '@/hxui'
import EventsTable from './../cpts/EventsTable'
import PropsTable from './../cpts/PropsTable'
export default {
  components: {
    HxInput,
    HxRow,
    EventsTable,
    PropsTable
  },
  data () {
    return {
      str: '',
      hxInput3: '',
      hxInput4: '',
      hxInput5: '',
      text: `<hx-row label="正常文本框">
  <hx-input type="text" placeholder="请输入文本..."/>
</hx-row>
<hx-row label="带单位文本框">
  <hx-input type="text" placeholder="请输入单价" unit="元/个"/>
</hx-row>
<hx-row label="不可编辑">
  <hx-input disabled type="text" placeholder="请输入文本..."/>
</hx-row>
<hx-row label="带清空按钮">
  <hx-input type="text" showClearBtn="true" placeholder="请输入文本..."/>
</hx-row>
<hx-row label="显示字数">
  <hx-input v-model="hxInput3" :showLength="true" showClearBtn="true"
    placeholder="请输入文本..."/>
</hx-row>
<hx-row label="限制10个字数">
  <hx-input v-model="hxInput4" :maxLength="10" showClearBtn="true" :showLength="true" 
    placeholder="请输入文本..."/>
</hx-row>

`,
      text2: `
<hx-row label="正常">
  <hx-input :rows="3" type="text" placeholder="请输入文本..."/>
</hx-row>
<hx-row label="带清空按钮">
  <hx-input :rows="3" type="text" showClearBtn="true" placeholder="请输入文本..."/>
</hx-row>
<hx-row label="显示字长">
  <hx-input :rows="3" type="text" showLength="true" showClearBtn="true" placeholder="请输入文本..."/>
</hx-row>
`,
      typeText: ``,
      textNext: `<hx-input type="text" v-model="str" placeholder="请输入文本..."/>`,
      props: [
        { name: 'rows', desc: '行数：> 1时显示为文本域', type: 'Number', option: '整数', default: '1' },
        { name: 'type', desc: '输入框类型', type: 'String', option: 'text/password/tel/number/date/email', default: 'text' },
        { name: 'placeholder', desc: '文本为空时的提示信息', type: 'String', option: '文本', default: '空字符串' },
        { name: 'required', desc: '是否为必填项', type: 'Boolean/String', option: 'true/false/"required"', default: 'false' },
        { name: 'showClearBtn', desc: '是否展示清空按钮', type: 'Boolean/String', option: 'true/false/"showClearBtn"', default: 'false' },
        { name: 'unit', desc: '置于输入框右侧的单位', type: 'String', option: '文本', default: '空字符串' },
        { name: 'showLength', desc: '是否显示已输入字数', type: 'Boolean', option: '整数', default: '空字符串' },
        { name: 'readonly', desc: '是否只读', type: 'Boolean/String', option: 'true/false/"readonly"', default: 'false' },
        { name: 'disabled', desc: '是否只读', type: 'Boolean/String', option: 'true/false/"disabled"', default: 'false' },
        { name: 'maxLength', desc: '允许输入的最大字符串', type: 'Number', option: '整数', default: '--' }
      ],
      events: [
        { name: 'input', desc: '输入文本事件', option: '输入值' },
        { name: 'blur', desc: '失去焦点时触发事件', option: '输入值' },
        { name: 'focus', desc: '捕获焦点时触发事件', option: '输入值' },
        { name: 'keyup', desc: '按键起来事件', option: '输入值' },
        { name: 'keydown', desc: '按键按下事件', option: '输入值' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../global.scss";
.demo .hx-button {
  margin-right: $pm-sm;
}
</style>
