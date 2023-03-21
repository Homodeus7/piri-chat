import { createRouter, createWebHistory } from "vue-router";
import TheHome from "../views/TheHome.vue";

const routes = [
  {
    path: "/",
    name: "TheHome",
    component: TheHome,
    meta: {
      layout: "main",
      auth: true,
    },
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("../views/TheAuth.vue"),
    meta: {
      layout: "auth",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
