<template>
  <article class="pad-article">
    <header class="title">标签编辑框 HxTagEditor </header>
    <span class="desc">
      HxTagEditor 是一个针对标签的可编辑的输入框，允许用户添加和删除标签。
    </span>
    <div class="section">
      <span class="title">如何使用</span>
      <span class="desc">
        通过 <em>v-model</em> 将 <strong>hx-tag-editor</strong> 同父组件中数据进行绑定，
        输入框编辑内容之后，按 <em>回车键</em>（手机上点击 <em>发送键</em> ）添加标签。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label-size="bg" label="糖果标签（数组形式）">
            <hx-tag-editor v-model="candy_types"></hx-tag-editor>
          </hx-row>
          <hx-row label-size="bg" label="糖果标签共有：">
            <span class="text bg-gray">{{ candy_types.join('，') }}</span>
          </hx-row>
          <hx-row label-size="bg" label="糖果标签（文本形式）">
            <hx-tag-editor splitChar="，" v-model="candy_type"></hx-tag-editor>
          </hx-row>
          <hx-row label-size="bg" label="糖果标签共有：">
            <span class="text bg-gray">{{ candy_type }}</span>
          </hx-row>
        </div>
        <div class="code">
          <span class="tips">
            hx-tag-editor 绑定的对象需要是 <strong>数组类型（推荐使用）</strong> 或带着 
            <strong>分割字符（需要定义 <em>splitChar</em>，默认为“|”）</strong> 的<strong>字符串</strong>
          </span>
          <pre class="detail" v-highlightjs="text" >
            <code class="xml">
            </code>
          </pre>
          <br />
          <pre class="detail" v-highlightjs="jsText" >
            <code class="javascript">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div class="section">
      <span class="title">设置标签不能重复</span>
      <span class="desc">
        <strong>标签编辑框</strong>可以通过非空 <em>noRepeat</em> 参数设置标签不可输入创建重复的标签
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="不重复的标签">
            <hx-tag-editor no-repeat="noRepeat" v-model="candy_types"></hx-tag-editor>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="text4" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
      <!-- 基本数据类型的下拉菜单 -->
      <span class="title">不可编辑状态</span>
      <span class="desc">
        和其他的表单组件一样，<strong>标签编辑框</strong>也可以通过非空 <em>disabled</em> 参数设置组件为不可编辑状态
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label-size="bg" label="disabled不可编辑">
            <hx-tag-editor disabled="disabled" v-model="candy_types"></hx-tag-editor>
          </hx-row>
          <hx-row label-size="bg" label="readonly不可编辑">
            <hx-tag-editor readonly="readonly" v-model="candy_types"></hx-tag-editor>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="text2" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
      <span class="title">钩子方法</span>
      <!-- 对象类型的菜单 -->
      <span class="desc">
        <strong>
          标签编辑框</strong>提供两个钩子方法，分别是创建标签之后调用的 <em>onCreated</em>，以及移除标签之后调用的 <em>onRemoved</em>，
          两个钩子方法会以添加或移除的标签文本内容为第一个参数。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label-size="bg" label="添加标签触发方法">
            <hx-tag-editor color="red" v-model="toCreate" :onCreated="doCreated"></hx-tag-editor>
          </hx-row>
          <hx-row label-size="bg" label="移除标签触发方法">
            <hx-tag-editor v-model="candy_types" :onRemoved="doRemoved"></hx-tag-editor>
          </hx-row>
          <hx-row label-size="bg" label="@change事件">
            <hx-tag-editor v-model="candy_types" @change="doChange"></hx-tag-editor>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="text3" >
            <code class="xml">
            </code>
          </pre>
          <br />
          <pre class="detail" v-highlightjs="jsText3" >
            <code class="javascript">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div class="section">
      <span class="title">HxTagEditor Props</span>
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
import { HxTagEditor } from '@/hxui'
export default {
  components: {
    HxTagEditor
  },
  data () {
    return {
      candy_types: ['棉花糖', '棒棒糖'],
      candy_type: '棉花糖，棒棒糖',
      toCreate: [],
      text: `<!-- 以数组形式传递标签参数 -->
<hx-tag-editor v-model="candy_types"></hx-tag-editor>
<!-- 以字符串形式传递标签参数 -->
<hx-tag-editor splitChar="，" v-model="candy_type"></hx-tag-editor>`,
      jsText: `data () {
  return { 
    // ...其他变量
    candy_types: ['棉花糖', '棒棒糖']
    candy_type: '棉花糖，棒棒糖',
  }
}`,
      text2: `<hx-tag-editor disabled="disabled" v-model="candy_type"></hx-tag-editor>
<hx-tag-editor readonly="readonly" v-model="candy_type"></hx-tag-editor>`,
      text3: `<hx-tag-editor v-model="candy_types" :onCreated="doCreated"></hx-tag-editor>
<hx-tag-editor v-model="candy_types" :onRemoved="doRemoved"></hx-tag-editor>
<hx-tag-editor v-model="candy_types" @change="doChange"></hx-tag-editor>`,
      jsText3: `methods: {
  doCreated (tag) {
    this.$hxui.toast.success(\`创建了一个标签：\${tag}\`)
  },
  doRemoved (tag) {
    this.$hxui.toast.error(\`移除了一个标签：\${tag}\`)
  },
  doChange (tag) {
    this.$hxui.toast.warn(\`标签内容发生改变: \${tag}\`)
  }     
}`,
      text4: `<hx-tag-editor no-repeat="noRepeat" v-model="candy_types"></hx-tag-editor>`,   
      props: [
        { name: 'value', desc: '标签内容', type: 'Array/String', option: '由数组或字符串组成', default: '[] 或 \'\'' },
        { name: 'placeholder', desc: '文本为空时的提示信息', type: 'String', option: '文本', default: '输入按回车添加标签' },
        { name: 'splitChar', desc: '分割字符（仅在标签内容为字符串生效）', type: 'String', option: '单个字符', default: '|' },
        { name: 'noRepeat', desc: '是否不能输入相同标签', type: 'Boolean/String', option: 'true/false/"noRepeat"', default: 'false' },
        { name: 'disabled', desc: '是否不可编辑', type: 'Boolean/String', option: 'true/false/"disabled"', default: 'false' },
        { name: 'readonly', desc: '是否只读（效果同上）', type: 'Boolean/String', option: 'true/false/"readonly"', default: 'false' },
        { name: 'onCreated', desc: '成功添加新标签触发方法', type: 'Function', option: '普通方法，以添加的新标签内容为第一个参数', default: '--' },
        { name: 'onRemoved', desc: '成功移除标签触发方法', type: 'Function', option: '普通方法，以移除的标签内容为第一个参数', default: '--' }
      ]
    }
  },
  methods: {
    doCreated (tag) {
      this.$hxui.toast.success(`创建了一个标签：${tag}`)
    },
    doRemoved (tag) {
      this.$hxui.toast.error(`移除了一个标签：${tag}`)
    },
    doChange (tag) {
      this.$hxui.toast.warn(`标签内容发生改变: ${tag}`)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../global.scss";
</style>
