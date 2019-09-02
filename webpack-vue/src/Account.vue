<template>
    <div>
        <h3>account component</h3>

        <router-link to="/account/login">Login</router-link>
        <router-link to="/account/register">Register</router-link>
        <router-view></router-view>
    </div>

</template>


<script></script>
<style scoped>
    /* 普通的style标签只支持普通的样式，如想启用scss或less，为style设置lang属性 */
    /* 开启scope属性，样式只在该vue中生效 */
    h3{
        color: aqua;
    }

</style>