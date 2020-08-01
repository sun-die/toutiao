import Vue from 'vue'
// 引入app组件
import App from './App.vue'
// 引入路由的配置
import router from './router'
// 引入vuex的配置
import store from './store'


// import axios from "axios"

// 导入配置好的axios
import axios from "./common/myaxios";
Vue.prototype.$axios=axios;
// 在vue原型上添加￥axios
// Vue.propotype.$axios =axios;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
