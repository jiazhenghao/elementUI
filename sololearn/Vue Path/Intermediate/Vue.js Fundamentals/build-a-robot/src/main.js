import Vue from 'vue';
import App from './App.vue';
import router from './router'; // 把路由导入进来

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
