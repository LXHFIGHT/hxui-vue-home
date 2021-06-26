const Vue = window.Vue
const Router = window.VueRouter

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Root',
      component: resolve => require(['@/views/index.vue'], resolve),
      meta: { keepAlive: true },
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/views/home.vue'], resolve)
        },
        // 组件库
        {
          path: '/components',
          name: 'components',
          component: resolve => require(['@/views/components/index.vue'], resolve),
          meta: { keepAlive: true },
          children: [
            {
              path: 'hx-image',
              name: 'hx-image',
              component: resolve => require(['@/views/components/image.vue'], resolve)
            },
            {
              path: 'hx-button',
              name: 'hx-button',
              component: resolve => require(['@/views/components/basic/button.vue'], resolve)
            },
            {
              path: 'hx-dot',
              name: 'hx-dot',
              component: resolve => require(['@/views/components/basic/dot.vue'], resolve)
            },
            {
              path: 'hx-tag',
              name: 'hx-tag',
              component: resolve => require(['@/views/components/basic/tag.vue'], resolve)
            },
            { // 复选框
              path: 'hx-checkbox-group',
              name: 'hx-checkbox-group',
              component: resolve => require(['@/views/components/checkboxGroup.vue'], resolve)
            },
            { // 单选框
              path: 'hx-radio-group',
              name: 'hx-radio-group',
              component: resolve => require(['@/views/components/radioGroup.vue'], resolve)
            },
            {
              path: 'hx-switch',
              name: 'hx-switch',
              component: resolve => require(['@/views/components/switch.vue'], resolve)
            },
            {
              path: 'hx-input',
              name: 'hx-input',
              component: resolve => require(['@/views/components/input.vue'], resolve)
            },
            {
              path: 'hx-auto-complete',
              name: 'hx-auto-complete',
              component: resolve => require(['@/views/components/autocomplete.vue'], resolve)
            },
            {
              path: 'hx-selector',
              name: 'hx-selector',
              component: resolve => require(['@/views/components/selector.vue'], resolve)
            },
            {
              path: 'hx-tag-editor',
              name: 'hx-tag-editor',
              component: resolve => require(['@/views/components/tagEditor.vue'], resolve)
            },
            {
              path: 'hx-smart-uploader',
              name: 'hx-smart-uploader',
              component: resolve => require(['@/views/components/smartUploader.vue'], resolve)
            },
            {
              path: 'hx-calendar',
              name: 'hx-calendar',
              component: resolve => require(['@/views/components/calendar.vue'], resolve)
            },
            {
              path: 'hx-map',
              name: 'hx-map',
              component: resolve => require(['@/views/components/map.vue'], resolve)
            },
            {
              path: 'hx-address-selector',
              name: 'hx-address-selector',
              component: resolve => require(['@/views/components/addressSelector.vue'], resolve)
            },
            {
              path: 'demo',
              name: 'demo',
              component: resolve => require(['@/views/README.vue'], resolve)
            }
          ]
        },
        // 布局库
        {
          path: '/layouts',
          name: 'layouts',
          component: resolve => require(['@/views/layouts/index.vue'], resolve),
          meta: { keepAlive: true },
          children: [
            {
              path: 'hx-row',
              name: 'hx-row',
              component: resolve => require(['@/views/layouts/row.vue'], resolve)
            },
            {
              path: 'hx-section',
              name: 'hx-section',
              component: resolve => require(['@/views/layouts/section.vue'], resolve)
            }
          ]
        },
        // 插件库
        {
          path: '/plugins',
          name: 'plugins',
          component: resolve => require(['@/views/plugins/index.vue'], resolve),
          meta: { keepAlive: true },
          children: [
            {
              path: '/plugins/confirm',
              name: 'confirm',
              component: resolve => require(['@/views/plugins/confirm.vue'], resolve)
            },
            {
              path: '/plugins/alert',
              name: 'alert',
              component: resolve => require(['@/views/plugins/alert.vue'], resolve)
            },
            {
              path: '/plugins/prompt',
              name: 'Prompt',
              component: resolve => require(['@/views/plugins/prompt.vue'], resolve)
            },
            {
              path: '/plugins/toast',
              name: 'toast',
              component: resolve => require(['@/views/plugins/toast.vue'], resolve)
            },
            {
              path: '/plugins/loading',
              name: 'loading',
              component: resolve => require(['@/views/plugins/loading.vue'], resolve)
            },
            {
              path: '/plugins/validate',
              name: 'validate',
              component: resolve => require(['@/views/plugins/validate.vue'], resolve)
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/views/login.vue'], resolve),
      meta: { keepAlive: true }
    }
  ]
})
