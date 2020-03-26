// index.js入口文件
import Vue from 'vue'
import router from './router'
import App from './app.vue'

import './assets/styles/global.scss'
// 创建一个Vue实例App, mount就是讲我们的App挂载到root这样一个根节点中去

new Vue({
    router,
    render: (h) =>h(App)
}).$mount('#app')

//测试babel-loader
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHello() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
// const person = new Person("Ben", 28);
// person.sayHello();
