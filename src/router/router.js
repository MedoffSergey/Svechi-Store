import Vue from 'vue'
import Router from 'vue-router'

import vCatalog from '../components/catalog/v-catalog'

import vOrder from '../components/services/v-order'

import vDelivery from '../components/services/v-delivery'

Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: vCatalog
    },
    {
      path: '/order',
      name: 'order',
      component: vOrder
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: vDelivery
    },
  ]
})

export default router;
