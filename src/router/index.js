import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/home.vue"),
  },
  {
    path: "/thanks",
    component: () => import("@/views/thanks.vue"),
  },
  {
    path: "/privacy",
    component: () => import("@/views/privacy.vue"),
  },
  {
    path: "/wenChan101",
    component: () => import("@/views/articles/wenChan101.vue"),
    children: [
      {
        path: "/Introduction",
        component: () => import("@/views/articles/pages/Introduction.vue"),
      },
      {
        path: "/Introduction102",
        component: () => import("@/views/articles/pages/Introduction102.vue"),
      },
      {
        path: "/userquesion",
        component: () => import("@/views/articles/pages/userquesion.vue"),
      },
      {
        path: "/one",
        component: () => import("@/views/articles/pages/one.vue"),
      },
      {
        path: "/two",
        component: () => import("@/views/articles/pages/two.vue"),
      },
    ],
  },
  {
    path: "*",
    component: () => import("@/views/404/NotFound.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
