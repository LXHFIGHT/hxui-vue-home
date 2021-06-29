<template>
  <article class="pad-article">
    <header class="title">域 HxSection</header>
    <span class="desc">
      域布局是一种划分区域的布局，一般适用于在表单内容多的页面中，可以明显区分不同模块内容，
      搭配不同的 <strong>插槽</strong> 以及 <em>hx-row</em> 行布局，可以很快生成大方美观的页面布局。  
    </span>
    <!-- 域标题 -->
    <div class="section">
      <span class="title">域标题</span>
      <span class="desc">
        通过 <em>title</em> 属性域的标题，一般用于定义模块名称，如果不需要标题行的话，则无需配置该属性即可。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-section title="各种糖价格">
            <hx-row label="棉花糖价格">
              <span class="text bg-gray">16（带标题）</span>
              <span slot="right">元/斤</span>
            </hx-row>
          </hx-section>
          <hx-section>
            <hx-row label="棉花糖价格">
              <span class="text bg-gray">16（不带标题）</span>
              <span slot="right">元/斤</span>
            </hx-row>
          </hx-section>
        </div>
        <div class="code">
          <span class="tips">
            hx-section域布局已默认在 <strong>main.js</strong> 中全局引入，所以在业务页面组件中无需重复引入。
          </span>
          <pre class="detail" v-highlightjs="firstText" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <!-- 加载状态 -->
    <div class="section">
      <span class="title">域加载中状态</span>
      <span class="desc">
        通过 <em>loading</em> 设置非空来标记区域为加载中状态，该属性十分适用于域中数据需要异步加载获得的情况，
        同时可以通过 <em>loadingText</em> 定义加载的文本内容。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-section 
            title="不带文本的加载域" 
            loading="loading">
          </hx-section>
          <hx-section 
            title="带文本的加载域" 
            loading="loading" 
            loadingText="加载价格配置中...">
          </hx-section>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="secondText" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <!-- 域颜色等级 -->
    <div class="section">
      <span class="title">其他属性</span>
      <span class="desc">
        <strong>颜色等级</strong>：通过 <em>level</em> 定义域的等级颜色，主要印象标题前的方块颜色，默认按钮的颜色，加载动画颜色以及侧边文本颜色。<br />
        <strong>是否可展开收起</strong>：通过设置 <em>foldable</em> 设置域主体内容可以支持收起展开，<br />
        在支持收起展开的情况下， <em>foldedHeight</em>属性可以配置收起时的域的高度。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-section 
            title="level设置不同颜色" 
            loading="loading" 
            loadingText="加载价格配置中..."
            tag="HTML"
            level="error">
            <hx-button slot="right">警告级别</hx-button>
          </hx-section>
          <hx-section 
            title="可以收起展开，收起时展示一行数据" 
            foldedHeight="118px"
            foldable="foldable">
            <hx-row label-size="bg" label="棉花糖价格(元/斤)">
              <span class="text bg-gray">16</span>
            </hx-row>
            <hx-row label-size="bg" label="棒棒糖价格(元/斤)">
              <span class="text bg-gray">24</span>
            </hx-row>
            <hx-row label-size="bg" label="太妃糖价格(元/斤)">
              <span class="text bg-gray">32</span>
            </hx-row>
          </hx-section>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="thirdText" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <!-- 插槽 -->
    <!-- 文本域 -->
    <div class="section">
      <span class="title">插槽</span>
      <span class="desc">
        域布局提供了一个默认的内容插槽以及两个可自定义的插槽（<strong>left</strong> 插槽和<strong>right</strong> 插槽）<br /><br />
        <strong>left</strong>插槽位置在紧随标题后的位置，而<strong>right</strong>在标题行最右侧的位置。
        <strong>值得注意的是，left 和 right 插槽必须在 <em>title</em> 属性不为空的情况下才可以使用。</strong>
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-section title="糖果价格表（默认插槽）" >
            <span class="bg-outstanding">May your life be sweet all the time.</span>
          </hx-section>
          <hx-section title="糖果价格表（left插槽）" >
            <span slot="left" class="bg-outstanding">
              (共 16 种糖果) 
            </span>
            <span >May your life be sweet all the time.</span>
          </hx-section>
          <hx-section title="糖果价格表（right插槽）" >
            <div slot="right" class="bg-outstanding">
              <hx-button style="margin: 0 16px;" type="orange">刷新</hx-button>
            </div>
            <span>May your life be sweet all the time.</span>
          </hx-section>
        </div>
        <div class="code">
          <span class="tips">
            注意：<strong>left</strong> 和 <strong>right</strong> 插槽需要在组件 <em>title</em> 不为空的情况下才可以使用
          </span>
          <pre class="detail" v-highlightjs="forthText" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <!-- 表格属性 -->
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
  </article>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      firstText: `<hx-section title="各种糖价格">
  <hx-row label="棉花糖价格">
    <span class="text bg-gray">16（带标题）</span>
    <span slot="right">元/斤</span>
  </hx-row>
</hx-section>
<hx-section >
  <hx-row label="棉花糖价格">
    <span class="text bg-gray">16（不带标题）</span>
    <span slot="right">元/斤</span>
  </hx-row>
</hx-section>`,
      secondText: `<hx-section 
  title="不带文本的加载域" 
  loading="loading">
</hx-section>
<hx-section 
  title="带文本的加载域" 
  loading="loading" 
  loadingText="加载价格配置中...">
</hx-section>`,
      thirdText: `<hx-section 
  title="level设置不同颜色" 
  loading="loading" // 加载中状态
  loadingText="加载价格配置中..." // 加载中的文本
  tag="HTML" // 右下角的标记
  level="error">
  <hx-button slot="right">警告级别</hx-button>
</hx-section>
<hx-section 
  title="可以收起展开，收起时展示一行数据" 
  foldedHeight="118px"
  foldable="foldable">
  <hx-row label-size="bg" label="棉花糖价格(元/斤)">
    <span class="text bg-gray">16</span>
  </hx-row>
  <hx-row label-size="bg" label="棒棒糖价格(元/斤)">
    <span class="text bg-gray">24</span>
  </hx-row>
  <hx-row label-size="bg" label="太妃糖价格(元/斤)">
    <span class="text bg-gray">32</span>
  </hx-row>
</hx-section>`,
      forthText: `<hx-section title="糖果价格表（默认插槽）" >
  <span class="bg-outstanding">May your life be sweet all the time.</span>
</hx-section>
<hx-section title="糖果价格表（left插槽）" >
  <span slot="left" class="bg-outstanding">
    (共 16 种糖果) 
  </span>
  <span >May your life be sweet all the time.</span>
</hx-section>
<hx-section title="糖果价格表（right插槽）" >
  <div slot="right" class="bg-outstanding">
    <hx-button style="margin: 0 16px;" type="orange">刷新</hx-button>
  </div>
  <span>May your life be sweet all the time.</span>
</hx-section>`,
      props: [
        { name: 'title', desc: '标题文案', type: 'String', option: '文本', default: '' },
        { name: 'loading', desc: '是否在加载中状态', type: 'Number/Boolean/String', option: 'true/1/"loading"', default: 'false' },
        { name: 'loadingText', desc: '加载中时附加的文案', type: 'String', option: '文本', default: '' },
        { name: 'shadow', desc: '是否带阴影', type: 'Number/Boolean/String', option: 'true/1/"shadow"', default: '默认无阴影效果' },
        { name: 'foldable', desc: '是否可展开收起', type: 'Number/Boolean/String', option: 'true/1/"foldable"', default: '默认不支持' },
        { name: 'foldedHeight', desc: '收起状态时的高度', type: 'String', option: '高度参数', default: '50px' },
        { name: 'tag', desc: '域中右下角的小标题', type: 'String', option: '文本（不宜过长）', default: '' },
        { name: 'level', desc: '域颜色等级', type: 'String', option: '颜色值', default: 'info' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../global.scss";
</style>
