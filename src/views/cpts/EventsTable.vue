<template>
  <div class="section">
    <span class="title">{{ title }}</span>
    <div class="hx-table">
      <table>
        <thead>
          <tr>
            <td class="left sm">事件名称</td>
            <td class="left lg">说明</td>
            <td class="bg">回调参数</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in content" :key="idx">
            <td style="white-space: pre-line" class="left" >
              <strong style="font-size: 14px;" v-text="item.name"></strong>
            </td>
            <td style="white-space: pre-line" class="left" v-text="item.desc"></td>
            <td style="white-space: pre-line" v-text="item.option"></td>
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
    title: {
      type: String,
      default: '事件'
    },
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
