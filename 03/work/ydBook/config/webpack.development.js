const CopyPlugin = require('copy-webpack-plugin');
const {
    join
} = require('path');
module.exports = {
    plugins: [
        new CopyPlugin([{
            from: join(__dirname, "../", "./src/web/views/common/layout.html"),
            to: '../views/commom/layout.html'
        }]),
        new CopyPlugin([{
            from: join(__dirname, "../", "./src/web/components"),
            to: '../components'
        }], {
            copyUnmodified:true,// webpack 动态watch时，在开发阶段如果模板咩有变化的话 不传递
            ignore: ["*.js", "*.css"]
        }),
    ],
}