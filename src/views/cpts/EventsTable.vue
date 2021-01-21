<template>
  <div class="section">
    <span class="title">事件</span>
    <div class="hx-table">
      <table>
        <thead>
          <tr>
            <td class="left sm">事件名称</td>
            <td class="left lg">说明</td>
            <td class="sm">回调参数</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in content" :key="idx">
            <td class="left" v-text="item.name"></td>
            <td class="left" v-text="item.desc"></td>
            <td  v-text="item.option"></td>
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
            console.warn('EventsTable content中数组需包含 name 和 desc参数')
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
