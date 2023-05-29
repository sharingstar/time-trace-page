import Vue from 'vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 导入bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';


import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import '../node_modules/bootstrap/dist/css/bootstrap-reboot.css'
import '../node_modules/normalize.css'

// 导入自定义组件
import components from "./components/index";
Vue.use(components);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
