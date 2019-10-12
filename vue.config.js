var path = require('path')
function resolve(dir) {
	return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  chainWebpack: config => {
    // config // 如果不需要打包接口汇报，则注释调本行配置
    //   .plugin('webpack-bundle-analyzer')
    //   .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    // const svgRule = config.module.rule('svg')
    // svgRule.uses.clear()
    // svgRule
    //   .use('babel-loader')
    //   .loader('babel-loader')
    //   .end()
    //   .use('vue-svg-loader')
    //   .loader('vue-svg-loader')
    //   .options({
    //     // optional [svgo](https://github.com/svg/svgo) options
    //     svgo: {
    //       plugins: [
    //         { removeDoctype: true },
    //         { removeComments: true },
    //         { removeViewBox: false }
    //       ],
    //       removeViewBox: false
    //     }
    //   })
    // config.module
    //   .rule('js')
    //   .include
    //   .add('/packages/')
    //   .end()
    //   .use('babel')
    //   .loader('babel-loader')
    //   .tap(options => {
    //     // 其他选项可以配置与此处
    //     return options
    //   })
  },
	configureWebpack: config => {
    config.resolve = {
			extensions: ['.js', '.vue', '.json'],
			alias: {
				'@': resolve('src'),
			}
    }
    config.externals = {
      'vue': 'Vue',
      'axios': 'axios',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex'
    }
  }
}