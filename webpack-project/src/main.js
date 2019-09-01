//  main.js 项目的js入口文件

// 导入jquery
import $ from 'jquery'
// const $ = require('jquery')

// webpack 默认只能打包处理js类型的文件；要处理非js文件，需要安装第三方loader
// 1、npm i style-loader css-loader -D
// 2、在webpack.config.js中新增module节点，配置rules属性
import './css/index.css'

import 'bootstrap/dist/css/bootstrap.css'

import 'font-awesome/css/font-awesome.min.css'

// webpack只能处理部分es6语法，其余需要借助第三方loader
// 通过babel将高级语法转为低级语法
// 1、npm i babel-core babel-loader babel-plugin-transform-runtime -D
// 2、npm i babel-preset-env babel-preset-stage-0 -D
// 3、webpack配置文件中，在module下的rules中添加新匹配规则
// 4、在项目录跟目录新建 .babelrc 的babel配置文件
class Person{
    static info = { name: 'zs', age: 20}
}

let person = new Person();
console.log(person);

$(()=>{
    $('li:odd').css('backgroundColor', 'skyblue');
    $('li:even').css('backgroundColor', ()=>{
        return '#'+'D97634';
    });
})

// webpack 可以处理js间的互相依赖关系
// webpack 能够处理js的兼容问题
// webpack-dev-server 生成的bundle.js是暂存在内存中，直接在根目录下
// webpack-dev-server 命令参数：1、--open：运行后直接打开浏览器 2、--port 3000 ：指定端口 3、--contentBase src ：访问的根内容 4、--hot：热加载时，不重新生成文件，只加载改变的代码，并且不用刷新页面，即可渲染