<template>
  <article class="pad-article">
    <header class="title">单选框集合 HxRadioGroup</header>
    <span class="desc">
      HxRadioGroup 是一个用于替代HTML5中的 <em>input:radio</em> 元素的单选框组件，
      除了样式更加简约大方，支持多个参数使得复选的场景更加容易实现，同时更符合MVVM数据视图分离的思路。
    </span>
    <div class="section">
      <span class="title">双向绑定</span>
      <span class="desc">通过 <em>v-model</em> 将 <strong>hx-radio-group</strong> 同父组件中数据进行绑定，数值类型为任一基本类型</span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label-size="bg" label="请选择糖果类型">
            <hx-radio-group :content="candyTypes.map(v => v.key)" v-model="values[0]"></hx-radio-group>
          </hx-row>
          <hx-row label-size="bg" label="选中的糖果类型有：">
            <span class="text bg-gray">{{ values[0] }}</span>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="texts[0]" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
      <!-- 基本数据类型的下拉菜单 -->
      <span class="title">定义可选内容</span>
      <span class="desc">
        单选框组件需要提供一个<strong>数组类型</strong>参数—— <em>content</em> 用于定义其选项内容，
        数组元素可以为基本数据类型，则选项的文本以及对应的值均为该值；
      </span>
      <br />
      <br />
      <span class="desc">
        但比起基本数据类型元素，对象元素更加灵活，这里作者也比较推荐以对象数组作为 <em>content</em> 参数，
        对象元素中通过 <em>key</em> 字段定义选项上的文本<span class="color-gray">（这里可以通过 <em>keyName</em> 参数改变对象中对应选项文本内容的字段名，比方说 <strong>"text"</strong> ）</span>，
        <em>value</em> 则定义选项的值，设置 <em>disabled</em> 时，表示该选项为不可选状态：
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="请选择糖果类型">
            <hx-radio-group :content="candyTypes" v-model="values[4]"></hx-radio-group>
          </hx-row>
          <hx-row label="不可选糖果类型">
            <hx-radio-group disabled :content="candyTypes" v-model="values[4]"></hx-radio-group>
          </hx-row>
          <hx-row label-size="bg" label="选中的糖果对应的值：">
            <span class="text bg-gray">{{ values[4] }}</span>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="texts[1]" >
            <code class="xml">
            </code>
          </pre>
          <pre class="detail" v-highlightjs="texts[2]" >
            <code class="javascript">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <!-- 属性表格 -->
    <div class="section">
      <props-table :content="props"></props-table>
    </div>
    <header class="title">单选框 HxRadio </header>
    <span class="desc">
      HxRadio是可以配合 <strong>HxRadioGroup</strong> 使用的单选框元素，可以不用依赖其 <em>content</em> 传入数组生成单选框集合，
      更加贴合<strong>原生</strong>的 <em>input:radio</em> 写法。
    </span>
    <div class="section">
      <span class="title">定义选项</span>
      <span class="desc">在 <em>&lt;hx-radio-group /&gt;</em> 标签内添加带有value的 <em>&lt;hx-radio &gt;&lt;/hx-radio&gt;</em> 集合</span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="糖果类型(元素)" label-size="bg">
            <hx-radio-group v-model="values[1]">
              <hx-radio :value="1">棉花糖</hx-radio>
              <hx-radio :value="2">棒棒糖</hx-radio>
              <hx-radio :value="3">太妃糖</hx-radio>
            </hx-radio-group>
          </hx-row>
          <hx-row label="糖果类型(元素不可选)" label-size="bg">
            <hx-radio-group v-model="values[1]" disabled>
              <hx-radio :value="1">棉花糖</hx-radio>
              <hx-radio :value="2">棒棒糖</hx-radio>
              <hx-radio :value="3">太妃糖</hx-radio>
            </hx-radio-group>
          </hx-row>
          <!-- 对比用 -->
          <hx-row label="糖果类型(数组)" label-size="bg">
            <hx-radio-group :content="candyTypes" v-model="values[1]"></hx-radio-group>
          </hx-row>
          <hx-row label-size="bg" label="选中的糖果对应的值：">
            <span class="text bg-gray">{{ values[1] }}</span>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="texts[3]" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div class="section">
      <strong class="title">高阶用法</strong>
      <span class="desc">使用 <strong>hx-radio</strong> 写法代替传入一个 <em>content</em> 选项数组除了写法靠近原生，还有一点就是可以更加灵活将选择放置于页面各个角落，而不再拘泥于行内或一个标签内，下面就是一个很好的例子：</span>
      <div class="pad-preview">
        <div class="demo">
          <hx-radio-group type="round-button" v-model="values[2]" class="hx-table">
            <table >
              <thead>
                <tr>
                  <th>序号</th>
                  <th>糖果类型</th>
                  <th>糖果数量</th>
                  <th>单位</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, idx) in candyTypes" :key="idx"> 
                  <td>
                    <hx-radio :value="item.value"></hx-radio>
                  </td>
                  <td>{{ item.key }}</td>
                  <td>{{ item.amount }}</td>
                  <td>{{ item.unit }}</td>
                </tr>
              </tbody>
            </table>
          </hx-radio-group>
          <hx-row label-size="bg" label="选中的糖果对应的值：" style="margin-top: 16px;">
            <span class="text bg-gray">{{ values[2] }}</span>
          </hx-row>
        </div>
        <div class="code">
          <span class="tips" style="margin-bottom: 16px;">
            使用 hx-radio 将可以打破位置上的限制
          </span>
          <pre class="detail" v-highlightjs="texts[4]" >
            <code class="xml">
            </code>
          </pre>
          <pre class="detail" style="padding-top: 0;" v-highlightjs="texts[5]" >
            <code class="javascript">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <!-- 属性表格 -->
    <div class="section">
      <props-table :content="props2"></props-table>
    </div>
    <header class="title">汇总</header>
    <div class="section">
      <strong class="title">元素类型</strong>
      <span class="desc">
        如果觉得仿原生的 <strong>radio</strong> 元素样式比较单调，
        可以通过 <em>type</em> 可以定义radio的样式类型，当前支持按钮类型的 <strong>button</strong> 和 圆形按钮 <strong>round-button</strong>。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="普通按钮类型" label-size="bg">
            <hx-radio-group type="button" v-model="values[3]">
              <hx-radio v-for="(item, idx) in candyTypes" :key="idx" 
                :value="item.value">{{ item.key }}
              </hx-radio>
            </hx-radio-group>
          </hx-row>
          <hx-row label="圆形按钮类型" label-size="bg">
            <hx-radio-group type="round-button"
              :content="candyTypes" 
              v-model="values[3]">
            </hx-radio-group>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="texts[5]" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
      <strong class="title">自定义类名</strong>
      <span class="desc">
        <strong>HxRadioGroup</strong> 和 <strong>HxRadio</strong> 均提供了一下几种自定义，
        可以通过 <em>type</em> 可以定义radio的样式类型，当前支持按钮类型的 <strong>button</strong> 和 圆形按钮 <strong>round-button</strong>。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="普通按钮类型" label-size="bg">
            <hx-radio-group type="button" v-model="values[3]">
              <hx-radio v-for="(item, idx) in candyTypes" :key="idx" 
                :value="item.value">{{ item.key }}
              </hx-radio>
            </hx-radio-group>
          </hx-row>
          <hx-row label="圆形按钮类型" label-size="bg">
            <hx-radio-group type="round-button"
              :content="candyTypes" 
              v-model="values[3]">
            </hx-radio-group>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="texts[5]" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <!-- 事件调用 -->
    <div class="section">
      <strong class="title">事件调用</strong>
      <span class="desc">无论 <strong>HxRadioGroup</strong> 还是 <strong>HxRadio</strong> 都提供了三个响应勾选状态发生改变时的事件，分别是
        勾选选项时调用的 <em>@select</em> (对应 onSelect 参数) 以及选项勾选状态发生变换时调用的 <em>@change</em> 。
        三个方法调用时都会以当前选项关联对象作为唯一参数，对象中包含选项对应的值 value 以及描述文本（key）。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="糖果类型(元素)" label-size="bg">
            <hx-radio-group v-model="values[5]">
              <hx-radio v-for="(item, idx) in candyTypes" 
                :key="idx"
                data-color="red"
                @change="doChange"
                @select="doSelect" 
                :value="item.value">
                {{ item.key }}
              </hx-radio>
            </hx-radio-group>
          </hx-row>
          <hx-row label="糖果类型(数组)" label-size="bg">
            <hx-radio-group 
              @change="doChange" 
              @select="doSelect" 
              :content="candyTypes" 
              v-model="values[5]">
            </hx-radio-group>
          </hx-row>
        </div>
        <div class="code">
          <span class="tips">
            HxRadioGroup 的 @change 参数是 变更后整体的值，而 HxRadio 的 @change 参数是 当前选项的对象。
          </span>
          <pre class="detail" v-highlightjs="texts[6]" >
            <code class="xml">
            </code>
          </pre>
          <pre class="detail" style="padding-top: 0;" v-highlightjs="texts[7]" >
            <code class="javascript">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <!-- 事件 -->
    <div class="section">
      <events-table title="HxRadioGroup 和 HxRadio 共同事件" :content="events"></events-table>
    </div>
  </article>
</template>
<script>
import { HxRadioGroup, HxRadio } from '@/hxui'
import PropsTable from './../cpts/PropsTable'
import EventsTable from './../cpts/EventsTable'
export default {
  components: {
    HxRadioGroup,
    HxRadio,
    PropsTable,
    EventsTable
  },
  data () {
    return {
      types: ['棉花糖', '棒棒糖', '太妃糖', '奶糖', '跳跳糖'],
      candyTypes: [
        { amount: 6, unit: '颗', key: '棉花糖', value: 1 }, 
        { amount: 20, unit: '颗', key: '棒棒糖', value: 2 },  
        { amount: 19, unit: '斤', key: '太妃糖', value: 3 },  
        { amount: 17, unit: '颗', key: '奶糖', value: 4 },
        { amount: 5, unit: '颗', key: '跳跳糖', value: 5 }
      ],
      values: ['棉花糖', 3, 3, 3, 1, 2],
      texts: [
        `<hx-radio-group :content="types" v-model="value"></hx-radio-group>`,
        `<hx-row label="请选择糖果类型">
  <hx-radio-group :content="candyTypes" v-model="value"></hx-radio-group>
</hx-row>
<!-- 不可选状态 -->
<hx-row label="不可选糖果类型">
  <hx-radio-group 
    disabled
    :content="candyTypes" 
    v-model="value">
  </hx-radio-group>
</hx-row>`,
        `// 声明对象数组, 后续采用的数组同此
{
  candyTypes: [ 
    { amount: 6, unit: '颗', key: '棉花糖', value: 1 }, 
    { amount: 20, unit: '颗', key: '棒棒糖', value: 2 },  
    { amount: 19, unit: '斤', key: '太妃糖', value: 3 },  
    { amount: 17, unit: '颗', key: '奶糖', value: 4 },
    { amount: 5, unit: '颗', key: '跳跳糖', value: 5 }
  ],
  value: 1
}`,
        `<hx-row label="选择糖果类型(元素)" label-size="bg">
  <hx-radio-group v-model="value">
    <hx-radio :value="1">棉花糖</hx-radio>
    <hx-radio :value="2">棒棒糖</hx-radio>
    <hx-radio :value="3">太妃糖</hx-radio>
  </hx-radio-group>
</hx-row>
<!-- 对比 -->
<hx-row label="选择糖果类型(数组)" label-size="bg">
  <!--  candyTypes同上，value 则是一个值为 3  -->
  <hx-radio-group :content="candyTypes" v-model="value"></hx-radio-group>
</hx-row>
`,
        `<hx-radio-group v-model="value" class="hx-table">
  <table >
    <thead>
      <tr>
        <th>序号</th>
        <th>糖果类型</th>
        <th>糖果数量</th>
        <th>单位</th>
      </tr>
    </thead>
    <tbody>
      <!-- candyTypes 参照上文 -->
      <tr v-for="(item, idx) in candyTypes" :key="idx"> 
        <td>
          <hx-radio :value="item.value"></hx-radio>
        </td>
        <td>{{ item.key }}</td>
        <td>{{ item.amount }}</td>
        <td>{{ item.unit }}</td>
      </tr>
    </tbody>
  </table>
</hx-radio-group>`, 
        `
<hx-row label="普通按钮类型" label-size="bg">
  <hx-radio-group type="button" v-model="value">
    <hx-radio v-for="(item, idx) in candyTypes" :key="idx" 
      :value="item.value">{{ item.key }}
    </hx-radio>
  </hx-radio-group>
</hx-row>
<hx-row label="圆形按钮类型" label-size="bg">
  <hx-radio-group type="round-button"
    :content="candyTypes" 
    v-model="value">
  </hx-radio-group>
</hx-row>`,
        `<hx-row label="糖果类型(元素)" label-size="bg">
  <hx-radio-group v-model="value">
    <hx-radio v-for="(item, idx) in candyTypes" 
      :key="idx" 
      @change="doChange"
      @select="doSelect" 
      :value="item.value">
      {{ item.key }}
    </hx-radio>
</hx-row>
<hx-row label="糖果类型(数组)" label-size="bg">
  <hx-radio-group 
    @change="doChange" 
    @select="doSelect" 
    :content="candyTypes" 
    v-model="value">
  </hx-radio-group>
</hx-row>`,
        `{
  methods: {
    doChange (item) {
      this.$hxui.toast(('状态变换选项：' + JSON.stringify(item)))
    },
    doSelect (item) {
      this.$hxui.alert('勾选选项：', item)
    }
  }
}`],
      props: [
        { name: 'content', desc: '多选框菜单选项内容', type: 'Array', option: '由数值、字符串或对象组成', default: '[]' },
        { name: 'value', desc: '对应选择的值', type: 'Boolean/String/Number', option: 'true/false/"disabled"', default: '' },
        { name: 'tabbar', desc: '是否以标签栏形式展示', type: 'Boolean', option: '布尔值', default: 'false' },
        { name: 'label-class', desc: '自定义文本的样式类', type: 'String', option: '字符串', default: '空字符串' },
        { name: 'disabled', desc: '是否只读', type: 'Boolean', option: '布尔值', default: 'false' },
        { name: 'keyName', desc: 'content数组中对象元素中对应选项文本内容的字段名', type: 'String', option: '文本', default: 'key' },
        { name: 'onSelect', desc: '勾选选项时调用方法\n(推荐使用事件@select)', type: 'Function', option: '', default: '' }
      ],
      props2: [
        { name: 'value', desc: '对应选择的值', type: 'Boolean/String/Number', option: '基本数据类型', default: '-' },
        { name: 'disabled', desc: '是否只读', type: 'Boolean', option: '布尔值', default: 'false' }
      ],
      events: [
        { name: '@select', desc: '勾选某一项时触发', option: '对应项的对象 (对象包含key和value)' },
        { name: '@change', desc: '勾选或取消选中某一项时触发', option: '对应选择项的对象 (对象包含key和value)' }
      ]
    }
  },
  methods: {
    popText () {
      return this.texts.pop()
    },
    doChange (item) {
      this.$hxui.toast(('状态变换选项：' + JSON.stringify(item)))
    },
    doSelect (item) {
      this.$hxui.alert('勾选选项：', item)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../global.scss";
</style>
