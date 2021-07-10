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
            <hx-row label="引入相对路径图片" label-size="bg">
              <hx-image style="height: 150px; border-radius: 5px;" :src="require('@/assets/bg/bg-login.jpg')"></hx-image>
            </hx-row>
            <hx-row label="引入URL图片" label-size="bg">
              <hx-image style="height: 150px; border-radius: 5px;" src="https://static.lxhfight.com/img/image-candy.jpg"></hx-image>
            </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="texts[3]">
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
      <div class="pad-preview">
        <div class="demo"> 
          <div class="hx-pad-left" style="height: 132px;">
            <hx-row label="定高不定宽：" label-size="bg">
              <hx-image style="height: 100px" src="https://static.lxhfight.com/img/image-candy.jpg"></hx-image>
              <span class="tips" slot="tips">仅高度设置为100px</span>
            </hx-row>
          </div>
          <div class="hx-pad-right" style="height: 132px;">
            <hx-row label="定宽不定高：" label-size="bg">
              <hx-image style="width: 55%;" src="https://static.lxhfight.com/img/image-candy.jpg"></hx-image>
              <span class="tips" slot="tips">仅宽度设置为55%</span>
            </hx-row>
          </div>
          <hx-row label="定宽定宽智能展示：" label-size="bg">
            <hx-image height="100px" width="300px"  src="https://static.lxhfight.com/img/image-candy.jpg"></hx-image>
            <span class="tips" slot="tips">高度定义100px，宽度定义340px, 此时智能展示垂直方向中央部分</span>
          </hx-row>
          <hx-row label="定宽定宽智能展示：" label-size="bg">
            <hx-image style="height: 100px; width: 100px" round src="https://static.lxhfight.com/img/image-candy.jpg"></hx-image>
            <span class="tips" slot="tips">高度定义100px，宽度定义100px，此时展示水平方向中央部分</span>
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
      <span class="title">加载和异常状态</span>
      <span class="desc">
        使用 <strong>hx-image</strong> 展示图片时，会对大图加载状态 和 加载不了图片的异常状态进行体验上的优化；
      </span>
      <div class="pad-preview">
        <div class="demo"> 
          <hx-row label="加载大图" label-size="bg">
            <hx-image height="150px" src="https://unsplash.com/photos/-ayOfwsd9mY/download?force=true"></hx-image>
            <span class="tips" slot="tips">仅高度设置为100px</span>
          </hx-row>
          <hx-row label="默认加载出错" label-size="bg">
            <hx-image width="20%" src="https://static.lxhfight.com/img/image-candy.png"></hx-image>
          </hx-row>
          <hx-row label="alt配置错误信息" label-size="bg">
            <hx-image style="width: 20%"  alt="<strong style='color: red'>图片加载失败</strong>" src="https://static.lxhfight.com/img/image-candy.png"></hx-image>
            <span class="tips" slot="tips">图片链接加载不出时，提示alt错误信息</span>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="texts[2]">
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
import { HxImage } from '@/hxui'
import bgImage from './../../../assets/bg/bg-login.jpg'
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
      bgImage,
      texts: [
        `<hx-image style="height: 100px" src="https://static.lxhfight.com/img/image-candy.jpg"></hx-image>
<hx-image style="width: 55%;" src="https://static.lxhfight.com/img/image-candy.jpg"></hx-image>
<hx-image height="100px" width="300px"  src="https://static.lxhfight.com/img/image-candy.jpg"></hx-image>
<hx-image style="height: 100px; width: 100px" round src="https://static.lxhfight.com/img/image-candy.jpg"></hx-image>`, `<hx-image height="200px" src="https://unsplash.com/photos/-ayOfwsd9mY/download?force=true"></hx-image>`, `
<hx-image height="150px" src="https://unsplash.com/photos/-ayOfwsd9mY/download?force=true"></hx-image>
<hx-image height="100px" width="225px" src="https://static.lxhfight.com/img/image-candy.png"></hx-image>
<hx-image height="100px" width="225px" alt="<strong style='color: red'>图片加载失败</strong>" src="https://static.lxhfight.com/img/image-candy.png"></hx-image>
`, `<hx-row label="引入相对路径图片" label-size="bg">
  <hx-image style="height: 150px; border-radius: 5px;" :src="require('@/assets/bg/bg-login.jpg')"></hx-image>
</hx-row>
<hx-row label="引入URL图片" label-size="bg">
  <hx-image style="height: 150px; border-radius: 5px;" src="https://static.lxhfight.com/img/image-candy.jpg"></hx-image>
</hx-row>`
      ],
      props: [
        { name: 'height', desc: '图片的高度（也支持style定义）', type: 'String', option: 'CSS距离值', default: '空字符串' },
        { name: 'width', desc: '图片的宽度（也支持style定义）', type: 'String', option: 'CSS距离值', default: '空字符串' },
        { name: 'round', desc: '圆角图片', type: 'Boolean', option: 'true/false', default: 'false' },
        { name: 'src', desc: '图片的链接，支持引入URL，也支持使用require方式引入相对路径图片', type: 'String', option: '图片相对路径或URL', default: '必传' },
        { name: 'alt', desc: '加载失败时展示的内容（支持HTML）', type: 'HTMLText', option: 'HTML片段或字符串', default: '图片加载不出' }
      ],
      events: [
        { name: 'click', desc: '点击图片事件', option: '图片链接' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/views/global.scss";
</style>
