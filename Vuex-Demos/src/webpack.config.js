const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  // 调试配置
  devtool: 'inline-source-map',

  // 打包入口配置
  entry: fs.readdirSync(__dirname).reduce((entries, dir)=>{
    const fullDir = path.join(__dirname, dir)
    const entry = path.join(fullDir, 'app.js')
    // 如果当前目录是文件夹并且有app.js存在
    if(fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)){
      entries[dir] = ['webpack-hot-middleware/client', entry]
    }
    return entries
  }, {}),

  // 打包输出配置
  output: {
    path: path.join(__dirname, '__build__'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

  // 配置模块加载器
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.vue$/, loader: 'vue'}
    ]
  },

  // 插件配置
  // http://webpack.github.io/docs/list-of-plugins.html
  plugins:[
    // 抽取公共模块打包为shared.js
    new webpack.optimize.CommonsChunkPlugin('shared.js'),
    // 定义编译运行时的全局常量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    // 模块压缩
    new webpack.optimize.OccurenceOrderPlugin(),
    // 模块热更新
    new webpack.HotModuleReplacementPlugin(),
    // 不显示错误信息
    new webpack.NoErrorsPlugin()
  ]

}
