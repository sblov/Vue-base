import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
// import Vue from 'vue/dist/vue.js'

// 需要相关loader
// 1、npm i vue-loader vue-template -D
// 2、npm i vue-template-compiler -D
// 3、配置文件中引入，并在plugins中配置
import login from './login.vue'

let vm = new Vue({
    el: '#app',
    data: {
        msg: 123,
    },
    // methods:{},
    // components:{
    //     login
    // }
    render:el=>{
        return el(login);
    }
})