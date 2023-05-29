// 一次性导入多个组件
import NavigationBar from "./NavigationBar/index.vue";
import ScrollBar from './ScrollBar/index.vue'
export default {
    install(Vue) {
        Vue.component('NavigationBar', NavigationBar)
        Vue.component('ScrollBar', ScrollBar)
    }
}
