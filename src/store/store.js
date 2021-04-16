import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  width: 41,
  height: 21,
}

export const store = new Vuex.Store({
  state,
  getters,
  mutations,
});
