import Vue from 'vue';
import App from './App.vue';
import router from './router'; // 把路由导入进来
import store from './store'; // 把vuex store导入
import pinDirective from './shared/pin-directive';
import currencyFilter from './shared/currency-filter';

Vue.config.productionTip = false;
Vue.directive('pin', pinDirective);
Vue.filter('currency', currencyFilter);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
