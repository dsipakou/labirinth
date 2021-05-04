export const SET_WIDTH = 'SET_WIDTH';

export const SET_HEIGHT = 'SET_HEIGHT';

export const SET_SHOW_SETUP = 'SET_SHOW_SETUP';

export const SET_RECREATE_MAZE = 'SET_RECREATE_MAZE';

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
  [SET_RECREATE_MAZE](state, recreate) {
    state.recreateMaze = recreate;
  }
}

