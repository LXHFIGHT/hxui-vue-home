<template>
  <article class="pad-article">
    <header class="title">$hxui.validate</header>
    <span class="desc">
      本插件的表单验证通过为表单组件标签中增加一些特殊约定好的属性，
      如 <strong>required="required"</strong>、<strong>data-type="cellphone"</strong>等，
      结合调用 <em>$hxui.validate</em> 方法，
      传入一个包含所有需要验证的表单的父组件的<a target="_blank" href="https://www.w3school.com.cn/jquery/jquery_ref_selectors.asp" >jQuery选择器</a>字符串为唯一参数，
      即可自动验证内部带特殊属性的组件内容是否符合对应要求, 并将验证结果对应的布尔值返回，<strong>true</strong>表示内容无误，<strong>false</strong>则表示有问题。
    </span>
    <!-- 内容类型验证  -->
    <div class="section">
      <span class="title">内容类型验证</span>
      <span class="desc">
        当前已支持的内容类型有四种，包括：<strong>手机号码</strong>、<strong>身份证号码</strong>、
        <strong>电子邮箱</strong>以及<strong>数字类型</strong> <br />
        <em>data-type="cellphone"</em>: 验证内容是否为大陆手机号码<br />
        <em>data-type="idNumber"</em>: 验证内容是否为大陆居民第二代身份证号码<br />
        <em>data-type="email"</em>: 验证内容是否符合电子邮箱格式<br />
        <em>data-type="number"</em>: 验证内容是否为数字类型<br />
      </span>
      <div class="pad-preview">
        <div class="demo form-validate-types">
          <hx-row label="手机号码：">
            <hx-input data-type="cellphone" placeholder="请输入您的手机号码" v-model="bundle.cellphone" />
          </hx-row>
          <hx-row label="身份证号：">
            <hx-input data-type="idNumber" placeholder="请输入您的身份证号" v-model="bundle.idNumber" />
          </hx-row>
          <hx-row label="电子邮箱：">
            <hx-input data-type="email"  placeholder="请输入您的电子邮箱" v-model="bundle.email"/>
          </hx-row>
          <hx-row label="数字：">
            <hx-input data-type="number" placeholder="请输入一串数字" v-model="bundle.num"/>
          </hx-row>
          <div class="row" style="margin-top: 16px; text-align: center;">
            <hx-button @click="doValidateType" style="width: 200px;" type="info">进行验证类型</hx-button>
          </div>
        </div>
        <div class="code">
          <span class="tips">
            插件方法已默认在 <strong>main.js</strong> 中全局引入，所以在业务页面组件中无需重复引入。
          </span>
          <pre class="detail" v-highlightjs="firstText" >
            <code class="xml">
            </code>
          </pre>
          <pre class="detail" v-highlightjs="secondText" >
            <code class="javascript">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <!-- 内容长度验证 -->
    <div class="section">
      <span class="title">内容长度验证</span>
      <span class="desc">
        已支持长度校验类型有四种，包括：<strong>非空判断</strong>、<strong>最大长度限制</strong>以及<strong>最短长度限制</strong><br />
        <em>required="required"</em>: 验证是否为空<br />
        <em>max-length="{整数}"</em>: 验证文本长度是否小于最大文本长度<br />
        <em>min-length="{整数}"</em>: 验证文本长度是否大于最小文本长度<br />
      </span>
      <div class="pad-preview">
        <div class="demo form-validate-length">
          <hx-row label="必填项：" required="required">
            <input style="width: 100%;" type="text" required="required" placeholder="请输入内容" />
          </hx-row>
          <hx-row label="需少于20字：">
            <input style="width: 100%;" type="text" max-length="20" placeholder="请输入内容" />
          </hx-row>
          <hx-row label="需多于5字：">
            <input style="width: 100%;" type="text" min-length="5" placeholder="请输入内容" />
          </hx-row>
          <div class="row" style="margin-top: 16px; text-align: center;">
            <hx-button @click="doValidateLength" style="width: 200px;" type="info">进行验证长度</hx-button>
          </div>
        </div>
        <div class="code">
          <span class="tips">
            插件方法已默认在 <strong>main.js</strong> 中全局引入，所以在业务页面组件中无需重复引入。
          </span>
          <pre class="detail" v-highlightjs="thirdText" >
            <code class="xml">
            </code>
          </pre>
          <pre class="detail" v-highlightjs="forthText" >
            <code class="javascript">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <span class="annotation">
      // 后续会更加完善验证类型~ To be continue...
    </span>
    <!-- 属性表格 -->
    <div class="section">
      <span class="title">验证项</span>
      <div class="hx-table">
        <table>
          <thead>
            <tr>
              <td class="sm">名称</td>
              <td class="lg">说明</td>
              <td class="sm">类型</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in props" :key="idx">
              <td v-text="item.name"></td>
              <td v-text="item.desc"></td>
              <td v-text="item.type"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </article>
</template>
<script>
import { HxInput, HxButton } from 'hxui'
export default {
  components: { HxInput, HxButton },
  data () {
    return {
      bundle: {
        cellphone: '',
        idNumber: '',
        email: '',
        num: ''
      },
      firstText: `<!-- Template中 表单内容  -->
<div class="demo form-validate-types">
  <hx-row label="手机号码：">
    <hx-input data-type="cellphone" placeholder="请输入您的手机号码" v-model="bundle.cellphone" />
  </hx-row>
  <hx-row label="身份证号：">
    <hx-input data-type="idNumber" placeholder="请输入您的身份证号" v-model="bundle.idNumber" />
  </hx-row>
  <hx-row label="电子邮箱：">
    <hx-input data-type="email"  placeholder="请输入您的电子邮箱" v-model="bundle.email"/>
  </hx-row>
  <hx-row label="数字：">
    <hx-input data-type="number" placeholder="请输入一串数字" v-model="bundle.num"/>
  </hx-row>
  <div class="row" style="margin-top: 16px; text-align: center;">
    <hx-button @click="doValidateType" style="width: 200px;" type="info">进行验证</hx-button>
  </div>
</div>`,
      secondText: `
// 进行验证按钮的点击事件
// ... ...
methods: {
  doValidateType () {
    if (this.$hxui.validate('.form-validate-types')) {
      this.$hxui.toast.success('恭喜所有表单格式正确')
    }
  }
  // ... ...
}`,  
      thirdText: `<!-- Template中 表单内容  -->
<div class="demo form-validate-length">
  <hx-row label="必填项：" required="required">
    <input style="width: 100%;" type="text" required="required" placeholder="请输入内容" />
  </hx-row>
  <hx-row label="需少于20字：">
    <input style="width: 100%;" type="text" max-length="20" placeholder="请输入内容" />
  </hx-row>
  <hx-row label="需多于5字：">
    <input style="width: 100%;" type="text" min-length="5" placeholder="请输入内容" />
  </hx-row>
  <div class="row" style="margin-top: 16px; text-align: center;">
    <hx-button @click="doValidateLength" style="width: 200px;" type="info">
      进行验证长度
    </hx-button>
  </div>
</div>`,
      forthText: `
// 进行验证按钮的点击事件
// ... ...
methods: {
  doValidateLength () {
    if (this.$hxui.validate('.form-validate-length')) {
      this.$hxui.toast.success('恭喜所有表单内容长度正确')
    }
  }
  // ... ...
}`,
      props: [
        { name: 'required="required"', desc: '内容必填（目前支持HXUI的下拉菜单、上传图片和选择按钮群组件）', type: '长度验证' },
        { name: 'max-length="{整数}"', desc: '内容字数长度最大限制', type: '长度验证' },
        { name: 'min-length="{整数}"', desc: '内容字数长度最小限制', type: '长度验证' },
        { name: 'data-type="cellphone"', desc: '内容格式需符合中国大陆地区手机号码格式', type: '格式验证' },
        { name: 'data-type="idNumber"', desc: '内容格式需符合中国大陆二代居民身份证格式', type: '格式验证' },
        { name: 'data-type="email"', desc: '内容格式需符合电子邮箱格式', type: '格式验证' },
        { name: 'data-type="number"', desc: '内容为数字类型', type: '格式验证' }
      ]
    }
  },
  methods: {
    doValidateType () {
      if (this.$hxui.validate('.form-validate-types')) {
        this.$hxui.toast.success('恭喜所有表单格式正确')
      }
    },
    doValidateLength () {
      if (this.$hxui.validate('.form-validate-length')) {
        this.$hxui.toast.success('恭喜所有表单内容长度正确')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../global.scss";
</style>
