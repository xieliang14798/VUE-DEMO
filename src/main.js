// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Row, Col, Tab, Tabs, PullRefresh, Loading,Button} from 'vant';
import filters from './filters'
import axios from 'axios'
//vuex
import store from './store'
import loading from './components/loading'

Vue.use(loading);

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

Vue.use(Row).use(Col).use(Tab).use(Tabs).use(PullRefresh).use(Loading).use(Button);

Vue.config.productionTip = false// 阻止 vue 在启动时生成生产提示

require('./assets/css/base.css');
Vue.prototype.$http = axios;
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
