<template>
  <article class="pad-article">
    <header class="title">域 HxSection</header>
    <span class="desc">
      域组件是一种划分区域的布局，一般适用于在表单内容多的页面中，可以明显区分不同模块内容，
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
            hx-section域组件已默认在 <strong>main.js</strong> 中全局引入，所以在业务页面组件中无需重复引入。
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
        颜色等级：通过 <em>level</em> 定义域的等级颜色，主要印象标题前的方块颜色，默认按钮的颜色，加载动画颜色以及侧边文本颜色。<br />
        是否可展开收起： 通过设置 <em>foldable</em> 设置域主体内容可以收起展开。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-section title="level设置不同颜色" level="error">
            <hx-button slot="right">警告级别</hx-button>
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
      props: [
        { name: 'content', desc: '下拉菜单选项内容', type: 'Array', option: '由数值、字符串或对象组成', default: '[]' },
        { name: 'placeholder', desc: '文本为空时的提示信息', type: 'String', option: '文本', default: '空字符串' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../global.scss";
</style>
