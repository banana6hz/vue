//webpack.config.js 基本配置
const path = require('path');//nodejs里面的基本包，用来处理路径
// __dirname表示文件相对于工程的路径
module.exports = {
    // 配置入口文件
    entry: path.join(__dirname,'src/index.js'),
    // 配置输出文件夹
    output:{
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
           {//通过vue-loader来识别以vue结尾的文件
             test: /.vue$/, 
             loader: 'vue-loader'
           }
        ]
      }
}