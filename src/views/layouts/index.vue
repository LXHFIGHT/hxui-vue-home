<template>
  <div class="hx-block">
    <div :class="['bg-white', project.isAdmin ? 'hx-block' : 'container']">
      <aside :class="['aside-catalog', showCatalog && 'show']">
        <hx-catalog :menus="menus" :onSelect="doSelectCatalog"></hx-catalog>
      </aside>
      <button class="btn-toggle-catalog" @click="doToggle">
        <IconCatalog fill="#222222" class="icon"></IconCatalog>
      </button>
      <div class="hx-main pad-home-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import { HxCatalog } from 'hxui'
import { project } from './../../config'
import { layoutsCatalog } from './../../catalogs'
import IconCatalog from './../../assets/svg/icon-catalog.svg'
export default {
  components: {
    HxCatalog,
    IconCatalog
  },
  data () {
    return {
      project,
      showCatalog: false,
      menus: layoutsCatalog
    }
  },
  methods: {
    popAlert () {
      this.$hxui.popTip('Yahoo')
    },
    doSelectCatalog (value) {
      this.$router.push(`/layouts/${value}`)
    },
    doToggle () {
      this.showCatalog = !this.showCatalog
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../global.scss";
.bg-gray {
  background-color: #f6f7f7;
}
.bg-white {
  background-color: white;
  height: 100%;
}
</style>
