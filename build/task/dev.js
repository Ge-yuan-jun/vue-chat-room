import express from 'express'
import ip from 'ip'

// Terminal string styling done right
import chalk from 'chalk'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middle'
import connectHistoryApiFallBack from 'connect-history-api-fallback'
import httpProxyMiddleware from 'http-proxy-middleware'

import config from './config'