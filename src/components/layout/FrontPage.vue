<!--
 * @Author       : liuxuhao
 * @LastEditors  : liuxuhao
-->
<template>
  <div class="hx-block">
    <!-- HXUI对于文档页面的应用 -->
    <hx-navbar :menus="menus"
      :logo="logo"
      :onSelect="doSelect">
      <hx-tag level="success" size="sm" slot="follow">0.3.7</hx-tag>
    </hx-navbar>
    <div class="hx-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { HxNavbar, HxTag } from '@/hxui'
import menus from './../../catalogs'
import { project } from './../../config' 
export default {
  name: 'front-page',
  components: {
    HxNavbar,
    HxTag
  },
  data () {
    return {
      menus,
      logo: project.logo
    }
  },
  methods: {
    doSelect (state) {
      this.$router.push(state)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
