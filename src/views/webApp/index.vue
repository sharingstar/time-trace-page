<template>
    <div class="webApp">
        <div class="appsidebar ">
            <appSidebar></appSidebar>
        </div>
        <div class="taskpageindex">
            <taskpageindex></taskpageindex>
        </div>
        <div class="headerbar">
            <headerbar></headerbar>
        </div>
        <div class="detailview">
            <detailView></detailView>
        </div>
    </div>
</template>
<script>
import appSidebar from './appSidebar/sidebarIndex.vue';
import taskpageindex from './taskpage/taskpageindex.vue';
import headerbar from './headerbar/headerbar.vue';
import detailView from './detailView/detailView.vue';
export default {
    name: 'webApp',
    components: {
        appSidebar,
        taskpageindex,
        headerbar,
        detailView,
    },
}
</script>
<style scopeds>
.webApp {
    display: flex;
}

.headerbar{
    position: fixed;
    top: 0px;
    left: 260px;
    z-index: 999;
    border-right: 1px solid#eaecef;
}

.detailview{
    border-left: 1px solid#eaecef;
}

.appsidebar {
    width: 260px;
    height: 100vh;
    padding: 0px 20px;
    border-right: 1px solid#eaecef;
    position: fixed;
    top: 0px;
    left: 0px;
    overflow: auto;
}

.taskpageindex{
    margin-left: 260px;
}
</style>