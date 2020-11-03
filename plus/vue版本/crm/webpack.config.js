const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const _modeFlag = require('yargs-parser')(process.argv.slice(2)).mode;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require('webpack-merge');
const _mergeConfig = require(`./config/webpack.${_modeFlag}.config.js`);
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const isDEV = _modeFlag == 'development' ? true : false;
const smp = new SpeedMeasurePlugin();

function resolve(dir) {
    return path.join(__dirname, dir);
}
const webpackConfig = {
    entry: `${__dirname}/src/web/index.js`,
    output: {
        path: path.join(__dirname, "dist/assets"),
        publicPath: '/',
        filename: "scripts/[name].bundle.js"
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            // 'components': resolve('./src/web/components/page')
        }
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        // 'element-ui': 'ELEMENT'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: ['cache-loader', 'vue-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['cache-loader', 'babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.(woff|svg|eot|ttf|png|jpg)\??.*$/,
                loader: 'url-loader'
            },
        ]
    },
    optimization: {
        runtimeChunk: {
            name: 'runtime',
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    name: 'commons',
                    minChunks: 3,
                    minSize: 0
                }
            }
        }
    },
    plugins: [
        new WebpackNotifierPlugin(),
        new ProgressBarPlugin(),
        new VueLoaderPlugin(),
        // 注入js
        new HtmlWebpackPlugin({
            filename: "./../views/index.html",
            template: "src/web/index.html"
        }),
        // 每次build清除多余的文件
        new CleanWebpackPlugin([
            'dist/assets'
        ]),
        new MiniCssExtractPlugin({
            filename: isDEV ? "styles/[name].css" : "styles/[name][contenthash:5].css",
            chunkFilename: isDEV ? "styles/[name].css" : "styles/[name][contenthash:5].css",
        })
    ]
}
module.exports = smp.wrap(merge(webpackConfig, _mergeConfig));