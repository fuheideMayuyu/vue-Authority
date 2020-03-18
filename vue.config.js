const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = 8081

const title = 'vue项目最佳实践'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/best-practice/' : '/',
  devServer: {
    port: port,
    inline: true,
    open: true
  },
  configureWebpack: {
    name: title
  },
  chainWebpack(config) {
    // svg 规则配置，排除icons目录
    config.module.rule("svg")
          .exclude.add(resolve('src/icons'))
          .end()
    // 新增icons规则，设置svg-sprite-loader
    config.module.rule('icons')
          .test(/\.svg$/)
          .include.add(resolve('src/icons'))
          .end()
          .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
          .options({ symbolId: 'icon-[name]'}) // 使用图标名称
          .end()
  },

}