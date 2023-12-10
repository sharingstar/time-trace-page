<template>
  <div class="headerbar">
    <div class="options" @click="toggleSidebar">
      <img
        v-if="!isOpen"
        @click="toggleImage"
        :src="isImageChanged ? '../../src/img/icon/icon_menu.png' : '../../src/img/icon/icon_menu.png'"
        class="icon"
      />
      <img
        v-if="isOpen"
        src="../../src/img/icon/icon_menu.png"
        class="icon"
      />
    </div>
    <div class="logo">
      <img src="../img/logo.png" alt="logo" />
    </div>
    <div class="return" @click="returnHome">
      <p>返回首页</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      isImageChanged: false,
    };
  },
  computed: {
    ...mapState("sidebar", ["isOpen"]),
  },
  methods: {
    ...mapActions("sidebar", ["toggleSidebar"]),
    returnHome() {
      this.$router.push("/");
    },
    toggleImage() {
      this.isImageChanged = !this.isImageChanged;
    },
  },
};
</script>

<style scoped>
.icon {
  cursor: pointer;
}
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
.logo img {
  width: 32px;
  height: 32px;
  transform: translateX(20px);
}
.return p {
  color: #1e60e5;
  font-weight: 500;
}
.options img {
  width: 20px; /* You might want to adjust this width and height */
  height: 20px;
}
</style>
