// import 'babel-polyfill'
// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
import router from './router'

// 引入element组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    template: "<App/>",
    components: { App }
})
