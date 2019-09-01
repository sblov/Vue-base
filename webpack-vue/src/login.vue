<template>
    <div>
        <h3>login component - login.vue -- {{msg}}</h3>
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
            console.log("login.vue -- show method")
        }
    },
}
</script>
<style>
    
</style>