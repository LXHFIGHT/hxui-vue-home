<template>
  <div class="hx-block bg-gray">
    <div :class="['bg-white', project.isAdmin ? 'hx-block' : 'hx-container']">
      <aside :class="['aside-catalog', showCatalog && 'show']">
        <hx-catalog 
          :menus="menus" 
          :validator="$_initSelection" 
          :onSelect="doSelectCatalog">
        </hx-catalog>
      </aside>
      <button class="btn-toggle-catalog" @click="doToggle">
        <IconCatalog fill="#222222" class="icon"></IconCatalog>
      </button>
      <div class="hx-main pad-home-main" @click="showCatalog = false">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import { HxCatalog } from './../../hxui'
import IconCatalog from './../../assets/svg/icon-catalog.svg'
import { project } from './../../config'
import { componentsCatalog } from './../../config/menus'
export default {
  components: {
    HxCatalog,
    IconCatalog
  },
  data () {
    return {
      project,
      showCatalog: false,
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
.aside-catalog {
  width: 230px;
  display: inline-block;
  padding: $pm-md;
}
.btn-toggle-catalog {
  display: none;
}
.pad-home-main {
  width: calc(100% - 235px);
  float: right;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
@media screen and (max-width: 640px) {
  .aside-catalog {
    display: block;
    position: fixed;
    height: calc(100% - #{$height-navbar});
    background-color: white;
    z-index: 10;
    border: 1px solid $color-gray-light;
    left: 0;
    transform: translate(-100%);
    transition: transform .4s;
    &.show {
      transform: translate(0);
    }
  }
  .btn-toggle-catalog {
    background-color: rgba(255, 255, 255, .4);
    box-shadow: $shadow-md;
    border-radius: $regular;
    display: block;
    position: fixed;
    left: $md;
    bottom: $md;
    height: $regular;
    width: $regular;
    padding: $pm-sm;
    .icon {
      height: 100%;
      width: 100%;
    }
    z-index: 10;
  }
} 
</style>
