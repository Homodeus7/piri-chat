import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
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

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth;

  if (requireAuth && store.getters["auth/isAuthenticated"]) {
    next();
  } else if (requireAuth && !store.getters["auth/isAuthenticated"]) {
    next("/auth");
  } else {
    next();
  }
});

export default router;
