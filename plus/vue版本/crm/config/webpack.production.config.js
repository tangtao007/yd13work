const OptimizeCssAssetsPluign = require('optimize-css-assets-webpack-plugin');
const WebpackDeepScopePlugin = require('webpack-deep-scope-plugin').default;
const ManifestPlugin = require('webpack-manifest-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const {join} = require('path');
module.exports = {
    output: {
        filename: 'assets/scripts/[name][contenthash:5].bundule.js'
    },
    plugins: [
        new OptimizeCssAssetsPluign({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', {
                    discardComments: {
                        removeAll: true
                    }
                }],
            },
            canPrint: true
        }),
        new WebpackDeepScopePlugin(),
        new ManifestPlugin()
    ]
}