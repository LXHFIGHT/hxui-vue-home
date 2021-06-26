<!--
 * @Author       : liuxuhao
 * @LastEditors  : liuxuhao
-->
<template>
  <article class="pad-article">
    <header class="title">
      标签 HxTag
      <hx-tag style="margin-left: 16px;" level="green">亲测可用</hx-tag>
    </header>
    <span class="desc">
      HXUI提供标签基本展示组件 <strong>HxTag</strong>，如果需要以标签列表形式展示信息，还可以使用 <strong>HxTags</strong>，
      以下除特殊说明外，属性均为 <strong>HxTag</strong> 和 <strong>HxTags</strong> 两个组件共有。
    </span>
    <div class="section">
      <span class="title">常规使用</span>
      <span class="desc">和普通的HTML标签使用方式类似，标签内放置标签文本即可，支持通过 <em>color</em> 和 <em>text-color</em> 定义标签背景色和文字颜色。 </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-tag >酸奶味</hx-tag>
          <hx-tag color="#dd4b30" text-color="white">草莓味</hx-tag>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="texts[0]" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
      <span class="desc">和 <strong>button</strong> 按钮组件类似， 也支持 <strong>等级 level </strong>参数, 定义对应级别的色值。</span>
      <div class="pad-preview">
        <div class="demo">
          <hx-tag level="info">待处理</hx-tag>
          <hx-tag level="warn">分派中</hx-tag>
          <hx-tag level="error">处理中</hx-tag>
          <hx-tag level="success">已完成</hx-tag>
          <hx-tag level="fatal">已中止</hx-tag>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="texts[1]" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div> 
      <span class="desc">除此之外，
        <strong>HxTag</strong>也支持 <em>blank</em> 设置线框标签；
        支持 <em>material</em> 设置 google拟物化风格标签；
        以及支持 <em>round</em> 设置圆边标签。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-tag level="red" blank round>线框和圆边</hx-tag>
          <hx-tag level="blue" material round>material风格和圆边</hx-tag>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="texts[2]" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
      <section>
        <span class="title">配置标签大小</span>
        <span class="desc">通过设置不同的 size 显示不同大小</span>
        <div class="pad-preview">
          <div class="demo">
            <hx-tag size="sm">小标签</hx-tag>
            <hx-tag size="md">标签（默认）</hx-tag>
            <hx-tag size="bg">大标签</hx-tag>
          </div>
          <div class="code">
            <pre class="detail" v-highlightjs="texts[3]" >
              <code class="xml">
              </code>
            </pre>
          </div>
        </div>
      </section>
    </div>
    <!-- 属性表格 -->
    <props-table :content="props"></props-table>
    <!-- 事件 -->
    <events-table :content="events"></events-table>
  </article>
</template>
<script>
import EventsTable from '@/views/cpts/EventsTable'
import PropsTable from '@/views/cpts/PropsTable'
import { HxTag } from '@/hxui'
export default {
  components: {
    EventsTable,
    PropsTable,
    HxTag
  },
  data () {
    return {
      texts: [
        `<hx-tag >酸奶味</hx-tag>
<hx-tag color="#dd4b30" text-color="white">草莓味</hx-tag>`, `<hx-tag level="info">待处理</hx-tag>
<hx-tag level="warn">分派中</hx-tag>
<hx-tag level="error">处理中</hx-tag>
<hx-tag level="success">已完成</hx-tag>
<hx-tag level="fatal">已中止</hx-tag>`, `<hx-tag level="red" blank round>线框和圆边</hx-tag>
<hx-tag level="blue" material round>material风格和圆边</hx-tag>`, `<hx-tag size="sm">小标签</hx-tag>
<hx-tag size="md">标签（默认）</hx-tag>
<hx-tag size="bg">大标签</hx-tag>`
      ],
      props: [
        { name: 'size', desc: '标签尺寸（sm小 20px、md 26px、bg 34px）', type: 'String', option: 'sm/md/bg', default: 'md' },
        { name: 'level', desc: '标签级别', type: 'String', option: 'info/warn/success/error/fatal', default: '空字符串' },
        { name: 'blank', desc: '是否为线框样式', type: 'Boolean', option: 'true/false', default: 'false' },
        { name: 'material', desc: '是否拟物化风格', type: 'Boolean', option: 'true/false', default: 'false' },
        { name: 'round', desc: '是否为圆边标签', type: 'Boolean', option: 'true/false', default: 'false' },
        { name: 'color', desc: '自定义标签背景色', type: 'String', option: 'css中的色值', default: '空字符串' },
        { name: 'textColor', desc: '自定义标签文本颜色', type: 'String', option: 'css中的色值', default: '空字符串' }
      ],
      events: [
        { name: 'click', desc: '点击标签时间', option: 'event对象' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/views/global.scss";
</style>
