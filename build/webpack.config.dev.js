import webpack from 'webpack'
import autoprefixer from 'autoprefixer'
import EslintFriendlyFormatter from 'eslint-friendly-formatter'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import { cssLoaders, styleLoaders } from './utils/index'
import { entry, alias, provide } from './config'

export default {
  entry,
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: `${process.cwd()}/dist`,
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js'
  }
}
