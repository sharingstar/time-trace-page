<template>
  <div class="App">
    <Header_dow class="header" :class="{white: isWhite}" />
    <div class="Banner">
      <div class="Banner-Content">
        <div class="Banner-Content-Title">
          <span>记录</span>
          <span>专注</span>
          <span>，预见未来</span>
        </div>
        <p>
          记录专注、习惯专注、享受专注，成为理想的自己更近一步
        </p>
      </div>
      <div class="Banner-App"></div>
    </div>
    <div class="value-container">
      <p class="h1">追踪时间能有什么用？</p>
      <div class="value-items">
        <div class="value-item">
          <img src="../img/home/value1.png" />
          <p class="h2">提升专注力</p>
          <p class="h3">尤其是将时间分为不同的各个模块</p>
        </div>
        <div class="value-item">
          <img src="../img/home/value2.png" />
          <p class="h2">工作生活分开</p>
          <p class="h3">给自己一个目标，工作多少小时就停止。找到工作与生活的平衡</p>
        </div>
        <div class="value-item">
          <img src="../img/home/value3.png" />
          <p class="h2">持续做某事</p>
          <p class="h3">统计在某件事上花时间，就更容易坚持</p>
        </div>
        <div class="value-item">
          <img src="../img/home/value4.png" />
          <p class="h2">认识自我</p>
          <p class="h3">知道自己的时间花在了哪里，从而更加了解自己</p>
        </div>
      </div>
      <div class="value-line"></div>
    </div>

    <div class="record-container">
      <p class="h1">快速丰富的记录</p>
      <p class="h3">尤其是将时间分为不同的各个模块，在完成之后再做别的事，将大大提升我们的专注力</p>
      <img src="../img/home/record.png" />
    </div>

    <div class="data-container">
      <p class="h1">掌控回顾时间</p>
      <p class="h3">尤其是将时间分为不同的各个模块，在完成之后再做别的事，将大大提升我们的专注力</p>
      <img src="../img/home/data.png" />
    </div>

    <div class="footer">
      <img src="../img/home/appStore.png" @click="downloadApp" />
      <div class="protocol">
        <p @click="clickProtocol(1)">用户协议</p>
        <p @click="clickProtocol(2)">隐私政策</p>
        <p @click="clickProtocol(3)">联系我们</p>
      </div>
      <img src="../img/home/header_logo.png" />
      <p>记录专注，预见未来</p>
      <div class="footer-line"></div>
      <img class="light-logo" src="../img/home/light_logo.png" />
    </div>
  </div>
</template>

<script>
import "../style/Home.css"
import Header_dow from "../components/Header_dow.vue"
export default {
  components: {
    Header_dow
  },
  data() {
    return {
      isSmall: false,
      isWhite: false,
    };
  },
  mounted() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.updateHeaderBackground);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    window.removeEventListener('scroll', this.updateHeaderBackground);
  },
  methods: {
    updateWindowDimensions() {
      console.log(window.innerWidth);
      this.isSmall = window.innerWidth <= 550;
    },
    downloadApp() {
      console.log('download app');
    },
    clickProtocol(type) {
      console.log(type);
    },
    updateHeaderBackground() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.isWhite = scrollTop > 0;
    }
  },
};
</script>

<style scoped>
.header {
  background-color: transparent;
  border-bottom: 0px;
}
.header.white {
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
}
</style>
