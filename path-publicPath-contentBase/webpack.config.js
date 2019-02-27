const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js', //输入的JS文件
    output: {
        filename: 'bundle123.js', //输出的新JS文件
        //publicPath: '/assets/',
        path: path.resolve(__dirname, 'dist/assets') //webpack编译完以后，需要一个绝对路径，放生成的文件。
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.css/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        }]
    },
    devServer: {

        port: 2985, //localhost的端口，我喜欢2345

        contentBase: './src',
        // 不设置的话，默认是当前执行的目录，一般是项目根目录。会在项目根目录查找index.html文件。

        publicPath: 'http://localhost:2985/assets/'
        //这样设置了以后，就去访问'http://localhost:2985/assets/index123.html'
        //也就是说，都放到assets下面去了。
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index123.html', //输出的新html
            template: './src/index.html' //输入的html
        }),
        new MiniCssExtractPlugin({
            filename: 'style123.css' //输出的新CSS
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin()
    ]
}


/***
npm run start 
ℹ ｢wds｣: Project is running at http://localhost:2985/
ℹ ｢wds｣: webpack output is served from http://localhost:2985/assets/
ℹ ｢wds｣: Content not from webpack is served from ./src
ℹ ｢wdm｣: Hash: dbfe3b6f797c66692b6e
Version: webpack 4.29.5
Time: 832ms
Built at: 2019-02-27 13:23:48
           Asset       Size  Chunks             Chunk Names
    bundle123.js    360 KiB    main  [emitted]  main
bundle123.js.map    412 KiB    main  [emitted]  main
   index123.html  309 bytes          [emitted]  
    style123.css  102 bytes    main  [emitted]  main
style123.css.map  239 bytes    main  [emitted]  main
Entrypoint main = style123.css bundle123.js style123.css.map bundle123.js.map
***/