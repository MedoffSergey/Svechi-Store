import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from "./router/router";
import './assets/styles/styles.scss'

//BOOTSTRAP
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// //FONTS
import GothamPro from './assets/fonts/GothamPro.ttf';
import GothamProLight from './assets/fonts/GothamPro-Light.ttf';
import GothamProBold from './assets/fonts/GothamPro-Bold.ttf';

console.log(GothamPro, GothamProLight, GothamProBold);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
