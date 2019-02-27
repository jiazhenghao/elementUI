import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);
//console.log("456");

new Vue({
    el: '#appElmentUI',
    // created: function(){
    // 	console.log("78");
    // },
    render: h => h(App)
});



//console.log("123");