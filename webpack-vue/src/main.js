import Vue from 'vue'

import App from './App.vue'

new Vue({
    render: h =>h(App)
}).$mount('#app')

// 예전코드
// const app = new Vue({
//   el: '#app'
// })