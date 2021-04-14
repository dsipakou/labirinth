import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = Vuex.Store({
  state: {
    width: 41,
    height: 21,
  },
  mutations: {
    setSize (state, width, height) {
      state.width = width;
      state.height = height;
    }
  }
});
