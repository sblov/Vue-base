//  main.js 项目的js入口文件

// 导入jquery
import $ from 'jquery'
// const $ = require('jquery')

$(()=>{
    $('li:odd').css('backgroundColor', 'lightblue');
    $('li:even').css('backgroundColor', ()=>{
        return '#'+'D97634';
    });
})