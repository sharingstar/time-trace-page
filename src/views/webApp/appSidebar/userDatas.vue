<template>
    <div class="stat">
        <div class="sidebarDatas">
            <div class="Data">
                <div class="number">
                    456
                </div>
                <div class="type">
                    MEMO
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
                    544
                </div>
                <div class="type">
                    DAY
                </div>
            </div>
        </div>
        <div>
            <div ref="hotmap" class="hotmap">

            </div>
            <div class="monthBox">
                <span>三月</span>
                <span>四月</span>
                <span>五月</span>
            </div>
        </div>
    </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    mounted() {
        const myChart = echarts.init(this.$refs.hotmap);
        myChart.setOption({
            radar: {
                // shape: 'circle',
                indicator: [
                    { name: '', max: 6500 },
                    { name: '', max: 16000 },
                    { name: '', max: 30000 },
                    { name: '', max: 38000 },
                    { name: '', max: 52000 },
                    { name: '', max: 25000 }
                ]
            },
            series: [
                {
                    name: 'Budget vs spending',
                    type: 'radar',
                    data: [
                        {
                            value: [4200, 3000, 20000, 35000, 50000, 18000],
                            name: 'one'
                        },
                        {
                            value: [5000, 14000, 28000, 26000, 42000, 21000],
                            name: 'two'
                        }
                    ]
                }
            ]
        });
    }
}
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
