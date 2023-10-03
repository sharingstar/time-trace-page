<template>
  <div class="container">
    <Hearder class="headerNav"></Hearder>
    <Header_small class="headerNav_small"></Header_small>
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
import Header_small from "@/components/Header_small.vue";
export default {
  components: {
    sidebar,
    Hearder,
    Header_small,
  },
};
</script>
<style>
@media (max-width: 768px) {
  .container {
    .headerNav {
      display: none;
    }
  }
}
@media (min-width: 768px) {
  .container {
    .headerNav_small {
      display: none;
    }
  }
}
</style>
