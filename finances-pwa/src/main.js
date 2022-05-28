/* import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
 */

import Vue from 'vue'
import App from './App.vue'
import 'carbon-components/css/carbon-components.css';
// import './_carbon.scss'
import CarbonComponentsVue from '@carbon/vue/src/index';
// import '@carbon/ibmdotcom-web-components/es/components/footer/index';
import {
  // white,
  // g10,
  // g90,
  // g100,

  // // Specific token values
  // interactive01,
  // interactive02,
} from '@carbon/themes';

Vue.config.productionTip = false

Vue.use(CarbonComponentsVue);

new Vue({
  render: h => h(App),
}).$mount('#app')


// import Vue from 'vue'
// import App from './App.vue'
// // import 'carbon-components/css/carbon-components.css';
// import './_carbon.scss'
// import CarbonComponentsVue from '@carbon/vue/src/index';
// import {
//   // white,
//   // g10,
//   // g90,
//   // g100,

//   // // Specific token values
//   // interactive01,
//   // interactive02,
// } from '@carbon/themes';

// Vue.config.productionTip = false

// Vue.use(CarbonComponentsVue);

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
