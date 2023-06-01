<template>
    <div class="taskpage">
        <div class="addtask">
            <el-input placeholder="请输入内容" v-model="form.userContent" @keyup.native.enter="submitData"></el-input>
            <div class="usertaskdata">共 {{ dataList.length }} 个Asking</div>
        </div>
        <ul class="questionList">
            <li v-for="item in dataList" :key="item.id">
                <div>
                    <span>{{ item.userContent }}</span>
                </div>
                <div class="toolsIcon">
                    <el-dropdown @command="tools(item, $event)">
                        <span class="el-dropdown-link">
                            <i class="bi bi-chevron-bar-down"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown" size="medium" x>
                            <el-dropdown-item>编辑</el-dropdown-item>
                            <el-dropdown-item>置顶</el-dropdown-item>
                            <el-dropdown-item>生成分享图</el-dropdown-item>
                            <el-dropdown-item>查看详情</el-dropdown-item>
                            <el-dropdown-item class="Deletebtn" command="del">删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { getData, addData, delData } from '@/api/user.js'
import { del } from 'vue';
export default {
    data() {
        return {
            dataList: [],
            form: {
                userContent: '',
            },
        };
    },
    async created() {
        await this.getList()
    },
    methods: {
        async getList() {
            const res = await getData()
            const array = res.data.reverse()
            this.dataList = array
            console.log(this.dataList)
        },
        async submitData() {
            await addData(this.form)
            this.form.userContent = ''
            this.getList()
            console.log(this.form.userContent)
        },
        async tools(item, command) {
            console.log(item, command)
            if (command === 'del') {
                await delData(item.id)
                this.getList()
            }
        }
    }
};
</script>
<style scoped>
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
    color: #9d9d9d;
    padding: 15px 0px 5px 10px;
}

.questionList {
    padding: 0px;
}

.questionList li {
    list-style: none;
    font-size: 14px;
    color: #191919;
    margin: 0px 20px;
    padding: 15px 10px;
    border-bottom: 1px solid #eaecef;
    display: flex;
    justify-content: space-between;
    position: relative;
}

.toolsIcon {
    display: none;
    cursor: pointer;
}

.questionList li:hover {
    background-color: #f5f5f5;

    .toolsIcon {
        display: block;
    }
}

.Deletebtn {
    color: #ff4d4f;
}
</style>