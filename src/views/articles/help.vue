<template>
  <div class="container">
    <Hearder class="headerNav"></Hearder>
    <HeaderSmall class="headerNav_small"></HeaderSmall>
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
export default {
  components: {
    sidebar,
    Hearder,
    HeaderSmall
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
