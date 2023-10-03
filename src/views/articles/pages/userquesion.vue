<template>
  <div class="pagebox">
    <h1>时间印记</h1>
    <div class="pageBackground">
      <img src="../../../img/page1.png" alt="" />
    </div>
    <p>
      TimeEcho时间印迹，是一款记录并提升大家专注的APP。记录下大家时间的印迹，让大家在任何时候都知道自己过去的时间都花在哪里了。我们认为只有在专注下的时间才是会真正的影响自己的高质量时间，所以为了清晰的认识自我，我们建议仅仅记录那些「主动专注」的事情。
    </p>
    <p>
      上线至今，已逐渐为越来越多的人提升了专注，养成了习惯，成为长期主义者，对时间有了掌控感，知道自己的时间花在了哪里，最终找回自我，并缓解了焦虑，获得了内心的安定，等等。
    </p>
    <p>
      为了让APP更好用，我们在深度思考后做一些有别于常规的微创新。为了让大家更好的使用，我们做了一些简单的说明。相信对熟悉或者不熟悉的伙伴都有一定的帮助
    </p>
    <h3 id="design">简介</h3>
    <p>掌控过去的人掌控未来，掌控现在的人掌控过去。</p>
    <p>——乔治·奥威尔《1984》</p>
    <p>
      位于意大利佛罗伦萨的康契吉欧尼圣母教堂地下室有个阴森的纪念馆，说是专门用来追忆过去的时间，其实就是用4000个死去教友的遗骸搭建的场景。还在人骨堆里立着一个牌子，写着：
    </p>
    <p>“你们的现在就是我们的过去，我们的现在就是你们的未来”</p>
    <p>看完让人不寒而栗。</p>
    <p>
      不过也引起了部分人的思考：我们的时间实在是有限。对于在整个时间的长河来说，真的就是一眨眼的事情。
      现在当今世界所有人感受到的悲欢离合、爱恨情仇，将在将来不久（最多120年后）一切将灰飞烟灭。
    </p>
    <div class="pagelink">
      <div @click="go('01')">
        关于我们
      </div>
      <div @click="go('03')">
        为什么要做这个APP？
        <span></span>
      </div>
    </div>
  </div>
</template>
<script>
import "../../../style/pages.css";
export default {
  data() {
    return {};
  },
  methods: {
    go(index) {
      if (index == "01") {
        this.$router.push("/Introduction");
      } else if (index == "03") {
        this.$router.push("/userquesion");
      }
      console.log(index);
      localStorage.setItem("sidebar_indx", index);
      this.$store.commit("setSideBarIndex", index);
      console.log("sidebar_indx", this.$store.getters.getsidebarindex);
    },
  },
};
</script>
