import Vue from 'vue'
import Router from 'vue-router'
import FundDetail from '../components/FundDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FundDetail',
      component: FundDetail
    }
  ]
})
