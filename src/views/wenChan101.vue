<template>
<div class="container">
  <div class="header">
      <div class="wenChanLogo">
        <img src="../../public/Logo.png" alt="" class="logo" />
        <h5>帮助手册 101</h5>
      </div>
      <div class="searchInput">
        <el-input v-model="input" prefix-icon="el-icon-search"></el-input>
      </div>
    </div>
    <div class="sideBar">
      <sideBar101></sideBar101>
    </div>
  <router-view></router-view>
</div>
</template>
<script>
import sideBar101 from "./sideBar101.vue";
export default {
  components: {
    sideBar101,
  },
  name: "wenChan101",
  data() {
    return {
      input: "",
    };
  },
};
</script>
<style>
.container {
  max-width: 1440px;
  margin: 0 auto; /* 居中显示 */
}

.header{
  width: 100%;
  z-index: 999;
  position: fixed;
  top: 0px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid#eaecef;
  padding-left: 25px;
}

.wenChanLogo{
  display: flex;
  align-items: center;
}

.wenChanLogo img {
  width:40px;
  margin-right: 10px;
}
.searchInput {
  display: flex;
  align-items: center;
  margin-right: 24px;
  margin-left: 200px;
}

.searchInput input{
  width: 200px;
  border-radius: 50px;
}

.sideBar{
  position: fixed;
  top: 60px;
  left: 0;
}
</style>
