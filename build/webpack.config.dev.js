import webpack from 'webpack'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import WebpackNotifierPlugin from 'webpack-build-notifier'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HappyPack from 'happypack'

import eslintFriendFormatter from 'eslint-friendly-formatter'
import chalk from 'chalk'
import autoprefixer from 'autoprefixer'
import postcssPxtorem from 'postcss-pxtorem'

import { entry, alias, provide } from './config'

export default {
    context: `${process.cwd()}/app`,
    entry,
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: `${process.cwd()}/dist`,
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.json'],
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
            title: 'vue聊天室开发',
            logo: 'src/global/img/logo.png',
            successSound: 'Submarine',
            failureSound: 'Glass',
            suppressSuccess: true
        }),

        new webpack.ProvidePlugin(provide),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            },
            __DEV__: true,
            __PROD__: false
        }),

        new ExtractTextPlugin({
            filename: '[name].css'
        }),

        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        //webpack.NoErrorsPlugin 被替换成了 webpack.NoEmitOnErrorsPlugin
        new webpack.NoEmitOnErrorsPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity // 不需要抽取公共代码到这个文件中
        }),

        new HtmlWebpackPlugin({
            chunks: ['common', 'app'],
            filename: 'index.html',
            template: 'index.html',
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
                    formatter: eslintFriendFormatter
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
                test: /.\js$/,
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
                    limit: 5000,
                    name: '[name].[hash:7].[ext]'
                }
            }
        ]
    }
}