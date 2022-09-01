export default {
  state: () => ({
    selected: false,
    count: 0,
  }),
  getters: {
    getCount(state) {
      return state.count;
    },
    getSelected(state) {
      return state.selected;
    },
  },
  mutations: {
    toggleSelected(state) {
      state.selected = !state.selected;
    },
    incrementCount(state) {
      state.count++;
    },
  },
  actions: {
    toggleSelected({ commit }) {
      commit('toggleSelected');
    },
    addUpvote({ commit }) {
      commit('incrementCount');
    },
  },
};
