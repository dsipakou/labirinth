import {
  SET_WIDTH,
  SET_HEIGHT,
  SET_SHOW_SETUP,
  SET_RECREATE_MAZE
} from './mutations';

const setWidth = ({ commit }, data) => {
  commit(SET_WIDTH, data);
}

const setHeight =({ commit }, data) => {
  commit(SET_HEIGHT, data);
}

const setShowSetup = ({ commit }, data) => {
  commit(SET_SHOW_SETUP, data);
}

const setRecreateMaze = ({ commit }, data) => {
  commit(SET_RECREATE_MAZE, data)
}

export default {
  setSize(store, {width, height}) {
    setWidth(store, width);
    setHeight(store, height);
  },
  managePopup(store, show) {
    setShowSetup(store, show);
  },
  recreate(store, recreate) {
    setRecreateMaze(store, recreate);
  }
}
