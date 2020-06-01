import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //菜单显隐
    isShowMenu:false,
    token:'token12121212'
  },
  mutations: {
    showPopup(state) {
      state.isShowMenu = true; 
    },
    hidePopup(state) {
      state.isShowMenu = false; 
    }
  },
  actions: {},
  modules: {}
});
