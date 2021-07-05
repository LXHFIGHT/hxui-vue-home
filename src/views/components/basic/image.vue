<!--
 * @Author       : liuxuhao
 * @LastEditors  : liuxuhao
-->
<template>
  <article class="pad-article">
    <header class="title">图片 HxImage</header>
    <span class="desc">
      <strong>HxImage</strong>图片组件主要是用于弥补 <em>img</em> 图片标签上的一些体验上的不足，主要增加了包括加载中效果和自定义填充的特性。 
    </span>
    <div class="section">
      <span class="title">常规使用</span>
      <span class="desc">
        类似 <strong>img</strong> 标签用法，
        也是通过 <em>src</em> 传入图片链接，通过 <em>alt</em> 设置出错时展示文本内容。
      </span>
      <div class="pad-preview">
        <div class="demo"> 
          <div class="hx-pad-left" style="height: 132px;">
            <hx-row label="定高不定宽：" label-size="bg">
              <hx-image height="100px" src="https://static.lxhfight.com/img/image-candy.jpg"></hx-image>
              <span class="tips" slot="tips">仅高度设置为100px</span>
            </hx-row>
          </div>
          <div class="hx-pad-right" style="height: 132px;">
            <hx-row label="定宽不定高：" label-size="bg">
              <hx-image width="132px" src="https://static.lxhfight.com/img/image-candy.jpg"></hx-image>
              <span class="tips" slot="tips">仅宽度设置为132px</span>
            </hx-row>
          </div>
          <hx-row label="定宽定宽智能展示：" label-size="bg">
            <hx-image height="100px" width="300px"  src="https://static.lxhfight.com/img/image-candy.jpg"></hx-image>
            <span class="tips" slot="tips">高度定义100px，宽度定义340px, 此时智能展示垂直方向中央部分</span>
          </hx-row>
          <hx-row label="定宽定宽智能展示：" label-size="bg">
            <hx-image height="100px" width="70px"  src="https://static.lxhfight.com/img/image-candy.jpg"></hx-image>
            <span class="tips" slot="tips">高度定义100px，宽度定义70px，此时展示水平方向中央部分</span>
          </hx-row>
        </div>
        <div class="code">
          <span class="tips">
            分别对应：定高不定宽、定宽不定高、定高定宽且宽高比例大于和小于图片宽高比共四种场景。
          </span>
          <pre class="detail" v-highlightjs="texts[0]">
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
import { HxImage } from '@/hxui'
import EventsTable from '@/views/cpts/EventsTable'
import PropsTable from '@/views/cpts/PropsTable'
export default {
  components: {
    HxImage,
    EventsTable,
    PropsTable
  },
  data () {
    return {
      texts: [
        `<hx-image height="100px" src="https://static.lxhfight.com/img/image-candy.jpg"></hx-image>
<hx-image width="132px" src="https://static.lxhfight.com/img/image-candy.jpg"></hx-image>
<hx-image height="100px" width="300px" src="https://static.lxhfight.com/img/image-candy.jpg"></hx-image>
<hx-image height="100px" width="70px" src="https://static.lxhfight.com/img/image-candy.jpg"></hx-image>`
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
@import "@/views/global.scss";
</style>
