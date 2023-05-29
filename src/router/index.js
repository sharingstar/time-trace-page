import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: () => import("@/views/UserLogin.vue"),
  },
  {
    path: "/",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/wenChan101",
    component: () => import("@/views/wenChan101.vue"),
    children: [
      {
        path: '/Introduction',
        component: () => import("@/views/sidebarLinks/Introduction.vue"),
      },
      {
        path: '/Introduction102',
        component: () => import("@/views/sidebarLinks/Introduction102.vue"),
      },
    ]
  },
  {
    path: "/webApp",
    component: () => import("@/views/webApp/index.vue"),
  },
  {
    path: "*",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
