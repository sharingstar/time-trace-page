<template>
  <div class="headerbar">
    <div class="logo">
      <img src="../img/logo.png" alt="logo" />
      <span>时间印迹</span>
    </div>
    <div class="downloadapp">
      <p>下载APP</p>
    </div>
  </div>
</template>
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

.logo {
  display: flex;
  align-items: center;
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

.downloadapp p{
  font-size: 14px ;
}

.downloadapp:hover{
  background-color: #05389f;
}

@media (prefers-reduced-motion: no-preference) {
  .logo img {
    animation: App-logo-spin infinite 20s linear;
  }
}
</style>
