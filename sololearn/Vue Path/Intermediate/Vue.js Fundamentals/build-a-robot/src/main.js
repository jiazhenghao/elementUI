import Vue from 'vue';
import App from './App.vue';
import router from './router'; // 把路由导入进来
import store from './store'; // 把vuex store导入

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
