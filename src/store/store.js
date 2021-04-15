import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    width: 41,
    height: 21,
  },
  getters: {
    getWidth: state => state.width,
    getHeight: state => state.height,
  },
  mutations: {
    setSize (state, width, height) {
      state.width = width;
      state.height = height;
    }
  }
});
