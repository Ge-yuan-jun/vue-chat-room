/**
 * 开发模式入口
 */

import path from 'path'
import express from 'express'
import ip from 'ip'
import chalk from 'chalk'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import connectHistoryApiFallback from 'connect-history-api-fallback'
import httpProxyMiddleware from 'http-proxy-middleware'

import webpackConfig from '../webpack.config.dev'
// github上面仓库由于访问链接的原因不上传，可按照 mock-template.js 文件自行配置
import { proxyUrl } from '../config/mock'

const hotclient = ['webpack-hot-middleware/client?noInfo=true&reload=true']
const entry = webpackConfig.entry

Object.keys(entry).forEach((name) => {
  const value = entry[name]
  if (Array.isArray(value)) {
    value.unshift(...hotclient)
  } else {
    entry[name] = [...hotclient, value]
  }
})

/**
 * entry:
  { common:
    [ 'webpack-hot-middleware/client?noInfo=true&reload=true',
      'vue',
      'vue-router',
      'fastclick' ],
  app:
    [ 'webpack-hot-middleware/client?noInfo=true&reload=true',
      './src/main.js' ] }
 */

const webpackCompiler = webpack(webpackConfig)
const devMiddleware = webpackDevMiddleware(webpackCompiler, {
  publicPath: webpackCompiler.options.output.publicPath,
  noInfo: true,
  quiet: false,
  stats: {
    colors: true,
    hash: false,
    version: false,
    timings: false,
    assets: false,
    chunks: false,
    children: false
  }
})

const hotMiddleware = webpackHotMiddleware(webpackCompiler, {
  log: false
})

const devServer = express()

devServer.use(connectHistoryApiFallback({ verbose: false }))
devServer.use(devMiddleware)
devServer.use(hotMiddleware)

// 代理api
devServer.use(httpProxyMiddleware('**/*.action', {
  logLevel: 'silent',
  target: proxyUrl,
  changeOrigin: true
}))

devServer.listen(8080, function () {
  process.stdout.clearLine()
  process.stdout.cursorTo(0)
  console.log(`dev-server at ${chalk.magenta.underline(`http://${ip.address()}:${this.address().port}`)}`)
})
