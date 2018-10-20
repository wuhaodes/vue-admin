import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  SET_AUTHENTICATED: "SET_AUTHENTICATED",
  SET_USER: "SET_USER"
}

const state = {
  isAutheticated: false,
  user: {
    name: "wuhaodes"
  }
}
const getters = {
  isAutheticated: state => state.isAutheticated,
  user: state => state.user,
}
const mutations = {
  [types.SET_AUTHENTICATED](state,isAutheticated){
    if(isAutheticated) state.isAutheticated = isAutheticated;
    else state.isAutheticated = false;
  },
  [types.SET_USER](state,user){
    if(user) state.user = user;
    else state.user = {};
  }
}
const actions = {
  setAutheticated:({commit}, isAutheticated) =>{
    commit(types.SET_AUTHENTICATED,isAutheticated);
  },
  setUser:({commit}, user)=>{
    commit(types.SET_USER,user);
  }
}



export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
