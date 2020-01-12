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
              component: resolve => require(['@/views/components/button.vue'], resolve)
            },
            {
              path: 'hx-dot',
              name: 'hx-dot',
              component: resolve => require(['@/views/components/dot.vue'], resolve)
            },
            {
              path: 'hx-input',
              name: 'hx-input',
              component: resolve => require(['@/views/components/input.vue'], resolve)
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
              path: '/plugins/toast',
              name: 'toast',
              component: resolve => require(['@/views/plugins/toast.vue'], resolve)
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
