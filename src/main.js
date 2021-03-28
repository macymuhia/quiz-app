import Vue from 'vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VeeValidate from 'vee-validate';

import App from './App.vue'
import router from './router'
import store from './store'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import './app.scss';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(VeeValidate);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
