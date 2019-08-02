# Vue

## MVVM

> MVVM是前端视图层的分层开发思想，主要把每个页面分成M（页面数据），V（页面结构）和VM
>
> VM是MVVM思想的核心，是M和V之间的调度者
>
> 数据的**双向绑定**由VM提供

## Vue-demo

```html
............
<script src="https://cdn.jsdelivr.net/npm/vue"></script>

</head>
<body>
    <!-- V(View) -->
    <div id="app" class="container">
        <h3  class="text text-info">{{msg}}</h3>
    </div>
    
</body>
</html>

<script>
    // VM
    // 导入包后，浏览器内存中会有一个Vue构造器
    let vm = new Vue({
        el: '#app', // 表示当前new的Vue实例，控制的页面区域
        data: { // data属性中，存放的是el中用到的数据 ; M(Model)
            msg: 'Welcome to vue!' // 通过Vue指令，将数据渲染到页面
        }
    });
</script>
```

## 指令