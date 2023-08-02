<template>
    <div class="stat">
        <div class="sidebarDatas">
            <div class="Data">
                <div class="number">
                    456
                </div>
                <div class="type">
                    ASK
                </div>
            </div>
            <div class="Data">
                <div class="number">
                    86
                </div>
                <div class="type">
                    TAG
                </div>
            </div>
            <div class="Data">
                <div class="number">
                    10
                </div>
                <div class="type">
                    TADAY
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
.stat {
    margin-bottom: 20px;
}

.sidebarDatas {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
}

.sidebarDatas .number {
    font-size: 24px;
    font-weight: 600;
    color: #9d9d9d;
}

.sidebarDatas .type {
    font-size: 12px;
    color: #9d9d9d;
}

.hotmap {
    width: 100%;
    height: 150px;
    margin-top: 10px;
}

.monthBox {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    margin-top: 5px;
    color: #9d9d9d;
    padding: 0px 30px;
}
</style>
