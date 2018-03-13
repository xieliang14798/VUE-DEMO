import Vue from 'vue'
import Router from 'vue-router'
import FundDetail from '../components/FundDetail.vue'
import Login from '../components/system/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/fundDetail',
      name: 'FundDetail',
      component: FundDetail
    }
  ]
})
