<template>
  <article class="pad-article">
    <header class="title">
      <span style="position: relative">
        气泡 HxDot
        <hx-dot text="已完成"></hx-dot>
      </span>
    </header>
    <span class="desc">
      气泡组件是一个用于点缀在其他组件上的旨在用于引起用户注意的 <em>轻量</em> 组件，不具备交互作用，可以通过 <em>v-if</em> 进行决定展示与否。
      将通过 <a>HxButton 组件</a> 演示如何使用。
    </span>
    <div class="section">
      <span class="title">普通气泡</span>
      <span class="desc">使用 <em>color</em> 或 <em>level</em> 定义<strong>气泡</strong>的颜色值</span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button >有新的消息<hx-dot level="info" /></hx-button>
          <hx-button >有新的消息<hx-dot level="success" /></hx-button>
          <hx-button >有新的消息<hx-dot level="warn" /></hx-button>
          <hx-button >有新的消息<hx-dot color="golden" /></hx-button>
          <hx-button >有新的消息<hx-dot level="error" /></hx-button>
          <hx-button >有新的消息 <hx-dot level="fatal" /></hx-button>
        </div>
        <div class="code">
          <span class="tips">
            color会比level更加灵活，可以使用颜色对应的英文，也可以使用警告级别，level只限制警告级别的英文
          </span>
          <pre class="detail" v-highlightjs="firstText">
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
      <span class="desc">使用 <em>size</em> 定义<strong>气泡</strong>的大小, 默认是 "md"</span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button >有小的消息<hx-dot size="sm"/></hx-button>
          <hx-button >有中的消息<hx-dot size="md"/></hx-button>
          <hx-button >有大的消息<hx-dot size="bg"/></hx-button>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="secondText">
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div class="section">
      <span class="title">带文字的实心气泡</span>
      <span class="desc">
        如果气泡内需要展示文字的时候，
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button >新的消息<hx-dot level="info" text="2"></hx-dot></hx-button>
          <hx-button >版本介绍<hx-dot level="error" text="New"></hx-dot></hx-button>
        </div>
        <div class="code">
          <span class="tips">
            带文字的气泡将不支持 <em>size</em>，以保持界面风格一致
          </span>
          <pre class="detail" v-highlightjs="thirdText">
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
      <span class="desc">使用 <em>blank</em> 设置气泡为空心, <strong>注意：建议在带文字情况下使用，非文字情况使用会呈淡色可能被用户忽略</strong></span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button>空的气泡<hx-dot color="red" blank="blank"/></hx-button>
          <hx-button>空的气泡2<hx-dot size="bg" color="golden" blank="blank"/></hx-button>
          <hx-button>空的消息<hx-dot color="red" blank="blank" text="2"/></hx-button>
          <hx-button>空的消息2<hx-dot color="golden" blank="blank" text="3"/></hx-button>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="forthText">
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div class="section">
      <span class="title">气泡的位置</span>
      <span class="desc">使用 <em>position</em> 可定义气泡所在方位， 一般默认在右上角</span>
      <div class="pad-preview">
        <div class="demo">
          <hx-button >默认<hx-dot position="topRight" level="error"/></hx-button>
          <hx-button >左上角的气泡<hx-dot position="topLeft" level="warn" /></hx-button>
          <hx-button >左下角的气泡<hx-dot position="bottomLeft" level="success"/></hx-button>
          <hx-button >右下角的气泡<hx-dot position="bottomRight" color="golden" text="+2"/></hx-button>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="fifthText">
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
import { HxDot } from 'hxui'
export default {
  components: { HxDot },
  data () {
    return {
      firstText: `<hx-button>有新的消息<hx-dot level="info" /></hx-button>
<hx-button>有新的消息<hx-dot level="success" /></hx-button>
<hx-button>有新的消息<hx-dot level="warn" /></hx-button>
<hx-button>有新的消息<hx-dot color="golden" /></hx-button>
<hx-button>有新的消息<hx-dot level="error" /></hx-button>
<hx-button>有新的消息 <hx-dot level="fatal" /></hx-button>
`,
      secondText: `<hx-button >有小的消息<hx-dot size="sm"/></hx-button>
<hx-button >有中的消息<hx-dot size="md"/></hx-button>
<hx-button >有大的消息<hx-dot size="bg"/></hx-button>`,
      thirdText: `<hx-button >新的消息<hx-dot level="info" text="2"></hx-dot></hx-button>
<hx-button >版本介绍<hx-dot level="error" text="New"></hx-dot></hx-button>`,
      forthText: `<hx-button>空的气泡<hx-dot color="red" blank="blank"/></hx-button>
<hx-button>空的气泡2<hx-dot size="bg" color="golden" blank="blank"/></hx-button>
<hx-button>空的消息<hx-dot color="red" blank="blank" text="2"/></hx-button>
<hx-button>空的消息2<hx-dot color="golden" blank="blank" text="3"/></hx-button>`,
      fifthText: `<hx-button >默认<hx-dot position="topRight" level="error"/></hx-button>
<hx-button >左上角的气泡<hx-dot position="topLeft" level="warn" /></hx-button>
<hx-button >左下角的气泡<hx-dot position="bottomLeft" level="success"/></hx-button>
<hx-button >右下角的气泡<hx-dot position="bottomRight" color="golden" text="+2"/></hx-button>`,
      props: [
        { name: 'text', desc: '气泡上的文本', type: 'String', option: '颜色值', default: 'red（红色）' },
        { name: 'size', desc: '大小', type: 'String', option: 'sm/md/bg', default: 'md（中等）' },
        { name: 'color', desc: '颜色', type: 'String', option: '颜色值选项', default: 'red（红色）' },
        { name: 'level', desc: '等级颜色', type: 'String', option: '等级选项', default: 'error（红色）' },
        { name: 'position', desc: '方位', type: 'String', option: '范围选项', default: 'topRight（右上方）' },
        { name: 'blank', desc: '是否空心', type: 'Boolean/String/Number', option: '布尔值/"blank"/1', default: '空字符串' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../global.scss";
</style>
