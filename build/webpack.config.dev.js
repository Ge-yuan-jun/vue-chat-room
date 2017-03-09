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
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias
  },
  plugins: [
    new ProgressBarPlugin({
      format: `${chalk.bold('[:bar]')} ${chalk.cyan.bold(':percent (:elapseds)')} :msg`,
      clear: true,
      summary: false,
      summaryContent: false,
      customSummary (buildTime) {
          process.stdout.write(`=====${chalk.green.bold(`[ built in ${buildTime} ]`)}=====`)
      }
    }),

    // https://github.com/RoccoC/webpack-build-notifier
    new WebpackNotifierPlugin({
      title: '开发服务器',
      logo: './src/assets/logo.png',
      successSound: 'Submarine',
      failureSound: 'Glass',
      suppressSuccess: true
    }),

    new webpack.ProvidePlugin(provide),

    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),

    // extract css into its own file
    new ExtractTextPlugin({
      filename: '[name].css'
    }),

    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoEmitOnErrorsPlugin(),

    new HtmlWebpackPlugin({
      chunks: ['common', 'app'],
      filename: 'index.html',
      template: './src/index.html',
      inject: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.(vue|js)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
        options: {
          formatter: EslintFriendlyFormatter
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          loaders: cssLoaders({
            sourceMap: true,
            extract: false
          }),
          postcss: [
            autoprefixer({ browsers: ['last 2 versions'] })
          ]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      ...(styleLoaders({
        sourceMap: true,
        extract: false
      })),
      {
        test: /\.(png|jpe?g|gif|svg|swf|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '[name].[hash:7].[ext]'
        }
      }
    ]
  }
}
