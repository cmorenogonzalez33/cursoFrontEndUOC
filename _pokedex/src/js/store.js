import { createStore } from 'vuex'

const store = createStore({
  state: {
    theme: 'dark-theme', // Initial theme value
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme;
    },
  },
  actions: {
    setTheme({ commit }, theme) {
      commit('setTheme', theme);
    },
  },
  getters: {
    theme(state) {
      return state.theme;
    },
  },
});

export default store;