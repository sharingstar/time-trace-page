<template>
    <div>
        <div class="header">
            <div class="userinfo">
                <div class="userpro">PRO</div>
                <span>瓦尔登</span>
                <i class="bi bi-chevron-down"></i>
            </div>
            <div class="Switchbtn">
                <i class="bi bi-chevron-double-left"></i>
            </div>
        </div>
    </div>
</template>
<style>
.header {
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.userinfo {
    width: 110px;
    height: 40px;
    line-height: 40px;
    display: flex;
    align-items: center;
    font-size: 14px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding: 6px;
    cursor: pointer;
}

.userinfo:hover {
    background-color: #f1f1f1;
}

.userinfo span {
    margin-bottom: 0px;
    margin-left: 5px;
    font-size: 16px;
    font-weight: 600;
    color: #5f5f5f;
}

.userinfo i {
    margin-left: 5px;
    font-size: 12px;
    color: #5f5f5f;
}

.userpro {
    width: 25px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    font-size: 12px;
    color: #fff;
    background-color: #ababae;
    border-radius: 2px;
}

.Switchbtn {
    width: 32px;
    height: 32px;
    line-height: 40px;
    text-align: center;
    color: #5f5f5f;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.Switchbtn:hover {
    background-color: #f1f1f1;
}
</style>