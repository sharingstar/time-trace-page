<template>
        <div class="detailview">
            <div class="problemTitle">
                <textarea>什么是编程式导航？</textarea>
            </div>
            <div class="problemContent">
                <textarea>描述</textarea>
            </div>
        </div>
</template>
<script>
export default {
    data() {
        return {
            textarea1: '',
        }
    },
}
</script>
<style scoped>
.detailview {
    width: 530px;
    height: 100vh;
    padding-top: 50px;
    position: fixed;
    left: 910px;
    top: 0px;
    padding-left:20px;
    padding-right: 20px;
}

.problemTitle {
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    padding-top: 15px;
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

</style>
