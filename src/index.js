// index.js入口文件
import Vue from 'vue'
import App from './app.vue'

// 创建一个Vue实例App, mount就是讲我们的App挂载到root这样一个根节点中去
new Vue({
    render: (h) =>h(App)
}).$mount(body)