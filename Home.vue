<template>
  <div class="App">
    <div class="Header">
      <div class="logo">
        <img src="./img/header_logo.png" />
        <text>时间印迹</text>
      </div>

      <div class="download" @click="downloadApp">
        <text>下载App</text>
      </div>
    </div>
    <div class="Banner">
      <div :class="['Banner-Content', isSmall ? 'Banner-Small-Content' : '']">
        <div :class="['Banner-Content-Title', isSmall ? 'Banner-Small-Title' : '']">
          <text>记录</text>
          <text>专注</text>
          <text>，预见未来</text>
        </div>
        <text>
          记录专注、习惯专注、享受专注，成为理想的自己更近一步
        </text>
      </div>
      <div :class="['Banner-App', isSmall ? 'small-app' : '']"></div>
    </div>

    <div :class="['value-container', isSmall ? 'small-values' : '']">
      <text :class="isSmall ? 'sh1' : 'h1'">追踪时间能有什么用？</text>
      <div class="value-items">
        <div class="value-item">
          <img src="./img/value1.png" />
          <text :class="isSmall ? 'sh2' : 'h2'">提升专注力</text>
          <text :class="isSmall ? 'sh3' : 'h3'">尤其是将时间分为不同的各个模块</text>
        </div>
        <div class="value-item">
          <img src="./img/value2.png" />
          <text :class="isSmall ? 'sh2' : 'h2'">工作生活分开</text>
          <text :class="isSmall ? 'sh3' : 'h3'">给自己一个目标，工作多少小时就停止。找到工作与生活的平衡</text>
        </div>
        <div class="value-item">
          <img src="./img/value3.png" />
          <text :class="isSmall ? 'sh2' : 'h2'">持续做某事</text>
          <text :class="isSmall ? 'sh3' : 'h3'">统计在某件事上花时间，就更容易坚持</text>
        </div>
        <div class="value-item">
          <img src="./img/value4.png" />
          <text :class="isSmall ? 'sh2' : 'h2'">认识自我</text>
          <text :class="isSmall ? 'sh3' : 'h3'">知道自己的时间花在了哪里，从而更加了解自己</text>
        </div>
      </div>
      <div class="value-line"></div>
    </div>

    <div :class="['record-container', isSmall ? 'small-container' : '']">
      <text :class="isSmall ? 'sh1' : 'h1'">快速丰富的记录</text>
      <text :class="isSmall ? 'sh3' : 'h3'">尤其是将时间分为不同的各个模块，在完成之后再做别的事，将大大提升我们的专注力</text>
      <img src="./img/record.png" />
    </div>

    <div :class="['data-container', isSmall ? 'small-container' : '']">
      <text :class="isSmall ? 'sh1' : 'h1'">掌控回顾时间</text>
      <text :class="isSmall ? 'sh3' : 'h3'">尤其是将时间分为不同的各个模块，在完成之后再做别的事，将大大提升我们的专注力</text>
      <img src="./img/data.png" />
    </div>

    <div class="footer">
      <img src="./img/appStore.png" @click="downloadApp" />
      <div class="protocol">
        <text @click="clickProtocol(1)">用户协议</text>
        <text @click="clickProtocol(2)">隐私政策</text>
        <text @click="clickProtocol(3)">联系我们</text>
      </div>
      <img src="./img/header_logo.png" />
      <text>记录专注，预见未来</text>
      <div class="footer-line"></div>
      <img class="light-logo" src="./img/light_logo.png" />
    </div>
  </div>
</template>

<script>
import './Home.css';
export default {
  data() {
    return {
      isSmall: false,
    };
  },
  mounted() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWindowDimensions);
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
  },
};
</script>

<style scoped>
/* styles from Home.css */
</style>
