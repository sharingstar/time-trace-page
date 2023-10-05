// store/sidebar.js

export default {
  namespaced: true,
  state: {
    isOpen: true,
  },
  mutations: {
    toggleSidebarState(state) {
      state.isOpen = !state.isOpen;
    },
    changeSideBarState(state, status) {
      state.isOpen = status
    }
  },
  actions: {
    toggleSidebar({ commit }) {
      commit("toggleSidebarState");
    },
  },
};
