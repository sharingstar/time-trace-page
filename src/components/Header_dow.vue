<template>
  <div class="headerbar">
    <div class="logo" @click="returnHome">
      <img src="../img/logo.png" alt="logo" /> <span>时间印迹</span>
    </div>
    <div class="downloadapp" @click="downloadApp"><p>下载APP</p></div>
  </div>
</template>
<script>
export default {
  methods: {
    returnHome() {
      this.$router.push("/");
    },
    downloadApp() {
      window.open(
        "https://apps.apple.com/cn/app/%E6%97%B6%E9%97%B4%E5%8D%B0%E8%BF%B9-%E4%B8%93%E6%B3%A8%E8%AE%A1%E6%97%B6%E5%99%A8-%E6%97%B6%E9%97%B4%E9%83%BD%E5%8E%BB%E5%93%AA%E4%BA%86/id6450100115",
        "_blank"
      );
    },
  },
};
</script>
<style scoped>
.headerbar {
  width: 100%;
  height: 50px;
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

.headerbar {
  background-color: rgba(255, 255, 255, 0.8); /* backdrop-filter: blur(10px); */
  backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid #e3e3e3;
}
.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.logo img {
  width: 40px;
  height: 40px;
}
.logo span {
  font-size: 18px;
  font-weight: bold;
  margin-left: 6px;
}
.downloadapp {
  width: 80px;
  height: 30px;
  background-color: #1e60e5;
  border-radius: 4px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.downloadapp p {
  font-size: 14px;
}
.downloadapp:hover {
  background-color: #05389f;
}
@media (prefers-reduced-motion: no-preference) {
  .logo img {
    animation: App-logo-spin infinite 20s linear;
  }
}


@media (max-width: 768px) {
  .downloadapp:hover {
    background-color: #1e60e5;
}
}
</style>
