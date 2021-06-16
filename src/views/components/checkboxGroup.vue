<template>
  <article class="pad-article">
    <header class="title">复选框集合 HxCheckboxGroup</header>
    <span class="desc">
      HxCheckboxGroup 是一个用于替代HTML5中的 <em>input:checkbox</em> 元素的复选框组件，
      除了样式更加简约大方，支持多个参数使得复选的场景更加容易实现，同时更符合MVVM数据视图分离的思路。
    </span>
    <div class="section">
      <span class="title">双向绑定</span>
      <span class="desc">通过 <em>v-model</em> 将 <strong>hx-checkbox-group</strong> 同父组件中数据进行绑定</span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label-size="bg" label="请选择糖果类型">
            <hx-checkbox-group :content="types" v-model="targets"></hx-checkbox-group>
          </hx-row>
          <hx-row label-size="bg" label="选中的糖果类型有：">
            <span class="text bg-gray">{{ targets.length ? targets.join(', ') : '暂未选择' }}</span>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="text" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
      <!-- 基本数据类型的下拉菜单 -->
      <span class="title">定义可选内容</span>
      <span class="desc">
        复选框组件需要提供一个<strong>数组类型</strong>参数—— <em>content</em> 用于定义其选项内容，
        数组元素可以为基本数据类型，则选项的文本以及对应的值均为该值；
      </span>
      <br />
      <br />
      <span class="desc">
        但比起基本数据类型元素，对象元素更加灵活，这里作者也比较推荐以对象数组作为 <em>content</em> 参数，
        对象元素中通过 <em>key</em> 字段定义选项上的文本<span class="color-gray">（这里可以通过 <em>keyName</em> 参数改变对象中对应选项文本内容的字段名，比方说 <strong>"text"</strong> ）</span>，
        <em>value</em> 则定义选项的值，<em>disabled</em> 为<strong>true</strong>时，表示该选项为不可选状态：
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="请选择糖果类型">
            <hx-checkbox-group :content="candyTypes" v-model="targetValues"></hx-checkbox-group>
          </hx-row>
          <hx-row label="不可选糖果类型">
            <hx-checkbox-group :disabled="true" :content="candyTypes" v-model="targetValues"></hx-checkbox-group>
          </hx-row>
          <hx-row label-size="bg" label="选中的糖果对应的值：">
            <span class="text bg-gray">{{ targetValues.length ? targetValues.join(', ') : '暂未选择' }}</span>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="text2" >
            <code class="xml">
            </code>
          </pre>
          <pre class="detail" v-highlightjs="text3" >
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
    <header class="title">复选框 HxCheckbox </header>
    <span class="desc">
      HxCheckbox是可以配合 <strong>HxCheckboxGroup</strong> 使用的复选框元素，可以不用依赖其 <em>content</em> 传入数组生成复选框集合，
      更加贴合<strong>原生</strong>的 <em>input:checkbox</em> 写法。
    </span>
    <div class="section">
      <span class="title">定义选项</span>
      <span class="desc">在 <em>&lt;hx-checkbox-group /&gt;</em> 标签内添加带有value的 <em>&lt;hx-checkbox &gt;&lt;/hx-checkbox&gt;</em> 集合</span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="糖果类型(元素)" label-size="bg">
            <hx-checkbox-group v-model="candyTypesII">
              <hx-checkbox :value="1">棉花糖</hx-checkbox>
              <hx-checkbox :value="2">棒棒糖</hx-checkbox>
              <hx-checkbox :value="3">太妃糖</hx-checkbox>
            </hx-checkbox-group>
          </hx-row>
          <hx-row label="糖果类型(元素不可选)" label-size="bg">
            <hx-checkbox-group v-model="candyTypesII" disabled>
              <hx-checkbox :value="1">棉花糖</hx-checkbox>
              <hx-checkbox :value="2">棒棒糖</hx-checkbox>
              <hx-checkbox :value="3">太妃糖</hx-checkbox>
            </hx-checkbox-group>
          </hx-row>
          <!-- 对比用 -->
          <hx-row label="糖果类型(数组)" label-size="bg">
            <hx-checkbox-group :content="candyTypes" v-model="candyTypesII"></hx-checkbox-group>
          </hx-row>
          <hx-row label-size="bg" label="选中的糖果对应的值：">
            <span class="text bg-gray">{{ candyTypesII.length ? candyTypesII.join(', ') : '暂未选择' }}</span>
          </hx-row>
        </div>
        <div class="code">
          <pre class="detail" v-highlightjs="textElem" >
            <code class="xml">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div class="section">
      <strong class="title">高阶用法</strong>
      <span class="desc">使用 <strong>hx-checkbox</strong> 写法代替传入一个 <em>content</em> 选项数组除了写法靠近原生，还有一点就是可以更加灵活将选择放置于页面各个角落，而不再拘泥于行内或一个标签内，下面就是一个很好的例子：</span>
      <div class="pad-preview">
        <div class="demo">
          <hx-checkbox-group v-model="candyTypesIII" class="hx-table">
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
                <tr v-for="(item, idx) in candyOptions" :key="idx"> 
                  <td>
                    <hx-checkbox :value="item.value"></hx-checkbox>
                  </td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.amount }}</td>
                  <td>{{ item.unit }}</td>
                </tr>
              </tbody>
            </table>
          </hx-checkbox-group>
          <hx-row label-size="bg" label="选中的糖果对应的值：" style="margin-top: 16px;">
            <span class="text bg-gray">{{ candyTypesIII.length ? candyTypesIII.join(', ') : '暂未选择' }}</span>
          </hx-row>
        </div>
        <div class="code">
          <span class="tips" style="margin-bottom: 0;">
            使用 hx-checkbox 将可以打破位置上的限制
          </span>
          <pre class="detail" v-highlightjs="textElemII" >
            <code class="xml">
            </code>
          </pre>
          <pre class="detail" style="padding-top: 0;" v-highlightjs="textElemIII" >
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
    <!-- 事件调用 -->
    <div class="section">
      <strong class="title">事件调用</strong>
      <span class="desc">无论 <strong>HxCheckboxGroup</strong> 还是 <strong>HxCheckbox</strong> 都提供了三个响应勾选状态发生改变时的事件，分别是
        勾选选项时调用的 <em>@select</em> (对应 onSelect 参数)、取消勾选时调用的 <em>@cancel</em> (对应 onCancel 参数) 以及选项勾选状态发生变换时调用的 <em>@change</em> 。
        三个方法调用时都会以当前选项关联对象作为唯一参数，对象中包含选项对应的值 value 以及描述文本（key）。
      </span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="糖果类型(元素)" label-size="bg">
            <hx-checkbox-group v-model="candyTypesII">
              <hx-checkbox v-for="(item, idx) in candyTypes" 
                :key="idx" 
                @change="doChange"
                @select="doSelect" 
                @cancel="doCancel" 
                :value="item.value">
                {{ item.key }}
              </hx-checkbox>
            </hx-checkbox-group>
          </hx-row>
          <hx-row label="糖果类型(数组)" label-size="bg">
            <hx-checkbox-group 
              @change="doChange" 
              @select="doSelect" 
              @cancel="doCancel" 
              :content="candyTypes" 
              v-model="candyTypesII">
            </hx-checkbox-group>
          </hx-row>
        </div>
        <div class="code">
          <span class="tips">
            HxCheckboxGroup 的 @change 参数是 变更后整体的值，而 HxCheckbox 的 @change 参数是 当前选项的对象。
          </span>
          <pre class="detail" v-highlightjs="textElemIV" >
            <code class="xml">
            </code>
          </pre>
          <pre class="detail" style="padding-top: 0;" v-highlightjs="textElemV" >
            <code class="javascript">
            </code>
          </pre>
        </div>
      </div>
    </div>
    <!-- 事件 -->
    <div class="section">
      <events-table title="HxCheckboxGroup 和 HxCheckbox 共同事件" :content="events"></events-table>
    </div>
  </article>
</template>
<script>
import { HxCheckboxGroup, HxCheckbox } from '@/hxui'
import PropsTable from './../cpts/PropsTable'
import EventsTable from './../cpts/EventsTable'
export default {
  components: {
    HxCheckboxGroup,
    HxCheckbox,
    PropsTable,
    EventsTable
  },
  data () {
    return {
      textNext: `代码演示区`,
      types: ['棉花糖', '棒棒糖', '太妃糖', '奶糖', '跳跳糖'],
      targets: ['棉花糖', '太妃糖'],
      candyTypes: [ 
        { key: '棉花糖', value: 1 }, 
        { key: '棒棒糖', value: 2 },  
        { key: '太妃糖', value: 3 },  
        { key: '奶糖', value: 4 },
        { key: '跳跳糖', value: 5 }
      ],
      candyTypesII: [1, 3],
      candyTypesIII: [1, 3],
      candyOptions: [
        { amount: 6, unit: '颗', name: '棉花糖', value: 1 }, 
        { amount: 20, unit: '颗', name: '棒棒糖', value: 2 },  
        { amount: 19, unit: '斤', name: '太妃糖', value: 3 },  
        { amount: 17, unit: '颗', name: '奶糖', value: 4 },
        { amount: 5, unit: '颗', name: '跳跳糖', value: 5 }
      ],
      targetValues: [1, 3],
      props: [
        { name: 'content', desc: '多选框菜单选项内容', type: 'Array', option: '由数值、字符串或对象组成', default: '[]' },
        { name: 'value', desc: '对应选择的值', type: 'Boolean/String/Number', option: 'true/false/"disabled"', default: '' },
        { name: 'disabled', desc: '是否只读', type: 'Boolean', option: 'true/false', default: 'false' },
        { name: 'keyName', desc: 'content数组中对象元素中对应选项文本内容的字段名', type: 'String', option: '文本', default: 'key' },
        { name: 'required', desc: '是否为必选项', type: 'Boolean/String', option: 'true/false/"required"', default: 'false' },
        { name: 'onSelect', desc: '勾选选项时调用方法\n(推荐使用事件@select)', type: 'Function', option: '', default: '' },
        { name: 'onCancel', desc: '取消勾选选项时调用方法\n(推荐使用事件@cancel)', type: 'Function', option: '', default: '' }
      ],
      props2: [
        { name: 'value', desc: '对应选择的值', type: 'Boolean/String/Number', option: 'true/false/"disabled"', default: '' },
        { name: 'disabled', desc: '是否只读', type: 'Boolean', option: 'true/false', default: 'false' }
      ],
      events: [
        { name: '@select', desc: '勾选某一项时触发', option: '对应项的对象 (对象包含key和value)' },
        { name: '@cancel', desc: '取消勾选某一项时触发', option: '对应项的对象 (对象包含key和value)' },
        { name: '@change', desc: '勾选或取消选中某一项时触发', option: '对应选择项的对象 (对象包含key和value)' }
      ],
      text: `<hx-checkbox-group :content="types" v-model="targets"></hx-checkbox-group>`,
      text2: `<hx-row label="请选择糖果类型">
  <hx-checkbox-group :content="candyTypes" v-model="targetValues"></hx-checkbox-group>
</hx-row>
<!-- 不可选状态 -->
<hx-row label="不可选糖果类型">
  <hx-checkbox-group 
    :disabled="true" 
    :content="candyTypes" 
    v-model="targetValues">
  </hx-checkbox-group>
</hx-row>`,
      text3: `
// 声明对象数组 
{
  candyTypes: [ 
    { key: '棉花糖', value: 1 }, 
    { key: '棒棒糖', value: 2 },  
    { key: '太妃糖', value: 3 },  
    { key: '奶糖', value: 4 },
    { key: '跳跳糖', value: 5 }
  ],
  targetValues: [1, 3]
}`,
      textElem: `<hx-row label="选择糖果类型(元素)" label-size="bg">
  <hx-checkbox-group v-model="candyTypesII">
    <hx-checkbox :value="1">棉花糖</hx-checkbox>
    <hx-checkbox :value="2">棒棒糖</hx-checkbox>
    <hx-checkbox :value="3">太妃糖</hx-checkbox>
  </hx-checkbox-group>
</hx-row>
<!-- 对比 -->
<hx-row label="选择糖果类型(数组)" label-size="bg">
  <hx-checkbox-group :content="candyTypes" v-model="candyTypesII"></hx-checkbox-group>
</hx-row>

// candyTypes同上，candyTypesII 则是一个值为[1,3]的数组
`,
      textElemII: `<hx-checkbox-group v-model="candyTypesIII" class="hx-table">
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
      <tr v-for="(item, idx) in candyOptions" :key="idx"> 
        <td>
          <hx-checkbox :value="item.value"></hx-checkbox>
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.amount }}</td>
        <td>{{ item.unit }}</td>
      </tr>
    </tbody>
  </table>
</hx-checkbox-group>`,
      textElemIII: `
// 声明对象数组 
{
  candyOptions: [
    { amount: 6, unit: '颗', name: '棉花糖', value: 1 }, 
    { amount: 20, unit: '颗', name: '棒棒糖', value: 2 },  
    { amount: 19, unit: '斤', name: '太妃糖', value: 3 },  
    { amount: 17, unit: '颗', name: '奶糖', value: 4 },
    { amount: 5, unit: '颗', name: '跳跳糖', value: 5 }
  ]
}`,
      textElemIV: `<hx-row label="糖果类型(元素)" label-size="bg">
  <hx-checkbox-group v-model="candyTypesII">
    <hx-checkbox v-for="(item, idx) in candyTypes" 
      :key="idx" 
      @change="doChange"
      @select="doSelect" 
      @cancel="doCancel" 
      :value="item.value">
      {{ item.key }}
    </hx-checkbox>
</hx-row>
<hx-row label="糖果类型(数组)" label-size="bg">
  <hx-checkbox-group 
    @change="doChange" 
    @select="doSelect" 
    @cancel="doCancel" 
    :content="candyTypes" 
    v-model="candyTypesII">
  </hx-checkbox-group>
</hx-row>`,
      textElemV: `{
  methods: {
    doChange (item) {
      this.$hxui.toast(('状态变换选项：' + JSON.stringify(item)))
    },
    doSelect (item) {
      this.$hxui.alert('勾选选项：', item)
    },
    doCancel (item) {
      this.$hxui.alert('取消勾选选项：', item)
    }
  }
}
`
    }
  },
  methods: {
    doChange (item) {
      this.$hxui.toast(('状态变换选项：' + JSON.stringify(item)))
    },
    doSelect (item) {
      this.$hxui.alert('勾选选项：', item)
    },
    doCancel (item) {
      this.$hxui.alert('取消勾选选项：', item)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../global.scss";
</style>
