<!--
 * @Author       : liuxuhao
 * @LastEditors  : liuxuhao
-->
<template>
  <article class="pad-article">
    <header class="title">加载组件 HxLoading</header>
    <span class="desc">
      在实际的业务开发中，经常会因为一些异步操作（如请求数据接口，Canvas绘制海报和上传图片文件等等）出现需要用户等待一段时间的场景，
      这时候需要引入“加载中”状态展示效果来提升用户体验，同时给用户心理暗示：页面并非静止，更没有挂掉。
      <strong>HxLoading</strong> 就是这样的 <strong>“加载中”状态效果组件</strong>。
    </span>
    <div class="section">
      <span class="title">常规使用</span>
      <span class="desc">使用方法类似普通网页标签，标签内为加载中伴随的提示文本。这里提供了两个属性修改布局：<br/>
        通过 <em>align</em> 可以定义加载提示内容的对齐方式，默认是 <strong>居左</strong>；
        通过 <em>direction</em> 可以定义是 <strong>横向排版</strong> 还是 <strong>纵向排版</strong>， 默认是 <strong>横向</strong> ;
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-loading >加载中（默认居左）</hx-loading>
          <hx-loading align="center">加载中（居中）</hx-loading>
          <hx-loading align="right">加载中（居右）</hx-loading>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="texts[0]" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
      <span class="desc">
        另外，默认情况下 <strong>hx-loading</strong> 是独占一行的，如果需要定义为行内展示，则设置 <em>inline</em> 为 <strong>true</strong> 即可。
       （为方便查看效果添加背景色）
      </span>
      <div class="pad-preview">
        <div class="demo bg-color">
          <hx-loading>加载中（横向排版）</hx-loading> 
          <hx-loading inline>加载中（横向排版、行内）</hx-loading> 
          <hx-loading direction="column">加载中（垂直排版）</hx-loading> 
          <hx-loading direction="column" inline>加载中（垂直排版、行内）</hx-loading>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="texts[1]" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
      <span class="title">颜色和动画</span>
      <span class="desc">
        整体默认的颜色为主题色，可以通过 <em>color</em> 自定义色值， 
        也可以通过定义事件等级 <em>level</em> 来标记颜色。
        这里还提供了一个属性 <em>breathing</em>，可以让加载组件有一个若隐若现的呼吸动效。
      </span>
      <div class="pad-preview">
        <div class="demo margin">
          <hx-loading >加载中（默认主题色）</hx-loading>
          <hx-loading color="#5FC8C6">加载中（color自定义颜色）</hx-loading>
          <hx-loading level="error">加载中（level错误级别）</hx-loading>
          <hx-loading level="warn" breathing>加载中（level错误级别）</hx-loading>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="texts[2]" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
      <span class="title">图标和文本字体大小</span>
      <span class="desc">根据不同的使用场景，可以通过 <em>text-size</em> 设置文本字体大小（默认14px）； 通过 <em>icon-size</em> 设置加载中图标的大小（默认34px）。</span>
      <div class="pad-preview">
        <div class="demo margin">
          <hx-loading icon-size="28px">图标大小改变</hx-loading> 
          <hx-loading text-size="16px">字体大小改变</hx-loading> 
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="texts[3]" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <!-- 属性表格 -->
    <props-table :content="props"></props-table>
  </article>
</template>
<script>
import { HxLoading } from '@/hxui'
import PropsTable from '@/views/cpts/PropsTable'
export default {
  components: {
    HxLoading,
    PropsTable
  },
  data () {
    return {
      texts: [
        `<hx-loading >加载中（默认居左）</hx-loading>
<hx-loading align="center">加载中（居中）</hx-loading>
<hx-loading align="right">加载中（居右）</hx-loading>`, `<hx-loading>加载中（横向排版）</hx-loading> 
<hx-loading inline>加载中（横向排版、行内）</hx-loading>
<hx-loading direction="column">加载中（垂直排版）</hx-loading> 
<hx-loading direction="column" inline>加载中（垂直排版、行内）</hx-loading>`, `<hx-loading >加载中（默认主题色）</hx-loading>
<hx-loading color="#5FC8C6">加载中（color自定义颜色）</hx-loading>
<hx-loading level="error">加载中（level错误级别）</hx-loading>
<hx-loading level="warn" breathing>加载中（level错误级别）</hx-loading>`, `<hx-loading icon-size="28px">图标大小改变</hx-loading> 
<hx-loading text-size="16px">字体大小改变</hx-loading> `
      ],
      props: [
        { name: 'direction', desc: '布局方式，分横向和纵向布局', type: 'String', option: 'row（横向）和 column（纵向）', default: '"row"' },
        { name: 'align', desc: '对齐方式（横向布局中生效）', type: 'String', option: 'left（默认左对齐）、right（右对齐）和 center（居中对齐）', default: '"left"' },
        { name: 'inline', desc: '是否为行内样式', type: 'Boolean', option: '布尔值', default: 'false' },
        { name: 'breathing', desc: '是否伴宿呼吸动画效果', type: 'Boolean', option: '布尔值', default: 'false' },
        { name: 'iconSize', desc: '加载图标的大小', type: 'String', option: 'CSS大小值', default: '"34px"' },
        { name: 'textSize', desc: '加载文本字体大小', type: 'String', option: 'CSS大小值', default: '"14px"' },
        { name: 'level', desc: '事件紧急程度对应颜色', type: 'String', option: 'main/info/success/warn\n/error/fatal', default: '空字符串' },
        { name: 'color', desc: '自定义颜色', type: 'String', option: 'CSS色值', default: '主题色' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/views/global.scss";
.bg-color .hx-pad-loading {
  background-color: rgba($color-red, .1);
}
.margin .hx-pad-loading + .hx-pad-loading {
  margin-top: $pm-md;
}
</style>
