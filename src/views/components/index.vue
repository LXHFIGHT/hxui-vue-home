<template>
  <div class="hx-block bg-gray">
    <div :class="['bg-white', project.isAdmin ? 'hx-block' : 'hx-container']">
      <aside class="aside-catalog">
        <hx-catalog :menus="menus" :validator="$_initSelection" :onSelect="doSelectCatalog"></hx-catalog>
      </aside>
      <div class="hx-main pad-home-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import { HxCatalog } from '@/hxui'
import { project } from './../../config'
import { componentsCatalog } from './../../config/menus'
export default {
  components: {
    HxCatalog
  },
  data () {
    return {
      project,
      menus: componentsCatalog
    }
  },
  methods: {
    popAlert () {
      this.$hxui.popTip('Yahoo')
    },
    doSelectCatalog (value) {
      this.$router.push(`/components/${value}`)
    },
    $_initSelection (item) {
      return this.$route.path.includes(item.value)
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
  .aside-catalog {
    width: 230px;
    display: inline-block;
    padding: $pm-md;
  }
  .pad-home-main {
    width: calc(100% - 235px);
    float: right;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
