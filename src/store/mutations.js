export const SET_WIDTH = 'SET_WIDTH';

export const SET_HEIGHT = 'SET_HEIGHT';

export const SET_SHOW_SETUP = 'SET_SHOW_SETUP';

export default {
  [SET_WIDTH](state, width) {
    state.width = width;
  },
  [SET_HEIGHT](state, height) {
    state.height = height;
  },
  [SET_SHOW_SETUP](state, show) {
    state.showSetup = show;
  },
}

