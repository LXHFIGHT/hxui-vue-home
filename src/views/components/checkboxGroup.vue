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
        对象元素中通过 <em>key</em> 字段定义选项上的文本<span class="color-gray">（这里可以通过 <em>keyName</em>参数改变对象中对应选项文本内容的字段名，比方说 <strong>"text"</strong> ）</span>，
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
    <header class="title">复选框 HxCheckbox </header>
    <span class="desc">
      HxCheckbox是可以配合 <strong>HxCheckboxGroup</strong> 使用的复选框元素，可以不用依赖其 <em>content</em>传入数组生成复选框集合，
      更加贴合<strong>原生</strong>的<em>input:checkbox</em>写法。
    </span>
    <div class="section">
      <span class="title">定义选项</span>
      <span class="desc">在<em>&lt;hx-checkbox-group /&gt;</em> 标签内添加带有value的 <em>&lt;hx-checkbox &gt;&lt;/hx-checkbox&gt;</em>集合</span>
      <div class="pad-preview">
        <div class="demo">
          <hx-row label="选择糖果类型(元素)" label-size="bg">
            <hx-checkbox-group v-model="candyTypesII">
              <hx-checkbox :value="1">棉花糖</hx-checkbox>
              <hx-checkbox :value="2">棒棒糖</hx-checkbox>
              <hx-checkbox :value="3">太妃糖</hx-checkbox>
            </hx-checkbox-group>
          </hx-row>
          <!-- 对比用 -->
          <hx-row label="选择糖果类型(数组)" label-size="bg">
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
      <span class="desc">使用 <strong>hx-checkbox</strong> 写法代替传入一个 <em>content</em>选项数组除了写法靠近原生，还有一点就是可以更加灵活将选择放置于页面各个角落，而不再拘泥于行内或一个标签内，下面就是一个很好的例子：</span>
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
        </div>
      </div>
    </div>
    <!-- 属性表格 -->
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
    <!-- 事件 -->
    <div class="section">
      <span class="title">事件</span>
      <div class="hx-table">
        <table>
          <thead>
            <tr>
              <td class="sm">事件名称</td>
              <td class="lg">说明</td>
              <td class="sm">回调参数</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in props" :key="idx">
              <td v-text="item.name"></td>
              <td v-text="item.desc"></td>
              <td v-text="item.params"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </article>
</template>
<script>
import { HxCheckboxGroup, HxCheckbox } from '@/hxui'
export default {
  components: {
    HxCheckboxGroup,
    HxCheckbox
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
        { name: 'disabled', desc: '只读且禁用事件', type: 'Boolean/String', option: 'true/false/"disabled"', default: 'false' },
        { name: 'keyName', desc: 'content数组中对象元素中对应选项文本内容的字段名', type: 'String', option: '文本', default: 'key' },
        { name: 'required', desc: '是否为必选项', type: 'Boolean/String', option: 'true/false/"required"', default: 'false' },
        { name: 'onSelect', desc: '选择参数调用的方法', type: 'Function', option: '', default: '' },
        { name: 'onCancel', desc: '取消选项调用的方法', type: 'Function', option: '', default: '' }
      ],
      text: `<hx-checkbox-group :content="types" v-model="targets"></hx-checkbox-group>`,
      text2: `<hx-row label="请选择糖果类型">
  <hx-checkbox-group :content="candyTypes" v-model="targetValues"></hx-checkbox-group>
</hx-row>
<!-- 不可选状态 -->
<hx-row label="不可选糖果类型">
  <hx-checkbox-group :disabled="true" :content="candyTypes" v-model="targetValues"></hx-checkbox-group>
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
      textElemII: `

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

`
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../global.scss";
</style>
