<template>
<div class="container">
    <Hearder></Hearder>
    <div class="sideBar">
      <sidebar></sidebar>
    </div>
    <div class="pages">
      <router-view></router-view>
    </div>
</div>
</template>
<script>
import sidebar from "./sidebar.vue";
import Hearder from "../../components/Header.vue";
export default {
  components: {
    sidebar,
    Hearder,
  },
};
</script>
<style>
</style>
