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
import router from './router'
import store from './store'
import App from './App.vue'
import 'carbon-components/css/carbon-components.css';
// import './_carbon.scss'
import CarbonComponentsVue from '@carbon/vue/src/index';
import { CarbonIconsVue } from '@carbon/icons-vue';
import Home20 from '@carbon/icons-vue/es/home/20';
import Globe20 from '@carbon/icons-vue/es/globe/20';
import TableBuilt20 from '@carbon/icons-vue/es/table--built/20';
import Currency20 from '@carbon/icons-vue/es/currency/20';
import ChartLineData20 from '@carbon/icons-vue/es/chart--line--data/20';
import Settings20 from '@carbon/icons-vue/es/settings/20';
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

Vue.use(CarbonComponentsVue).use(CarbonIconsVue, {
  components: {
    Home20,
    Globe20,
    TableBuilt20,
    Currency20,
    ChartLineData20,
    Settings20,
  }
}).use(router).use(store);

new Vue({
  el: "#app",
  router: router,
  store: store,
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
