import Vue from 'vue'
import vuex from 'vuex'
import fundDetail from './modules/fundDetail'
import loading from './modules/loading'
Vue.use(vuex);

export default new vuex.Store({
  modules:{
    fundDetail,
    loading
    }
  }
)
