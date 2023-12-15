<template>
  <div class="App">
    <Header_dow class="header" :class="{ white: isWhite }" />
    <div class="Banner">
      <div class="Banner-Content">
        <div class="Banner-Content-Title">
          <p>
            <span>记录</span><span class="zhuanzhustyle">专注</span>&nbsp&nbsp&nbsp&nbsp<span>预见未来</span>
          </p>
        </div>
        <p>记录专注，回顾专注，认识自我，找回自我。知道时间都去哪了</p>
      </div>
      <div class="Banner-App"></div>
    </div>
    <div class="value-container">
      <p class="h1">追踪时间能有什么用？</p>
      <div class="value-items big-value">
        <div class="value-item">
          <img src="../img/home/value1.png" />
          <p class="h2">提升专注力</p>
          <p class="h3">利用倒计时和番茄钟提升专注力，快速进入心流状态</p>
        </div>
        <div class="value-item">
          <img src="../img/home/value2.png" />
          <p class="h2">有序工作与生活</p>
          <p class="h3">
            为工作和生活各自设立目标，多个事情在一起也变得有序
          </p>
        </div>
        <div class="value-item">
          <img src="../img/home/value3.png" />
          <p class="h2">做长期主义者</p>
          <p class="h3">看见过去记录的热爱与付出，更容易继续坚持</p>
        </div>
        <div class="value-item">
          <img src="../img/home/value4.png" />
          <p class="h2">认识自我</p>
          <p class="h3">知道自己的时间都花在哪里了，从客观数据了解自己</p>
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
        专注的时间和日记等可快速记录，每一次的动作也将在「记录」里同步，每一天是怎么度过的清晰可
      </p>
      <img src="../img/home/record.png" />
    </div>
    <div class="data-container">
      <p class="h1">回顾掌控时间</p>
      <p class="h3">
        各个维度的统计和分析，时间都花在哪了一看便知。从而认识自我，再找回自我。
      </p>
      <img src="../img/img_掌控回顾.png" />
    </div>
    <div class="footer">
      <img src="../img/home/appStore.png" @click="downloadApp" class="appstore"/>
      <div class="protocol">
        <p @click="clickProtocol(1)">用户协议</p>
        <p @click="clickProtocol(2)">隐私政策</p>
        <p @click="clickProtocol(3)">教程与指引</p>
        <p @click="clickProtocol(4)">联系我们</p>
      </div>
      <img src="../img/logo@2x.png" />
      <p>记录专注，预见未来</p>
      <!-- 网络备案 -->
      <div class="footer-line"></div>
      <img class="light-logo" src="../img/home/light_logo.png" />
    </div>
  </div>
</template>
<script>
import "../style/Home.css";
import Header_dow from "../components/Header_dow.vue";
export default {
  components: { Header_dow },
  data() {
    return { isWhite: false };
  },
  methods: {
    downloadApp() {
      window.open(
        "https://apps.apple.com/cn/app/%E6%97%B6%E9%97%B4%E5%8D%B0%E8%BF%B9-%E4%B8%93%E6%B3%A8%E8%AE%A1%E6%97%B6%E5%99%A8-%E6%97%B6%E9%97%B4%E9%83%BD%E5%8E%BB%E5%93%AA%E4%BA%86/id6450100115",
        "_blank"
      );
    },
    clickProtocol(type) {
      if (type == 1) {
        this.$router.push("/UserAgreement");
      } else if (type == 2) {
        this.$router.push("/privacy");
      } else if (type == 3) {
        this.$router.push("/help");
      } else if (type == 4) {
        this.contactUs();
      }
    },
    contactUs() { window.location.href = "mailto:solovetime@163.com"},
    handleScroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 0) {
        this.isWhite = true;
      } else {
        this.isWhite = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};


</script>
<style scoped>
.header {
  background-color: transparent;
  border-bottom: 0px;
}
.header.white {
  background-color: rgba(255, 255, 255, 0.8); /* backdrop-filter: blur(10px); */
  backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid #e3e3e3;
}

.appstore {
  cursor: pointer
}
</style>