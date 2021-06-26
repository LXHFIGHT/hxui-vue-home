<!--
 * @Author       : liuxuhao
 * @LastEditors  : liuxuhao
-->
<template>
  <article class="pad-article">
    <header class="title">地图 Map</header>
    <span class="desc">
      <strong>HxMap</strong> 
        是一个基于 <a href="https://lbs.amap.com/api/javascript-api/summary/" target="_blank">高德地图JS API</a> 采用火星坐标系（GCJ-02）的地图组件，
        同时也作为选址器 <strong>HxAddressSelector</strong> 的地图展示组件。
    </span>
    <div class="section">
      <div class="title">前置</div>
      <span class="desc">
        如果需要启用 <strong>HxMap</strong> 和 <strong>HxAddressSelector</strong> ，需要在项目的 <em>index.html</em> 添加高德地图 JS API 的入口脚本标签，
        具体的申请流程可以查看此 <a href="https://lbs.amap.com/api/javascript-api/guide/abc/prepare" target="_blank">准备-入门-教程-地图 JS API|高德地图API</a>
      </span>
      <div class="pad-preview">
        <div class="code">
          <span class="tips">
            将其中「您申请的key值」替换为在高德地图控制台申请的 key；
          </span>
          <pre class="detail" v-highlightjs="texts[0]" >
            <code class="html">
            </code>
          </pre>
        </div>
      </div>
      <span class="title">基本属性</span>
      <span class="desc">
        通过 <strong>lat</strong> 定义坐标的纬度， <strong>lng</strong> 定位坐标的经度。
        <br/>
        <strong>注意：</strong>
          地图组件默认采用
          <a href="https://en.jinzhao.wiki/wiki/Restrictions_on_geographic_data_in_China#GCJ-02" target="_blank">火星坐标系</a> ， 
          如果业务逻辑中使用了百度的
          <a href="https://en.jinzhao.wiki/wiki/Restrictions_on_geographic_data_in_China#BD-09">BD09坐标</a> ，
          为了不产生位置偏移，需要设置 <em>type</em> 为 <strong>'bd09'</strong>
      </span>
      <div class="pad-preview">
        <div class="demo" style="height: 316px;">
          <div class="hx-pad-left">
            <small>火星坐标系: </small>
            <br/>经度 <strong>116.397551°E</strong> 纬度 <strong>39.906901°N</strong>
            <br/><br/>
            <hx-map id="amap" lat="39.906901" lng="116.397551"></hx-map>
          </div>
          <div class="hx-pad-right">
            <small>百度坐标系[type="bd09"]:</small>
            <br/>经度 <strong>116.40395°E</strong> 纬度 <strong>39.91324°N</strong>
            <br/><br/>
            <hx-map id="bmap" type="bd09" lat="39.91324" lng="116.40395"></hx-map>
          </div>
        </div>
        <div class="code">
          <span class="tips">
            <strong style="color: red;">如为百度坐标，请一定要设置 type="bd09"</strong>
          </span>
          <pre class="detail" v-highlightjs="texts[1]" >
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
import { HxMap } from '@/hxui' 
import { scriptText } from './../../config/const' 
import EventsTable from './../cpts/EventsTable'
import PropsTable from './../cpts/PropsTable'
export default {
  components: {
    EventsTable,
    PropsTable,
    HxMap
  },
  data () {
    return {
      texts: [
        scriptText,
        `<hx-map id="amap" lat="39.906901" lng="116.397551"></hx-map>
<hx-map id="bmap" type="bd09" lat="39.91324" lng="116.40395"></hx-map>`
      ],
      props: [
        { name: 'lat', desc: '纬度坐标', type: 'String,Number', option: '0~180', default: '必填' },
        { name: 'lng', desc: '经度坐标', type: 'String,Number', option: '0~90', default: '必填' },
        { name: 'type', desc: '坐标系，目前仅支持 gcj02（高德，默认）和 bg09（百度）', type: 'String', option: 'gcj02 | bd09', default: 'gcj02' },
        { status: 'no-demo', name: 'height', desc: '地图高度', type: 'String', option: '样式中长宽的值', default: '200px' },
        { status: 'no-demo', name: 'width', desc: '地图宽度', type: 'String', option: '样式中长宽的值', default: '100%' },
        { status: 'planning', name: 'level', desc: '地图加载时缩放级别', type: 'Number', option: '3 ~ 18', default: '14' }
      ],
      events: [
        { name: 'click', desc: '点击地图事件, 一般用于选取坐标信息（经度纬度）', option: '坐标对象 { lat: "纬度", lng: "经度" } ' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../global.scss";
</style>
