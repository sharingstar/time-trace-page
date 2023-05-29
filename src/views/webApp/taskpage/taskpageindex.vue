<template>
    <div class="taskpage">
        <div class="addtask">
            <el-input placeholder="请输入内容" v-model="text"></el-input>
            <div class="usertaskdata">共110个Asking</div>
        </div>
        <ul class="questionList">
            <li>
                <div>
                    <span>什么是编程式导航？</span>
                </div>
            </li>
            <li>
                <div>
                    <span>什么是事件委托？</span>
                </div>
            </li>
            <li>
                <div>
                    <span>什么是 CORS，如何解决 CORS 问题？</span>
                </div>
            </li>
            <li>
                <div>
                    <span>什么是SEO，并说明如何优化 SEO？</span>
                </div>
            </li>
            <li>
                <div>
                    <span>如何通过VUE实现路由跳转？</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            text: '',
        };
    },
};
</script>
<style>
.taskpage {
    width: 650px;
    height: 100vh;
    padding-top: 140px;
    position: fixed;
    overflow: auto;

}

.addtask {
    width: 650px;
    position: fixed;
    padding: 0px 10px 10px 10px;
    top: 50px;
    background-color: #fff;
}

.usertaskdata {
    font-size: 12px;
    color: #9d9d9d;;
    padding: 15px 0px 5px 10px;
}

.questionList{
    padding: 0px;
}

.questionList li {
    list-style: none;
    font-size: 14px;
    color: #191919;
    margin: 0px 20px;
    padding: 15px 10px;
    border-bottom: 1px solid #eaecef;
}

.questionList li:hover{
    background-color: #f5f5f5;
}
</style>