import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
// import Vue from 'vue/dist/vue.js'

// 需要相关loader
// 1、npm i vue-loader vue-template -D
// 2、npm i vue-template-compiler -D
// 3、配置文件中引入，并在plugins中配置
import app from './App.vue'
import login from './Login.vue'
import register from './Register.vue'

// 路由设置
// 1、导入vue-router包
import VueRouter from 'vue-router'
// 2、手动安装VueRouter
Vue.use(VueRouter);

import account from './Account.vue'
import goodslist from './GoodsList.vue'

// 3、创建路由对象
let router = new VueRouter({
    routes:[
        { path: '/account', 
        component: account,
        children:[
            { path: 'login', component: login},
            { path: 'register', component: register},
        ]
    },
        { path: '/goodslist', component: goodslist},
    ]
})


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
        return el(app);
    },
    router
})