const state = {
  isShow:false
}
const getters={
  isLoadingShow:state => {
    return state.isShow
  }
}
const actions = {
  setLoadingShow({commit},boolean){
    commit('setLoadingShow',boolean)
  }
}
const mutations = {
  setLoadingShow(state,boolean){
    state.isShow = boolean
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
