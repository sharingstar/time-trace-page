<template>
  <div class="App">
    <Header_dow class="header" :class="{ white: isWhite }"/>
    <div class="Banner">
      <div class="Banner-Content">
        <div class="Banner-Content-Title">
          <span>记录</span>
          <span>专注</span>
          <span>，预见未来</span>
        </div>
        <p>记录专注、习惯专注、享受专注，成为理想的自己更近一步</p>
      </div>
      <div class="Banner-App"></div>
    </div>
    <div class="value-container">
      <p class="h1">追踪时间能有什么用？</p>
      <div class="value-items big-value">
        <div class="value-item">
          <img src="../img/home/value1.png" />
          <p class="h2">提升专注力</p>
          <p class="h3">尤其是将时间分为不同的各个模块</p>
        </div>
        <div class="value-item">
          <img src="../img/home/value2.png" />
          <p class="h2">工作生活分开</p>
          <p class="h3">
            给自己一个目标，工作多少小时就停止。找到工作与生活的平衡
          </p>
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
      <div class="value-items small-value">
        <div class="value-items">
          <div class="value-item">
          <img src="../img/home/value1.png" />
          <p class="h2">提升专注力</p>
          <p class="h3">尤其是将时间分为不同的各个模块</p>
        </div>
        <div class="value-item">
          <img src="../img/home/value2.png" />
          <p class="h2">工作生活分开</p>
          <p class="h3">
            给自己一个目标，工作多少小时就停止。找到工作与生活的平衡
          </p>
        </div>
        </div>
        <div class="value-items">
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
      </div>
      <div class="value-line"></div>
    </div>

    <div class="record-container">
      <p class="h1">快速丰富的记录</p>
      <p class="h3">
        尤其是将时间分为不同的各个模块，在完成之后再做别的事，将大大提升我们的专注力
      </p>
      <img src="../img/home/record.png" />
    </div>

    <div class="data-container">
      <p class="h1">掌控回顾时间</p>
      <p class="h3">
        尤其是将时间分为不同的各个模块，在完成之后再做别的事，将大大提升我们的专注力
      </p>
      <img src="../img/home/data.png" />
    </div>

    <div class="footer">
      <img src="../img/home/appStore.png" @click="downloadApp" />
      <div class="protocol">
        <p @click="clickProtocol(1)">用户协议</p>
        <p @click="clickProtocol(2)">隐私政策</p>
        <p @click="clickProtocol(3)">联系我们</p>
      </div>
      <img src="../img/home/header_logo.png"/>
      <p>记录专注，预见未来</p>
      <div class="footer-line"></div>
      <img class="light-logo" src="../img/home/light_logo.png" />
    </div>
  </div>
</template>

<script>
import "../style/Home.css";
import Header_dow from "../components/Header_dow.vue";
export default {
  components: {
    Header_dow,
  },
  data() {
    return {
      isWhite: false,
    };
  },
  methods: {
    downloadApp() {
      console.log("download app");
    },
    clickProtocol(type) {
      if(type == 1) {
        this.$router.push("/useragreement");
      } else if(type == 2) {
        this.$router.push("/privacy");
      } else if(type == 3) {
        this.$router.push("/contactus");
      }
    },
    handleScroll() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 0) {
        this.isWhite = true;
      } else {
        this.isWhite = false;
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
.header {
  background-color: transparent;
  border-bottom: 0px;
}
.header.white {
  background-color: rgba(255, 255, 255);
  backdrop-filter: blur(10px);
}
</style>
