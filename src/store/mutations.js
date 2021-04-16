export const SET_WIDTH = 'SET_WIDTH';

export const SET_HEIGHT = 'SET_HEIGHT';

export default {
  [SET_WIDTH](state, width) {
    state.width = width;
  },
  [SET_HEIGHT](state, height) {
    state.height = height;
  },
}

