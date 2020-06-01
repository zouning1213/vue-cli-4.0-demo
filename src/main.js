import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'lib-flexible/flexible'
import Vant from 'vant';
import 'vant/lib/index.css';

import { POST,GET } from './request/http'

Vue.prototype.$POST = POST;
Vue.prototype.$GET = GET;

Vue.use(Vant);
Vue.config.productionTip = false;

Vue.directive('focus',{
  inserted:function(el){
    el.focus()
  }
})
Vue.directive('img',{
  inserted:function(el,binding){ 
    setTimeout(function(){
      el.setAttribute("src",binding.value)
    },Math.random() * 1200)
  }
})

Vue.directive('pin',{
  inserted:function(el,binding){
    el.style.position = 'fixed'
    el.style.top = binding.value + 'px'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
