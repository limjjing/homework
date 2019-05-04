import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from "./store";

Vue.config.productionTip = false
Vue.prototype.eventBus = new Vue();
Vue.prototype.$http = axios;
Vue.prototype.$store = store;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
