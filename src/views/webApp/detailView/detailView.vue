<template>
  <div class="detailview">
    <div class="problemTitle">
      <textarea class="problemTitleArea">{{ userContent }}</textarea>
      <div class="chatgpticon">
        <span>🤖</span>
      </div>
    </div>
    <div class="problemContent">
      <textarea>{{ answer }}</textarea>
    </div>
  </div>
</template>
<script>
import { getData } from "@/api/user.js";
export default {
  data() {
    return {
      value: "",
      userContent: "",
      answer: "",
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      const res = await getData();
      console.log(res)
      this.userContent = res.data[2].userContent;
      this.answer = res.data[2].answer;
    },
  },
};
</script>
<style scoped>
.detailview {
  width: 530px;
  height: 100vh;
  padding-top: 50px;
  position: fixed;
  left: 910px;
  top: 0px;
  padding-left: 20px;
  padding-right: 20px;
  border-left: 1px solid#eaecef;
}

.problemTitle {
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.problemTitleArea {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  resize: none;
}

.problemContent textarea {
  width: 100%;
  height: 100vh;
  border: none;
  outline: none;
  font-size: 14px;
  resize: none;
  color: #323232;
  line-height: 25px;
}

.problemTitle textarea {
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  resize: none;
}

.chatgpticon {
  width: 40px;
  height: 30px;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.chatgpticon:hover {
  background-color: #f5f5f5;
}
</style>
