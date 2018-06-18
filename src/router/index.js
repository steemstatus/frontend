import Vue from 'vue'
import Router from 'vue-router'

import Accounts from '@/components/pages/Accounts'
import Steem from '@/components/pages/Steem'
import Witness from '@/components/pages/Witness'


Vue.use(Router)

export default new Router({
  routes: [

	{
      path: '/',
      name: 'steem',
      component: Steem
    },
    {
      path: '/accounts',
      name: 'accounts',
      component: Accounts
    },
    {
      path: '/witness',
      name: 'witness',
      component: Witness
    }

  ]
})
