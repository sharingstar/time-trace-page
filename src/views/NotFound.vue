<template>
  <div class="not-found">
    <h1>404 - 页面未找到</h1>
    <p>对不起，您访问的页面不存在。</p>
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #333;
}

p {
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #666;
}

router-link {
  font-size: 1.5rem;
  color: #fff;
  background-color: #007bff;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
}

router-link:hover {
  background-color: #0062cc;
}
</style>