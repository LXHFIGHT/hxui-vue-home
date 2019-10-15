<template>
  <article class="pad-article">
    <header class="title">下拉菜单 HxSelector</header>
    <span class="desc">
      HxSelector是一个用于替代HTML中的 <em>select</em> 元素的下拉菜单组件，样式更加丰富，同时更符合MVVM数据视图分离的思路。
    </span>
    <!-- 文本输入框 -->
    <div class="section">
      <span class="title">下拉菜单效果</span>
      <span class="desc">
        通过 <em>label</em> 属性设置标签文本，通过调整 <em>label-size</em> 设置左侧标签的宽度。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="请选择糖果类型">
            <hx-selector :content="options" v-model="yourChoise"></hx-selector>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="text" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
import { HxSelector } from '@/hxui'
export default {
  components: {
    HxSelector
  },
  data () {
    return {
      yourChoise: '',
      options: ['棉花糖', '棒棒糖', '太妃糖', '奶糖', '跳跳糖']
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../global.scss";
</style>
