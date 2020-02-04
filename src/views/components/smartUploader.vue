<template>
  <article class="pad-article">
    <header class="title">上传文件组件 HxSmartUploader</header>
    <span class="desc">
      HxSmartUploader 是一个面向图片、视频等文件上传组件，在上传图片场景中可以对图片进行前端压缩处理，上传成功之后也可以通过HxPreviewImage进行图片预览。
    </span>
    <div class="section">
      <span class="title">效果展示</span>
      <span class="desc">
        HxSmartUploader 作为一个表单组件，建议可以和HxRow搭配会产生更好的布局效果。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="上传图片">
            <hx-smart-uploader>
            </hx-smart-uploader>
            <span slot="tips">上传图片比例建议为1：1</span>
          </hx-row>
        </div>
        <div class="code">
          <span class="tips">
            
          </span>
          <pre class="detail" v-highlightjs="textNext" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <span class="annotation">
      // 此处可以写注释, 可复制上述属性 .section
    </span>
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
import { HxSmartUploader } from 'hxui'
export default {
  components: {
    HxSmartUploader
  },
  data () {
    return {
      textNext: `代码演示区`,
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
