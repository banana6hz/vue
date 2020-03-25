// router.js 配置项目路由
import Vue from 'vue'
import Router from 'vue-router'
import Hello from './components/helloworld.vue'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path: '/',
            name: 'Hello',
            component: Hello
        }
    ]
})
