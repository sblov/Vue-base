const path = require('path');

// 内存中生成html的插件 （自动根据指定页面生成内存的页面，自动bundle.js追加到页面中）
// 插件要放入plugins中
const htmlWebpaclPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 这个配置文件，起始就是一个js文件，通过node中的模块操作，向外暴露一个配置对象
module.exports = {

    entry: path.join(__dirname, './src/main.js'),// 入口，表示使用webpack打包哪个文件
    output: { // 输出文件相关配置
        path: path.join(__dirname, './dist'), // 指定打包文件输出到=哪个目录
        filename: 'bundle.js' //  指定输出文件名称
    },
    // 配置方式设置webpack-dev-server的命令参数
    devServer:{
        open: true,
        port: 3000,
        contentBase: 'src',
        hot: true
    },
    plugins:[
        // 内存中生成html页面
        new htmlWebpaclPlugin({
            template: path.join(__dirname, './src/index.html'), // 指定模板页面
            filename: 'index.html'// 生成页面的名称
        }),
        new VueLoaderPlugin()
    ],
    module:{ // 配置所有第三方模块加载器
        rules: [ // 所有第三方模块的 匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader']} ,//配置处理.css文件的加载器， loader从右到左执行
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]'},// 处理css中url； 当limit小于或等于实际图片大小时，图片不会进行base64编码 ; name设置图片的名称及后缀都保留原来的
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},// 处理字体url
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader'}, // 处理vue文件
        ]
    },
    resolve:{
        alias: { // 设置Vue被导入时的包的路径
            "vue$": "vue/dist/vue.js"
        }
    }
}
