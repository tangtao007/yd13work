const argv = require('yargs-parser')(process.argv.slice(2));
const __mode = argv.mode || "development";
const _mergerConfig = require(`./config/webpack.${__mode}.js`);
const merge = require('webpack-merge');
const glob = require('glob');
const files = glob.sync("./src/web/views/**/*.entry.js");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {join} = require('path');

// [ './src/web/views/books/books-add.entry.js',
//   './src/web/views/books/books-list.entry.js' ]

// {
//     "books-add": "./src/web/views/books/books-add.entry.js",
//     "books-list": "./src/web/views/books/books-list.entry.js"
// }
let __entry = {};
const __plugins = [];
for(let item of files){
    if(/.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry.\js$)/g.test(item) ){
        const entryKey = RegExp.$1;
        __entry[entryKey] = item;
        const [dist,template] = entryKey.split("-");
        __plugins.push(new HtmlWebpackPlugin({
            filename:`../views/${dist}/pages/${template}.html`,
            template: `src/web/views/${dist}/pages/${template}.html`,
            inject: false
          }));
    }
}

let webpackconfig = {
    entry:__entry,
    plugins:[
        ...__plugins
    ],
    output:{
        path:join(__dirname,"./dist/assets"),
        publicPath: "/",
        filename: "scripts/[name].bundule.js"
    }
}

module.exports = merge(webpackconfig,_mergerConfig);