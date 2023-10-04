<template>
  <div v-if="isOpen"  class="sidebar" @click="setIndex">
    <ul class="sidebar-links">
      <li>
        <p>关于App</p>
        <ul class="sidebarGroupItems">
          <li>
            <router-link data-index="01" to="/Introduction" :class="{active:index==='01'}"
              >时间印记</router-link
            >
          </li>
          <li>
            <router-link data-index="02" to="/Introduction102" :class="{active:index==='02'}">快速开始</router-link>
          </li>
          <li>
            <router-link data-index="03" to="/userquesion" :class="{active:index==='03'}">常见问题</router-link>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="sidebar-links">
      <li>
        <p>相关方法</p>
        <ul class="sidebarGroupItems">
          <li>
            <router-link to="/Introduction">柳比歇夫时间统计法</router-link>
          </li>
          <li>
            <router-link to="/Introduction102">番茄工作法</router-link>
          </li>
          <li>
            <router-link to="/Introduction102">如何创建好的习惯</router-link>
          </li>
          <li>
            <router-link to="/Introduction102">如何成为高手</router-link>
          </li>
          <li>
            <router-link to="/Introduction102">抑郁&焦虑</router-link>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="sidebar-links">
      <li>
        <p>查看数据</p>
        <ul class="sidebarGroupItems">
          <li>
            <router-link to="/Introduction102">时间线-每天怎么过的</router-link>
          </li>
          <li>
            <router-link to="/Introduction102">热力图-单个数据详情</router-link>
          </li>
          <li>
            <router-link to="/Introduction102"
              >统计数据-全局数据对比</router-link
            >
          </li>
        </ul>
      </li>
    </ul>
    <ul class="sidebar-links">
      <li>
        <p>账号与会员</p>
        <ul class="sidebarGroupItems">
          <li>
            <router-link to="/Introduction102">账号管理</router-link>
          </li>
          <li>
            <router-link to="/Introduction102">关于会员</router-link>
          </li>
          <li>
            <router-link to="/Introduction102">数据与同步</router-link>
          </li>
          <li>
            <router-link to="/Introduction102">其他设置</router-link>
          </li>
          <li>
            <router-link to="/Introduction102">小的设计巧思</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  data(){
    return{
      index:this.$store.getters.getsidebarindex
    }
  },
  computed:{
    jumpIndex(){
      return this.$store.getters.getsidebarindex
    },
    ...mapState('sidebar', ['isOpen'])
  },
  methods:{
    ...mapActions('sidebar', ['toggleSidebar']),
    setIndex(e){
      console.log(e.target);
      
      const el_index = e.target.dataset.index
    
      if (el_index&&this.index!=undefined) {
        this.index=el_index
      
      }
    }
  },
  watch:{
    jumpIndex(newVal){
      this.index = newVal
    },
    index(newVal){
      this.$store.commit('setSideBarIndex',newVal)
    }
  },
  // beforeDestroy(){
  //   this.$store.commit('setsidebarindex',this.index)
  // }
};
</script>
<style scoped>
.sidebar {
  width: 260px;
  border-right: 1px solid#eaecef;
  padding: 10px 0px 200px 0px;
  overflow: auto;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  top: 70px;
  left: 0;
  z-index: 999;
}

.sidebar-links {
  list-style: none;
  padding-left: 14px;
  padding-right: 14px;
}

.sidebar-links > li {
  margin-top: 24px;
}

.sidebar-links li p {
  margin-bottom: 6px;
  font-size: 18px;
  font-weight: 500;
  margin-left: 10px;
}

.sidebarGroupItems {
  list-style: none;
  padding: 0px;
}

.sidebarGroupItems li a {
  display: block;
  height: 34px;
  line-height: 34px;
  color: #2c2e32;
  text-decoration: none;
  font-size: 14px;
  padding-left: 10px;
}

.sidebarGroupItems li:hover {
  background-color: #f4f4f4;
  border-radius: 6px;
}

.active {
  color: #fff !important;
  background-color: #1e60e5;
  border-radius: 6px;
}


@media (max-width: 768px) {
  .sidebar {
    top: 60px !important;
}
}

</style>
