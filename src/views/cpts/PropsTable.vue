<template>
  <!-- 属性表格 -->
  <div class="section">
    <span class="title">属性表格</span>
    <div class="hx-table">
      <table>
        <thead>
          <tr>
            <td class="left sm">参数</td>
            <td class="left bg">说明</td>
            <td class="sm">类型</td>
            <td class="bg">可选值</td>
            <td class="md">默认值</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in content" :key="idx">
            <td class="left" v-text="item.name"></td>
            <td class="left" v-text="item.desc"></td>
            <td v-text="item.type"></td>
            <td v-text="item.option"></td>
            <td v-text="item.default"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    content: {
      type: Array,
      validator (val) {
        for (let i of val) {
          if (!i.name || i.desc) {
            console.warn('PropsTable content中数组需包含 name 和 desc参数')
            return false
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../global.scss";
</style>
