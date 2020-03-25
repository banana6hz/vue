//webpack.config.js 基本配置
const path = require('path');//nodejs里面的基本包，用来处理路径
const { VueLoaderPlugin } = require('vue-loader');//或者const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口文件
    entry: path.join(__dirname,'../src/index.js'),
    // 出口文件
    output:{
        filename: 'boundle.js',
        path: path.join(__dirname,'../dist')
    },
    mode:'none',//none development production
    plugins:[
        new VueLoaderPlugin(),// make sure to include the plugin for the magic
        new HtmlWebpackPlugin({
            filename: 'index.html', // 生成的文件名称
            template: 'index.html', // 指定用index.html做模版
            inject: 'body' // 指定插入的<script>标签在body底部
        })
    ],
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'//通过vue-loader来识别以vue结尾的文件
            },
            {
                test: /\.css$/,//css的处理方式不同，有嵌入在页面style标签里的，有从外部文件引入的，我们这里用use来声明
                use:[
                    'style-loader',//注意：style-loader要在css-loader前面
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,// 处理顺序是从sass-loader到style-loader
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.less$/,// 处理顺序是从sass-loader到style-loader
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.(gif|jpg|jpeg|svg)/i,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:8192,// 当文件大小小于limit byte时会把图片转换为base64编码的dataurl，否则返回普通的图
                        name:'../dist/assets/images/[name]-[hash:5].[ext]'// 图片文件名称加上内容哈希
                    }
                }]
            }
        ]
    },
    devServer : {
        // contentBase: path.join(__dirname, 'dist'),
        port: 8000,
        host: '0.0.0.0', // 配置成0.0.0.0的话通过ip，localhost都能访问
        overlay: {
            errors: true // 如果有编译错误的话直接显示到页面上
        }
    }
}
