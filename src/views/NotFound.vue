<template>
    <div>404页面</div>
</template>
<script>
export default {
  // 页面创建的时候z执行
  created() {
    document.body.style.backgroundImage = 'url("https://th.bing.com/th/id/R.94a09f6bdfd5683c1212d17755893f10?rik=zkry0kZjc4%2fzUA&riu=http%3a%2f%2fimg1.xixik.net%2fcimg%2f079%2fxixik_6004190d197fc3e2.jpeg&ehk=2m%2fgpM4vV%2fWZt4FZflCij5gfdnN3XIGuffic1ab0%2ffY%3d&risl=&pid=ImgRaw&r=0")';
    // 背景不平铺

    document.body.style.backgroundSize = '100% 100%';
    document.body.style.height = '100vh';
  },
  //   页面销毁的时候执行
  destroyed() {
    document.body.style.backgroundImage = '';
    document.body.style.backgroundRepeat = '';
    document.body.style.heigth = '';
  },
};
</script>
