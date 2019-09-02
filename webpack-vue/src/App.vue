<template>
    <div>
        <h3>App component - App.vue -- {{msg}}</h3>

        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">GoodsList</router-link>

        <router-view></router-view>
    </div>

</template>

<script>
export default {
    data(){
        return{
            msg: "123"
        }
    },
    methods: {
        show(){
            console.log("App.vue -- show method")
        }
    },
}
</script>
<style>
    
</style>