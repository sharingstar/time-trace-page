<template>
  <div class="headerbar">
    <div class="logo" @click="returnHome">
      <img src="../img/logo.png" alt="logo" /> <span>时间印记</span>
    </div>
    <div class="return" @click="returnHome"><p>返回首页</p></div>
  </div>
</template>
<script>
export default {
  methods: {
    returnHome() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.headerbar {
  width: 100%;
  height: 70px;
  padding: 15px 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 999;
}

.header.white {
  background-color: rgba(255, 255, 255, 0.8); /* backdrop-filter: blur(10px); */
  backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid #e3e3e3;
}


.logo {
  display: flex;
  align-items: center;
  cursor: pointer; /* Add cursor style to indicate clickable logo */
}
.logo img {
  width: 40px;
  height: 40px;
}
.logo span {
  font-size: 22px;
  font-weight: bold;
  margin-left: 10px;
}
.return p {
  color: #1e60e5;
  font-weight: 500;
  cursor: pointer; /* Add cursor style to indicate clickable return text */
}
</style>
