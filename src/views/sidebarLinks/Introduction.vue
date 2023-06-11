<template>
  <div class="container">
    <div class="pagebox">
      <h1>🏞️ 设计理念</h1>
      <div class="pageBackground">
        <img src="https://cdn.dida365.cn/hc/all/f2aa5c3db3a33a49aba8c6c62fc01c6e.jpg" alt="" />
      </div>
      <p>
        我们在这里为你准备了功能介绍、常见用法，以及对应的思维方式。因为我们不仅是在使用工具，还是在改进自己的工作流。多数时候不是工具不好用，而是缺少工作流程的迭代。
      </p>
      <p>如果耐心看完，相信会你会收获更多</p>
      <h3 id="design">只有经典的设计才能穿越时间</h3>
      <p>
        好的设计是自然而然的发生。很多产品会在任务的详情页放很多功能按钮，看上去很丰富。但是在我们看来，这并不是好的设计，因为这些功能并非用户必须的。
      </p>
      <p>
        于是我们大胆地做了减法，只留下最核心的功能，把更大的空间留给用户来书写。因为我们认为，只有简单的设计，才能接近经典，才能穿越时间，经受住岁月考验。
      </p>
      <p>
        除了简洁之外，我们在很多设计上，也尽可能符合用户的直觉。
        在现实生活中，我们可以把一个物体拿起，放到不同的位置。而在我们的产品中，你也可以通过长按拖动调整任务的位置，无论是在任务列表、日历，还是四象限。
      </p>
      <p>所有的操作，都非常的自然，自然到你都没有意识到这是我们的设计。</p>
      <h3 id="friendship">不打扰用户，和用户做朋友</h3>
      <p>
        在我们看来，用户使用我们的产品，某种程度上，就是在和我们进行对话。
        我们希望我们和用户的关系，不是客户，不是流量，而更像是朋友。
      </p>
      <p>
        因为用户把他的事情，记录到我们产品中，本身就是对我们的一种信任。
        所以我们希望在用户眼里，我们是一个善良、诚实、值得信赖的形象。
      </p>
      <p>
        这是为什么我们没有做“开屏广告”的原因，即便这可以给我们带来非常可观的收入。我们也保持了这个行业少有的「克制」，没有关不掉的小红点和眼花缭乱的营销活动。
      </p>
      <p>
        而在和用户的相处中，用户也会在不经意间，感受到我们的用心。举一个很小的例子。
      </p>
      <p>“你觉得上午12点半是凌晨，还是中午？”</p>
      <p>
        当被问到这个问题时，很多人会困惑，但实际上在12小时制中，上午12点半是凌晨。所以当用户选择上午12:30时，我们会有一个小提示，避免他选了错误的时间。
      </p>
      <p>而这样的设计，在产品中其实还有很多。</p>
      <h3 id="management">帮用户管理生活中的一切</h3>
      <p>现在我们在全球有将近2000万的用户，而最早使用我们产品的用户，已经陪伴我们走过了9年的时间。 从最开始的任务和提醒，到之后推出日历功能，再到番茄计时、习惯打卡和四象限。</p>
      <p>非常感谢这些用户，正是因为他们的支持，帮助我们不断打磨产品，持续精进。同时也让我们更加深刻地认识到“用户需要的不只是管理任务，而是生活中的一切”。</p>
      <p>所以针对不同用户的场景，我们提供了不同的解决方案，例如：</p>
      <p>针对白领，我们提供了共享协作、时间线视图的功能，来满足项目管理的需求。</p>
      <p>针对学生，我们也有课表导入、自习室等特色功能。</p>
      <p>当然，与此同时，一个新的课题 摆在了我们面前： 如何在功能越来越强大，满足更多用户需求的同时，还能够保证产品的易用和简洁。</p>
      <p>我们的答案是，尊重用户选择的权力。</p>
      <p>在我们的产品中，用户可以根据自己喜好，选择自己需要哪些功能，不需要哪些。用户还可以调整功能的顺序，甚至可以将不常用的功能收到更多按钮中。</p>
      <h3 id="last">写在最后</h3>
      <p>
        最后，非常感谢大家的阅读，也希望我们的产品能帮助你：用心生活，达成更多。
      </p>
    </div>
    <div class="ScrollBar">
      <ul class="ScrollBox">
        <p>🏞️ 设计理念</p>
        <li @click="scrollTo('#design')" :class="{active: activeSection === 'design'}">只有经典的设计才能穿越时间</li>
        <li @click="scrollTo('#friendship')" :class="{active: activeSection === 'friendship'}">不打扰用户，和用户做朋友</li>
        <li @click="scrollTo('#management')" :class="{active: activeSection === 'management'}">帮用户管理生活中的一切</li>
        <li @click="scrollTo('#last')" :class="{active: activeSection === 'last'}">写在最后</li>
      </ul>
      <div class="joinApp">
        <button @click="$router.push('/webApp')">WebApp</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSection: 'design'
    }
  },
  methods: {
    scrollTo(sectionId) {
      const section = document.querySelector(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
        this.activeSection = sectionId.slice(1)
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      const designSection = document.querySelector('#design')
      const friendshipSection = document.querySelector('#friendship')
      const managementSection = document.querySelector('#management')
      const lastSection = document.querySelector('#last')
      const scrollPosition = window.scrollY

      if (scrollPosition >= designSection.offsetTop - 400 && scrollPosition < friendshipSection.offsetTop - 400) {
        this.activeSection = 'design'
      } else if (scrollPosition >= friendshipSection.offsetTop - 400 && scrollPosition < managementSection.offsetTop - 400) {
        this.activeSection = 'friendship'
      } else if (scrollPosition >= managementSection.offsetTop - 400 && scrollPosition < lastSection.offsetTop - 400) {
        this.activeSection = 'management'
      } else if (scrollPosition >= lastSection.offsetTop - 400) {
        this.activeSection = 'last'
      } else {
        this.activeSection = 'design'
      }
    })
  }
}
</script>

<style scoped>
.container {
  max-width: 1440px;
}

.pagebox {
  height: 100vh;
  width: 800px;
  padding: 100px 60px 0px 70px;
  margin: 0 auto;
}

.pagebox h1 {
  margin-bottom: 15px;
}

.pagebox h3 {
  margin-top: 30px;
  margin-bottom: 15px;
  transition: all 0.5s ease-in-out;
}

.pagebox h3.active {
  color: #4772fa;
}

.pagebox p {
  line-height: 30px;
  margin-bottom: 20px;
  color: rgba(25, 25, 25, 0.8);
}

.pageBackground img {
  width: 660px;
  border-radius: 8px;
  margin-bottom: 15px;
  margin-top: 15px;
}

.ScrollBar {
  width: 200px;
  height: 200px;
  position: fixed;
  top: 80px;
  right: 100px;
  transition: all 0.5s ease-in-out;
}

.ScrollBox {
  padding: 0px;
  margin: 0px;
}

.ScrollBox p {
  font-size: 14px;
  padding-bottom: 10px;
  margin: 0px;
}

.ScrollBox li {
  display: block;
  /* height: 30px; */
  /* line-height: 30px; */
  padding: 5px 0px;
  list-style: none;
  font-size: 12px;
  padding-left: 25px;
  cursor: pointer;
  border-left: 2px solid rgba(25, 25, 25, 0.05);
  transition: all 0.5s ease-in-out;
}

.ScrollBox .active {
  border-left: 2px solid #4772fa;
  color: #4772fa;
}

.joinApp{
  position: fixed;
  bottom: 100px;
  right: 100px;
}

.joinApp button {
  width: 100px;
  height: 30px;
  border-radius: 25px;
  border: none;
  background-color: #999;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.joinApp button:hover {
  background-color:#3eaf7c;;
}
</style>
