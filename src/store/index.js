import Vue from 'vue'
import Vuex from 'vuex'
import sidebar from './modules/sidebar'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      sidebar_index: localStorage.getItem('sidebar_index')||'01',
      sidebarOpen: false
    },
    getters:{
        getsidebarindex(state){return state.sidebar_index}
    },
    mutations: {
      setSideBarIndex (state,index) {
        state.sidebar_index = index
        localStorage.setItem('sidebar_index',index)
      }
    },
    modules: {
      sidebar
    }
  })

export default store