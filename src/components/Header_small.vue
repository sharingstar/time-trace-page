<template>
  <div class="headerbar">
    <div class="options" @click="toggleSidebar">
      <svg
        t="1692437979557"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5854"
        width="200"
        height="200"
      >
        <path
          d="M901.632 896H122.368c-30.72 0-55.808-25.088-55.808-55.808v-1.536c0-30.72 25.088-55.808 55.808-55.808h779.776c30.72 0 55.808 25.088 55.808 55.808v1.536c-0.512 30.72-25.6 55.808-56.32 55.808zM901.632 568.32H122.368c-30.72 0-55.808-25.088-55.808-55.808v-1.536c0-30.72 25.088-55.808 55.808-55.808h779.776c30.72 0 55.808 25.088 55.808 55.808v1.536c-0.512 30.72-25.6 55.808-56.32 55.808zM901.632 240.64H122.368c-30.72 0-55.808-25.088-55.808-55.808v-1.536c0-30.72 25.088-55.808 55.808-55.808h779.776c30.72 0 55.808 25.088 55.808 55.808v1.536c-0.512 30.72-25.6 55.808-56.32 55.808z"
          p-id="5855"
        ></path>
      </svg>
    </div>
    <div class="logo">
      <img src="../img/logo.png" alt="logo" />
    </div>
    <div class="return">
      <p>返回首页</p>
    </div>
  </div>
</template>
<script>
// import { mapActions } from 'vuex';

// export default {
//   methods: {
//     ...mapActions('sidebar', ['toggleSidebar']),
//   }
// };
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState('sidebar', ['isOpen'])
  },
  methods: {
    ...mapActions('sidebar', ['toggleSidebar'])
  }
};
</script>
<style scoped>
.headerbar {
  width: 100%;
  height: 60px;
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

.options svg {
  width: 20px;
  color: #72767d;
}
</style>
