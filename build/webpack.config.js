//webpack.config.js 基本配置
const path = require('path');//nodejs里面的基本包，用来处理路径
const { VueLoaderPlugin } = require('vue-loader');//或者const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
        new VueLoaderPlugin()// make sure to include the plugin for the magic
    ],
    module:{
        rules:[
            {
                test: /.vue$/,
                loader: 'vue-loader'//通过vue-loader来识别以vue结尾的文件
            },
            {
                test: /.css$/,//css的处理方式不同，有嵌入在页面style标签里的，有从外部文件引入的，我们这里用use来声明
                use:[
                    'style-loader',//注意：style-loader要在css-loader前面
                    'css-loader'
                ]
            }
        ]
    }
}