import Vue from 'vue'
import App from './App'

import wcImg from './wc-img'
Vue.use(wcImg);

new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
})
