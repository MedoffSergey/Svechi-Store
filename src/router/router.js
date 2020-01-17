import Vue from 'vue'
import Router from 'vue-router'

import vCatalog from '../components/catalog/v-catalog'

import vOrder from '../components/services/v-order'


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

  ]
})

export default router;
