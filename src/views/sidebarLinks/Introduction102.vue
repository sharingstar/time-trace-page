<template>
    <div class="container">  
      <div class="pagebox">
        <h1>😋 帮助中心</h1>
        <div class="pageBackground">
            <img
              src="https://cdn.dida365.cn/hc/all/f2aa5c3db3a33a49aba8c6c62fc01c6e.jpg"
              alt=""
            />
        </div>
        <p>
          我们在这里为你准备了功能介绍、常见用法，以及对应的思维方式。因为我们不仅是在使用工具，还是在改进自己的工作流。多数时候不是工具不好用，而是缺少工作流程的迭代。
        </p>
        <p>如果耐心看完，相信会你会收获更多</p>
        <h3>只有经典的设计才能穿越时间</h3>
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
        <h3>不打扰用户，和用户做朋友</h3>
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
        <h3>写在最后</h3>
          <p>
            最后，非常感谢大家的阅读，也希望我们的产品能帮助你：用心生活，达成更多。
          </p>
      </div>
      <div class="ScrollBar">
        <ul class="ScrollBox">
          <p>🏞️ 设计理念</p>
          <li class="active">只有经典的设计才能穿越时间</li>
          <li>帮助用户成为更好的自己</li>
          <li>可能没有做好，请见谅</li>
          <li>写在最后</li>
        </ul>
      </div>
    </div>
  </template>
  
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
    height: 30px;
    line-height: 30px;
    list-style: none;
    font-size: 12px;
    padding-left: 25px;
    cursor: pointer;
    border-left: 2px solid rgba(25, 25, 25, 0.05);
  }
  
  .ScrollBox .active {
    border-left: 2px solid #4772fa;
    color: #4772fa;
  }
  </style>
  