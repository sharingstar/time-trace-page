<template>
    <div>
        <userInfo></userInfo>
        <userDatas></userDatas>
        <tag></tag>
    </div>
</template>
<script>
import userInfo from './userInfo.vue';
import userDatas from './userDatas.vue';
import tag from './tag.vue';
export default {
    components: {
        userInfo,
        userDatas,
        tag,
    },
}
</script>