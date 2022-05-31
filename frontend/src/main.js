import Vue from 'vue';
import App from './App.vue';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VueRouter from "vue-router";
import routes from "./routes";
import store from './store';

Vue.use(VueRouter)

const router = new VueRouter({
  "routes": routes,
  "mode": "history"
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')