<template>
  <div>
    <Header></Header>
    <div class="content">
      <img src="../../img/ic_404@2x.png" />
      <h1>404</h1>
      <p>你访问的内容不存在</p>
      <button>返回首页</button>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
export default {
  components: {
    Header,
  },
};
</script>
<style scoped>
.content {
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 177px;
}

.content img {
  width: 134px;
  height: 132px;
}

.content h1 {
  font-size: 32px;
  color: #2c2e32;
  margin-top: 11px;
  font-family: Gilroy-Bold, Gilroy;
}

.content p {
  font-size: 18px;
  font-weight: 500;
  color: #AEAFB2;
  margin-top: 12px;
}

.content button {
margin-top: 27px;
width: 170px;
height: 50px;
background: #1E60E5;
border-radius: 4px;
font-weight: 500;
border: 0px;
font-size: 16px;
font-weight: 500;
color: #FFFFFF;
}
</style>