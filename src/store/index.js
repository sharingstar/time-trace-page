import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      sidebar_index: localStorage.getItem('sidebar_index')||'01'
    },
    getters:{
        getsidebarindex(state){return state.sidebar_index}
    },
    mutations: {
      setSideBarIndex (state,index) {
        state.sidebar_index = index
        localStorage.setItem('sidebar_index',index)
      }
    }
  })

export default store