var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var webpack = require('webpack');



module.exports = {
    mode:'development',
    entry: './src/main.js', //值可以是字符串、 数组或对象
    output: {
        path: path.resolve(__dirname, 'dist'), //Webpack结果存储
        //publicPath: '/dist/', //
        filename: '[hash].bundle.js' //使用每次构建过程中，唯一的 hash 生成
    },
    module: {
        rules: [
            //{ test: /\.txt$/, use: 'raw-loader'},
            { test: /\.vue$/, use: ['vue-loader'] },
            { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(eot|woff|woff2|ttf)([\\?]?.*)$/, use: 'file-loader' },
            { test: /\\.(png|jpg|gif|svg)$/, use: [{ loader: 'file-loader', options: { name: '[name].[ext]?[hash]' } }] }
        ]
    },
    resolve: {
        alias: {
            //'vue': 'vue/dist/vue.js',
            //'element-ui': 'element-ui/lib/index.js'
        }
    },
    devServer: { //webpack-dev-server配置
        historyApiFallback: true, //不跳转
        /***
            对于单页面程序，浏览器的brower histroy可以设置成html5 history api或者hash，而设置为html5 api的.
            如果刷新浏览器会出现404 not found，原因是它通过这个路径（比如： /activities/2/ques/2）来访问后台，
            所以会出现404，而把historyApiFallback设置为true那么所有的路径都执行index.html。
        ***/
        noInfo: true, //supress messages like the webpack bundle information. Errors and warnings will still be shown
        port: 2345, //localhost的端口，我喜欢2345
        inline: true, //实时刷新，默认就是true
        //contentBase: './dist'
        //contentBase: './destination'
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({template: './index.html'})
    ],
    performance: {
        hints: false
    },
    //
    devtool: '#eval-source-map'
}

/***
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
***/