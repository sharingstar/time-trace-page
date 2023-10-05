// store/sidebar.js

export default {
  namespaced: true,
  state: {
    isOpen: true
  },
  mutations: {
    toggleSidebarState(state) {
      state.isOpen = !state.isOpen;
    },
  },
  actions: {
    toggleSidebar({ commit }) {
      commit("toggleSidebarState");
    },
  },
};
