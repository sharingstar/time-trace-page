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
    path: "/UserAgreement",
    component: () => import("@/views/UserAgreement.vue"),
  },
  {
    path: "/help",
    component: () => import("@/views/articles/help.vue"),
    redirect: "/Introduction",
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
    ],
  },
  {
    path: "*",
    component: () => import("@/views/404/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
