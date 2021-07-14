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
        通过 <em>lat</em> 定义坐标的纬度， <em>lng</em> 定位坐标的经度。
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
            <hx-map @click="doClick" id="bmap" type="bd09" lat="39.91324" lng="116.40395"></hx-map>
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
      <span class="desc">
        和多数组件一样，可以通过 <em>height</em> 和 <em>width</em>
        定义地图展示组件的高度和宽度，当然也支持在内联样式中定义高宽。<br>
        如果觉得需要隐藏底部的高德地图logo和版权信息，还可以设置 <em>hide-logo</em> 属性。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-map id="amapII" height="200px" width="60%" hide-logo lat="39.906901" lng="116.397551" ></hx-map>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="texts[2]" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
      <span class="desc">
        支持通过 <em>level</em> 设置地图显示的缩放级别。
        <strong>注意：缩放级别的方位在 3 ~ 18 </strong>
      </span>
      <div class="pad-preview">
        <div class="demo" style="height: 300px;">
          <div class="hx-pad-left">
            缩放级别为 <strong>13</strong>
            <br/><br/>
            <hx-map level="13" lat="39.906901" lng="116.397551"></hx-map>
          </div>
          <div class="hx-pad-right">
            缩放级别为 <strong>16</strong>
            <br/><br/>
            <hx-map level="16" lat="39.906901" lng="116.397551"></hx-map>
          </div>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="texts[3]" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
      <span class="title">事件</span>
      <span class="desc">
        <strong>HxMap</strong> 支持两个原生事件，单击地图 <em>click</em> 和 双击地图 <em>dblclick</em> 事件，事件参数为所点选的位置的经纬度、缩放比例以及原生的JS事件对象。
        <br/>除此之外，还支持了拖拽地图行为中对应的 开始移动 <em>movestart</em>、移动地图中 <em>moving</em> 和 移动结束 <em>moveend</em> 事件。
      </span>
      <div class="pad-preview">
        <div class="demo">
          在下面地图上做对应行为可以查看到对应的参数:
          <br/><br/>
          <hx-map
            height="300px" 
            width="100%" 
            @click="doClick" 
            @dblclick="doDoubleClick" 
            @movestart="doMoveStart"
            @moving="doMoving"
            @moveend="doMoveEnd"
            lat="39.906901" 
            lng="116.397551">
            <div class="pad-text" slot="topRight" ref="textPad">
            </div>
          </hx-map>
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
<hx-map id="bmap" type="bd09" lat="39.91324" lng="116.40395"></hx-map>`, `<hx-map id="amapII" height="200px" width="60%" hide-logo ></hx-map>`, 
        `<hx-map level="13" lat="39.906901" lng="116.397551"></hx-map>
<hx-map level="16" lat="39.906901" lng="116.397551"></hx-map>`
      ],
      props: [
        { name: 'lat', desc: '纬度坐标', type: 'String,Number', option: '0~180', default: '必填' },
        { name: 'lng', desc: '经度坐标', type: 'String,Number', option: '0~90', default: '必填' },
        { name: 'type', desc: '坐标系，目前仅支持 gcj02（高德，默认）和 bg09（百度）', type: 'String', option: 'gcj02 | bd09', default: 'gcj02' },
        { name: 'height', desc: '地图高度', type: 'String', option: '样式中长宽的值', default: '200px' },
        { name: 'width', desc: '地图宽度', type: 'String', option: '样式中长宽的值', default: '100%' },
        { name: 'hideLogo', desc: '是否隐藏左下角高德地图 Logo 和 版权信息内容， true表示隐藏', type: 'Boolean', option: '布尔值', default: 'false' },
        { name: 'level', desc: '地图加载时缩放级别', type: 'Number', option: '3 ~ 18', default: '14' }
      ],
      events: [
        { name: 'click', desc: '点击地图事件, 一般用于选取坐标信息（经度纬度）', option: '坐标对象，对象中包含 lat 纬度, lng 经度, level 缩放比例 和 originEvent 原始事件' },
        { name: 'dblclick', desc: '双击地图事件', option: '坐标对象，对象中包含 lat 纬度, lng 经度, level 缩放比例 和 originEvent 原始事件' },
        { name: 'moving', desc: '在地图上移动中触发事件', option: '移动中地图中心点对象，对象中包含 lat 纬度, lng 经度' },
        { name: 'movestart', desc: '在地图上开始移动时触发事件', option: '移动中地图中心点对象，对象中包含 lat 纬度, lng 经度' },
        { name: 'moveend', desc: '在地图上移动结束时触发事件', option: '移动中地图中心点对象，对象中包含 lat 纬度, lng 经度' }
      ]
    }
  },
  methods: {
    doClick (e) { this.showText(e) },
    doDoubleClick (e) { this.showText(e) },
    doMoveStart (e) { this.showText(e) },
    doMoving (e) { this.showText(e) },
    doMoveEnd (e) { this.showText(e) }
  }
}
</script>
<style lang="scss" scoped>
@import "./../global.scss";
</style>
