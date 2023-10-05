// store/sidebar.js

export default {
  namespaced: true,
  state: {
    isOpen: true,
  },
  mutations: {
    toggleSidebarState(state) {
      // 修改 mutation 名称
      state.isOpen = !state.isOpen;
    },
  },
  actions: {
    toggleSidebar({ commit }) {
      commit("toggleSidebarState"); // 使用修改后的 mutation 名称
    },
  },
};
