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

console.log(entry);
