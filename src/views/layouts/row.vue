<template>
  <article class="pad-article">
    <header class="title">行布局 HxRow</header>
    <span class="desc">
      HxRow是一个可以拼入其他表单元素并为之添加标签，且具有响应式效果的行布局，同时HxRow带有多个位置的插槽</span>
    <!-- 文本输入框 -->
    <div class="section">
      <span class="title">行标签的相关属性</span>
      <span class="desc">
        通过 <em>label</em> 属性设置标签文本，通过调整 <em>label-size</em> 设置左侧标签的宽度。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row >
            <span class="text bg-gray">没有标签的行区域</span>
          </hx-row>
          <hx-row label-size="sm" label="标签内容">
            <span class="text bg-gray">最小规格标签</span>
          </hx-row>
          <hx-row label-size="md" label="标签内容">
            <span class="text bg-gray">常规规格标签</span>
          </hx-row>
          <hx-row label-size="bg" label="标签内容">
            <span class="text bg-gray">偏大规格标签</span>
          </hx-row>
          <hx-row label-size="lg" label="标签内容">
            <span class="text bg-gray">最大规格标签</span>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="text" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
      <span class="desc">
        同时，如果希望行标签和行内容各占一行的话，可以增加 <em>oneline</em> 属性
      </span>
      <div class="pad-preview">
        <div class="demo" >
          <hx-row oneline="oneline" label="独占一行的标签内容:">
            <span class="text bg-gray">独占一行的行内容区域</span>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="text2" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
      <span class="desc">
        通过 <em>required</em> 属性为标签添加 “<strong class="color-main">*</strong>” 号，用以标记此项必填
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row required="required" label="必填内容：">
            <hx-input required="required" placeholder="请输入内容"></hx-input>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="text6" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
      <span class="desc">
        通过 <em>tips</em> 属性可为标签添加一些字数较少的提示文本
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label-size="lg" label="手机号码：" tips="仅支持大陆和港澳台号码">
            <hx-input placeholder="请输入内容"></hx-input>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="text7" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>

    <div class="section">
      <span class="title">
        HxRow 参数
      </span>
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
    <!-- 文本域 -->
    <div class="section">
      <span class="title">插槽</span>
      <span class="desc">
        行布局提供了一个默认的内容插槽以及三个可自定义的插槽（<strong>label</strong> 插槽、<strong>right</strong> 插槽和 <strong>tips</strong> 插槽）<br /><br />
        <strong>首先</strong>先介绍一下 <strong>label</strong> 插槽： 内容置于标签区域中， 一般用于放置字数较少提示信息，如果上传图片规格<br />
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="上传封面图片">
            <span class="bg-outstanding label-tips" slot="label">图片比例为16:9</span>
            <hx-smart-uploader ></hx-smart-uploader>
          </hx-row>
        </div>
        <div class="code">
          <span class="tips">
            因为行内容插槽属于默认的插槽，所以上传组件 HxSmartUploader 不需要指定 <em>slot</em> 属性，下同
          </span>
          <pre class="detail" v-highlightjs="text3" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>

      <span class="desc">
        <strong>right</strong>插槽： 在行内容区域右侧， 一般用于放置单位信息<br />
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="糖果价格">
            <hx-input placeholder="请输入金额"></hx-input>
            <span class="bg-outstanding" slot="right">元/颗</span>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="text4" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>

      <span class="desc">
        <strong>tips</strong>插槽： 在行内容区域下方，一般用于放置字数多的提示信息，区域更广
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="购买糖果量">
            <hx-input placeholder="请输入金额"></hx-input>
            <span slot="right">克</span>
            <span slot="tips" class="bg-outstanding">糖果虽甜，请不要多吃哦~ 不如一天一颗吧~</span>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="text5" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { HxRow, HxInput, HxSmartUploader } from 'hxui'
export default {
  components: {
    HxSmartUploader,
    HxInput,
    HxRow
  },
  data () {
    return {
      text: `<hx-row >
  <span class="text bg-gray">没有标签的行区域</span>
</hx-row>
<hx-row label-size="sm" label="标签内容">
  <span class="text bg-gray">最小规格标签</span>
</hx-row>
<hx-row label-size="md" label="标签内容">
  <span class="text bg-gray">常规规格标签</span>
</hx-row>
<hx-row label-size="bg" label="标签内容">
  <span class="text bg-gray">偏大规格标签</span>
</hx-row>
<hx-row label-size="lg" label="标签内容">
  <span class="text bg-gray">最大规格标签</span>
</hx-row>`,
      text2: `<hx-row oneline="oneline" label="独占一行的标签内容:">
  <span class="text bg-gray">独占一行的行内容区域</span>
</hx-row>`,
      text3: `<hx-row label="上传封面图片">
  <span class="label-tips" slot="label">图片比例为16:9</span>
  <hx-smart-uploader ></hx-smart-uploader> <!-- 上传组件具体会在其介绍页面详解 -->
</hx-row>`,
      text4: `<hx-row label="糖果价格">
  <hx-input placeholder="请输入金额"></hx-input>
  <span slot="right">元/颗</span>
</hx-row>`,
      text5: `<hx-row label="购买糖果量">
  <hx-input placeholder="请输入金额"></hx-input>
  <span slot="right">克</span>
  <span slot="tips">糖果虽甜，请不要多吃哦~ 不如一天一颗吧~</span>
</hx-row>`, 
      text6: `<hx-row required="required" label="请输入必填项">
  <hx-input required="required" placeholder="请输入内容"></hx-input>
</hx-row>`,
      text7: `<hx-row label-size="lg" label="手机号码：" tips="仅支持大陆和港澳台号码">
  <hx-input placeholder="请输入内容"></hx-input>
</hx-row>`,
      props: [
        { name: 'label', desc: '标签的文本', type: 'String', option: '文本', default: '--' },
        { name: 'labelSize', desc: '标签的宽度', type: 'String', option: 'sm/md/bg/lg', default: 'md' },
        { name: 'label-class', desc: '标签自定义类名', type: 'String', option: '文本类型', default: '--' },
        { name: 'content-class', desc: '编辑域自定义类名', type: 'String', option: '文本类型', default: '--' },
        { name: 'labelSize', desc: '标签的宽度', type: 'String', option: 'sm/md/bg/lg', default: 'md' },
        { name: 'tips', desc: '标签下方的提示文本', type: 'String', option: '文本', default: '--' },
        { name: 'required', desc: '是否带有必填项标记', type: 'Boolean/String', option: 'true/false/"required"', default: '空字符串' },
        { name: 'oneline', desc: '标签和行内容是否各占一行', type: 'Boolean/String', option: 'true/false/"oneline"', default: '空字符串' }
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
