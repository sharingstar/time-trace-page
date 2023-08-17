<template>
    <div class="headerbar">
      <div class="logo">
        <img src="../img/logo.png" alt="logo" />
        <span>时间印记</span>
      </div>
      <div class="downloadapp">
        <p>下载APP</p>
      </div>
    </div>
  </template>
  <style scoped>
  .headerbar {
    width: 100%;
    height: 70px;
    padding: 15px 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #EAEAEA;
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
    font-size: 22px;
    font-weight: bold;
    margin-left: 10px;
  }
  
  .downloadapp {
    width: 110px;
    height: 44px;
    background-color: #1E60E5 ;
    border-radius: 4px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  </style>
  