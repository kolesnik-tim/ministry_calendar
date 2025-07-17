import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import HomePage from "@/views/HomePage.vue";
import { auth } from "@/firebase";

const routes = [
  { path: "/", component: LoginPage },
  { path: "/home", component: HomePage, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory('/ministry_calendar/'),
  routes,
});

router.beforeEach((to, from, next) => {
  const user = auth.currentUser;
  if (to.meta.requiresAuth && !user) {
    next("/");
  } else {
    next();
  }
});

export default router;
