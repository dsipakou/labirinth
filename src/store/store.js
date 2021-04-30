import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
  width: 51,
  height: 25,
  showSetup: false,
}

export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
