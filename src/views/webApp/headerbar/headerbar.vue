<template>
    <div class="headerbar">
        <div class="nomal">
            <span>MEMO</span>
            <span>/</span>
            <span>⛰️ </span>
            <span>Area</span>
        </div>
        <div class="search">
            <div class="searchinput">
                <el-input placeholder="" prefix-icon="el-icon-search">
                </el-input>
            </div>
        </div>
    </div>
</template>
<style scoped>
.headerbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1180px;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
}

.headerbar .nomal {
    height: 100%;
    width: 650px;
    color: #5f5f5f;
    padding: 0px 20px;
}

.headerbar .search {
    height: 100%;
    width: 530px;
    color: #5f5f5f;
    padding: 0px 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid#eaecef;
}

.headerbar .search .searchinput{
    /* 右居中 */
    width: 250px;
}

.headerbar .nomal span:first-child {
    font-size: 20px;
    font-weight: 500;
    padding-right: 10px;
}

.headerbar .nomal span:nth-child(2) {
    font-weight: 500;
    font-size: 12px;
    color: #d3d3d3;
    padding-right: 10px;
}

.headerbar .nomal span:nth-child(3) {
    font-size: 20px;
    font-weight: 500;
    padding-right: 10px;
}

.headerbar .nomal span:nth-child(4) {
    font-weight: 500;
    font-size: 20px;
}
</style>