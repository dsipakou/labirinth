import { SET_WIDTH, SET_HEIGHT } from './mutations';

const setWidth = ({ commit }, data) => {
  commit(SET_WIDTH, data);
}

const setHeight =({ commit }, data) => {
  commit(SET_HEIGHT, data);
}

export default {
  setSize(store, {width, height}) {
    setWidth(store, width);
    setHeight(store, height);
  }
}
