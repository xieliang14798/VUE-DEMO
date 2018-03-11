const state={
  data:''
}
const getters={
  fundDetail:state => {
    return {
      title_left:state.data.title_left,
      value_left:state.data.value_left,
      title_right:state.data.title_right,
      value_right:state.data.value_right,
    }
  },
  fundFloat:state => {
    return {
      min_first_balance:state.data.min_first_balance,
      remaining_amount:state.data.remaining_amount
    }
  },
  fundBasic:state => {
    return{
      list:state.data.basicList,
      otherInfo:state.data.otherInfo
    }
  },
  fundNews:state => {
    return {
      list:state.data.latest_notice
    }
  }
}
const actions = {
  setFundDetailData({commit},json){
    commit('setFundDetailData',json)
  }
}
const mutations={
  setFundDetailData(state,data){
    state.data = data;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
