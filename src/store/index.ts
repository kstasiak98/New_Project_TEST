import Vue from 'vue'
import Vuex from 'vuex'
import {getToken} from "@/Api/api.service";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: "",
  },
  mutations: {
    getNewToken(state, newToken) {
      state.token = newToken;
    }
  },
  actions: {
    async getNewTokenAction({commit}) {
      const newtoken = await getToken();
      commit('getNewToken', newtoken);
    }
  },
  modules: {}
})
