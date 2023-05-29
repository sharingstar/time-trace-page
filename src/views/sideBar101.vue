<template>
  <div class="sidebar">
    <ul class="sidebar-links">
      <li>
        <p>Hi，共建者</p>
        <ul class="sidebarGroupItems">
          <li router>
            <router-link to="/Introduction">🚀 Wenchan 问禅笔记</router-link>
          </li>
          <li>
            <router-link to="/Introduction102">🤔 常见问题</router-link>
          </li>
          <li>
            <a href="">🛫 快速上手</a>
          </li>
        </ul>
      </li>
      <li>
        <p>快速记录</p>
        <ul class="sidebarGroupItems">
          <li>
            <a href="">🔆 快速记录</a>
          </li>
          <li>
            <a href="">💬 微信输入</a>
          </li>
          <li>
            <a href="">🎙️ 语音输入</a>
          </li>
          <li>
            <a href="">🖥 客户端下载</a>
          </li>
          <li>
            <a href="">🧘🏻 禅定模式</a>
          </li>
        </ul>
      </li>
      <li>
        <p>更好回顾</p>
        <ul class="sidebarGroupItems">
          <li>
            <a href="">🏷 使用标签</a>
          </li>
          <li>
            <a href="">🔍 快捷搜索</a>
          </li>
          <li>
            <a href="">📆 每日回顾</a>
          </li>
          <li>
            <a href="">🔗 引用批注 </a>
          </li>
          <li>
            <a href="">📊 热力图与统计</a>
          </li>
        </ul>
      </li>
      <li>
        <p>更好回顾</p>
        <ul class="sidebarGroupItems">
          <li>
            <a href="">🏷 使用标签</a>
          </li>
          <li>
            <a href="">🔍 快捷搜索</a>
          </li>
          <li>
            <a href="">📆 每日回顾</a>
          </li>
          <li>
            <a href="">🔗 引用批注 </a>
          </li>
          <li>
            <a href="">📊 热力图与统计</a>
          </li>
        </ul>
      </li>
      <li>
        <p>更好回顾</p>
        <ul class="sidebarGroupItems">
          <li>
            <a href="">🏷 使用标签</a>
          </li>
          <li>
            <a href="">🔍 快捷搜索</a>
          </li>
          <li>
            <a href="">📆 每日回顾</a>
          </li>
          <li>
            <a href="">🔗 引用批注 </a>
          </li>
          <li>
            <a href="">📊 热力图与统计</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
</script>
<style scoped>
.sidebar {
  width: 320px;
  border-right: 1px solid#eaecef;
  padding: 20px 0px 200px 0px;
  overflow: auto;
  height: 100vh;
  background-color: #fff;
}

.sidebar-links {
  list-style: none;
  padding: 0px;
  padding-left: 50px;
}

.sidebar-links > li {
  margin-top: 12px;
}

.sidebar-links li p {
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 10px;
}

.sidebarGroupItems {
  list-style: none;
  padding: 0px;
  padding-left: 20px;
}

.sidebarGroupItems li a {
  display: block;
  height: 35px;
  line-height: 35px;
  color: #2c3e50;
  text-decoration: none;
  font-size: 14px;
}

.sidebarGroupItems li a:hover {
  color: #3eaf7c;
}
</style>
