<template>
  <div class="container">
    <Hearder class="headerNav"></Hearder>
    <HeaderSmall class="headerNav_small"  v-show="screenWidth < 768" ></HeaderSmall>
    <div class="sideBar">
      <sidebar class="sidebar"></sidebar>
    </div>
    <div class="pages">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import sidebar from "./sidebar.vue";
import Hearder from "../../components/Header.vue";
import HeaderSmall from "@/components/Header_small.vue";
import {debounce} from '@/utils';
import {mapMutations} from 'vuex';
export default {
  components: {
    sidebar,
    Hearder,
    HeaderSmall
  },
  data() {
    return {
      screenWidth: window.innerWidth
    }
  },
  mounted() {
    window.addEventListener('resize',debounce(this.handleFolderSidebar,100))
  },
  methods:{
    ...mapMutations('sidebar',['changeSideBarState']),
    handleFolderSidebar(){
      this.screenWidth = window.innerWidth;
      if (this.screenWidth < 768) {
        return this.changeSideBarState(false)
      }else {
        this.changeSideBarState(true)
      }
    }
  }
 
};
</script>
<style>
@media (max-width: 767px) {
  .HeaderSmall {
    opacity: 0 !important;
  }
}

@media (min-width: 768px) {
  .HeaderSmall{
    opacity: 0 !important;
  }
}
</style>
