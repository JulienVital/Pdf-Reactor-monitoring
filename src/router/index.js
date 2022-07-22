import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/tracking",
    name: "tracking",
    component: () => import("@/pages/Tracking.vue"),
  },
  {
    path: "/server",
    name: "server",

    component: () => import("@/pages/Server.vue"),
  },
  {
    path: "/config",
    name: "config",

    component: () => import("@/pages/Config.vue"),
  },
  {
    path: "/history",
    name: "history",

    component: () => import("@/pages/History.vue"),
  },
  {
    path: '/history/:id',
    name: 'HystoryDetails',
    props: true,
    component: () => import("@/pages/HistoryDetails.vue"),

  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
